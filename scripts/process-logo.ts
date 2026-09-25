import path from "node:path";
import sharp from "sharp";

async function processLogo(): Promise<void> {
  const inputPath = path.resolve("Black and White Modern Military Logo.png");
  const outputLogoPath = path.resolve("public/logo.png");
  const outputFaviconPath = path.resolve("public/favicon.png");

  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const width = metadata.width;
  const height = metadata.height;

  console.info("Original dimensions:", width, "x", height);

  const raw = await image.ensureAlpha().raw().toBuffer();

  const cx = 1000;
  const cy = 1000;
  const targetRadius = 799.5; // outer edge of the red ring
  const ss = 4; // 4x4 subpixel sampling for smooth anti-aliasing

  const outputWidth = width;
  const outputHeight = height;
  const outBuffer = Buffer.alloc(outputWidth * outputHeight * 4);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.hypot(dx, dy);

      const r = raw[idx] ?? 0;
      const g = raw[idx + 1] ?? 0;
      const b = raw[idx + 2] ?? 0;

      if (dist <= targetRadius - 1.5) {
        // Fully inside the badge
        outBuffer[idx] = r;
        outBuffer[idx + 1] = g;
        outBuffer[idx + 2] = b;
        outBuffer[idx + 3] = 255;
      } else if (dist >= targetRadius + 1.5) {
        // Fully outside the badge -> pure transparent
        outBuffer[idx] = 0;
        outBuffer[idx + 1] = 0;
        outBuffer[idx + 2] = 0;
        outBuffer[idx + 3] = 0;
      } else {
        // On the edge: supersample 4x4 grid
        let insideCount = 0;
        for (let sy = 0; sy < ss; sy++) {
          for (let sx = 0; sx < ss; sx++) {
            const subX = x - 0.5 + (sx + 0.5) / ss;
            const subY = y - 0.5 + (sy + 0.5) / ss;
            const subDist = Math.hypot(subX - cx, subY - cy);
            if (subDist <= targetRadius) {
              insideCount++;
            }
          }
        }
        const alpha = Math.round((insideCount / (ss * ss)) * 255);
        if (alpha > 0) {
          // Clean red perimeter color for anti-aliasing without white fringe
          const isNearWhite = r > 230 && g > 230 && b > 230;
          outBuffer[idx] = isNearWhite ? 255 : r;
          outBuffer[idx + 1] = isNearWhite ? 49 : g;
          outBuffer[idx + 2] = isNearWhite ? 49 : b;
          outBuffer[idx + 3] = alpha;
        } else {
          outBuffer[idx] = 0;
          outBuffer[idx + 1] = 0;
          outBuffer[idx + 2] = 0;
          outBuffer[idx + 3] = 0;
        }
      }
    }
  }

  // Now create the trimmed version (extract the 1600x1600 circular region exactly)
  const fullProcessed = sharp(outBuffer, {
    raw: { width: outputWidth, height: outputHeight, channels: 4 },
  });

  const trimmed = fullProcessed.clone().extract({ left: 200, top: 200, width: 1600, height: 1600 });

  // Save main logo
  await trimmed.clone().png({ compressionLevel: 9 }).toFile(outputLogoPath);
  console.info(`Saved transparent logo to ${outputLogoPath} (1600x1600)`);

  // Save high quality favicon.png (512x512)
  await trimmed
    .clone()
    .resize(512, 512, { fit: "contain" })
    .png({ compressionLevel: 9 })
    .toFile(outputFaviconPath);
  console.info(`Saved favicon to ${outputFaviconPath} (512x512)`);

  // Also create a 32x32 favicon
  const favicon32Path = path.resolve("public/favicon-32x32.png");
  await trimmed
    .clone()
    .resize(32, 32, { fit: "contain" })
    .png({ compressionLevel: 9 })
    .toFile(favicon32Path);
  console.info(`Saved 32x32 favicon to ${favicon32Path}`);
}

try {
  await processLogo();
} catch (error) {
  console.error(error);
}

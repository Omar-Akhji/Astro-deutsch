/**
 * Controller for CardModal interactions across the application. Manages modal opening, closing,
 * keyboard navigation (ESC), backdrop clicks, body scroll locking, and Astro ViewTransitions
 * cleanup.
 */

export function setupCardModalListeners(): void {
  const win = globalThis as unknown as { __cardModalListenerAttached?: boolean };
  if (typeof window === "undefined" || win.__cardModalListenerAttached) {
    return;
  }
  win.__cardModalListenerAttached = true;

  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement | null;
    if (!target) return;

    // Handle Open button / card trigger
    const trigger = target.closest<HTMLElement>("[data-card-modal-open]");
    if (trigger) {
      const id = trigger.dataset["cardModalOpen"];
      if (id) {
        const dialog = document.querySelector<HTMLDialogElement>(`#${CSS.escape(id)}`);
        if (dialog && !dialog.open) {
          dialog.showModal();
          document.body.style.overflow = "hidden";
        }
      }
      return;
    }

    // Handle Close button or backdrop overlay
    const closeTrigger = target.closest<HTMLElement>("[data-card-modal-close]");
    if (closeTrigger) {
      const dialog = closeTrigger.closest<HTMLDialogElement>("dialog");
      if (dialog?.open) {
        dialog.close();
        document.body.style.overflow = "";
      }
      return;
    }

    // Handle navigation link inside modal
    const modalLink = target.closest<HTMLAnchorElement>("dialog.card-modal-dialog a");
    if (!modalLink) return;

    const dialog = modalLink.closest<HTMLDialogElement>("dialog");
    if (!dialog?.open) return;

    dialog.close();
    document.body.style.overflow = "";
  });

  // Handle ESC key or native dialog cancel
  document.addEventListener("cancel", (event) => {
    const target = event.target as HTMLElement | null;
    if (target?.tagName === "DIALOG" && target.classList.contains("card-modal-dialog")) {
      document.body.style.overflow = "";
    }
  });

  // Handle native dialog close event
  document.addEventListener("close", (event) => {
    const target = event.target as HTMLElement | null;
    if (target?.tagName === "DIALOG" && target.classList.contains("card-modal-dialog")) {
      document.body.style.overflow = "";
    }
  });

  // Reset body overflow before Astro swaps pages in ViewTransitions
  document.addEventListener("astro:before-swap", () => {
    document.body.style.overflow = "";
  });
}

if (typeof document !== "undefined") {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    setupCardModalListeners();
  } else {
    document.addEventListener("DOMContentLoaded", setupCardModalListeners);
  }
  document.addEventListener("astro:page-load", setupCardModalListeners);
}

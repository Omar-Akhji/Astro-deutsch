export interface SignInFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export type AuthView = "signin" | "signup";

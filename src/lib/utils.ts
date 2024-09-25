import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function get_app_name(
  format: "default" | "lowercase" | "snake_case" = "default"
) {
  switch (format) {
    case "lowercase":
      return "promptslabs";
    case "snake_case":
      return "prompts_labs";
    default:
      return "PromptsLabs";
  }
}

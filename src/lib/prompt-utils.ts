import { TPrompt } from "@/types/prompt";

export function copy_prompt_to_clipboard(prompt: TPrompt) {
  navigator.clipboard.writeText(prompt.input);
}

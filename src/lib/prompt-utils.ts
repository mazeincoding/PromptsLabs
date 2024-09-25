import { TPrompt } from "@/types/prompt";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function add_prompt(prompt: TPrompt) {
  const { data, error } = await supabase.from("prompts").insert({
    input: prompt.input,
    expected_output: prompt.expected_output,
    is_hot: prompt.is_hot,
    created_by: prompt.created_by,
  } satisfies Omit<TPrompt, "id" | "created_at">);

  if (error) {
    console.error("Error adding prompt:", error);
    throw error;
  }

  return data;
}

export async function get_prompts() {
  const { data, error } = await supabase
    .from("prompts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching prompts:", error);
    throw error;
  }

  return data as TPrompt[];
}

export function copy_prompt_to_clipboard(prompt: TPrompt) {
  navigator.clipboard.writeText(prompt.input);
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { add_prompt } from "@/lib/prompt-utils";
import { Header } from "@/components/header";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Asterisk } from "lucide-react";

export default function CreatePromptPage() {
  const router = useRouter();
  const [form_data, set_form_data] = useState({
    input: "",
    expected_output: "",
    name: "",
  });
  const [is_submitting, set_is_submitting] = useState(false);
  const [errors, set_errors] = useState({ input: "", expected_output: "" });
  const { toast } = useToast();

  const handle_change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    set_form_data((prev) => ({ ...prev, [id]: value }));
    if (errors[id as keyof typeof errors]) {
      set_errors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const handle_submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const new_errors = {
      input: !form_data.input.trim() ? "Input is required" : "",
      expected_output: !form_data.expected_output.trim()
        ? "Expected output is required"
        : "",
    };

    set_errors(new_errors);

    if (new_errors.input || new_errors.expected_output) return;

    set_is_submitting(true);
    try {
      await add_prompt({
        ...form_data,
        is_hot: false,
        created_by: form_data.name || "Anonymous",
      });
      toast({
        title: "Prompt created",
        description: "Your prompt has been added successfully.",
      });
      router.push("/prompts");
    } catch (error) {
      console.error("Failed to add prompt:", error);
      toast({
        title: "Error",
        description: "Failed to create prompt. Please try again.",
        variant: "destructive",
      });
    } finally {
      set_is_submitting(false);
    }
  };

  const render_input = (id: string, label: string, is_textarea = false) => (
    <div>
      <label
        htmlFor={id}
        className="mb-2 text-sm font-medium flex items-center gap-1"
      >
        {label} {id !== "name" && <Asterisk className="w-3 h-3" />}
      </label>
      {is_textarea ? (
        <Textarea
          id={id}
          value={form_data[id as keyof typeof form_data]}
          onChange={handle_change}
          className={`w-full h-32 ${
            errors[id as keyof typeof errors]
              ? "border-red-500 focus-visible:border-red-500"
              : ""
          }`}
        />
      ) : (
        <Input
          id={id}
          value={form_data[id as keyof typeof form_data]}
          onChange={handle_change}
          placeholder={id === "name" ? "Anonymous" : ""}
          className="w-full"
        />
      )}
      {errors[id as keyof typeof errors] && (
        <p className="text-red-500 text-sm mt-1">
          {errors[id as keyof typeof errors]}
        </p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header show_create_button={false} />
      <div className="flex-1 container mx-auto p-8 max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">Create New Prompt</h1>
        <form onSubmit={handle_submit} className="space-y-6" noValidate>
          {render_input("name", "Your Name")}
          {render_input("input", "Input", true)}
          {render_input("expected_output", "Expected Output", true)}
          <Button type="submit" className="w-full" disabled={is_submitting}>
            {is_submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating...
              </>
            ) : (
              "Create Prompt"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}

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
  const [input, set_input] = useState("");
  const [expected_output, set_expected_output] = useState("");
  const [name, set_name] = useState("");
  const [is_submitting, set_is_submitting] = useState(false);
  const { toast } = useToast();

  const handle_submit = async (e: React.FormEvent) => {
    e.preventDefault();
    set_is_submitting(true);
    try {
      await add_prompt({
        input,
        expected_output,
        is_hot: false,
        created_by: name || "Anonymous",
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header show_create_button={false} />
      <div className="flex-1 container mx-auto p-8 max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">Create New Prompt</h1>
        <form onSubmit={handle_submit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Your Name
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => set_name(e.target.value)}
              placeholder="Anonymous"
              className="w-full"
            />
          </div>
          <div>
            <label
              htmlFor="input"
              className=" mb-2 text-sm font-medium flex items-center gap-1"
            >
              Input <Asterisk className="w-3 h-3" />
            </label>
            <Textarea
              id="input"
              value={input}
              onChange={(e) => set_input(e.target.value)}
              required
              className="w-full h-32"
            />
          </div>
          <div>
            <label
              htmlFor="expected_output"
              className="mb-2 text-sm font-medium flex items-center gap-1"
            >
              Expected Output <Asterisk className="w-3 h-3" />
            </label>
            <Textarea
              id="expected_output"
              value={expected_output}
              onChange={(e) => set_expected_output(e.target.value)}
              required
              className="w-full h-32"
            />
          </div>
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

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { prompts } from "@/data/prompts";
import { useRouter } from "next/navigation";
import { PromptCard } from "@/components/prompt-card";

export function Library() {
  const [visible_prompts, set_visible_prompts] = useState(5);
  const router = useRouter();

  const show_more = () => {
    router.push("/prompts");
  };

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Prompt Library</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {prompts.slice(0, visible_prompts).map((prompt, index) => (
          <PromptCard key={index} prompt={prompt} index={index} />
        ))}
      </div>
      {visible_prompts < prompts.length && (
        <div className="mt-8 text-center">
          <Button onClick={show_more}>Show more</Button>
        </div>
      )}
    </div>
  );
}

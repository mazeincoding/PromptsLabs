"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { prompts } from "@/data/prompts";
import { useRouter } from "next/navigation";
import { PromptCard } from "@/components/prompt-card";

export function Library() {
  const router = useRouter();

  const prompts_to_show = 5;

  const show_more = () => {
    router.push("/prompts");
  };

  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Prompt Library</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {prompts.slice(0, prompts_to_show).map((prompt, index) => (
          <PromptCard key={index} prompt={prompt} index={index} />
        ))}
      </div>
      {prompts.length > prompts_to_show && (
        <div className="mt-8 text-center">
          <Button onClick={show_more}>Show more</Button>
        </div>
      )}
    </div>
  );
}

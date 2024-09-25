"use client";
import { prompts } from "@/data/prompts";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import { PromptCard } from "@/components/prompt-card";

export default function Prompts() {
  const [search_query, set_search_query] = useState("");

  const filtered_prompts = prompts.filter((prompt) =>
    prompt.input.toLowerCase().includes(search_query.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Prompts</h1>
      <div className="mb-6 flex items-center gap-2">
        <Input
          placeholder="Search prompts..."
          value={search_query}
          onChange={(e) => set_search_query(e.target.value)}
          className="flex-grow"
        />
        <Button variant="outline" size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered_prompts.map((prompt, index) => (
          <PromptCard key={index} prompt={prompt} index={index} />
        ))}
      </div>
    </div>
  );
}

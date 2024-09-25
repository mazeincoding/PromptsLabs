"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { PromptCard } from "@/components/prompt-card";
import { Skeleton } from "@/components/ui/skeleton";
import { get_prompts } from "@/lib/prompt-utils";
import { TPrompt } from "@/types/prompt";
import { AlertCircle } from "lucide-react";
import { Header } from "@/components/header";

export default function Prompts() {
  const router = useRouter();
  const [prompts, set_prompts] = useState<TPrompt[]>([]);
  const [loading, set_loading] = useState(true);

  useEffect(() => {
    async function fetch_prompts() {
      try {
        const data = await get_prompts();
        set_prompts(data);
      } catch (error) {
        console.error("Failed to fetch prompts:", error);
      } finally {
        set_loading(false);
      }
    }

    fetch_prompts();
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Prompt Library</h2>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <Skeleton key={index} className="h-[200px] w-full" />
              ))}
          </div>
        ) : prompts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prompts.map((prompt, index) => (
              <PromptCard key={index} prompt={prompt} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">No prompts found</h3>
            <p className="text-muted-foreground">Looks like there are no prompts available right now.</p>
          </div>
        )}
      </div>
    </>
  );
}

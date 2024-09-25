"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { PromptCard } from "@/components/prompt-card";
import { Skeleton } from "@/components/ui/skeleton";
import { get_prompts } from "@/lib/prompt-utils";
import { TPrompt } from "@/types/prompt";
import { AlertCircle } from "lucide-react";

export function Library() {
  const router = useRouter();
  const [prompts, set_prompts] = useState<TPrompt[]>([]);
  const [loading, set_loading] = useState(true);

  const prompts_to_show = 5;

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

  const show_more = () => {
    router.push("/prompts");
  };

  return (
    <div className="container mx-auto py-12 px-6 max-w-7xl">
      <h2 className="text-3xl font-bold mb-8 text-center">Prompt Library</h2>
      {loading ? (
        <div className="space-y-8">
          {Array(prompts_to_show)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} className="h-[200px] w-full" />
            ))}
        </div>
      ) : prompts.length > 0 ? (
        <>
          <div className="space-y-8">
            {prompts.slice(0, prompts_to_show).map((prompt, index) => (
              <PromptCard key={index} prompt={prompt} index={index} />
            ))}
          </div>
          {prompts.length > prompts_to_show && (
            <div className="mt-8 text-center">
              <Button onClick={show_more}>Show more</Button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center">
          <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold mb-2">No prompts found</h3>
          <p className="text-muted-foreground flex gap-1 items-center justify-center">
            <span>
              Looks like there are no prompts available right now. Why don't you
            </span>
            <Button
              variant="link"
              className="p-0"
              onClick={() => router.push("/prompts/create")}
            >
              Create one?
            </Button>
          </p>
        </div>
      )}
    </div>
  );
}

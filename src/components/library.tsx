"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { PromptCard } from "@/components/prompt-card";
import { Skeleton } from "@/components/ui/skeleton";
import { get_prompts } from "@/lib/prompt-utils";
import { TPrompt } from "@/types/prompt";
import { AlertCircle } from "lucide-react";

type LibraryProps = {
  prompts_to_show: number;
  search_query?: string;
  initial_prompts?: TPrompt[];
};

export function Library({ prompts_to_show, search_query = "", initial_prompts = [] }: LibraryProps) {
  const router = useRouter();
  const [prompts, set_prompts] = useState<TPrompt[]>(initial_prompts);
  const [loading, set_loading] = useState(initial_prompts.length === 0);

  useEffect(() => {
    async function fetch_prompts() {
      if (initial_prompts.length > 0) return;
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
  }, [initial_prompts]);

  const filtered_prompts = prompts.filter((prompt) =>
    prompt.input.toLowerCase().includes(search_query.toLowerCase())
  );

  const show_more = () => {
    router.push("/prompts");
  };

  return (
    <div className="container mx-auto px-6 max-w-7xl">
      {loading ? (
        <div className="space-y-8">
          {Array(prompts_to_show)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} className="h-[280px] w-full" />
            ))}
        </div>
      ) : prompts.length > 0 ? (
        <>
          <div className="space-y-8">
            {filtered_prompts.slice(0, prompts_to_show).map((prompt, index) => (
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

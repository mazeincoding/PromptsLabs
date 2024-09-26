"use client";

import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export function Hero() {
  const router = useRouter();

  const on_explore_click = () => {
    router.push("/prompts");
  };

  const on_create_click = () => {
    router.push("/prompts/create");
  };

  return (
    <div>
      <div className="flex flex-col items-center text-center px-8 mt-8 sm:mt-24 gap-5 max-w-4xl mx-auto">
        <div className="flex flex-col gap-5 justify-center items-center">
          <h1 className="scroll-m-20 text-3xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl">
            A library of prompts to see how new LLMs perform
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
            Tired of finding test prompts to test new LLMs? Get copy-paste
            prompts by the community, and create your own!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button
            className="rounded-full w-full sm:w-auto"
            size="lg"
            onClick={on_explore_click}
          >
            <Search className="mr-2 h-4 w-4" />
            Explore
          </Button>
          <Button
            className="rounded-full w-full sm:w-auto"
            size="lg"
            variant="outline"
            onClick={on_create_click}
          >
            <Plus className="mr-2 h-4 w-4" />
            Request prompt
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";

export function Hero() {
  return (
    <div className="flex flex-col items-center text-center px-8 mt-8 sm:mt-24 gap-4 max-w-4xl mx-auto">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="scroll-m-20 text-3xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl">
          A library of prompts to see how new LLMs perform
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
          Explore prompts by the community and share your own.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Button className="rounded-full w-full sm:w-auto" size="lg">
          <Search className="mr-2 h-4 w-4" />
          Explore
        </Button>
        <Button className="rounded-full w-full sm:w-auto" size="lg" variant="outline">
          <Plus className="mr-2 h-4 w-4" />
          Create
        </Button>
      </div>
    </div>
  );
}

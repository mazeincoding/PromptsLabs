"use client";

import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { ButtonProps } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface HeroButtonProps extends ButtonProps {
  icon: LucideIcon;
  text: string;
  variant?: "default" | "outline";
}

const HeroButton: React.FC<HeroButtonProps> = ({
  icon: Icon,
  text,
  variant = "default",
  onClick,
}) => (
  <Button
    className="rounded-full w-full sm:w-auto px-6"
    size="lg"
    variant={variant}
    onClick={onClick}
  >
    <Icon className="mr-2 h-4 w-4" />
    {text}
  </Button>
);

const HeroContent: React.FC = () => (
  <div className="flex flex-col gap-5 justify-center items-center">
    <h1 className="scroll-m-20 text-3xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl">
      A library of prompts to see how new LLMs perform
    </h1>
    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
      Tired of finding test prompts to test new LLMs? Get copy-paste prompts by
      the community, and create your own!
    </p>
  </div>
);

export function Hero(): JSX.Element {
  const router = useRouter();

  const on_explore_click = (): void => router.push("/prompts");
  const on_create_click = (): void => router.push("/prompts/request");

  return (
    <div className="flex flex-col items-center text-center px-8 mt-8 sm:mt-24 gap-5 max-w-4xl mx-auto">
      <HeroContent />
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <HeroButton icon={Search} text="Explore" onClick={on_explore_click} />
        <HeroButton
          icon={Plus}
          text="Request prompt"
          variant="outline"
          onClick={on_create_click}
        />
      </div>
    </div>
  );
}

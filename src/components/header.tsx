"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();

  return (
    <header className="flex justify-between items-center p-4 border-b">
      <Link
        href="/"
        className="flex items-center space-x-2 no-underline text-foreground"
      >
        <Logo size={28} />
      </Link>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Button
          className="gap-2"
          onClick={() => router.push("/prompts/create")}
        >
          Create prompt
          <Plus className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
}

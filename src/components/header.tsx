import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <Link href="/" className="flex items-center space-x-2">
        <Logo size={28} />
      </Link>
      <ThemeToggle />
    </header>
  );
}

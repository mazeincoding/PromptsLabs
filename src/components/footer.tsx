import Link from "next/link";
import { Github, Twitter, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <p className="text-sm text-muted-foreground">
              Built with <Heart className="inline-block w-4 h-4 text-red-500" /> by{" "}
              <Link
                href="https://twitter.com/mazeincoding"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary hover:underline"
              >
                mazeincoding
              </Link>
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com/mazeincoding"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://github.com/mazeincoding/PromptsLabs"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/prompts"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Explore Prompts
              </Link>
              <Link
                href="/prompts/request"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Request Prompt
              </Link>
            </nav>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="font-semibold text-lg">Legal</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
        <div className="pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} PromptsLabs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

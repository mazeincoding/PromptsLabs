import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Library } from "@/components/library";
import Script from "next/script";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col gap-10">
        <Hero />
        <Library prompts_to_show={2} />
      </div>
      <Script id="structured-data" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "PromptsLabs",
            "url": "https://promptslabs.com",
            "description": "AI Prompt Library for Testing LLMs"
          }
        `}
      </Script>
    </div>
  );
}

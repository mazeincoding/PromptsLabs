import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Library } from "@/components/library";
import Script from "next/script";
import { TPrompt } from "@/types/prompt";

const dummy_prompts: TPrompt[] = [
  {
    input: "How many R's are in the word strawberry?",
    expected_output: "3",
    created_by: "Maze",
    is_hot: true,
  },
  {
    input:
      "I have 3 apples today. I ate one yesterday. How many do I have left today?",
    expected_output:
      "You have 3 apples today. Eating one yesterday doesn’t change that for today.",
    created_by: "Maze",
    is_hot: false,
  },
  {
    input: "Compare 9.9 and 9.11--which is the largest number?",
    expected_output:
      "9.9 is larger because in decimal comparisons, you check digits from left to right. At the tenths place (first decimal), 9 is greater than 1, so 9.9 > 9.11.",
    created_by: "Maze",
    is_hot: false,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col gap-10 pb-10">
        <Hero />
        <Library prompts_to_show={3} initial_prompts={dummy_prompts} />
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

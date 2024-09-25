import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Library } from "@/components/library";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col gap-10">
        <Hero />
        <Library prompts_to_show={2} />
      </div>
    </div>
  );
}

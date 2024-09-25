import { Library } from "@/components/library";
import { Header } from "@/components/header";

export default function Prompts() {
  return (
    <>
      <Header />
      <Library prompts_to_show={30} />
    </>
  );
}

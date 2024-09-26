import React from "react";
import { Header } from "@/components/header";

const TermsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header show_create_button={false} />
      <div className="flex-1 container mx-auto p-8 max-w-3xl">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl mb-6">
          Terms and Conditions
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Prompt Moderation Policy
            </h2>
            <p className="text-sm text-muted-foreground">
              To maintain quality and relevance, I reserve the right to delete
              or reject prompts that don't fit the purpose of this project (such
              as inappropriate, irrelevant, or spammy content). Please submit
              responsibly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              User Responsibilities
            </h2>
            <p className="text-sm text-muted-foreground">
              Users are encouraged to submit prompts that are constructive,
              respectful, and in line with the project's goals. Any abusive
              behavior will not be tolerated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Changes to This Policy
            </h2>
            <p className="text-sm text-muted-foreground">
              I may update these terms from time to time. Any changes will be
              reflected on this page, and it's your responsibility to review
              them periodically.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;

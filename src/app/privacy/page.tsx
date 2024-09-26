import React from "react";
import { Header } from "@/components/header";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header show_create_button={false} />
      <div className="flex-1 container mx-auto p-8 max-w-3xl">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl mb-6">
          Privacy Policy
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Data Handling and Privacy
            </h2>
            <p className="text-sm text-muted-foreground">
              We use Supabase for data storage and management. When you submit a
              prompt, both the prompt and your name (if provided) will be
              publicly visible on the website. If you prefer anonymity, you can
              leave the name field empty. We do not share any additional
              personal information with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Changes to This Policy
            </h2>
            <p className="text-sm text-muted-foreground">
              We may update this privacy policy from time to time. Any changes
              will be reflected on this page, and it's your responsibility to
              review them periodically.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;

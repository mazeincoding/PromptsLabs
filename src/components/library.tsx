"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { prompts } from "@/data/prompts";
import { MessageSquare, CheckCircle, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export function Library() {
  const [visible_prompts, set_visible_prompts] = useState(5);
  const router = useRouter();

  const show_more = () => {
    router.push("/prompts");
  };

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Prompt Library</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {prompts.slice(0, visible_prompts).map((prompt, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center">
                <Badge variant="secondary">Prompt #{index + 1}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold mb-2 flex items-center">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Prompt:
                </p>
                <p className="text-muted-foreground">{prompt.input}</p>
              </div>
              <div>
                <p className="font-semibold mb-2 flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Expected Output:
                </p>
                <p className="text-muted-foreground">
                  {prompt.expected_output}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                Created by: {prompt.created_by}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      {visible_prompts < prompts.length && (
        <div className="mt-8 text-center">
          <Button onClick={show_more}>
            Show more
          </Button>
        </div>
      )}
    </div>
  );
}

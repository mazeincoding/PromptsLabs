import { useState } from "react";
import { TPrompt } from "@/types/prompt";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, CheckCircle, Copy, Check } from "lucide-react";
import { copy_prompt_to_clipboard } from "@/lib/prompt-utils";

export function PromptCard({
  prompt,
  index,
}: {
  prompt: TPrompt;
  index: number;
}) {
  const [is_copied, set_is_copied] = useState(false);

  const handle_copy = () => {
    copy_prompt_to_clipboard(prompt);
    set_is_copied(true);
    setTimeout(() => set_is_copied(false), 2000);
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center">
          <Badge variant="secondary">Prompt {index + 1}</Badge>
        </CardTitle>
        {is_copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy
            className="h-4 w-4 text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
            onClick={handle_copy}
          />
        )}
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
          <p className="text-muted-foreground">{prompt.expected_output}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-betweenq">
        <p className="text-sm text-muted-foreground">
          Created by: {prompt.created_by}
        </p>
      </CardFooter>
    </Card>
  );
}

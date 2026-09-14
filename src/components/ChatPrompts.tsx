import { useEffect, useState } from "react";
import { Button } from "./ui/Button";

interface ChatPromptsProps {
  onPromptClick: (prompt: string) => void;
}

const allPrompts = [
  "Tell me about Kumar's experience",
  "What projects has Kumar worked on?",
  "What technologies does Kumar use?",
  "What is Kumar's current role at FlintLab?",
  "Tell me about Kumar's skills",
  "What companies has Kumar worked at?",

  // Portfolio & career
  "What is Kumar currently working on?",
  "What kind of developer is Kumar?",
  "What problems does Kumar like solving?",
  "What areas is Kumar strongest in?",
  "What is Kumar focusing on learning now?",

  // Projects & engineering
  "Which project best represents Kumar's work?",
  "What was the motivation behind MyGVP CLI & Extension?",
  "What technical challenges has Kumar worked through?",
  "What tools or frameworks does Kumar frequently use?",
  "What has Kumar built outside of work?",

  // Engineering approach
  "How does Kumar approach system design?",
  "What does Kumar care about in clean architecture?",
  "How does Kumar balance speed vs correctness?",
  "What engineering principles does Kumar follow?",
  "What distributed systems challenges has Kumar tackled?",

  // Practical / conversational
  "What can you help me with?",
  "Where should I start if I want to explore Kumar's work?",
  "Is Kumar more backend or frontend focused?",
  "How can I contact Kumar?",
];

function getRandomPrompts(prompts: string[], count: number): string[] {
  const shuffled = [...prompts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function ChatPrompts({ onPromptClick }: ChatPromptsProps) {
  const [randomPrompts, setRandomPrompts] = useState<string[]>([]);

  useEffect(() => {
    setRandomPrompts(getRandomPrompts(allPrompts, 3));
  }, []);

  return (
    <div className="mt-2 flex w-full max-w-[200px] flex-col gap-1.5 sm:mt-3 sm:max-w-[250px] sm:gap-2">
      <p className="text-center text-xs text-muted-foreground">Try asking:</p>
      <div className="flex flex-col gap-1 sm:gap-1.5">
        {randomPrompts.map((prompt) => (
          <Button
            key={prompt}
            variant="outline"
            size="sm"
            onClick={() => onPromptClick(prompt)}
            className="h-auto min-h-[32px] w-full justify-start whitespace-normal break-words px-2 py-1.5 text-left text-xs leading-normal sm:min-h-[36px] sm:px-3 sm:py-2"
          >
            <span className="line-clamp-2">{prompt}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}

import { TPrompt } from "@/types/prompt";

export const prompts: TPrompt[] = [
  {
    created_by: "Maze",
    input: "How many R's are in the word 'Strawberry'?",
    expected_output: "3",
    is_hot: true,
  },
  {
    created_by: "Alex",
    input: "What's the capital of France?",
    expected_output: "Paris",
    is_hot: false,
  },
  {
    created_by: "Sam",
    input: "How many sides does a triangle have?",
    expected_output: "3",
    is_hot: false,
  },
  {
    created_by: "Jordan",
    input: "What's the chemical symbol for gold?",
    expected_output: "Au",
    is_hot: false,
  },
  {
    created_by: "Taylor",
    input: "Who wrote 'Romeo and Juliet'?",
    expected_output: "William Shakespeare",
    is_hot: false,
  },
  {
    created_by: "Casey",
    input: "What's the largest planet in our solar system?",
    expected_output: "Jupiter",
    is_hot: false,
  },
  {
    created_by: "Morgan",
    input: "How many continents are there?",
    expected_output: "7",
    is_hot: false,
  },
  {
    created_by: "Riley",
    input: "What's the square root of 64?",
    expected_output: "8",
    is_hot: false,
  },
  {
    created_by: "Jamie",
    input: "Who painted the Mona Lisa?",
    expected_output: "Leonardo da Vinci",
    is_hot: false,
  },
  {
    created_by: "Quinn",
    input: "What's the boiling point of water in Celsius?",
    expected_output: "100",
    is_hot: false,
  },
];

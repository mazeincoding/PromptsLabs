# PromptsLabs

PromptsLabs is a library of prompts to see how new LLMs perform. It allows users to explore existing prompts and create new ones.

## Features

- Explore a collection of prompts
- Create new prompts
- Copy prompts to clipboard
- Dark mode support

## Getting Started

First, clone the repository:
```bash
git clone https://github.com/mattt-ai/prompts-labs.git
cd prompts-labs
```

Then, install the dependencies:
```bash
npm install
```
**Or**
```bash
yarn install
```

**Or**
```bash
pnpm install
```

Create a `.env.local` file in the root directory and add your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Finally, run the development server:
```bash
npm run dev
```

**Or**
```bash
yarn dev
```

**Or**
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Supabase](https://supabase.io/)

## Project Structure

- `src/app`: Next.js app router pages
- `src/components`: React components
- `src/lib`: Utility functions and helpers
- `src/types`: TypeScript type definitions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
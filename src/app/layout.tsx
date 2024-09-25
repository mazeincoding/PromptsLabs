import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

// Remove this line since we're not using Geist fonts anymore
// const geistSans = localFont({ ... });
// const geistMono = localFont({ ... });

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "PromptsLabs - AI Prompt Library for LLM Testing",
  description:
    "Discover and test a comprehensive library of prompts for new Large Language Models (LLMs).",
  keywords: [
    "AI test prompts",
    "testing prompts",
    "language models",
    "prompt library",
  ],
  openGraph: {
    title: "PromptsLabs - AI Prompt Library",
    description: "Find test prompts for new LLMs",
    url: "https://promptslabs.com",
    siteName: "PromptsLabs",
    images: [
      {
        url: "https://promptslabs.com/images/og.png",
        width: 1200,
        height: 630,
        alt: "PromptsLabs OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PromptsLabs - AI Prompt Library for Testing LLMs",
    description:
      "Discover and test prompts for new Large Language Models (LLMs)",
    images: ["https://promptslabs.com/images/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

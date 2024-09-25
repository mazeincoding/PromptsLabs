import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

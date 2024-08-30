import { GitHub } from "@/lib/icons";
import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono as Mono } from "next/font/google";
import Link from "next/link";

const mono = Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Ricardo Casares",
  description: "Issues",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`p-4 sm:p-10 font-mono ${mono.className}`}>
        <header>
          <h1 className="text-3xl text-primary font-extrabold">
            <Link href="/">Hello</Link>
          </h1>
          <h2 className="mb-10">
            I&apos;m Ricardo, a creative software developer.
          </h2>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="py-10">
          <a
            className="flex gap-2 items-center"
            href="https://github.com/ricardocasares/hike"
          >
            <GitHub /> Source
          </a>
        </footer>
      </body>
    </html>
  );
}

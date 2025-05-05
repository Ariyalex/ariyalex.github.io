import type { Metadata } from "next";
import { DM_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "./ui/nav";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ['400', "500"],
});

export const metadata: Metadata = {
  title: "Ariya Duta Profile",
  description: "Ariya Duta profile, skills, and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body
        className={`${dmSans.variable} ${dmMono.variable} antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}

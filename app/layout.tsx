import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-robot-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bisa Belajar",
  description: "Bisa Belajar is application for people to learn and trade skills with ease.",
  authors: [{ name: "Lyy and Zen", url: "https://bisa-belajar.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

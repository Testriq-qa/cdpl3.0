import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechEd Pro - Software Testing & Data Science Training Institute",
  description: "Leading EdTech platform offering comprehensive courses in Software Testing, Data Science, AI, and Machine Learning. Transform your career with industry-expert training.",
  keywords: "software testing, data science, AI, machine learning, automation testing, EdTech, training institute",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const Header = dynamic(
  () => import("@/src/components/Layout/Header"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const Footer = dynamic(
  () => import("@/src/components/Layout/Footer"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export const metadata: Metadata = {
  title: "CDPL - Software Testing & Data Science Training Institute",
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
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

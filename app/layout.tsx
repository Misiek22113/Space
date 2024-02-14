import Navbar from "@/components/Navbar/Navbar";
import "../styles/globals.scss";
import { Inria_Serif } from "next/font/google";
import { Suspense } from "react";

const inria = Inria_Serif({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Solar System",
  description: "Explore the solar system with this interactive website!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inria.className}>{children}</body>
    </html>
  );
}

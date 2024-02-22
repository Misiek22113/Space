import "../styles/globals.scss";
import { Inria_Serif } from "next/font/google";
import { Orbitron } from "next/font/google";

const inria = Inria_Serif({
  subsets: ["latin"],
  weight: "400",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Solar System",
  description: "Explore the solar system with this website!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={orbitron.className}>{children}</body>
    </html>
  );
}

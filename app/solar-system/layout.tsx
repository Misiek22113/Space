import Navbar from "@/components/Navbar/Navbar";
import { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      {children}
    </section>
  );
}

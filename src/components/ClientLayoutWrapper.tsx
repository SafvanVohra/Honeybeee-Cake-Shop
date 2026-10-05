"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin") || false;

  return (
    <div className="w-full max-w-full overflow-x-clip relative flex flex-col min-h-screen">
      {!isAdmin && <Navbar />}
      <main className="flex-grow w-full max-w-full overflow-x-clip relative">{children}</main>
      {!isAdmin && <Footer />}
    </div>
  );
}

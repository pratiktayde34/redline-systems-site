"use client";

import { usePathname } from "next/navigation";

export default function HideOnConnect({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  if (pathname === "/connect") {
    return null;
  }
  
  return <>{children}</>;
}

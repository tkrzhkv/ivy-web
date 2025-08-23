"use client";
import { ReactNode } from "react";

import Header from "@/components/Header";

export default function LayoutClient({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

"use client";

import { useState, useEffect, ReactNode } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function LoaderWrapper({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#4b0d17] transition-opacity duration-500">
          <div className="relative flex flex-col items-center">
            <Image
              src="/logo_short.svg"
              alt="Logo"
              width={48}
              height={48}
              className="w-48 h-48 animate-pulse"
            />
            <div className="flex absolute top-[101px] -right-[19px] space-x-2 mt-4">
              <span className="w-[2px] h-[2px] bg-[#EBE7DF] rounded-full animate-pulse [animation-delay:0ms]" />
              <span className="w-[2px] h-[2px] bg-[#EBE7DF] rounded-full animate-pulse [animation-delay:200ms]" />
              <span className="w-[2px] h-[2px] bg-[#EBE7DF] rounded-full animate-pulse [animation-delay:400ms]" />
            </div>
          </div>
        </div>
      )}
      <div className="relative">{children}</div>
    </>
  );
}

"use client";

import "./globals.css";
import { ReactNode, useEffect, useState } from "react";
import localFont from "next/font/local";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import Footer from "@/components/Footer";

const cursive = localFont({
  src: "../fonts/Quetine.woff2",
  variable: "--font-cursive",
});

const ivy_regular = localFont({
  src: "../fonts/TransgenderGrotesk-Regular.woff2",
  variable: "--font-ivy_regular",
});

const ivy_normal_black = localFont({
  src: "../fonts/Onest-Black.woff2",
  variable: "--font-ivy_normal_black",
});

const ivy_normal_bold = localFont({
  src: "../fonts/Onest-Bold.woff2",
  variable: "--font-ivy_normal_bold",
});

const ivy_normal_medium = localFont({
  src: "../fonts/Onest-Medium.woff2",
  variable: "--font-ivy_normal_medium",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="en">
      <body
        className={`${cursive.variable} ${ivy_regular.variable} ${ivy_normal_black.variable} ${ivy_normal_bold.variable} ${ivy_normal_medium.variable}`}
      >
        {/* Лоадер */}
        {loading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#4b0d17] transition-opacity duration-500">
            <div className="relative flex flex-col items-center">
              {/* Лого */}
              <Image
                src="/logo_short.svg"
                alt="Logo"
                width={48}
                height={48}
                className="w-48 h-48 animate-pulse"
              />

              {/* Точки */}
              <div className="flex absolute top-[101px] -right-[19px] space-x-2 mt-4">
                <span className="w-[2px] h-[2px] bg-[#EBE7DF] rounded-full animate-pulse [animation-delay:0ms]" />
                <span className="w-[2px] h-[2px] bg-[#EBE7DF] rounded-full animate-pulse [animation-delay:200ms]" />
                <span className="w-[2px] h-[2px] bg-[#EBE7DF] rounded-full animate-pulse [animation-delay:400ms]" />
              </div>
            </div>
          </div>
        )}

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

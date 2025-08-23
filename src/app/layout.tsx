import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import localFont from "next/font/local";
import LayoutClient from "@/app/LayoutClient";

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

export const metadata: Metadata = {
  title: "IVY Streets",
  description: "We are happy to see you here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cursive.variable} ${ivy_regular.variable} ${ivy_normal_black.variable} ${ivy_normal_bold.variable} ${ivy_normal_medium.variable}`}
      >
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}

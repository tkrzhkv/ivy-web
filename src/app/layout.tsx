import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoaderWrapper from "@/components/LoaderWrapper";
import { ReactNode } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

export const metadata = {
  title: "THE IVY STREETS — Wedding Photo Editing",
  description:
    "Professional wedding photo editing service. Fast turnaround, consistent style, and trusted by photographers worldwide.",
  keywords: [
    "wedding photo editing",
    "professional editing",
    "IVY STR.",
    "the ivy streets",
  ],
  openGraph: {
    title: "THE IVY STREETS — Wedding Photo Editing",
    description:
      "Save time on editing — let our pro editors handle your wedding photos.",
    url: "https://theivystreets.com",
    siteName: "THE IVY STREETS",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The IVY Streets Wedding Editing",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IVY STR. — Wedding Photo Editing",
    description: "Save time on editing with IVY STR. professionals.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${cursive.variable} ${ivy_regular.variable} ${ivy_normal_black.variable} ${ivy_normal_bold.variable} ${ivy_normal_medium.variable}`}
      >
        <LoaderWrapper>
          <Header />
          {children}
          <Footer />
        </LoaderWrapper>
      </body>
    </html>
  );
}

import AboutContent from "./AboutContent";

export const metadata = {
  title: "THE IVY STREETS — About Us",
  description:
    "Learn more about THE IVY STREETS, a team of professional wedding photo editors supporting photographers worldwide.",
  keywords: ["wedding photo editing", "professional editors", "IVY STREETS"],
  openGraph: {
    title: "About THE IVY STREETS",
    description:
      "Professional wedding photo editors supporting photographers worldwide.",
    url: "https://theivystreets.com/about",
    siteName: "THE IVY STREETS",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About THE IVY STREETS",
      },
    ],
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutContent />
    </main>
  );
}

import ServiceContent from "@/app/services/ServiceContent";

export const metadata = {
  title: "THE IVY STREETS — Services & Pricing",
  description:
    "Explore professional wedding photo editing services at THE IVY STREETS: color correction, retouching, and fast turnaround.",
  openGraph: {
    title: "THE IVY STREETS — Services & Pricing",
    description:
      "Discover our professional wedding photo editing services, tailored for photographers worldwide.",
    url: "https://theivystreets.com/services",
    siteName: "THE IVY STREETS",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "THE IVY STREETS Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "THE IVY STREETS — Services & Pricing",
    description:
      "Discover our professional wedding photo editing services at THE IVY STREETS.",
    images: ["/og-services.jpg"],
  },
};

export default function Services() {
  return (
    <main className="w-screen">
      <ServiceContent />
    </main>
  );
}

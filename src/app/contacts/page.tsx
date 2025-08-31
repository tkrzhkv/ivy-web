import ContactContent from "@/app/contacts/ContactContent";

export const metadata = {
  title: "THE IVY STREETS — Contact Us",
  description:
    "Get in touch with THE IVY STREETS, professional wedding photo editors ready to support photographers worldwide.",
  keywords: [
    "wedding photo editing",
    "contact",
    "professional editors",
    "IVY STREETS",
  ],
  openGraph: {
    title: "Contact THE IVY STREETS",
    description:
      "Professional wedding photo editors ready to support photographers worldwide.",
    url: "https://theivystreets.com/contact",
    siteName: "THE IVY STREETS",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact THE IVY STREETS",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact THE IVY STREETS",
    description:
      "Professional wedding photo editors ready to support photographers worldwide.",
    images: ["/og-contact.jpg"],
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactContent />
    </main>
  );
}

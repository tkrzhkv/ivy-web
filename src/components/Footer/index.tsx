"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const menuItems = [
  { href: "/services", label: "Services & Pricing" },
  { href: "/samples", label: "Samples" },
  { href: "/about", label: "About Us" },
  { href: "/contacts", label: "Contacts" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black backdrop-blur-md text-[#d6c3b3]">
      <div className="max-w-[1440px] mx-auto py-10 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
        {/* Logo */}
        <motion.div
          className="cursor-pointer mb-4 md:mb-0"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link href="/">
            <Image
              src="/logo_short.svg"
              alt="IVY STR."
              width={130}
              height={30}
              className="w-[100px] sm:w-[110px] md:w-[130px]"
            />
          </Link>
        </motion.div>

        {/* Menu */}
        <nav className="flex text-[#d6c3b3] flex-wrap justify-center gap-4 sm:gap-6 md:gap-12 text-xs sm:text-sm md:text-sm uppercase tracking-wide font-ivy_normal_medium">
          {menuItems.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ scale: 1.1, color: "#f9f2f2", rotateX: 30 }}
              transition={{ type: "spring", stiffness: 300 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                href={item.href}
                className="transition-colors whitespace-nowrap text-[#d6c3b3]"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-3 sm:gap-4">
          <motion.a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/facebook.png"
              alt="Facebook"
              width={20}
              height={20}
              className="sm:w-5 sm:h-5 hover:scale-110 transition-transform"
            />
          </motion.a>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={20}
              height={20}
              className="sm:w-5 sm:h-5 hover:scale-110 transition-transform"
            />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

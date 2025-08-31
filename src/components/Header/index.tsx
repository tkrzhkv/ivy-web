"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "@/components/ui/Modal";
import OrderForm from "@/components/OrderForm";

// ---------------- Logo ----------------
function Logo() {
  return (
    <motion.div
      className="text-xl md:text-2xl font-bold tracking-widest cursor-pointer"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <Link href="/">
        <Image
          src="/logo_short.svg"
          alt="IVY STR."
          width={130}
          height={30}
          priority
          className="md:w-[130px] md:h-[30px]"
        />
      </Link>
    </motion.div>
  );
}

// ---------------- Desktop Navigation ----------------
const menuItems = [
  { href: "/services", label: "Services & Pricing" },
  { href: "/samples", label: "Samples" },
  { href: "/about", label: "About Us" },
  { href: "/contacts", label: "Contacts" },
  { href: "/faq", label: "FAQ" },
];

// ---------------- Desktop Navigation ----------------
function DesktopNav() {
  return (
    <nav className="hidden md:flex space-x-6 lg:space-x-12 xl:space-x-20 text-sm uppercase tracking-wide font-ivy_normal_medium">
      {menuItems.map((item) => (
        <motion.div
          key={item.href}
          whileHover={{ scale: 1.1, color: "#f9f2f2", rotateX: 30 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            href={item.href}
            className="transition-colors whitespace-nowrap"
          >
            {item.label}
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}

// ---------------- Socials and Order Button ----------------
function SocialsAndOrderButton({ onOrderClick }: { onOrderClick: () => void }) {
  return (
    <div className="hidden md:flex items-center space-x-3 lg:space-x-10">
      {/* На планшетах скрываем соцсети */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:block hover:scale-110 transition-transform"
      >
        <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:block hover:scale-110 transition-transform"
      >
        <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
      </a>
      <button
        onClick={onOrderClick}
        className="border cursor-pointer uppercase border-[#d6c3b3] px-2 py-1 text-sm md:text-md hover:bg-[#d6c3b3] hover:text-[#1a0f0f] transition"
      >
        Make an Order
      </button>
    </div>
  );
}

// ---------------- Mobile Menu ----------------
function MobileMenu({
  isOpen,
  onClose,
  onOrderClick,
}: {
  isOpen: boolean;
  onClose: () => void;
  onOrderClick: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Menu panel */}
          <motion.div
            className="absolute top-0 right-0 w-full max-w-md h-full bg-[#1a0f0f] shadow-xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col h-full p-8">
              {/* Close button */}
              <button
                onClick={onClose}
                className="self-end text-[#d6c3b3] cursor-pointer hover:text-white transition-colors mb-8"
                aria-label="Close menu"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Logo */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <Image
                  src="/logo_short.svg"
                  alt="IVY STR."
                  width={120}
                  height={30}
                />
              </motion.div>

              {/* Menu links */}
              <nav className="flex flex-col space-y-6 mb-auto">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block text-[#d6c3b3] hover:text-white transition-colors text-xl font-ivy_normal_medium uppercase tracking-wide py-2"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Order Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="mb-8"
              >
                <button
                  onClick={() => {
                    onClose();
                    onOrderClick();
                  }}
                  className="block w-full cursor-pointer text-center border border-[#d6c3b3] text-[#d6c3b3] px-6 py-4 hover:bg-[#d6c3b3] hover:text-[#1a0f0f] transition-all uppercase tracking-wide"
                >
                  Make an Order
                </button>
              </motion.div>

              {/* Socials */}
              <motion.div
                className="flex justify-center space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <a
                  href="https://www.facebook.com/ivy.streets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Image
                    src="/facebook.png"
                    alt="Facebook"
                    width={28}
                    height={28}
                  />
                </a>
                <a
                  href="https://instagram.com/ivy.streets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Image
                    src="/instagram.png"
                    alt="Instagram"
                    width={28}
                    height={28}
                  />
                </a>
              </motion.div>

              <motion.div
                className="w-full h-px bg-[#d6c3b3]/30 mt-8"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ---------------- Main Header ----------------
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 bg-black/40 text-[#d6c3b3] backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center py-4 px-6 md:px-8 lg:px-12">
          <Logo />
          <DesktopNav />
          <SocialsAndOrderButton onOrderClick={() => setIsOrderOpen(true)} />

          {/* Burger */}
          <div className="md:hidden">
            <button aria-label="Toggle menu" onClick={() => setMenuOpen(true)}>
              <svg
                className="w-6 h-6 text-[#d6c3b3]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onOrderClick={() => setIsOrderOpen(true)}
      />

      {/* Order modal */}
      <Modal
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        title="Make an order"
        size="lg"
      >
        <OrderForm onClose={() => setIsOrderOpen(false)} />
      </Modal>
    </>
  );
}

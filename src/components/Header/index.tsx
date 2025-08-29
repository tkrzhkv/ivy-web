"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 bg-black/40 text-[#d6c3b3] backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center py-4 px-6 md:px-8 lg:px-12">
          {/* Логотип */}
          <div className="text-xl md:text-2xl font-bold tracking-widest">
            <Link href="/">
              <Image
                src="/logo_short.svg"
                alt="IVY STR."
                width={100}
                height={25}
                priority
                className="md:w-[130px] md:h-[30px]"
              />
            </Link>
          </div>

          {/* Навигация для десктопа */}
          <nav className="hidden font-ivy_normal_medium lg:flex space-x-12 xl:space-x-20 text-sm uppercase tracking-wide">
            <Link href="/services" className="hover:text-white transition">
              Services & Pricing
            </Link>
            <Link href="/samples" className="hover:text-white transition">
              Samples
            </Link>
            <Link href="/about" className="hover:text-white transition">
              About Us
            </Link>
            <Link href="/contacts" className="hover:text-white transition">
              Contacts
            </Link>
            <Link href="/faq" className="hover:text-white transition">
              FAQ
            </Link>
          </nav>

          {/* Соцсети и кнопка для десктопа */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-10">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block"
            >
              <Image
                src="/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block"
            >
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <Link
              href="/order"
              className="border uppercase border-[#d6c3b3] px-3 py-2 text-sm md:text-md hover:bg-[#d6c3b3] hover:text-[#1a0f0f] transition"
            >
              Make an Order
            </Link>
          </div>

          {/* Бургер для мобилок */}
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
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Анимированное мобильное меню - ВНЕ header */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed max-w-screen inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Затемняющий фон */}
            <motion.div
              className="absolute inset-0 bg-black/50"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Меню панель */}
            <motion.div
              className="absolute top-0 right-0 w-full max-w-md h-full bg-[#1a0f0f] shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <div className="flex flex-col h-full p-8">
                {/* Кнопка закрытия */}
                <button
                  onClick={() => setMenuOpen(false)}
                  className="self-end text-[#d6c3b3] hover:text-white transition-colors mb-8"
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

                {/* Логотип в меню */}
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

                {/* Навигационные ссылки */}
                <nav className="flex flex-col space-y-6 mb-auto">
                  {[
                    { href: "/services", label: "Services & Pricing" },
                    { href: "/samples", label: "Samples" },
                    { href: "/about", label: "About Us" },
                    { href: "/contacts", label: "Contacts" },
                    { href: "/faq", label: "FAQ" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="block text-[#d6c3b3] hover:text-white transition-colors text-xl font-ivy_normal_medium uppercase tracking-wide py-2"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Кнопка заказа */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  className="mb-8"
                >
                  <Link
                    href="/order"
                    onClick={() => setMenuOpen(false)}
                    className="block w-full text-center border border-[#d6c3b3] text-[#d6c3b3] px-6 py-4 hover:bg-[#d6c3b3] hover:text-[#1a0f0f] transition-all uppercase tracking-wide"
                  >
                    Make an Order
                  </Link>
                </motion.div>

                {/* Социальные сети */}
                <motion.div
                  className="flex justify-center space-x-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                >
                  <a
                    href="https://facebook.com"
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
                    href="https://instagram.com"
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

                {/* Декоративная линия */}
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
    </>
  );
}

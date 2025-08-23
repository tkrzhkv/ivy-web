"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-black/40 text-[#d6c3b3] backdrop-blur-sm">
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

        {/* Навигация */}
        <nav className="hidden font-ivy_normal_medium lg:flex space-x-12 xl:space-x-20 text-sm uppercase tracking-wide">
          <Link href="/services" className="hover:text-white transition ">
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
        </nav>

        {/* Соцсети и кнопка */}
        <div className="hidden md:flex  items-center space-x-4 lg:space-x-10">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block"
          >
            <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
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
          <button aria-label="Toggle menu">
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
  );
}

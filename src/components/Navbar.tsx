"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Search, Menu as MenuIcon, X } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const totalItems = useCartStore((state) => state.getTotalItems());

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.header
      key={pathname}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50 w-full"
    >
      {/* Top Pink Bar */}
      <div className="w-full max-w-full bg-[#DE9BA9] text-white px-3 sm:px-6 md:px-12 py-1.5 sm:py-2 flex justify-between items-center text-[10px] sm:text-xs font-sans tracking-wide overflow-hidden">
        <div className="flex items-center gap-2 sm:gap-4 font-medium shrink-0">
          <a href="tel:08511220077" className="hover:underline flex items-center gap-1 font-bold whitespace-nowrap">
            <span>📞</span> 085112 20077
          </a>
          <span className="hidden sm:inline opacity-80">|</span>
          <span className="hidden md:inline whitespace-nowrap">⭐ 4.5 (639 Reviews) · Vadodara</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 font-medium text-[10px] sm:text-xs shrink-0">
          <span className="bg-white/20 px-2 sm:px-2.5 py-0.5 rounded-full font-semibold whitespace-nowrap">🟢 Open · Closes 10 pm</span>
          <span className="hidden sm:inline whitespace-nowrap">Delivery till 11 pm</span>
        </div>
      </div>

      {/* Main White Navbar */}
      <div className="relative w-full max-w-full bg-white h-16 sm:h-20 md:h-28 flex items-center justify-between md:grid md:grid-cols-3 px-3 sm:px-6 md:px-10 lg:px-16 shadow-[0_4px_20px_rgba(222,155,169,0.15)]">

        {/* SVG Decorative Center Curve (Desktop Only, hidden on mobile so it never overlaps content) */}
        <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 w-[320px] md:w-[450px] h-[60px] md:h-[80px] overflow-hidden pointer-events-none drop-shadow-[0_8px_15px_rgba(222,155,169,0.12)] z-0">
          <svg viewBox="0 0 400 80" preserveAspectRatio="none" className="w-full h-full text-white fill-current">
            <path d="M0,0 C80,0 120,70 200,70 C280,70 320,0 400,0 L400,-10 L0,-10 Z" />
          </svg>
        </div>

        {/* Left Column: Desktop Links or Mobile Toggle */}
        <div className="flex items-center justify-start z-10 shrink-0">
          {/* Desktop Links (Left) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10 overflow-visible">
            {["HOME", "MENU", "CAKES"].map((item) => (
              <Link
                key={item}
                href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                className="font-sans font-extrabold text-bakery-chocolate tracking-[0.25em] text-[13px] lg:text-[15px] hover:text-[#DE9BA9] transition-colors hover-target whitespace-nowrap"
              >
                {item}
              </Link>
            ))}
          </nav>
          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-bakery-chocolate hover-target p-1.5 rounded-lg hover:bg-bakery-bg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>

        {/* Center Column: Logo */}
        <div className="flex flex-col items-center justify-center z-20 hover-target cursor-pointer relative px-2">
          <Link href="/" className="text-center group block">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-[64px] text-bakery-chocolate leading-none whitespace-nowrap pt-0.5">
              Honeybeee
            </h1>
            <span className="font-sans text-[7px] sm:text-[9px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-bakery-gold block -mt-0.5">
              Cake Shop
            </span>
          </Link>
          {/* Decorative hearts matching the reference */}
          <span className="absolute -left-6 sm:-left-8 lg:-left-12 top-[35%] text-[#DE9BA9] text-xs sm:text-sm hidden sm:block">♥</span>
          <span className="absolute -right-6 sm:-right-8 lg:-right-12 top-[35%] text-[#DE9BA9] text-xs sm:text-sm hidden sm:block">♥</span>
        </div>

        {/* Right Column: Desktop Links/Buttons or Mobile Cart */}
        <div className="flex items-center justify-end z-10 shrink-0">
          {/* Desktop Links (Right) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10 overflow-visible">
            <Link
              href="#footer"
              className="font-sans font-extrabold text-bakery-chocolate tracking-[0.25em] text-[13px] lg:text-[15px] hover:text-[#DE9BA9] transition-colors hover-target whitespace-nowrap"
            >
              CONTACT
            </Link>
            <div className="flex items-center gap-4 lg:gap-6 ml-2">
              <Link href="/cart">
                <button className="relative text-bakery-chocolate hover:text-[#DE9BA9] transition-colors hover-target">
                  <ShoppingCart size={24} strokeWidth={1.5} />
                  <span className="absolute -top-2 -right-2 bg-bakery-chocolate text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {mounted ? totalItems : 0}
                  </span>
                </button>
              </Link>
              <Link href="/reservation">
                <button className="bg-[#DE9BA9] text-white px-5 py-2.5 lg:px-6 lg:py-2.5 rounded-full font-sans font-bold text-[11px] lg:text-[13px] uppercase tracking-widest shadow-md hover:bg-bakery-chocolate hover:-translate-y-0.5 transition-all hover-target whitespace-nowrap">
                  Reservation
                </button>
              </Link>
            </div>
          </nav>

          {/* Mobile Cart */}
          <div className="md:hidden flex items-center">
            <Link href="/cart">
              <button className="relative text-bakery-chocolate hover:text-[#DE9BA9] transition-colors p-1.5" aria-label="Cart">
                <ShoppingCart size={22} strokeWidth={1.5} />
                <span className="absolute -top-1 -right-1 bg-bakery-chocolate text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {mounted ? totalItems : 0}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-[116px] left-0 w-full bg-white shadow-xl flex flex-col items-center py-8 gap-6 md:hidden z-10 border-t border-bakery-pink/10"
        >
          {["HOME", "MENU", "CAKES", "CONTACT", "RESERVATION"].map((item) => (
            <Link
              key={item}
              href={item === "HOME" ? "/" : item === "CONTACT" ? "#footer" : `/${item.toLowerCase()}`}
              className="font-sans font-extrabold text-bakery-chocolate tracking-[0.25em] text-lg hover:text-[#DE9BA9] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}

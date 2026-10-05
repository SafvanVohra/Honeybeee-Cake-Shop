"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer id="footer" className="bg-white pt-16 pb-8 md:pt-32 md:pb-12 relative overflow-hidden border-t border-bakery-pink/20">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-bakery-pink/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Newsletter Section */}
        <div className="bg-bakery-bg rounded-[2rem] md:rounded-[3rem] p-6 sm:p-12 md:p-16 mb-16 md:mb-24 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 border border-bakery-pink/20">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="font-heading text-3xl md:text-5xl text-bakery-chocolate font-bold mb-4">
              Join Our Sweet Club
            </h3>
            <p className="font-sans text-base md:text-lg text-bakery-chocolate/70">
              Subscribe and receive 10% OFF your first custom cake order.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <form className="flex flex-col sm:flex-row w-full gap-4 sm:gap-0 sm:relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" 
                className="w-full bg-white border border-bakery-pink/30 rounded-full px-6 sm:px-8 py-4 sm:py-5 sm:pr-40 text-bakery-chocolate focus:outline-none focus:border-[#DE9BA9] transition-colors font-sans text-sm sm:text-base"
              />
              <button 
                type="submit" 
                className="w-full sm:w-auto sm:absolute sm:right-2 sm:top-2 sm:bottom-2 bg-[#DE9BA9] text-white py-4 sm:py-0 px-8 rounded-full font-sans font-bold uppercase tracking-widest shadow-md hover:bg-bakery-chocolate transition-colors hover-target text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 hover-target w-fit">
              <div className="w-12 h-12 rounded-full bg-[#DE9BA9] flex items-center justify-center text-white font-heading font-bold text-2xl shadow-md">
                H
              </div>
              <div>
                <span className="font-heading font-bold text-3xl tracking-wide text-bakery-chocolate block leading-none">
                  Honeybeee
                </span>
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-bakery-gold font-bold">
                  Cake Shop
                </span>
              </div>
            </Link>
            <p className="font-sans text-bakery-chocolate/70 leading-relaxed text-sm">
              Best Online Delivery Cake Shop in Vadodara. Handcrafted cakes, custom wedding & birthday designs, fresh pastries, and swift delivery right to your door.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-bakery-chocolate">
              <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">⭐ 4.5 Rating</span>
              <span className="text-bakery-chocolate/70">639+ Google Reviews</span>
            </div>
            <div className="flex gap-4 pt-2">
              <a href="https://wa.me/918511220077" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors hover-target shadow-sm" title="WhatsApp Us">
                💬
              </a>
              <a href="tel:08511220077" className="w-10 h-10 rounded-full bg-bakery-bg flex items-center justify-center text-bakery-chocolate hover:bg-[#DE9BA9] hover:text-white transition-colors hover-target shadow-sm" title="Call Us">
                📞
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=Honeybeee+Cake+Shop+Popular+Mansion+Warasiya+Vadodara" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-bakery-bg flex items-center justify-center text-bakery-chocolate hover:bg-[#DE9BA9] hover:text-white transition-colors hover-target shadow-sm" title="Directions">
                📍
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-sm tracking-[0.2em] uppercase text-bakery-chocolate font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="font-sans text-bakery-chocolate/70 hover:text-[#DE9BA9] transition-colors hover-target text-sm">Home</Link>
              </li>
              <li>
                <Link href="/menu" className="font-sans text-bakery-chocolate/70 hover:text-[#DE9BA9] transition-colors hover-target text-sm">Our Menu</Link>
              </li>
              <li>
                <Link href="/cakes" className="font-sans text-bakery-chocolate/70 hover:text-[#DE9BA9] transition-colors hover-target text-sm">Custom Cakes</Link>
              </li>
              <li>
                <Link href="/reservation" className="font-sans text-bakery-chocolate/70 hover:text-[#DE9BA9] transition-colors hover-target text-sm">Table & Consultation</Link>
              </li>
              <li>
                <Link href="/contact" className="font-sans text-bakery-chocolate/70 hover:text-[#DE9BA9] transition-colors hover-target text-sm">Contact & Directions</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-sm tracking-[0.2em] uppercase text-bakery-chocolate font-bold mb-8">Store Location</h4>
            <ul className="space-y-3 font-sans text-bakery-chocolate/70 text-sm">
              <li className="leading-snug">
                <strong>Address:</strong><br />
                Shop No 1, Popular Mansion, Road, near Hanuman Temple, Patel Park Society, Warasiya, Vadodara, Gujarat 390006
              </li>
              <li className="pt-2">
                <strong>Phone / Orders:</strong><br />
                <a href="tel:08511220077" className="text-[#DE9BA9] font-bold hover:underline">085112 20077</a>
              </li>
              <li>
                <strong>Email:</strong><br />
                <a href="mailto:honeybeeecakeshop@gmail.com" className="text-[#DE9BA9] font-bold hover:underline">honeybeeecakeshop@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-sans text-sm tracking-[0.2em] uppercase text-bakery-chocolate font-bold mb-8">Store & Delivery</h4>
            <ul className="space-y-4 font-sans text-bakery-chocolate/70 text-sm">
              <li className="flex justify-between border-b border-bakery-pink/20 pb-2">
                <span>Dine-in / Takeaway</span> 
                <span className="font-medium text-bakery-chocolate">Open · Closes 10 pm</span>
              </li>
              <li className="flex justify-between border-b border-bakery-pink/20 pb-2">
                <span>Online Delivery</span> 
                <span className="font-medium text-emerald-600 font-semibold">Ends 11 pm</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Monday - Sunday</span> 
                <span className="font-bold text-[#DE9BA9]">Open All 7 Days</span>
              </li>
            </ul>
            <div className="mt-4 pt-3 border-t border-bakery-pink/20 flex flex-col gap-2">
              <a 
                href="https://wa.me/918511220077?text=Hello%20Honeybeee%20Cake%20Shop%2C%20I%20would%20like%20to%20order%20a%20cake" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-center py-2 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-700 transition-colors shadow-sm"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-bakery-pink/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-sm text-bakery-chocolate/50">
            © {new Date().getFullYear()} Honeybeee Cake Shop. All rights reserved.
          </p>
          <div className="flex gap-8 font-sans text-sm text-bakery-chocolate/50">
            <Link href="#" className="hover:text-[#DE9BA9] hover-target transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#DE9BA9] hover-target transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

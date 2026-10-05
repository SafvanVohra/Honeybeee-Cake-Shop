"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center pt-36 sm:pt-40 md:pt-48 pb-20 md:pb-16 overflow-hidden bg-transparent">

      {/* Center Content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-2xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] text-bakery-chocolate leading-tight mb-4 drop-shadow-sm font-normal"
        >
          Honeybeee
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-subheading text-xl sm:text-2xl text-bakery-gold italic mb-3 font-medium"
        >
          Best Online Delivery Cake Shop in Vadodara
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans text-xs sm:text-sm text-bakery-chocolate/70 max-w-md mx-auto mb-10 leading-relaxed tracking-wide"
        >
          Freshly baked custom cakes, exquisite pastries, and delicious celebration treats handcrafted with love and delivered fresh to your door.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 w-full"
        >
          <Link href="/menu">
            <button className="bg-[#D88A96] text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-full font-sans font-bold tracking-widest uppercase hover:bg-bakery-chocolate transition-colors shadow-[0_8px_20px_rgba(216,138,150,0.4)] hover-target text-xs sm:text-sm active:scale-95">
              Order Online
            </button>
          </Link>
          <a href="tel:08511220077">
            <button className="bg-white text-bakery-chocolate border border-bakery-chocolate/20 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-sans font-bold tracking-wider hover:bg-bakery-chocolate hover:text-white transition-colors shadow-sm hover-target text-xs sm:text-sm flex items-center gap-2 active:scale-95">
              <span>📞</span> 085112 20077
            </button>
          </a>
          <a href="https://wa.me/918511220077?text=Hello%20Honeybeee%20Cake%20Shop%2C%20I%20would%20like%20to%20order%20a%20cake" target="_blank" rel="noopener noreferrer">
            <button className="bg-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-sans font-bold tracking-wider hover:bg-emerald-700 transition-colors shadow-sm hover-target text-xs sm:text-sm flex items-center gap-2 active:scale-95">
              <span>💬</span> WhatsApp
            </button>
          </a>
        </motion.div>
      </div>

      {/* Absolutely Positioned Imagery matching the Reference Layout */}

      {/* Desktop Only Floating Cakes (Strictly clipped) */}
      <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden">
        {/* 1. Far Left Large Cake */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute left-[-5%] lg:left-[5%] top-[30%] w-64 h-80 z-10"
        >
          <img 
            src="https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Tall Pink Drip Cake" 
            className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            style={{ clipPath: "inset(0 0 10% 0)" }}
          />
        </motion.div>

        {/* 2. Left Foreground Small Cake */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute left-[5%] lg:left-[15%] bottom-[5%] w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 z-30"
        >
          <img 
            src="https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Small Cake" 
            className="w-full h-full object-cover rounded-full drop-shadow-2xl border-[8px] border-white hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* 3. Right Large White Cake with Roses */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="absolute right-[-5%] lg:right-[5%] top-[25%] w-72 h-96 z-10"
        >
          <img 
            src="https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Layered Berry Cake" 
            className="w-full h-full object-cover drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            style={{ clipPath: "circle(45% at 50% 50%)" }}
          />
        </motion.div>

        {/* 4. Right Foreground Cupcakes */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="absolute right-[5%] lg:right-[15%] bottom-[10%] w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-40 z-30 flex gap-2"
        >
          <img src="https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Cupcake" className="w-1/3 h-full object-cover rounded-t-full drop-shadow-xl border-4 border-white" />
          <img src="https://images.pexels.com/photos/808923/pexels-photo-808923.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Cupcake" className="w-1/3 h-full object-cover rounded-t-full drop-shadow-xl border-4 border-white mt-4" />
          <img src="https://images.pexels.com/photos/2684556/pexels-photo-2684556.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Cupcake" className="w-1/3 h-full object-cover rounded-t-full drop-shadow-xl border-4 border-white" />
        </motion.div>
      </div>

    </section>
  );
}

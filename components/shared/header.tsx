"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Calendar, ShoppingBag } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-950 border-b border-rose-600/20 shadow-md">
      <div className="max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-full bg-rose-700 flex items-center justify-center text-white font-black text-xl tracking-tighter shadow-lg group-hover:bg-rose-600 transition-colors">
            C
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-zinc-100 tracking-tight leading-none group-hover:text-rose-400 transition-colors">
              Cafeteria
            </span>
            <span className="text-[10px] uppercase tracking-widest text-rose-400/90 font-medium">
              Fresh Food & Shared Spaces
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#menu"
            onClick={(e) => scrollToSection(e, "menu")}
            className="text-zinc-300 hover:text-rose-400 font-medium text-sm tracking-wide transition-colors"
          >
            Menu
          </a>
          <a
            href="#reserve"
            onClick={(e) => scrollToSection(e, "reserve")}
            className="text-zinc-300 hover:text-rose-400 font-medium text-sm tracking-wide transition-colors"
          >
            Reserve a Table
          </a>
          <a
            href="#boardroom"
            onClick={(e) => scrollToSection(e, "boardroom")}
            className="text-zinc-300 hover:text-rose-400 font-medium text-sm tracking-wide transition-colors"
          >
            Boardroom & Suites
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="text-zinc-300 hover:text-rose-400 font-medium text-sm tracking-wide transition-colors"
          >
            About
          </a>
        </nav>

        {/* Desktop Action Buttons & Mobile Toggle */}
        <div className="flex items-center space-x-3">
          <a
            href="#reserve"
            onClick={(e) => scrollToSection(e, "reserve")}
            className="hidden md:inline-flex items-center gap-2 bg-rose-700 hover:bg-rose-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 text-sm shadow-md hover:shadow-rose-600/20 active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            Book Now
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-rose-400 focus:outline-hidden rounded-lg"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7 text-rose-400" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-rose-600/20 px-4 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            <a
              href="#menu"
              onClick={(e) => scrollToSection(e, "menu")}
              className="text-zinc-300 hover:text-rose-400 font-medium py-2 border-b border-zinc-900 transition-colors"
            >
              Menu
            </a>
            <a
              href="#reserve"
              onClick={(e) => scrollToSection(e, "reserve")}
              className="text-zinc-300 hover:text-rose-400 font-medium py-2 border-b border-zinc-900 transition-colors"
            >
              Reserve a Table
            </a>
            <a
              href="#boardroom"
              onClick={(e) => scrollToSection(e, "boardroom")}
              className="text-zinc-300 hover:text-rose-400 font-medium py-2 border-b border-zinc-900 transition-colors"
            >
              Boardroom & Suites
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="text-zinc-300 hover:text-rose-400 font-medium py-2 border-b border-zinc-900 transition-colors"
            >
              About
            </a>
          </nav>

          {/* Mobile CTAs inside Navigation */}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#reserve"
              onClick={(e) => scrollToSection(e, "reserve")}
              className="w-full flex items-center justify-center gap-2 bg-rose-700 hover:bg-rose-600 text-white font-semibold px-5 py-3 rounded-lg transition-colors text-base shadow-md"
            >
              <Calendar className="w-5 h-5" />
              Book Now
            </a>
            <a
              href="#menu"
              onClick={(e) => scrollToSection(e, "menu")}
              className="w-full flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-850 text-rose-400 border border-rose-600/30 font-semibold px-5 py-3 rounded-lg transition-colors text-base"
            >
              <ShoppingBag className="w-5 h-5" />
              Order Online
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

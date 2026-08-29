"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";

export function Footer() {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-zinc-950 text-white border-t border-rose-600/20 pt-16 pb-12">
      <div className="max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-900">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-rose-700 flex items-center justify-center text-white font-black text-lg">
                C
              </div>
              <span className="text-xl font-bold tracking-tight text-zinc-100">
                Cafeteria
              </span>
            </Link>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Fresh everyday meals, flexible group seating, takeaway service,
              and boardroom suites for productive teams.
            </p>
            <div className="flex space-x-3 pt-2">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-rose-400 hover:border-rose-400/40 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-rose-400 hover:border-rose-400/40 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-rose-400 hover:border-rose-400/40 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-medium">
              <li>
                <a
                  href="#menu"
                  onClick={(e) => scrollToSection(e, "menu")}
                  className="hover:text-rose-400 transition-colors"
                >
                  Digital Menu
                </a>
              </li>
              <li>
                <a
                  href="#reserve"
                  onClick={(e) => scrollToSection(e, "reserve")}
                  className="hover:text-rose-400 transition-colors"
                >
                  Table Reservations
                </a>
              </li>
              <li>
                <a
                  href="#boardroom"
                  onClick={(e) => scrollToSection(e, "boardroom")}
                  className="hover:text-rose-400 transition-colors"
                >
                  Boardroom Suites
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, "about")}
                  className="hover:text-rose-400 transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-4">
              Location & Hours
            </h3>
            <ul className="space-y-3 text-xs text-zinc-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>Financial District Ave, Suite 400</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-400 shrink-0" />
                <span>hello@cafeteria.com</span>
              </li>
              <li className="pt-1 text-zinc-500">
                Mon - Sat: 7:00 AM - 10:00 PM
              </li>
            </ul>
          </div>

          {/* Quick CTA Card */}
          <div className="bg-zinc-900 border border-zinc-850 p-5 rounded-xl flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-sm text-zinc-100 mb-1">
                Planning a Meeting?
              </h4>
              <p className="text-xs text-zinc-400 mb-4">
                Book your boardroom or private dining area in advance.
              </p>
            </div>
            <a
              href="#reserve"
              onClick={(e) => scrollToSection(e, "reserve")}
              className="w-full flex items-center justify-center gap-2 bg-rose-700 hover:bg-rose-600 text-white font-bold px-4 py-2.5 rounded-lg text-xs transition-colors shadow-md"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Now
            </a>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Cafeteria. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-zinc-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-zinc-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

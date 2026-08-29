"use client";

import React from "react";
import { Utensils, Briefcase } from "lucide-react";

export function Hero() {
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
    <section className="relative bg-zinc-950 text-white min-h-[620px] flex items-center py-24 overflow-hidden border-b border-rose-600/10">
      {/* Background Image with Dark Vignette Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/40 z-0" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-600/10 border border-rose-400/30 text-rose-400 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            Fresh Meals, Flexible Seating & Workspaces
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 leading-tight">
            Your Everyday Cafeteria,
            <span className="block text-rose-400">Made Better.</span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed">
            Enjoy fresh breakfast, lunch, quick bites, and flexible group
            seating, with private meeting spaces available when work calls.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#reserve"
              onClick={(e) => scrollToSection(e, "reserve")}
              className="bg-rose-700 hover:bg-rose-600 text-white font-bold px-7 py-3.5 rounded-lg text-center transition-all duration-200 shadow-lg hover:shadow-rose-600/20 text-base flex items-center justify-center gap-2"
            >
              <Utensils className="w-5 h-5" />
              Reserve a Table
            </a>
            <a
              href="#boardroom"
              onClick={(e) => scrollToSection(e, "boardroom")}
              className="bg-zinc-900/80 hover:bg-zinc-800 text-rose-400 border border-rose-400/40 font-semibold px-7 py-3.5 rounded-lg text-center transition-colors text-base flex items-center justify-center gap-2"
            >
              <Briefcase className="w-5 h-5" />
              Book a Room
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { Coffee, Sparkles, ShieldCheck } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-20 bg-zinc-950 text-white border-b border-rose-600/10"
    >
      <div className="max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="relative h-[420px] rounded-2xl overflow-hidden border border-rose-600/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
                alt="Café Ambience"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-zinc-900 border border-rose-400/30 p-4 rounded-xl shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-rose-400/10 border border-rose-400/40 flex items-center justify-center text-rose-400">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-100">
                  Artisanal Roasts
                </p>
                <p className="text-xs text-rose-400/90 font-medium">
                  Single-Origin Arabica
                </p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-600/10 border border-rose-400/30 text-rose-400 text-xs font-semibold tracking-wider uppercase">
              The Atmosphere
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
              Where Executive Polish Meets{" "}
              <span className="text-rose-400">Warm Hospitality</span>.
            </h2>

            <p className="text-zinc-300 leading-relaxed text-base sm:text-lg">
              Designed for effortless transitions between early morning espresso
              meetings, midday executive lunches, and quiet evening dining.
              Every corner blends refined acoustic design, warm ambient
              lighting, and rich culinary craft.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-850 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-zinc-100 text-sm">
                    Refined Dining
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Chef-curated bistro classics & fresh local fare.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-850 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-zinc-100 text-sm">
                    Business Ready
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    High-speed WiFi & private soundproof suites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

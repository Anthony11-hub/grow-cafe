"use client";

import React from "react";
import { Monitor, Wifi, Coffee, Users, Shield, ArrowRight } from "lucide-react";

export function Boardroom() {
  return (
    <section
      id="boardroom"
      className="py-24 bg-zinc-900 text-white border-b border-amber-500/10 relative overflow-hidden"
    >
      {/* Glow highlight effect behind section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3">
            Corporate & Executive Spaces
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100">
            Private Boardrooms &{" "}
            <span className="text-amber-400">Meeting Suites</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg mt-4 leading-relaxed">
            Elevate your pitch, board meeting, or team strategy session. Fully
            soundproofed rooms equipped with high-grade AV setup and full cafe
            catering service directly to your table.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Visual showcase (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border border-amber-400/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80"
                alt="Executive Boardroom Suite"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div>
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                    Suite A — Executive Suite
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Capacity: Up to 16 People
                  </h3>
                </div>
                <span className="bg-zinc-950/90 text-amber-400 border border-amber-400/40 px-3.5 py-1.5 rounded-lg text-sm font-bold">
                  From $45/hr
                </span>
              </div>
            </div>
          </div>

          {/* Specs & Features (5 Cols) */}
          <div className="lg:col-span-5 bg-zinc-950 border border-zinc-800 p-8 rounded-2xl space-y-6">
            <h3 className="text-xl font-bold text-zinc-100 border-b border-zinc-800 pb-4">
              Included Amenities & Equipment
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Monitor className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-200">
                    4K Display & Video Conferencing
                  </h4>
                  <p className="text-xs text-zinc-400">
                    75&rsquo; 4K Smart TV with high-res camera & room mic array.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Wifi className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-200">
                    Dedicated Fiber WiFi
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Isolated 1Gbps network for video streams & file transfers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-200">
                    Executive Catering Add-ons
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Unlimited pour-over coffee, tea, pastries, and lunch
                    options.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-200">
                    Soundproof Isolation
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Double-glazed acoustic walls for complete discretion.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#reserve"
              className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold px-5 py-3.5 rounded-lg transition-colors text-sm shadow-md"
            >
              Book Boardroom Space
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

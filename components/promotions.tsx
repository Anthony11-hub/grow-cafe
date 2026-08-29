"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export function Promotions() {
  return (
    <section className="bg-gradient-to-r from-rose-900 via-rose-700 to-rose-900 text-white py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-(--breakpoint-xl) mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-zinc-950/10 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4 text-rose-200" />
          </div>
          <div>
            <span className="font-bold text-sm tracking-tight block sm:inline">
              Executive Happy Hour:
            </span>{" "}
            <span className="text-sm font-medium">
              30% off all Boardroom Suite bookings made for Fridays after 4 PM.
            </span>
          </div>
        </div>

        <a
          href="#boardroom"
          className="bg-zinc-950 hover:bg-zinc-900 text-rose-400 font-bold px-4 py-2 rounded-lg text-xs tracking-wider uppercase flex items-center gap-1.5 transition-colors shrink-0 shadow-md"
        >
          Claim Offer
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}

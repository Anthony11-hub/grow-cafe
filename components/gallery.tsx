"use client";

import React from "react";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    title: "Fresh Daily Selection",
    tag: "Daily Menu",
  },
  {
    url: "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80",
    title: "Ready-to-Serve Favorites",
    tag: "Serving Counter",
  },
  {
    url: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80",
    title: "Balanced Bowls & Mains",
    tag: "Fresh Meals",
  },
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    title: "Flexible Group Seating",
    tag: "Dining Space",
  },
];

export function Gallery() {
  return (
    <section className="py-20 bg-zinc-950 text-white border-b border-rose-600/10">
      <div className="max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-600/10 border border-rose-400/30 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3">
            Visual Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
            Inside the <span className="text-rose-400">Cafeteria</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="group relative h-72 rounded-xl overflow-hidden border border-zinc-800 hover:border-rose-400/50 transition-all duration-300 shadow-xl"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest bg-zinc-950/80 px-2 py-0.5 rounded border border-rose-400/30 inline-block mb-1">
                  {img.tag}
                </span>
                <h3 className="text-base font-bold text-zinc-100">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

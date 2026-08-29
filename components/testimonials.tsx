"use client";

import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Alex Kibet",
    role: "Managing Partner, Apex Ventures",
    text: "The boardroom suite worked perfectly for our Q3 meeting, and ordering lunch from the cafeteria kept the whole day running smoothly.",
    rating: 5,
  },
  {
    name: "Sarah Wanjiku",
    role: "Senior Product Designer",
    text: "My favorite place for hybrid work days. There is plenty of seating, the lunch selection changes regularly, and grabbing a quick meal is easy.",
    rating: 5,
  },
  {
    name: "David Ochieng",
    role: "Founder, TechBridge",
    text: "Reserving a group table takes seconds. It is now our go-to place for team lunches because everyone can find something they enjoy.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="py-20 bg-zinc-900 text-white border-b border-rose-600/10"
    >
      <div className="max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-600/10 border border-rose-400/30 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3">
            Guest Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
            Trusted by{" "}
            <span className="text-rose-400">Teams & Everyday Diners</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-zinc-950 border border-zinc-800 hover:border-rose-400/30 p-6 rounded-2xl flex flex-col justify-between transition-all"
            >
              <div className="space-y-4">
                <div className="flex gap-1 text-rose-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-rose-400" />
                  ))}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed italic">
                  &quot;{rev.text}&quot;
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-900 mt-6">
                <h3 className="font-bold text-zinc-100 text-sm">{rev.name}</h3>
                <p className="text-xs text-rose-400/80 font-medium">
                  {rev.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

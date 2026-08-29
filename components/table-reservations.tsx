"use client";

import React, { useState } from "react";
import { Calendar, Users, Clock, CheckCircle2 } from "lucide-react";

export function TableReservations() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="reserve"
      className="py-20 bg-zinc-950 text-white border-b border-rose-600/10"
    >
      <div className="max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-600/10 border border-rose-400/30 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3">
              Instant Booking
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
              Reserve Your <span className="text-rose-400">Table</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2">
              For dining, casual catchups, or light meetings. Confirmation is
              instant.
            </p>
          </div>

          <div className="bg-zinc-900 border border-rose-600/20 rounded-2xl p-6 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-rose-400/10 border border-rose-400/40 text-rose-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-100">
                  Reservation Requested
                </h3>
                <p className="text-zinc-400 text-sm max-w-md mx-auto">
                  We&rsquo;ve received your request! A confirmation email and
                  SMS with your table details will be sent shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-zinc-800 hover:bg-zinc-700 text-rose-400 px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                >
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Guests */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-rose-400" /> Party
                      Size
                    </label>
                    <select
                      required
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3.5 py-3 text-zinc-100 focus:outline-none focus:border-rose-400 text-sm"
                    >
                      <option value="2">2 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="8+">8+ Guests</option>
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-rose-400" /> Date
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3.5 py-3 text-zinc-100 focus:outline-none focus:border-rose-400 text-sm"
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-rose-400" /> Time
                    </label>
                    <select
                      required
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3.5 py-3 text-zinc-100 focus:outline-none focus:border-rose-400 text-sm"
                    >
                      <option value="08:00">08:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="18:30">06:30 PM</option>
                      <option value="20:00">08:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3.5 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-rose-400 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+254 700 000 000"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3.5 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-rose-400 text-sm"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-rose-700 hover:bg-rose-600 text-white font-bold py-3.5 rounded-lg text-base transition-colors shadow-lg shadow-rose-700/20"
                >
                  Confirm Table Booking
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { ArrowRight, ShoppingBag, Utensils, Coffee, Wine } from "lucide-react";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: "coffee" | "mains" | "desserts";
  popular?: boolean;
}

const menuItems: MenuItem[] = [
  {
    name: "Smoked Espresso Tonic",
    description:
      "Double shot single-origin espresso, artisanal tonic, orange peel, rosemary smoke infusion.",
    price: "$7.50",
    category: "coffee",
    popular: true,
  },
  {
    name: "Salted Caramel Velvet Latte",
    description:
      "Micro-foamed oat milk, house-made caramel drizzle, pink Himalayan salt.",
    price: "$6.50",
    category: "coffee",
  },
  {
    name: "Truffle Ribeye Sliders",
    description:
      "Aged beef patties, black truffle aioli, caramelized onions, brioche bun.",
    price: "$19.00",
    category: "mains",
    popular: true,
  },
  {
    name: "Pan-Seared Salmon Bowl",
    description:
      "Wild salmon, quinoa, avocado, pickled radish, roasted sesame dressing.",
    price: "$22.00",
    category: "mains",
  },
  {
    name: "Dark Chocolate Fondant",
    description:
      "70% Valrhona dark chocolate molten center, vanilla bean gelato.",
    price: "$11.00",
    category: "desserts",
    popular: true,
  },
  {
    name: "Bourbon Vanilla Cheesecake",
    description:
      "New York style cheesecake, smoked bourbon glaze, fresh berry compote.",
    price: "$10.00",
    category: "desserts",
  },
];

export function MenuPreview() {
  const [activeTab, setActiveTab] = useState<"coffee" | "mains" | "desserts">(
    "coffee",
  );

  const filteredItems = menuItems.filter((item) => item.category === activeTab);

  return (
    <section
      id="menu"
      className="py-20 bg-zinc-900 text-white border-b border-amber-500/10"
    >
      <div className="max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3">
              Curated Menu
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
              Crafted Flavors &{" "}
              <span className="text-amber-400">Signature Beverages</span>
            </h2>
          </div>

          <a
            href="#order-flow"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm shrink-0 self-start md:self-auto"
          >
            <ShoppingBag className="w-4 h-4" />
            Full Order Menu
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Category Tabs */}
        <div className="flex space-x-2 border-b border-zinc-800 pb-4 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab("coffee")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
              activeTab === "coffee"
                ? "bg-amber-400 text-zinc-950 shadow-md font-semibold"
                : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
            }`}
          >
            <Coffee className="w-4 h-4" />
            Coffee & Barista
          </button>

          <button
            onClick={() => setActiveTab("mains")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
              activeTab === "mains"
                ? "bg-amber-400 text-zinc-950 shadow-md font-semibold"
                : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
            }`}
          >
            <Utensils className="w-4 h-4" />
            Bistro Mains
          </button>

          <button
            onClick={() => setActiveTab("desserts")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
              activeTab === "desserts"
                ? "bg-amber-400 text-zinc-950 shadow-md font-semibold"
                : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
            }`}
          >
            <Wine className="w-4 h-4" />
            Desserts & Wine
          </button>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-amber-400/40 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-bold text-zinc-100 text-lg group-hover:text-amber-400 transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-bold text-amber-400 text-lg shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {item.popular && (
                <div className="pt-2">
                  <span className="inline-block text-[11px] font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20 uppercase tracking-wide">
                    Chef&rsquo;s Favorite
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

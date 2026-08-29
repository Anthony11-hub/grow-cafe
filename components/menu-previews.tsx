"use client";

import React, { useState } from "react";
import { ArrowRight, ShoppingBag, Utensils, Sunrise, Soup } from "lucide-react";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: "breakfast" | "hot-meals" | "grab-and-go";
  popular?: boolean;
}

const menuItems: MenuItem[] = [
  {
    name: "Full Breakfast Plate",
    description:
      "Eggs, breakfast potatoes, grilled tomato, seasonal fruit, and your choice of toast.",
    price: "$8.50",
    category: "breakfast",
    popular: true,
  },
  {
    name: "Fruit & Granola Bowl",
    description:
      "Greek yogurt, house granola, banana, berries, toasted seeds, and honey.",
    price: "$6.00",
    category: "breakfast",
  },
  {
    name: "Grilled Chicken Lunch Plate",
    description:
      "Herb-grilled chicken, seasoned rice, market vegetables, and house sauce.",
    price: "$12.00",
    category: "hot-meals",
    popular: true,
  },
  {
    name: "Vegetable Curry Bowl",
    description:
      "Slow-cooked seasonal vegetables, fragrant rice, fresh herbs, and flatbread.",
    price: "$10.00",
    category: "hot-meals",
  },
  {
    name: "Chicken Salad Wrap",
    description:
      "Grilled chicken, crisp greens, tomato, cucumber, and herb dressing in a soft wrap.",
    price: "$8.00",
    category: "grab-and-go",
    popular: true,
  },
  {
    name: "Fresh Snack Box",
    description:
      "Seasonal fruit, cheese, crackers, hummus, and crunchy vegetables packed to go.",
    price: "$7.00",
    category: "grab-and-go",
  },
];

export function MenuPreview() {
  const [activeTab, setActiveTab] = useState<
    "breakfast" | "hot-meals" | "grab-and-go"
  >(
    "breakfast",
  );

  const filteredItems = menuItems.filter((item) => item.category === activeTab);

  return (
    <section
      id="menu"
      className="py-20 bg-zinc-900 text-white border-b border-rose-600/10"
    >
      <div className="max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-600/10 border border-rose-400/30 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3">
              Today&rsquo;s Selection
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
              Fresh Choices for{" "}
              <span className="text-rose-400">Every Part of the Day</span>
            </h2>
          </div>

          <a
            href="#order-flow"
            className="inline-flex items-center gap-2 bg-rose-700 hover:bg-rose-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm shrink-0 self-start md:self-auto"
          >
            <ShoppingBag className="w-4 h-4" />
            View Full Menu
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Category Tabs */}
        <div className="flex space-x-2 border-b border-zinc-800 pb-4 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab("breakfast")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
              activeTab === "breakfast"
                ? "bg-rose-700 text-white shadow-md font-semibold"
                : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
            }`}
          >
            <Sunrise className="w-4 h-4" />
            Breakfast
          </button>

          <button
            onClick={() => setActiveTab("hot-meals")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
              activeTab === "hot-meals"
                ? "bg-rose-700 text-white shadow-md font-semibold"
                : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
            }`}
          >
            <Utensils className="w-4 h-4" />
            Hot Meals
          </button>

          <button
            onClick={() => setActiveTab("grab-and-go")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
              activeTab === "grab-and-go"
                ? "bg-rose-700 text-white shadow-md font-semibold"
                : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
            }`}
          >
            <Soup className="w-4 h-4" />
            Grab & Go
          </button>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-rose-400/40 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-bold text-zinc-100 text-lg group-hover:text-rose-400 transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-bold text-rose-400 text-lg shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {item.popular && (
                <div className="pt-2">
                  <span className="inline-block text-[11px] font-semibold text-rose-400 bg-rose-400/10 px-2.5 py-0.5 rounded border border-rose-400/20 uppercase tracking-wide">
                    Cafeteria Favorite
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

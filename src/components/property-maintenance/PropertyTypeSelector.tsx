"use client";

import { useState } from "react";

const types = [
  { id: "villa", label: "Villa", body: "Larger property footprint, multiple rooms, outdoor/utility areas and more household systems." },
  { id: "apartment", label: "Apartment", body: "Compact spaces, shared-building considerations and interior fixtures." },
  { id: "rental", label: "Rental Property", body: "Practical repairs, wear-and-tear issues and keeping the property usable." },
  { id: "occupied", label: "Occupied Home", body: "Maintenance while people are actively living in the property." },
];

export default function PropertyTypeSelector() {
  const [activeId, setActiveId] = useState(types[0].id);
  const active = types.find((t) => t.id === activeId)!;

  return (
    <section className="border-y border-ink-900/10 bg-[#eef1e6] py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-lime-800">Property type</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Different properties have different maintenance needs.
          </h2>
        </div>

        <div role="tablist" aria-label="Property type" className="mt-10 flex flex-wrap gap-2">
          {types.map((t) => {
            const isActive = t.id === activeId;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(t.id)}
                className={`focus-ring rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                  isActive ? "border-lime-800 bg-lime-800 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-700 hover:border-ink-900/35"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div key={active.id} className="mt-6 max-w-xl animate-fadeUp rounded-2xl border border-ink-900/10 bg-sand-50 p-6">
          <h3 className="font-serif text-lg text-ink-950">{active.label}</h3>
          <p className="mt-2 text-ink-700">{active.body}</p>
        </div>
      </div>
    </section>
  );
}

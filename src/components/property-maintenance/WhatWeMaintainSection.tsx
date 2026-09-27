"use client";

import { useState } from "react";
import { propertySystems } from "@/lib/property-systems";

const labelOverrides: Record<string, string> = {
  water: "Plumbing",
  exterior: "General Property Repairs",
};

export default function WhatWeMaintainSection() {
  const [activeId, setActiveId] = useState(propertySystems[0].id);
  const active = propertySystems.find((s) => s.id === activeId)!;

  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-lime-800">What we maintain</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Property maintenance, by area.
          </h2>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-[220px_1fr]">
          <div
            role="tablist"
            aria-label="Maintenance areas"
            aria-orientation="vertical"
            className="flex gap-2 overflow-x-auto pb-2 sm:flex-col sm:border-l sm:border-ink-900/15 sm:overflow-visible sm:pb-0"
          >
            {propertySystems.map((system) => {
              const isActive = system.id === activeId;
              const label = labelOverrides[system.id] ?? system.label;
              return (
                <button
                  key={system.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(system.id)}
                  className={`focus-ring flex-none rounded-full px-4 py-2 text-left text-sm font-medium transition-colors sm:flex-auto sm:rounded-none sm:border-l-2 sm:py-2.5 sm:pl-5 ${
                    isActive
                      ? "bg-lime-800 text-sand-50 sm:-ml-px sm:border-lime-800 sm:bg-transparent sm:text-lime-900"
                      : "bg-sand-50 text-ink-700 sm:border-transparent sm:bg-transparent sm:text-ink-600 sm:hover:text-ink-950"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <div key={active.id} className="animate-fadeUp">
            <h3 className="font-serif text-xl text-ink-950">
              {labelOverrides[active.id] ?? active.label}
            </h3>
            <p className="mt-3 max-w-xl leading-relaxed text-ink-700">{active.description}</p>
            <a
              href={active.href}
              className="focus-ring mt-4 inline-block text-sm font-medium text-lime-800 underline underline-offset-4 hover:text-lime-900"
            >
              {active.ctaLabel} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

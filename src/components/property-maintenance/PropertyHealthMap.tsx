"use client";

import { useState } from "react";
import { propertySystems } from "@/lib/property-systems";

export default function PropertyHealthMap() {
  const [activeId, setActiveId] = useState(propertySystems[0].id);
  const active = propertySystems.find((s) => s.id === activeId)!;

  return (
    <section id="property-health-map" className="border-y border-ink-900/10 bg-[#eef1e6] py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-lime-800">Start here</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            How is the property doing?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            A property is a connected system. Pick an area to see what&rsquo;s
            worth keeping an eye on — this is a guide, not an inspection.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Property areas"
          className="mt-10 flex flex-wrap gap-2"
        >
          {propertySystems.map((system) => {
            const isActive = system.id === activeId;
            return (
              <button
                key={system.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(system.id)}
                className={`focus-ring rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-lime-800 bg-lime-800 text-sand-50"
                    : "border-ink-900/15 bg-sand-50 text-ink-700 hover:border-ink-900/35"
                }`}
              >
                {system.label}
              </button>
            );
          })}
        </div>

        <div key={active.id} className="mt-6 animate-fadeUp rounded-2xl border border-ink-900/10 bg-sand-50 p-7 sm:p-9">
          <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <h3 className="font-serif text-lg text-ink-950">{active.label}</h3>
              <p className="mt-2 text-sm font-semibold text-ink-500">What to keep an eye on</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {active.watchFor.map((w) => (
                  <li key={w} className="rounded-full bg-[#eef1e6] px-3.5 py-1.5 text-xs text-ink-700">
                    {w}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={active.href}
              className="focus-ring inline-flex items-center justify-center rounded-full bg-ink-950 px-5 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
            >
              {active.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

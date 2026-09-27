"use client";

import { useState } from "react";
import { propertySystems } from "@/lib/property-systems";

export default function PropertySystemsDiagram() {
  const [hoverId, setHoverId] = useState<string | null>(null);
  const active = propertySystems.find((s) => s.id === hoverId) ?? null;

  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-lime-800">Architectural view</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            A property is a collection of systems.
          </h2>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <span className="rounded-full border border-ink-900/20 bg-sand-50 px-6 py-2.5 font-serif text-sm text-ink-950">
            PROPERTY
          </span>
          <span aria-hidden="true" className="mt-2 h-8 w-px bg-ink-900/15" />

          <div className="grid w-full grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
            {propertySystems.map((system) => {
              const isActive = system.id === hoverId;
              return (
                <div key={system.id} className="flex flex-col items-center text-center">
                  <span aria-hidden="true" className="h-6 w-px bg-ink-900/15" />
                  <a
                    href={system.href}
                    onMouseEnter={() => setHoverId(system.id)}
                    onFocus={() => setHoverId(system.id)}
                    onMouseLeave={() => setHoverId((id) => (id === system.id ? null : id))}
                    onBlur={() => setHoverId((id) => (id === system.id ? null : id))}
                    className={`focus-ring mt-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "border-lime-800 bg-lime-800/10 text-lime-900"
                        : "border-ink-900/15 bg-sand-50 text-ink-700 hover:border-ink-900/35"
                    }`}
                  >
                    {system.label}
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 min-h-[3rem] text-center">
          {active ? (
            <p className="text-sm text-ink-600">
              {active.label} connects to{" "}
              <a href={active.href} className="font-medium text-lime-800 underline underline-offset-4 hover:text-lime-900">
                {active.ctaLabel}
              </a>
              .
            </p>
          ) : (
            <p className="text-sm text-ink-400">Hover or focus a system to see where it connects.</p>
          )}
        </div>
      </div>
    </section>
  );
}

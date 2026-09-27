"use client";

import { useMemo, useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";

const propertyTypes = ["Villa", "Apartment", "Rental property", "Other"];
const areas = ["AC", "Plumbing", "Electrical", "Bathroom", "Kitchen", "Walls", "Doors / hardware", "General repairs", "Not sure"];
const conditions = ["Something is not working", "Something has changed", "Something looks damaged", "Something needs routine attention", "Several things need attention", "Not sure"];
const contactMethods = ["WhatsApp", "Phone"];

export default function MaintenanceRequestBuilder() {
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState("");
  const [selectedAreas, setSelectedAreas] = useState<Set<string>>(new Set());
  const [condition, setCondition] = useState("");
  const [notes, setNotes] = useState("");
  const [contact, setContact] = useState("WhatsApp");

  const toggleArea = (area: string) => {
    setSelectedAreas((prev) => {
      const next = new Set(prev);
      if (next.has(area)) next.delete(area);
      else next.add(area);
      return next;
    });
  };

  const canAdvance = (s: number) => {
    if (s === 1) return Boolean(propertyType);
    if (s === 2) return selectedAreas.size > 0;
    if (s === 3) return Boolean(condition);
    return true;
  };

  const message = useMemo(() => {
    const lines = [
      "Hi, I'd like to request property maintenance.",
      `Property: ${propertyType || "______"}`,
      `Areas: ${selectedAreas.size > 0 ? Array.from(selectedAreas).join(", ") : "______"}`,
      `Condition: ${condition || "______"}`,
    ];
    if (notes.trim()) lines.push(`Notes: ${notes.trim()}`);
    lines.push(`Preferred contact: ${contact}`);
    return lines.join("\n");
  }, [propertyType, selectedAreas, condition, notes, contact]);

  const steps = [
    { n: 1, label: "Property" },
    { n: 2, label: "Areas" },
    { n: 3, label: "Condition" },
    { n: 4, label: "Photos" },
    { n: 5, label: "Contact" },
  ];

  return (
    <section id="request-service" className="bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-500">
            Request maintenance
          </p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            Tell us about the property.
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-sand-100/15 bg-ink-900 p-6 sm:p-8">
          <div className="flex items-center gap-1.5">
            {steps.map((s) => (
              <div key={s.n} className="flex flex-1 items-center gap-1.5">
                <span
                  className={`flex h-7 w-7 flex-none items-center justify-center rounded-full text-xs font-semibold ${
                    step >= s.n ? "bg-lime-700 text-sand-50" : "bg-ink-800 text-ink-400"
                  }`}
                >
                  {s.n}
                </span>
                <span className={`hidden text-xs sm:inline ${step >= s.n ? "text-sand-100" : "text-ink-500"}`}>{s.label}</span>
                {s.n < steps.length && <span aria-hidden="true" className="h-px flex-1 bg-sand-100/10" />}
              </div>
            ))}
          </div>

          <div className="mt-7">
            {step === 1 && (
              <div>
                <p className="text-sm font-semibold text-sand-50">Choose the property type</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {propertyTypes.map((p) => (
                    <button
                      key={p}
                      onClick={() => setPropertyType(p)}
                      aria-pressed={propertyType === p}
                      className={`focus-ring rounded-full border px-4 py-2 text-sm transition-colors ${
                        propertyType === p ? "border-lime-600 bg-lime-600/15 text-lime-200" : "border-sand-100/15 text-ink-300 hover:border-sand-100/35"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <p className="text-sm font-semibold text-sand-50">What needs attention? Select one or more.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {areas.map((a) => {
                    const isSelected = selectedAreas.has(a);
                    return (
                      <button
                        key={a}
                        onClick={() => toggleArea(a)}
                        aria-pressed={isSelected}
                        className={`focus-ring rounded-full border px-4 py-2 text-sm transition-colors ${
                          isSelected ? "border-lime-600 bg-lime-600/15 text-lime-200" : "border-sand-100/15 text-ink-300 hover:border-sand-100/35"
                        }`}
                      >
                        {a}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <p className="text-sm font-semibold text-sand-50">What&apos;s the condition?</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {conditions.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCondition(c)}
                      aria-pressed={condition === c}
                      className={`focus-ring rounded-full border px-4 py-2 text-sm transition-colors ${
                        condition === c ? "border-lime-600 bg-lime-600/15 text-lime-200" : "border-sand-100/15 text-ink-300 hover:border-sand-100/35"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <p className="text-sm font-semibold text-sand-50">Photos</p>
                <p className="mt-1 text-sm text-ink-400">
                  Photos and an optional short video attach directly in
                  WhatsApp — add any extra notes here if useful.
                </p>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  placeholder="Optional notes"
                  className="focus-ring mt-3 w-full rounded-lg border border-sand-100/15 bg-ink-950 px-3.5 py-2.5 text-sm text-sand-50 placeholder:text-ink-500"
                />
              </div>
            )}

            {step === 5 && (
              <div>
                <p className="text-sm font-semibold text-sand-50">How should we contact you?</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {contactMethods.map((c) => (
                    <button
                      key={c}
                      onClick={() => setContact(c)}
                      aria-pressed={contact === c}
                      className={`focus-ring rounded-full border px-4 py-2 text-sm transition-colors ${
                        contact === c ? "border-lime-600 bg-lime-600/15 text-lime-200" : "border-sand-100/15 text-ink-300 hover:border-sand-100/35"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-7 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              disabled={step === 1}
              className="focus-ring rounded-full border border-sand-100/15 px-5 py-2.5 text-sm font-medium text-ink-300 transition-colors hover:bg-sand-100/5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Back
            </button>

            {step < 5 ? (
              <button
                type="button"
                onClick={() => canAdvance(step) && setStep((s) => Math.min(5, s + 1))}
                disabled={!canAdvance(step)}
                className="focus-ring rounded-full bg-sand-50 px-6 py-2.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            ) : (
              <a
                href={buildWhatsAppLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-full bg-rust-600 px-6 py-2.5 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
              >
                Continue on WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

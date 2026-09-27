"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What does property maintenance include?",
    a: "Routine attention across a property's systems and surfaces — AC, plumbing, electrical, bathrooms, kitchens, walls and doors — rather than a single repair.",
  },
  {
    q: "How is property maintenance different from a repair?",
    a: "A repair addresses something that has already gone wrong. Maintenance looks at the property's overall condition and what might need attention before it becomes an urgent repair.",
  },
  {
    q: "Can I request maintenance for several areas of one property?",
    a: "Yes — the maintenance request builder on this page lets you select multiple areas and send them together.",
  },
  {
    q: "Can I send photos before requesting maintenance?",
    a: "Yes. A photo of the area, plus a closer look at the specific spot, helps explain the situation on WhatsApp.",
  },
  {
    q: "Do you maintain villas and apartments?",
    a: "Yes, along with rental properties and occupied homes — each has its own layout and access considerations.",
  },
  {
    q: "Can landlords request maintenance for rental properties?",
    a: "Yes. Landlords and property managers can send a combined list of concerns across a property rather than handling each one separately.",
  },
  {
    q: "How often should a property be checked?",
    a: "There isn't a universal schedule — the right frequency depends on the property, its systems, occupancy and actual maintenance needs.",
  },
  {
    q: "What if I don't know which service I need?",
    a: "That's fine — describe what you've noticed using the property health map or condition check above, or send a photo. We'll help point you to the right next step.",
  },
  {
    q: "Do you handle major renovations or construction?",
    a: "No. This page covers routine property maintenance and practical repair work, not new construction, structural work or full renovation.",
  },
  {
    q: "What happens if an issue requires a specialist service?",
    a: "We'll route it to the relevant page — AC, plumbing, electrical, waterproofing, painting, carpentry, or bathroom & kitchen repair — based on what you describe.",
  },
];

export default function PropertyMaintenanceFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section className="border-t border-ink-900/10 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-lime-800">Questions</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Frequently asked questions.
          </h2>
        </div>

        <div className="mt-10 divide-y divide-ink-900/10 border-y border-ink-900/10">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`property-faq-answer-${i}`}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="focus-ring flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-[15px] font-medium text-ink-900 sm:text-base">
                      {faq.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-6 w-6 flex-none items-center justify-center rounded-full border border-ink-900/20 text-ink-700 transition-transform ${
                        open ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`property-faq-answer-${i}`}
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="pb-5 text-[15px] leading-relaxed text-ink-600">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}

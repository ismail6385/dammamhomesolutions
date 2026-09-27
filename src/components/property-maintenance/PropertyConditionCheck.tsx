"use client";

import { useMemo, useState } from "react";
import { propertySystems } from "@/lib/property-systems";
import { buildWhatsAppLink } from "@/lib/site-config";

type Answer = "yes" | "no" | "not-sure";

const checkIds = ["cooling", "water", "electrical", "doors", "surfaces"];
const checkSystems = checkIds
  .map((id) => propertySystems.find((s) => s.id === id))
  .filter((s): s is (typeof propertySystems)[number] => Boolean(s));

export default function PropertyConditionCheck() {
  const [answers, setAnswers] = useState<Record<string, Answer>>({});

  const setAnswer = (id: string, answer: Answer) => {
    setAnswers((prev) => ({ ...prev, [id]: answer }));
  };

  const mentioned = useMemo(
    () => checkSystems.filter((s) => answers[s.id] === "yes"),
    [answers]
  );

  const message = useMemo(() => {
    const base = "Hello Dammam Home Solutions, here are some property details:";
    if (mentioned.length === 0) return `${base} (select what applies above)`;
    return `${base}\nAreas I've noticed something in: ${mentioned.map((m) => m.label).join(", ")}.`;
  }, [mentioned]);

  return (
    <section className="border-y border-ink-900/10 bg-[#eef1e6] py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-lime-800">A quick self-check</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What have you noticed lately?
          </h2>
          <p className="mt-4 text-ink-700">
            Not a diagnosis — just a way to gather useful details before
            you reach out.
          </p>
        </div>

        <div className="mt-10 divide-y divide-ink-900/15 border-y border-ink-900/15">
          {checkSystems.map((system) => (
            <div key={system.id} className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-ink-500">{system.label}</p>
                <p className="text-[15px] text-ink-900">{system.question}</p>
              </div>
              <div className="flex gap-2">
                {(["yes", "no", "not-sure"] as Answer[]).map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setAnswer(system.id, opt)}
                    aria-pressed={answers[system.id] === opt}
                    className={`focus-ring rounded-full border px-4 py-2 text-xs font-medium capitalize transition-colors ${
                      answers[system.id] === opt
                        ? "border-lime-800 bg-lime-800 text-sand-50"
                        : "border-ink-900/15 bg-sand-50 text-ink-700 hover:border-ink-900/35"
                    }`}
                  >
                    {opt === "not-sure" ? "Not sure" : opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-ink-900/10 bg-sand-50 p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-500">
            Your maintenance request
          </p>
          <p className="mt-2 text-sm text-ink-800">
            {mentioned.length > 0
              ? `Areas you mentioned: ${mentioned.map((m) => m.label).join(", ")}.`
              : "Areas you mentioned will appear here as you answer."}
          </p>
          <p className="mt-2 text-sm text-ink-600">
            These are useful details to include when contacting us.
          </p>
          <a
            href={buildWhatsAppLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-5 inline-flex items-center rounded-full bg-rust-700 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            Send Property Details
          </a>
        </div>
      </div>
    </section>
  );
}

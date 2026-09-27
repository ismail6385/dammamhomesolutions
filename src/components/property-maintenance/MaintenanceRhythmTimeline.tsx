const stages = [
  {
    title: "Daily / Occasional",
    subtitle: "Things occupants naturally notice",
    items: ["Strange noises", "Water marks", "Dripping", "Doors becoming difficult to close", "Unusual electrical behavior", "AC performance changes"],
  },
  {
    title: "Periodic",
    subtitle: "Things worth reviewing over time",
    items: ["AC condition", "Plumbing fixtures", "Drains", "Electrical fixtures", "Doors / locks / handles", "Bathroom surfaces", "Kitchen fixtures", "Paint and wall condition"],
  },
  {
    title: "When Needed",
    subtitle: "Repairs identified through normal property use",
    items: [],
  },
];

export default function MaintenanceRhythmTimeline() {
  return (
    <section className="bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-500">
            A property has a rhythm
          </p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            The maintenance rhythm.
          </h2>
        </div>

        <div className="mt-12 overflow-x-auto pb-2">
          <div className="grid min-w-[840px] grid-cols-3 gap-6">
            {stages.map((stage, i) => (
              <div key={stage.title} className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-lime-600 text-sm font-semibold text-lime-400">
                    {i + 1}
                  </span>
                  <h3 className="font-serif text-lg text-sand-50">{stage.title}</h3>
                </div>
                <p className="mt-2 text-sm text-ink-400">{stage.subtitle}</p>
                {stage.items.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {stage.items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-ink-300">
                        <span aria-hidden="true" className="mt-1.5 h-1 w-1 flex-none rounded-full bg-lime-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {i < stages.length - 1 && (
                  <span aria-hidden="true" className="absolute -right-3 top-4 hidden text-lime-600 sm:block">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 max-w-2xl text-sm text-ink-400">
          There isn&rsquo;t a universal maintenance schedule for every
          property. The right frequency depends on the property, systems,
          occupancy and actual maintenance needs.
        </p>
      </div>
    </section>
  );
}

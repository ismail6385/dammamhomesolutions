const rows = [
  { involves: "AC problem", explore: "AC Repair", href: "/ac-repair/" },
  { involves: "Water / drainage problem", explore: "Plumbing", href: "/plumbing-repair/" },
  { involves: "Moisture ingress", explore: "Waterproofing", href: "/waterproofing/" },
  { involves: "Electrical fault", explore: "Electrical Repair", href: "/electrical-repair/" },
  { involves: "Wall / paint issue", explore: "Painting & Wall Repair", href: "/painting-wall-repair/" },
  { involves: "Door / hardware issue", explore: "Carpentry, Doors & Locks", href: "/carpentry-doors-locks/" },
  { involves: "Bathroom / kitchen issue", explore: "Bathroom & Kitchen Repair", href: "/bathroom-kitchen-repair/" },
  { involves: "Unclear household issue", explore: "General Home Repairs", href: "/general-home-repairs/" },
];

export default function SpecialistRoutingSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge max-w-3xl">
        <p className="section-label text-lime-800">Different issues, different specialists</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          Maintenance does not mean doing everything the same way.
        </h2>
        <p className="mt-4 text-ink-700">
          Where a problem is clearly one trade, we&rsquo;ll point you
          toward the right specialist page rather than treating it as a
          generic maintenance job:
        </p>

        <ul className="mt-8 divide-y divide-ink-900/10 border-y border-ink-900/10">
          {rows.map((row) => (
            <li key={row.involves} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
              <span className="text-[15px] text-ink-800">{row.involves}</span>
              <a href={row.href} className="focus-ring flex items-center gap-2 text-sm font-medium text-lime-800 hover:underline">
                <span aria-hidden="true">→</span>
                {row.explore}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

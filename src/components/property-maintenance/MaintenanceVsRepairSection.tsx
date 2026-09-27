const repairExamples = ["Leaking tap", "Broken switch", "AC not cooling", "Damaged wall", "Door won't close"];
const maintenanceExamples = [
  "Recurring AC issues",
  "Worn fixtures",
  "Early moisture signs",
  "Loose hardware",
  "Deteriorating surfaces",
  "Property items that need periodic attention",
];

export default function MaintenanceVsRepairSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-lime-800">Two different questions</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Repair fixes today&rsquo;s problem. Maintenance looks at what
            comes next.
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-ink-900/10 sm:grid-cols-2">
          <div className="bg-sand-50 p-7 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-rust-700">Repair</p>
            <p className="mt-3 text-ink-800">Something has already gone wrong.</p>
            <ul className="mt-5 space-y-2">
              {repairExamples.map((e) => (
                <li key={e} className="flex gap-3 text-sm text-ink-700">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-rust-600" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#eef1e6] p-7 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-lime-800">Maintenance</p>
            <p className="mt-3 text-ink-800">Something needs attention before it becomes an urgent repair.</p>
            <ul className="mt-5 space-y-2">
              {maintenanceExamples.map((e) => (
                <li key={e} className="flex gap-3 text-sm text-ink-700">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-lime-800" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 max-w-2xl text-sm text-ink-500">
          Regular checks can help identify issues earlier — they don&rsquo;t
          catch every hidden fault, and this isn&rsquo;t about creating
          concern where there isn&rsquo;t any.
        </p>
      </div>
    </section>
  );
}

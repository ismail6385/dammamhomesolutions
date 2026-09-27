const usefulToKeep = ["What was noticed", "Where it happened", "Photos", "Date", "Repair completed", "Whether follow-up is needed"];

export default function MaintenanceRecordSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label text-lime-800">Worth keeping track of</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          Keep the next repair from becoming a forgotten repair.
        </h2>
        <p className="mt-4 text-ink-700">
          We don&rsquo;t currently offer a customer account or maintenance
          dashboard — but keeping a simple note for your own property can
          still help, especially across recurring issues.
        </p>

        <p className="mt-6 text-sm font-semibold text-ink-900">Useful information to keep for your property:</p>
        <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {usefulToKeep.map((item) => (
            <li key={item} className="flex gap-3 rounded-lg border border-ink-900/10 bg-[#eef1e6] px-4 py-3 text-sm text-ink-700">
              <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-lime-800" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

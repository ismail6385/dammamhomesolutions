const workflow = ["Property", "Issues", "Photos", "Priorities", "Maintenance work"];

export default function LandlordFlowSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="max-w-lg">
          <p className="section-label text-lime-800">Landlords &amp; property managers</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Managing more than one property?
          </h2>
          <p className="mt-4 text-ink-700">
            You can send multiple property concerns together rather than
            treating each one as a separate conversation.
          </p>
        </div>

        <ol className="space-y-3">
          {workflow.map((step, i) => (
            <li key={step} className="flex items-center gap-4 rounded-xl border border-ink-900/10 bg-[#eef1e6] px-5 py-4">
              <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-lime-800 text-xs font-semibold text-sand-50">
                {i + 1}
              </span>
              <span className="font-serif text-base text-ink-950">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

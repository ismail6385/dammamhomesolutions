const reactive = ["Something broke.", "Customer contacts company.", "Problem is assessed.", "Repair is carried out if appropriate."];
const preventive = ["Something needs attention.", "Property condition is reviewed.", "Potential maintenance needs are identified.", "Necessary work is planned according to actual condition."];

function FlowColumn({ title, steps, tone }: { title: string; steps: string[]; tone: "reactive" | "preventive" }) {
  return (
    <div>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.14em] ${
          tone === "reactive" ? "text-rust-700" : "text-lime-800"
        }`}
      >
        {title}
      </p>
      <ol className="mt-5 space-y-4">
        {steps.map((step, i) => (
          <li key={step} className="flex items-start gap-3">
            <span className="mt-0.5 font-serif text-sm text-ink-400">{i + 1}</span>
            <span className="text-ink-800">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function PreventiveVsReactiveSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-lime-800">Two ways this can go</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Preventive vs. reactive.
          </h2>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          <FlowColumn title="Reactive" steps={reactive} tone="reactive" />
          <FlowColumn title="Preventive / routine" steps={preventive} tone="preventive" />
        </div>

        <p className="mt-8 max-w-2xl text-sm text-ink-500">
          This doesn&rsquo;t guarantee that future breakdowns are
          prevented — it simply means the property&rsquo;s condition gets
          looked at before something forces the issue.
        </p>
      </div>
    </section>
  );
}

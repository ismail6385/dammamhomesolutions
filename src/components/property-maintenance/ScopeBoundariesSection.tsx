const included = ["Routine property repair needs", "Maintenance-related issues", "Household systems", "Fixtures", "Surfaces", "Practical repair work"];
const excluded = ["New construction", "Major structural work", "Full property renovation", "Large remodeling projects", "Specialist engineering work"];

export default function ScopeBoundariesSection() {
  return (
    <section className="border-y border-ink-900/10 bg-[#eef1e6] py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-lime-800">Scope</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Property maintenance is for existing properties.
          </h2>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-lime-800">Included, directionally</p>
            <ul className="mt-4 space-y-2.5">
              {included.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-ink-800">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-lime-800" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Not automatically included</p>
            <ul className="mt-4 space-y-2.5">
              {excluded.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-ink-600">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-ink-900/30" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

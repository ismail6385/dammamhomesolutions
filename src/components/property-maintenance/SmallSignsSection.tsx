const signs = [
  { title: "A new stain", body: "Could be worth investigating rather than simply painting over it." },
  { title: "A door slowly becoming harder to close", body: "Could indicate a change in alignment, hardware or the door itself." },
  { title: "A tap that has started dripping", body: "A small issue that deserves attention before it becomes a bigger one." },
  { title: "AC performance gradually changing", body: "A useful reason to review the system rather than waiting for complete failure." },
  { title: "Paint beginning to peel", body: "The surface condition may matter before repainting." },
];

export default function SmallSignsSection() {
  return (
    <section className="border-y border-ink-900/10 bg-[#eef1e6] py-20 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label text-lime-800">Worth a second look</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          Not every problem announces itself.
        </h2>

        <div className="mt-10 space-y-7">
          {signs.map((s) => (
            <div key={s.title} className="border-b border-ink-900/10 pb-7 last:border-b-0">
              <h3 className="font-serif text-lg text-ink-950">{s.title}</h3>
              <p className="mt-2 text-ink-700">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

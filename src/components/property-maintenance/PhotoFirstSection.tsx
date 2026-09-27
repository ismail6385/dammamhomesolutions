import { buildWhatsAppLink } from "@/lib/site-config";

const examples = [
  { title: "Full area", body: "The whole room or space, for context." },
  { title: "Close-up", body: "A closer look at the specific spot." },
  { title: "Affected component", body: "The fixture, fitting or surface itself." },
];

export default function PhotoFirstSection() {
  return (
    <section className="border-y border-ink-900/10 bg-[#eef1e6] py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="max-w-lg">
          <p className="section-label text-lime-800">Before we talk</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            A photo can tell us more than a paragraph.
          </h2>
          <p className="mt-4 text-ink-700">
            If you&rsquo;re not sure how to describe the issue, send a
            photo of the area and a short note about what you&rsquo;ve
            noticed.
          </p>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send photos related to property maintenance.")}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-6 inline-flex items-center rounded-full bg-rust-700 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            Send Photos on WhatsApp
          </a>
        </div>

        <div className="grid gap-3">
          {examples.map((ex) => (
            <div key={ex.title} className="rounded-xl border border-ink-900/10 bg-sand-50 px-5 py-4">
              <p className="font-serif text-base text-ink-950">{ex.title}</p>
              <p className="mt-1 text-sm text-ink-600">{ex.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

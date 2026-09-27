import { buildWhatsAppLink } from "@/lib/site-config";

export default function FinalConversionSection() {
  return (
    <section className="bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge max-w-2xl text-center">
        <h2 className="font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
          Know something needs attention? Start there.
        </h2>
        <p className="mt-4 leading-relaxed text-ink-300">
          Tell us what you&rsquo;ve noticed, where it is happening, and
          send a few photos if useful. We&rsquo;ll help you work out the
          appropriate next step.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#request-service"
            className="focus-ring inline-flex items-center justify-center rounded-full bg-rust-600 px-7 py-3.5 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            Request Property Maintenance
          </a>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to ask about property maintenance.")}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-sand-100/20 px-7 py-3.5 text-sm font-semibold text-sand-100 hover:bg-sand-100/5"
          >
            WhatsApp Dammam Home Solutions
          </a>
        </div>
      </div>
    </section>
  );
}

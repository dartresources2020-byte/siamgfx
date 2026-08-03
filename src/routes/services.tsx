import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import services from "@/config/services.json";
import faq from "@/config/faq.json";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Branding, Publishing & Advertising · Siam Graphics" },
      { name: "description", content: "Brand identity, publishing design, magazine and catalogue layout, company profiles, advertising and print production by Siam Graphics." },
      { property: "og:title", content: "Services — Siam Graphics" },
      { property: "og:description", content: "Full-service brand, publishing and advertising design." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="mesh-bg relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs uppercase tracking-[0.3em] text-navy/50">
            Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-5 text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight text-navy sm:text-6xl"
          >
            End-to-end creative for brands with something to say.
          </motion.h1>
          <p className="mt-8 max-w-2xl text-lg text-navy/70">
            From single marks to hundred-page publications and city-wide campaigns —
            every project is led by senior designers and shipped press-ready.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[s.icon] || LucideIcons.Sparkles;
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_rgba(20,40,90,0.25)]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-soft/60 text-navy">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-navy">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/60">{s.short}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12">
          <Link to="/contact" className="btn-primary">Request a proposal <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-28">
        <p className="text-xs uppercase tracking-[0.25em] text-navy/50">FAQ</p>
        <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-navy sm:text-5xl">
          Answers before you ask.
        </h2>
        <div className="mt-10 divide-y divide-black/5 rounded-3xl border border-black/5 bg-white">
          {faq.map((item, i) => (
            <details key={i} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-navy">
                <span className="font-display text-lg font-medium">{item.q}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sky-soft/60 text-navy transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-navy/70">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

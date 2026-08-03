import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import projects from "@/config/projects.json";
import { IMAGES, REELS } from "@/lib/assets";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Work — Selected Projects · Siam Graphics" },
      { name: "description", content: "Selected work from Siam Graphics: brand identity, publishing, packaging and advertising for premium clients across India and abroad." },
      { property: "og:title", content: "Selected Work — Siam Graphics" },
      { property: "og:description", content: "Case studies in branding, publishing, packaging and advertising design." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((p) => p.category)))], []);
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="mesh-bg relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-navy/50">Selected work</p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-5 max-w-3xl text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight text-navy sm:text-6xl"
          >
            Case studies in craft, print and brand systems.
          </motion.h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                filter === c ? "bg-navy text-white" : "border border-black/10 text-navy/70 hover:bg-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28 pt-10">
        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.article
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
                className={`group overflow-hidden rounded-3xl bg-white p-3 shadow-[0_20px_60px_-30px_rgba(20,40,90,0.25)] ${
                  i % 5 === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden rounded-2xl bg-muted ${i % 5 === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <img
                    src={IMAGES[p.cover]}
                    alt={`${p.title} — ${p.category} design by Siam Graphics`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex items-start justify-between gap-6 px-3 py-5">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-navy/40">{p.category} · {p.year}</div>
                    <h3 className="mt-1 font-display text-xl font-semibold text-navy sm:text-2xl">{p.title}</h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-navy/60">{p.summary}</p>
                  </div>
                  <div className="shrink-0 text-right text-xs text-navy/40">
                    <div>Client</div>
                    <div className="mt-1 font-medium text-navy/70">{p.client}</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-navy/50">In motion</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
              Craft, captured on film.
            </h2>
          </div>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {REELS.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl bg-navy shadow-[0_20px_60px_-30px_rgba(20,40,90,0.35)]"
            >
              <video
                src={src}
                className="aspect-[9/16] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import company from "@/config/company.json";
import stats from "@/config/statistics.json";
import process from "@/config/process.json";
import { IMAGES, VIDEOS } from "@/lib/assets";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Siam Graphics · A decade of creative craft in Kolkata" },
      { name: "description", content: "For over 10 years Siam Graphics has helped brands, publishers and institutions communicate through exceptional design, typography and print." },
      { property: "og:title", content: "About Siam Graphics" },
      { property: "og:description", content: "A decade of creative advertising, publishing and branding from Kolkata." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mesh-bg noise noise-after relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-xs uppercase tracking-[0.3em] text-navy/50">
            About the studio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-5 text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight text-navy sm:text-6xl"
          >
            A decade of quiet craft, loud results.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-navy/70"
          >
            Siam Graphics is one of Kolkata's leading creative and publishing studios. For {company.yearsInBusiness}+ years,
            we've partnered with businesses, authors, publishers, educational institutions, organisations and startups
            to shape premium visual communication rooted in strategy, typography and print craft.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-3xl border border-black/5 bg-white p-8">
              <div className="font-display text-4xl font-bold text-navy">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-navy/50">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <img src={IMAGES.karmae} alt="Karmae perfume packaging by Siam Graphics" className="w-full rounded-3xl object-cover shadow-[0_30px_80px_-30px_rgba(20,40,90,0.25)]" loading="lazy" />
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-navy/50">Our belief</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-navy">
              Design should feel <span className="italic text-navy/60">inevitable</span>.
            </h2>
            <p className="mt-6 text-navy/70">
              We combine editorial rigour with brand strategy — building systems that scale from a business card to a
              hundred-page magazine without losing their voice.
            </p>
            <p className="mt-4 text-navy/70">
              Every project is led by senior designers. Every file is prepared for press. Every rollout is supervised.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-4">
        <div className="relative overflow-hidden rounded-3xl bg-navy shadow-[0_30px_80px_-30px_rgba(20,40,90,0.35)]">
          <video
            src={VIDEOS.reelStudio}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
          <div className="pointer-events-none absolute bottom-6 left-6 right-6 flex items-end justify-between text-white/90">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">Studio reel</p>
              <p className="mt-1 font-display text-lg font-semibold">Ten years of craft, in motion.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.25em] text-navy/50">Our process</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight text-navy sm:text-5xl">
          Four unhurried steps to work you'll be proud of.
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <div key={p.step} className="rounded-3xl border border-black/5 bg-white p-8">
              <div className="font-display text-sm font-semibold tracking-widest text-sky">{p.step}</div>
              <h3 className="mt-4 font-display text-xl font-semibold text-navy">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/60">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Link to="/contact" className="btn-primary">Start a conversation <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}

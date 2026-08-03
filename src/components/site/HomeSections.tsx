import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import { ArrowUpRight, Download, MessageCircle, Sparkles, Star } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { IMAGES, CLIENT_LOGOS, BOOK_PDF_URL } from "@/lib/assets";

import services from "@/config/services.json";
import projects from "@/config/projects.json";
import clients from "@/config/clients.json";
import stats from "@/config/statistics.json";
import testimonials from "@/config/testimonials.json";
import process from "@/config/process.json";
import company from "@/config/company.json";

const ease = [0.2, 0.8, 0.2, 1] as const;

function Reveal({ children, delay = 0, y = 24 }: { children: React.ReactNode; delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -160]);

  return (
    <section ref={ref} className="mesh-bg noise noise-after relative overflow-hidden">
      <div className="grid-lines absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-16 sm:pt-24">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}>
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-navy/80">
            <Sparkles className="h-3.5 w-3.5" /> Est. 2015 · Kolkata · Serving worldwide
          </span>
        </motion.div>

        <h1 className="mt-6 text-balance font-display text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.95] tracking-tight text-navy lg:max-w-[38rem] lg:text-[clamp(3rem,5vw,4.5rem)] xl:max-w-[40rem]">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            Where creativity
          </motion.span>
          <motion.span
            className="block pb-2 text-shimmer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.12 }}
          >
            meets impact.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.25 }}
          className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-navy/70"
        >
          Siam Graphics is a premium branding, publishing and advertising studio.
          For {company.yearsInBusiness}+ years, we've helped visionary brands look — and feel — unmistakable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link to="/contact" className="btn-primary">
            Start your project <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link to="/portfolio" className="btn-ghost">See selected work</Link>
        </motion.div>

        {/* Floating showcase */}
        <div className="pointer-events-none absolute right-2 top-40 hidden w-[26rem] xl:top-24 xl:w-[30rem] lg:block">
          <motion.div style={{ y: y1 }} className="animate-float">
            <div className="relative overflow-hidden rounded-3xl glass p-3">
              <img src={IMAGES.karmae} alt="Karmae perfume brand identity" className="h-64 w-full rounded-2xl object-cover xl:h-72" loading="eager" />
            </div>
          </motion.div>
          <motion.div style={{ y: y2 }} className="mt-6 flex gap-4 pl-10">
            <div className="relative w-36 overflow-hidden rounded-2xl glass p-2 xl:w-40">
              <img src={IMAGES.jammed} alt="Jammed food packaging" className="h-32 w-full rounded-xl object-cover xl:h-36" loading="lazy" />
            </div>
            <div className="relative w-36 overflow-hidden rounded-2xl glass p-2 xl:w-40">
              <img src={IMAGES["work-03"]} alt="Selected brand identity work" className="h-32 w-full rounded-xl object-cover xl:h-36" loading="lazy" />
            </div>
          </motion.div>
        </div>

        {/* Mobile visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.4 }}
          className="mt-14 grid grid-cols-2 gap-3 lg:hidden"
        >
          <img src={IMAGES.karmae} alt="Karmae perfume" className="h-40 w-full rounded-2xl object-cover glass" loading="lazy" />
          <img src={IMAGES.jammed} alt="JAMMED packaging" className="h-40 w-full rounded-2xl object-cover glass" loading="lazy" />
        </motion.div>
      </div>

      {/* Stats */}
      <div className="relative mx-auto max-w-6xl px-6 pb-16">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl glass sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: i * 0.05 }}
              className="bg-white/60 p-6 sm:p-8"
            >
              <div className="font-display text-3xl font-bold text-navy sm:text-4xl">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-navy/50">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  if (!clients.length) return null;
  const doubled = [...clients, ...clients];
  return (
    <section className="border-y border-black/5 bg-white/60 py-8">
      <div className="mx-auto max-w-6xl overflow-hidden px-6">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.25em] text-navy/50">
          Trusted by discerning brands
        </p>
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee gap-14">
            {doubled.map((c, i) => (
              <div key={i} className="flex items-center gap-3 text-navy/60">
                <span className="h-1.5 w-1.5 rounded-full bg-sky" />
                <span className="whitespace-nowrap font-display text-base font-semibold">{c.name}</span>
                <span className="whitespace-nowrap text-sm text-navy/40">— {c.note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-navy/50">What we do</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight text-navy sm:text-5xl">
            A studio built around <span className="italic text-navy/60">craft</span>, publishing and premium brand systems.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link to="/services" className="btn-ghost">All services <ArrowUpRight className="h-4 w-4" /></Link>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[s.icon] || LucideIcons.Sparkles;
          const msg = `Hello Siam Graphics,\n\nI am interested in your "${s.title}" service.\nI would like to discuss my project and request a quotation.\n\nThank you.`;
          const wa = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(msg)}`;
          return (
            <Reveal key={s.slug} delay={i * 0.05}>
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                aria-label={`Enquire on WhatsApp about ${s.title}`}
                className="group relative block h-full overflow-hidden rounded-3xl border border-black/5 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_rgba(20,40,90,0.25)]"
              >
                <div className="absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-sky-soft to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-soft/60 text-navy">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-navy">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy/60">{s.short}</p>
                  <div className="mt-8 flex items-center gap-1 text-sm font-medium text-navy/70 transition-colors group-hover:text-navy">
                    Explore <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function FeaturedWork() {
  const featured = projects.slice(0, 4);
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-sky-soft/30 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-navy/50">Selected work</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight text-navy sm:text-5xl">
              Design that earns attention — and keeps it.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/portfolio" className="btn-ghost">View all <ArrowUpRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link
                to="/portfolio"
                className="group block overflow-hidden rounded-3xl bg-white p-3 shadow-[0_20px_60px_-30px_rgba(20,40,90,0.25)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                  <img
                    src={IMAGES[p.cover]}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="flex items-start justify-between gap-4 px-3 py-5">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-navy/40">{p.category} · {p.year}</div>
                    <h3 className="mt-1 font-display text-xl font-semibold text-navy">{p.title}</h3>
                    <p className="mt-1 text-sm text-navy/60">{p.client}</p>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-navy/40 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-navy" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.25em] text-navy/50">How we work</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight text-navy sm:text-5xl">
          A calm, rigorous process — from insight to press.
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {process.map((p, i) => (
          <Reveal key={p.step} delay={i * 0.06}>
            <div className="h-full rounded-3xl border border-black/5 bg-white p-8">
              <div className="font-display text-sm font-semibold tracking-widest text-sky">{p.step}</div>
              <h3 className="mt-4 font-display text-xl font-semibold text-navy">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/60">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  if (!testimonials.length) return null;
  return (
    <section className="mx-auto max-w-6xl px-6 pb-28">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.25em] text-navy/50">Kind words</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight text-navy sm:text-5xl">
          Long-term partners, not one-off projects.
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.company} delay={i * 0.06}>
            <figure className="flex h-full flex-col rounded-3xl border border-black/5 bg-white p-8">
              <div className="flex gap-0.5 text-sky">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-navy/80">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-black/5 pt-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full border border-black/5 bg-white">
                  {CLIENT_LOGOS[t.logo] ? (
                    <img src={CLIENT_LOGOS[t.logo]} alt={`${t.company} logo`} loading="lazy" className="h-full w-full object-cover" />
                  ) : (
                    <span className="font-display text-sm font-semibold text-navy/70">{t.company.slice(0, 2).toUpperCase()}</span>
                  )}
                </span>
                <div className="font-display font-semibold text-navy">{t.company}</div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function BookDownload() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-28">
      <Reveal>
        <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-black/5 bg-white p-8 sm:p-12 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-navy/50">Free download</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-navy sm:text-5xl">
              Our coffee table book — in your hands.
            </h2>
            <p className="mt-5 max-w-xl text-navy/70">
              Browse a full sample edition of our publishing craft: layout, typography, imagery and print finishing, straight from the studio.
            </p>
          </div>
          <div className="flex md:justify-end">
            <a
              href={BOOK_PDF_URL}
              download="siam-graphics-book.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_-15px_rgba(20,40,90,0.6)] transition-all hover:-translate-y-0.5 hover:bg-navy/90"
            >
              <Download className="h-4 w-4" /> Download the PDF
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}


function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-28">
      <div className="relative overflow-hidden rounded-[2rem] bg-navy px-8 py-16 sm:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(40rem 20rem at 0% 0%, rgba(140,190,255,0.25), transparent 60%), radial-gradient(40rem 20rem at 100% 100%, rgba(120,170,240,0.2), transparent 60%)",
          }}
        />
        <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">Let's build something enduring</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              Ready to make your brand feel <span className="italic text-sky">unmistakable</span>?
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy shadow-[0_20px_50px_-12px_rgba(255,255,255,0.5)] ring-2 ring-white/70 transition-all hover:-translate-y-0.5 hover:bg-sky hover:shadow-[0_25px_60px_-10px_rgba(140,190,255,0.6)]"
            >
              Request a quote <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Hello Siam Graphics,\n\nI visited your website and would like to discuss a design project.\nPlease let me know how we can get started.\n\nThank you.")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sky px-6 py-3 text-sm font-semibold text-navy shadow-[0_20px_50px_-12px_rgba(140,190,255,0.55)] ring-2 ring-sky/60 transition-all hover:-translate-y-0.5 hover:bg-white hover:ring-white hover:shadow-[0_25px_60px_-10px_rgba(255,255,255,0.5)]"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
            <a href={`mailto:${company.email}`} className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/15 hover:border-white/70">
              Email the studio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <FeaturedWork />
      <Process />
      <Testimonials />
      <BookDownload />
      <CTA />
    </>
  );
}


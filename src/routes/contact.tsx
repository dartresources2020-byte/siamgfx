import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import company from "@/config/company.json";
import services from "@/config/services.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Start Your Project · Siam Graphics" },
      { name: "description", content: "Talk to Siam Graphics about branding, publishing and advertising. Based in Kolkata, working worldwide. Reply within one business day." },
      { property: "og:title", content: "Contact Siam Graphics" },
      { property: "og:description", content: "Start a branding, publishing or advertising project with a premium Kolkata studio." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Service: ${data.get("service")}`,
      `Budget: ${data.get("budget")}`,
      `Timeline: ${data.get("timeline")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    const subject = `New project inquiry — ${data.get("name")}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
    setSent(true);
  }

  const wa = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Hi Siam Graphics, I'd like to start a project.")}`;

  return (
    <>
      <section className="mesh-bg relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-navy/50">Contact</p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-5 max-w-3xl text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight text-navy sm:text-6xl"
          >
            Let's build your brand.
          </motion.h1>
          <p className="mt-6 max-w-xl text-lg text-navy/70">
            Share a few details and we'll come back within one business day with a tailored plan.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-black/5 bg-white p-8 sm:p-10">
            {sent ? (
              <div className="flex flex-col items-center py-16 text-center">
                <CheckCircle2 className="h-12 w-12 text-sky" />
                <h2 className="mt-4 font-display text-2xl font-semibold text-navy">Your inquiry is on its way</h2>
                <p className="mt-2 max-w-md text-navy/60">We opened your email client with the message pre-filled. If it didn't open, write to <a className="underline" href={`mailto:${company.email}`}>{company.email}</a>.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <Field label="Your name" name="name" required />
                <Field label="Company" name="company" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone / WhatsApp" name="phone" />
                <div className="sm:col-span-1">
                  <Label>Service</Label>
                  <select name="service" className="input">
                    <option value="">Choose a service</option>
                    {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="sm:col-span-1">
                  <Label>Budget</Label>
                  <select name="budget" className="input">
                    <option value="">Estimated budget</option>
                    <option>Under ₹50k</option>
                    <option>₹50k – ₹2L</option>
                    <option>₹2L – ₹10L</option>
                    <option>₹10L+</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <Label>Timeline</Label>
                  <select name="timeline" className="input">
                    <option value="">When do you want to start?</option>
                    <option>Immediately</option>
                    <option>Within a month</option>
                    <option>1 – 3 months</option>
                    <option>Just exploring</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <Label>Project description</Label>
                  <textarea name="message" rows={5} required className="input resize-none" placeholder="Tell us about your brand, goals and any references." />
                </div>
                <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs text-navy/50">We'll reply within one business day.</p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={wa}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-sky px-5 py-3 text-sm font-semibold text-navy shadow-[0_10px_30px_-12px_rgba(140,190,255,0.6)] transition-all hover:-translate-y-0.5 hover:bg-sky/90"
                    >
                      <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                    </a>
                    <button type="submit" className="btn-primary">
                      Request a quote <Send className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          <aside className="flex flex-col gap-4">
            <div className="rounded-3xl border border-black/5 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-navy">Studio</h3>
              <ul className="mt-4 space-y-3 text-sm text-navy/70">
                <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 text-navy/40" /><span>{company.address.line1}<br />{company.address.line2}<br />{company.address.city} — {company.address.postalCode}</span></li>
                <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 text-navy/40" /><a href={`tel:${company.phoneRaw}`}>{company.phone}</a></li>
                <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 text-navy/40" /><a href={`mailto:${company.email}`}>{company.email}</a></li>
              </ul>
              <div className="mt-5 grid grid-cols-2 gap-2">
                <a href={wa} target="_blank" rel="noreferrer" className="btn-ghost justify-center text-sm">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a href={company.mapsUrl} target="_blank" rel="noreferrer" className="btn-ghost justify-center text-sm">
                  <MapPin className="h-4 w-4" /> Directions
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-black/5 bg-white">
              <iframe
                title="Siam Graphics on Google Maps"
                src={company.mapsEmbed}
                loading="lazy"
                className="h-72 w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-navy/50">{children}</label>;
}
function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <Label>{label}{required && <span className="text-sky"> *</span>}</Label>
      <input type={type} name={name} required={required} className="input" />
    </div>
  );
}

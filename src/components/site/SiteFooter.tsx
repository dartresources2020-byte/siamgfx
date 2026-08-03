import { Link } from "@tanstack/react-router";
import { Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import company from "@/config/company.json";
import { LOGO_URL } from "@/lib/assets";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60rem 30rem at 20% 0%, rgba(140,190,255,0.25), transparent 60%), radial-gradient(50rem 25rem at 90% 100%, rgba(120,170,240,0.18), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src={LOGO_URL} alt="Siam Graphics" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-display text-lg font-semibold">Siam Graphics</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {company.tagline}. A Kolkata-based creative studio shaping brands, books and campaigns for a decade.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={company.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:bg-white/10">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={company.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:bg-white/10">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/50">Studio</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="text-white/80 hover:text-white">About</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white">Services</Link></li>
              <li><Link to="/portfolio" className="text-white/80 hover:text-white">Work</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/50">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 text-white/50" /><a href={`tel:${company.phoneRaw}`}>{company.phone}</a></li>
              <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 text-white/50" /><a href={`mailto:${company.email}`}>{company.email}</a></li>
              <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 text-white/50" /><span>{company.address.line1}, {company.address.city} {company.address.postalCode}</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/50">Start</h4>
            <p className="mt-4 text-sm text-white/70">Have a project in mind? Let's shape it together.</p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy shadow-[0_20px_50px_-10px_rgba(255,255,255,0.45)] ring-2 ring-white/70 transition-all hover:-translate-y-0.5 hover:bg-sky hover:ring-white hover:shadow-[0_25px_60px_-10px_rgba(140,190,255,0.6)]"
            >
              Request a quote
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {year} Siam Graphics · Siam Enterprise. All rights reserved.</p>
          <p>Crafted in Kolkata · Serving the world.</p>
        </div>
      </div>
    </footer>
  );
}

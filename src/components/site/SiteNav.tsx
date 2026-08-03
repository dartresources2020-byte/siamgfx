import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FULL_LOGO_URL } from "@/lib/assets";
import company from "@/config/company.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Work" },
  { to: "/contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2 transition-all duration-500 sm:px-6 ${
          scrolled ? "glass" : "bg-transparent"
        }`}
      >
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label={company.name}>
          <img
            src={FULL_LOGO_URL}
            alt="Siam Graphics — Design Studio"
            className="h-12 w-12 shrink-0 rounded-full object-cover sm:h-14 sm:w-14 md:h-16 md:w-16"
          />
          <span className="truncate font-display text-lg font-bold leading-none text-navy sm:text-xl">
            {company.name}
          </span>
        </Link>



        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = l.to === "/" ? path === "/" : path.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active ? "text-navy" : "text-navy/60 hover:text-navy"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-sky-soft/70"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{l.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="btn-primary hidden text-sm md:inline-flex">
            Start a project
          </Link>
          <button
            className="grid h-10 w-10 place-items-center rounded-full glass md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl glass p-3 md:hidden"
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="block rounded-2xl px-4 py-3 text-navy hover:bg-sky-soft/60"
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary mt-2 w-full justify-center">
            Start a project
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}

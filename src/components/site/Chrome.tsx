import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";
import company from "@/config/company.json";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX: width }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-sky via-navy to-sky"
    />
  );
}

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const wa = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Hi Siam Graphics, I'd like to start a project.")}`;
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="grid h-11 w-11 place-items-center rounded-full glass text-navy shadow-lg"
        >
          <ArrowUp className="h-4 w-4" />
        </motion.button>
      )}
      <a
        href={wa}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp us"
        className="group grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-500/30 transition hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/components/site/HomeSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Siam Graphics — Premium Branding, Publishing & Advertising Studio, Kolkata" },
      { name: "description", content: "Siam Graphics is a Kolkata-based creative studio crafting premium brand identity, publishing, editorial and advertising design for a decade." },
      { property: "og:title", content: "Siam Graphics — Where Creativity Meets Impact" },
      { property: "og:description", content: "A premium branding, publishing and advertising studio from Kolkata, serving clients worldwide." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

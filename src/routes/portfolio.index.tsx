import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CtaBand, PageHero, Placeholder } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { projects, projectCategories } from "@/lib/site-data";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Case Studies | Rid Yenk" },
      { name: "description", content: "Selected digital marketing, branding, social media and web design projects by Rid Yenk." },
      { property: "og:title", content: "Rid Yenk Portfolio" },
      { property: "og:description", content: "Case studies in social media, branding, web design and digital campaigns." },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? projects : projects.filter((p) => p.category === cat);
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Selected work." text="A look at the kind of projects Rid Yenk delivers. Full case studies are being added." />
      <section className="container-x py-20">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {["All", ...projectCategories].map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
              className={cn("rounded-full border px-4 py-2 text-sm font-semibold transition-colors", cat === c ? "border-foreground bg-foreground text-background" : "hover:border-foreground")}>
              {c}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80}>
              <Link to="/portfolio/$slug" params={{ slug: p.slug }} className="group block">
                <Placeholder label="Project image" className="aspect-[4/3] rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <ImageIcon className="h-8 w-8" />
                </Placeholder>
                <p className="eyebrow mt-5">{p.category}</p>
                <h2 className="mt-2 text-xl font-bold">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">View Project <ArrowUpRight className="h-4 w-4 text-primary" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
        {list.length === 0 && <p className="mt-10 text-muted-foreground">Projects in this category are coming soon.</p>}
      </section>
      <CtaBand title="More projects coming soon" text="New case studies are on the way. Want yours to be one of them?" button="Start a Project" />
    </>
  );
}

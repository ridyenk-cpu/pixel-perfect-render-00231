import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Newspaper } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { PageHero, Placeholder } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { posts, blogCategories } from "@/lib/site-data";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Digital Marketing Insights | Rid Yenk" },
      { name: "description", content: "Articles on digital marketing, social media, branding, content strategy, SEO and business growth." },
      { property: "og:title", content: "Rid Yenk Blog" },
      { property: "og:description", content: "Practical digital marketing insights for growing brands." },
    ],
  }),
  component: Blog,
});

function Blog() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? posts : posts.filter((p) => p.category === cat);
  return (
    <>
      <PageHero eyebrow="Blog" title="Insights that move brands forward." text="Practical thinking on digital marketing, social media, branding, and growth." />
      <section className="container-x py-20">
        <div className="flex flex-wrap gap-2">
          {["All", ...blogCategories].map((c) => (
            <button key={c} aria-pressed={cat === c} onClick={() => setCat(c)}
              className={cn("rounded-full border px-4 py-2 text-sm font-semibold transition-colors", cat === c ? "border-foreground bg-foreground text-background" : "hover:border-foreground")}>
              {c}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80}>
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-card transition-all hover:-translate-y-1 hover:border-primary">
                <Placeholder className="aspect-[16/10]"><Newspaper className="h-8 w-8" /></Placeholder>
                <div className="flex flex-1 flex-col p-6">
                  <p className="eyebrow">{p.category}</p>
                  <h2 className="mt-3 text-lg font-bold leading-snug">{p.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">Read More <ArrowUpRight className="h-4 w-4" /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        {list.length === 0 && <p className="mt-10 text-muted-foreground">Articles in this category are coming soon.</p>}
      </section>
    </>
  );
}

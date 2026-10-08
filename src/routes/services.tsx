import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { btn, CtaBand, PageHero } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Digital Marketing, SEO, Web Design | Rid Yenk" },
      { name: "description", content: "Digital marketing, social media management, content strategy, brand strategy, branding, web design, SEO, digital campaigns and audience growth." },
      { property: "og:title", content: "Rid Yenk Services" },
      { property: "og:description", content: "Explore the full range of Rid Yenk digital marketing services." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Digital services built to deliver." text="From social media marketing to SEO and web design — everything your brand needs to grow online." />
      <section className="container-x py-20">
        <div className="divide-y border-y">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <article id={s.slug} className="grid scroll-mt-28 gap-8 py-14 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <span className="font-display text-sm font-bold text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <div className="mt-3 flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground"><s.icon className="h-6 w-6" /></span>
                    <h2 className="text-2xl font-extrabold uppercase md:text-3xl">{s.name}</h2>
                  </div>
                  <p className="mt-5 text-muted-foreground">{s.description}</p>
                  <Link to="/contact" className={`${btn.dark} mt-6`}>Start with {s.name} <ArrowRight className="h-4 w-4" /></Link>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
                  <div className="rounded-2xl bg-secondary p-6">
                    <h3 className="text-sm font-bold uppercase tracking-widest">Benefits</h3>
                    <ul className="mt-4 space-y-3">
                      {s.benefits.map((b) => <li key={b} className="flex gap-3 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{b}</li>)}
                    </ul>
                  </div>
                  <div className="rounded-2xl border p-6">
                    <h3 className="text-sm font-bold uppercase tracking-widest">What's included</h3>
                    <ul className="mt-4 space-y-3">
                      {s.included.map((b) => <li key={b} className="flex gap-3 text-sm"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{b}</li>)}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand title="Not sure what you need?" text="Let's discuss your goals." button="Contact Rid Yenk" />
    </>
  );
}

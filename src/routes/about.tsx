import { createFileRoute } from "@tanstack/react-router";
import { User, Lightbulb, Compass, Repeat, ShieldCheck, TrendingUp } from "lucide-react";
import { CtaBand, PageHero, Placeholder, SectionHead } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Rid Yenk — Digital Marketer & Brand Strategist" },
      { name: "description", content: "Meet Rid Yenk, a digital marketing brand helping businesses, creators and personal brands grow online with strategy and creativity." },
      { property: "og:title", content: "About Rid Yenk" },
      { property: "og:description", content: "The mission, vision and values behind the Rid Yenk digital marketing brand." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Lightbulb, t: "Creativity" }, { icon: Compass, t: "Strategy" }, { icon: Repeat, t: "Consistency" },
  { icon: ShieldCheck, t: "Integrity" }, { icon: TrendingUp, t: "Growth" },
];

function About() {
  return (
    <>
      <PageHero eyebrow="Who we are" title="About Rid Yenk" text="A professional digital marketing brand focused on helping businesses, creators, and personal brands grow online." />

      <section className="container-x grid gap-6 py-24 md:grid-cols-2">
        <Reveal className="h-full">
          <div className="h-full rounded-3xl border p-10 shadow-card">
            <p className="eyebrow">Our Mission</p>
            <p className="mt-6 font-display text-2xl font-bold leading-snug md:text-3xl">"To help brands turn their digital presence into meaningful opportunities."</p>
          </div>
        </Reveal>
        <Reveal delay={100} className="h-full">
          <div className="h-full rounded-3xl bg-primary p-10 text-primary-foreground">
            <p className="text-xs font-bold uppercase tracking-[0.18em]">Our Vision</p>
            <p className="mt-6 font-display text-2xl font-bold leading-snug md:text-3xl">"To build a recognized digital brand known for creativity, strategy, and measurable impact."</p>
          </div>
        </Reveal>
      </section>

      <section className="bg-secondary py-24">
        <div className="container-x">
          <SectionHead eyebrow="Values" title="What we stand for" />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 70}>
                <div className="rounded-2xl border bg-card p-6 text-center shadow-card transition-transform hover:-translate-y-1">
                  <v.icon className="mx-auto h-7 w-7 text-primary" />
                  <p className="mt-4 font-display font-bold uppercase">{v.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x grid items-center gap-12 py-24 lg:grid-cols-2">
        <Reveal>
          <Placeholder label="Founder photo coming soon" className="aspect-[4/5] rounded-3xl">
            <User className="h-14 w-14" />
          </Placeholder>
        </Reveal>
        <Reveal delay={100}>
          <p className="eyebrow">Founder</p>
          <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight md:text-5xl">The mind behind Rid Yenk</h2>
          <div className="mt-6 space-y-4 text-lg text-muted-foreground">
            <p>Rid Yenk started with a simple belief: great brands deserve to be seen. Behind the brand is a digital marketer passionate about strategy, storytelling, and online brand growth.</p>
            <p>Every project combines strategic thinking with creative execution — helping clients build personal brands and businesses that people remember, trust, and choose.</p>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}

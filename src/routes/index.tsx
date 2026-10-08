import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Brain, Sparkles, Target, TrendingUp, Heart, Eye, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { btn, CtaBand, SectionHead } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { services, homeServiceSlugs } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rid Yenk — Digital Marketing, Branding & Social Media" },
      { name: "description", content: "Rid Yenk helps brands, businesses, creators and personal brands grow online through digital marketing, social media management, brand strategy, content and web design." },
      { property: "og:title", content: "Rid Yenk — Digital That Deliver" },
      { property: "og:description", content: "Turning digital ideas into real impact. Digital marketing, branding, social media, content and web design." },
    ],
  }),
  component: Home,
});

const why = [
  { icon: Brain, title: "Strategic Thinking", text: "Every campaign starts with a clear strategy." },
  { icon: Sparkles, title: "Creative Execution", text: "Turning ideas into engaging digital experiences." },
  { icon: Target, title: "Audience Focused", text: "Building content and campaigns around real audiences." },
  { icon: TrendingUp, title: "Growth Mindset", text: "Focused on measurable progress and long-term opportunities." },
];
const steps = [
  { n: "01", t: "Discover", d: "Understand the brand, audience, goals, and challenges." },
  { n: "02", t: "Strategize", d: "Develop a customized digital strategy." },
  { n: "03", t: "Create", d: "Develop content, campaigns, and digital experiences." },
  { n: "04", t: "Grow", d: "Analyze results, optimize, and scale what works." },
];

function HeroVisual() {
  const bars = [35, 48, 42, 60, 55, 72, 68, 88];
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-lg md:h-[500px]" aria-hidden>
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 blur-3xl" />
      <div className="absolute inset-x-6 top-12 rounded-3xl border border-ink-border bg-ink-soft/80 p-6 backdrop-blur-xl shadow-glow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-ink-muted">Audience growth</p>
            <p className="mt-1 font-display text-3xl font-extrabold">Reach</p>
          </div>
          <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary-glow">Trending up</span>
        </div>
        <div className="mt-8 flex h-40 items-end gap-2">
          {bars.map((h, i) => (
            <div key={i} className={cn("flex-1 rounded-t-md", i === bars.length - 1 ? "bg-primary" : "bg-ink-foreground/15")} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className="absolute -left-2 bottom-16 animate-float rounded-2xl border border-ink-border bg-ink/90 p-4 backdrop-blur-xl md:-left-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary"><Heart className="h-5 w-5" /></span>
          <div><p className="text-xs text-ink-muted">Engagement</p><p className="font-display font-bold">Community</p></div>
        </div>
      </div>
      <div className="absolute -right-2 bottom-4 animate-float rounded-2xl border border-ink-border bg-ink/90 p-4 backdrop-blur-xl [animation-delay:1.5s] md:-right-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-foreground text-ink"><Eye className="h-5 w-5" /></span>
          <div><p className="text-xs text-ink-muted">Visibility</p><p className="font-display font-bold">Brand awareness</p></div>
        </div>
      </div>
      <div className="absolute right-4 top-0 animate-float rounded-2xl border border-ink-border bg-ink/90 p-3 backdrop-blur-xl [animation-delay:3s]">
        <BarChart3 className="h-6 w-6 text-primary" />
      </div>
    </div>
  );
}

function Home() {
  const homeServices = homeServiceSlugs.map((s) => services.find((x) => x.slug === s)!);
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="absolute inset-0 grid-lines opacity-60" aria-hidden />
        <div className="absolute inset-0 bg-glow" aria-hidden />
        <div className="container-x relative grid items-center gap-12 pb-20 pt-36 lg:grid-cols-2 lg:pb-28 lg:pt-44">
          <Reveal>
            <p className="eyebrow">Rid Yenk — Digital That Deliver.</p>
            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.95] md:text-7xl">
              Turning digital ideas into <span className="text-primary">real impact.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-muted">
              Rid Yenk helps brands, businesses, creators, and personal brands grow online through strategic digital marketing, compelling content, and powerful brand positioning.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className={btn.primary}>Let's Work Together <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/services" className={btn.ghostInk}>Explore Our Services</Link>
            </div>
          </Reveal>
          <Reveal delay={150}><HeroVisual /></Reveal>
        </div>
        <div className="relative border-t border-ink-border">
          <p className="container-x py-5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-ink-muted">
            Digital Marketing • Branding • Social Media • Content • Web Design
          </p>
        </div>
      </section>

      <section className="container-x grid gap-12 py-24 md:py-32 lg:grid-cols-2">
        <SectionHead eyebrow="About Rid Yenk" title="Building brands that get seen, heard & remembered." />
        <Reveal delay={100} className="space-y-5 text-lg text-muted-foreground lg:pt-10">
          <p>Rid Yenk is a digital marketing brand built for businesses, creators, and personal brands who are ready to be taken seriously online.</p>
          <p>Through brand strategy, social media marketing, and content that connects, we help you establish a stronger digital presence — and turn online attention into meaningful opportunities.</p>
          <Link to="/about" className={cn(btn.dark, "mt-3")}>Learn More About Rid Yenk <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
      </section>

      <section className="bg-secondary py-24 md:py-32">
        <div className="container-x">
          <SectionHead eyebrow="Services" title="What I do" text="Digital marketing services designed to grow your visibility, audience, and brand." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homeServices.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 80}>
                <Link to="/services" hash={s.slug} className="group flex h-full flex-col rounded-2xl border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><s.icon className="h-6 w-6" /></span>
                  <h3 className="mt-6 text-lg font-bold">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.short}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">Learn More <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24 md:py-32">
        <SectionHead eyebrow="Why Rid Yenk" title="Why work with Rid Yenk?" center />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {why.map((w, i) => (
            <Reveal key={w.title} delay={i * 80} className="h-full">
              <div className="h-full bg-background p-8">
                <w.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-8 text-xl font-bold">{w.title}</h3>
                <p className="mt-2 text-muted-foreground">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink py-24 text-ink-foreground md:py-32">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">How it works</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold uppercase leading-tight md:text-5xl">A clear process from idea to impact.</h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="border-t border-ink-border pt-6">
                  <span className="font-display text-5xl font-black text-primary">{s.n}</span>
                  <h3 className="mt-4 text-xl font-bold uppercase">{s.t}</h3>
                  <p className="mt-2 text-ink-muted">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

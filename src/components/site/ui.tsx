import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const base = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
export const btn = {
  primary: cn(base, "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-glow"),
  dark: cn(base, "bg-ink text-ink-foreground hover:-translate-y-0.5 hover:bg-ink-soft"),
  outline: cn(base, "border border-border bg-background text-foreground hover:border-foreground"),
  ghostInk: cn(base, "border border-ink-border text-ink-foreground hover:bg-ink-soft"),
  light: cn(base, "bg-ink-foreground text-ink hover:-translate-y-0.5"),
};

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="absolute inset-0 grid-lines opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-glow" aria-hidden />
      <div className="container-x relative pb-20 pt-40 md:pb-28 md:pt-48">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold uppercase leading-[1.02] md:text-6xl lg:text-7xl">{title}</h1>
          {text && <p className="mt-6 max-w-2xl text-lg text-ink-muted">{text}</p>}
        </Reveal>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, text, center }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <Reveal className={cn("max-w-3xl", center && "mx-auto text-center")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-extrabold uppercase leading-[1.05] md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg text-muted-foreground">{text}</p>}
    </Reveal>
  );
}

export function CtaBand({ title = "READY TO GROW YOUR DIGITAL PRESENCE?", text = "Let's turn your ideas into digital impact.", button = "Start a Project" }: { title?: string; text?: string; button?: string }) {
  return (
    <section className="container-x py-20 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center text-ink-foreground md:px-16 md:py-24">
          <div className="absolute inset-0 grid-lines opacity-50" aria-hidden />
          <div className="absolute -bottom-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-primary/40 blur-3xl" aria-hidden />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold uppercase leading-tight md:text-5xl">{title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink-muted">{text}</p>
            <Link to="/contact" className={cn(btn.primary, "mt-9")}>{button} <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Placeholder({ label, className, children }: { label?: string; className?: string; children?: ReactNode }) {
  return (
    <div className={cn("relative flex items-center justify-center overflow-hidden bg-ink text-ink-muted", className)}>
      <div className="absolute inset-0 grid-lines opacity-70" aria-hidden />
      <div className="absolute inset-0 bg-glow opacity-80" aria-hidden />
      <div className="relative flex flex-col items-center gap-2 text-center">
        {children}
        {label && <span className="text-xs font-semibold uppercase tracking-[0.2em]">{label}</span>}
      </div>
    </div>
  );
}

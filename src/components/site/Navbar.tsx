import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { btn } from "./ui";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("font-display text-xl font-black tracking-tight", className)} aria-label="Rid Yenk home">
      RIDYENK<span className="text-primary">.</span>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <nav
        className={cn(
          "container-x flex h-16 items-center justify-between rounded-full border text-ink-foreground transition-all duration-300",
          scrolled || open ? "border-ink-border bg-ink/90 backdrop-blur-xl" : "border-transparent bg-transparent",
        )}
        aria-label="Main"
      >
        <Logo />
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink-foreground"
                activeProps={{ className: "!text-ink-foreground" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/contact" className={cn(btn.primary, "hidden px-5 py-2.5 lg:inline-flex")}>Let's Work Together</Link>
        <button className="rounded-full p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="container-x mt-2 animate-page rounded-3xl border border-ink-border bg-ink/95 py-6 text-ink-foreground backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} activeOptions={{ exact: l.to === "/" }} className="block border-b border-ink-border py-4 font-display text-2xl font-bold" activeProps={{ className: "text-primary" }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" className={cn(btn.primary, "mt-6 w-full")}>Let's Work Together</Link>
        </div>
      )}
    </header>
  );
}

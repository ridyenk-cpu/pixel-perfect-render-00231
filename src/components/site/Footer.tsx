import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Linkedin, AtSign, Music2, Mail } from "lucide-react";
import { EMAIL } from "@/lib/site-data";
import { Logo, navLinks } from "./Navbar";

const socials = [
  { label: "Instagram", icon: Instagram }, { label: "Facebook", icon: Facebook },
  { label: "X / Twitter", icon: Twitter }, { label: "LinkedIn", icon: Linkedin },
  { label: "Threads", icon: AtSign }, { label: "TikTok", icon: Music2 },
];
const footerServices = ["Digital Marketing", "Social Media", "Brand Strategy", "Content", "Web Design", "SEO"];

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo className="text-2xl" />
          <p className="mt-2 font-display font-semibold text-primary">Digital That Deliver.</p>
          <p className="mt-4 max-w-sm text-sm text-ink-muted">Helping brands, businesses, creators, and personal brands build stronger digital presences and grow online.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {socials.map(({ label, icon: Icon }) => (
              <a key={label} href="#" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-border text-ink-muted transition-colors hover:border-primary hover:text-primary">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest">Navigate</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-muted">
            {navLinks.map((l) => <li key={l.to}><Link to={l.to} className="hover:text-ink-foreground">{l.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-muted">
            {footerServices.map((s) => <li key={s}><Link to="/services" className="hover:text-ink-foreground">{s}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest">Contact</h3>
          <a href={`mailto:${EMAIL}`} className="mt-4 inline-flex items-center gap-2 text-sm text-ink-muted hover:text-primary"><Mail className="h-4 w-4" />{EMAIL}</a>
        </div>
      </div>
      <div className="border-t border-ink-border">
        <p className="container-x py-6 text-xs text-ink-muted">© 2026 Rid Yenk. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

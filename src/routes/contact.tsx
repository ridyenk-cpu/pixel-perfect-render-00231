import { createFileRoute } from "@tanstack/react-router";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { btn, PageHero } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { EMAIL } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Rid Yenk — Let's Build Something Digital" },
      { name: "description", content: "Tell Rid Yenk about your project. Get in touch for digital marketing, social media, branding, SEO and web design." },
      { property: "og:title", content: "Contact Rid Yenk" },
      { property: "og:description", content: "Have a project, idea, or brand you want to grow? Let's talk." },
    ],
  }),
  component: Contact,
});

const serviceOptions = ["Digital Marketing", "Social Media Management", "Brand Strategy", "Content Strategy", "Web Design", "SEO", "Digital Campaign", "Other"];
const budgets = ["Under $500", "$500 – $1,500", "$1,500 – $5,000", "$5,000+", "Not sure yet"];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  company: z.string().trim().min(1, "Please enter your company or brand").max(100),
  service: z.string().min(1, "Please choose a service"),
  budget: z.string().min(1, "Please choose a budget"),
  message: z.string().trim().min(10, "Tell me a bit more (at least 10 characters)").max(2000),
});
type Fields = z.infer<typeof schema>;
const empty: Fields = { name: "", email: "", company: "", service: "", budget: "", message: "" };

const input = "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);
  const set = (k: keyof Fields, v: string) => { setValues((s) => ({ ...s, [k]: v })); setErrors((e) => ({ ...e, [k]: undefined })); };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(values);
    if (!r.success) {
      const errs: typeof errors = {};
      r.error.issues.forEach((i) => { errs[i.path[0] as keyof Fields] ??= i.message; });
      setErrors(errs);
      return;
    }
    const d = r.data;
    const body = `Name: ${d.name}\nEmail: ${d.email}\nCompany / Brand: ${d.company}\nService: ${d.service}\nBudget: ${d.budget}\n\n${d.message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`New project enquiry — ${d.service}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field = (k: keyof Fields, label: string, el: React.ReactNode) => (
    <div>
      <label htmlFor={k} className="text-sm font-semibold">{label}</label>
      {el}
      {errors[k] && <p id={`${k}-err`} className="mt-1.5 text-xs font-medium text-destructive">{errors[k]}</p>}
    </div>
  );
  const aria = (k: keyof Fields) => ({ id: k, "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined, className: cn(input, errors[k] && "border-destructive") });

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's build something digital." text="Have a project, idea, or brand you want to grow? Tell me about it and let's explore how Rid Yenk can help." />
      <section className="container-x grid gap-12 py-20 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="rounded-3xl bg-ink p-8 text-ink-foreground">
            <Mail className="h-8 w-8 text-primary" />
            <h2 className="mt-6 text-2xl font-extrabold uppercase">Email directly</h2>
            <a href={`mailto:${EMAIL}`} className="mt-3 block break-all font-display text-xl font-bold text-primary-glow hover:underline">{EMAIL}</a>
            <p className="mt-6 text-sm text-ink-muted">Replies usually within 1–2 business days.</p>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">Prefer email? Contact <a href={`mailto:${EMAIL}`} className="font-semibold text-primary hover:underline">{EMAIL}</a></p>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-3">
          {sent ? (
            <div className="rounded-3xl border p-10 text-center shadow-card">
              <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
              <h2 className="mt-4 text-2xl font-extrabold uppercase">Almost there!</h2>
              <p className="mt-2 text-muted-foreground">Your email app should have opened with your message ready. Just hit send.</p>
              <button onClick={() => { setSent(false); setValues(empty); }} className={cn(btn.outline, "mt-6")}>Send another message</button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="grid gap-5 rounded-3xl border p-6 shadow-card sm:grid-cols-2 md:p-10">
              {field("name", "Full Name", <input {...aria("name")} value={values.name} onChange={(e) => set("name", e.target.value)} autoComplete="name" />)}
              {field("email", "Email Address", <input {...aria("email")} type="email" value={values.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" />)}
              <div className="sm:col-span-2">{field("company", "Company / Brand", <input {...aria("company")} value={values.company} onChange={(e) => set("company", e.target.value)} />)}</div>
              {field("service", "Service Needed", (
                <select {...aria("service")} value={values.service} onChange={(e) => set("service", e.target.value)}>
                  <option value="">Select a service</option>
                  {serviceOptions.map((o) => <option key={o}>{o}</option>)}
                </select>
              ))}
              {field("budget", "Budget", (
                <select {...aria("budget")} value={values.budget} onChange={(e) => set("budget", e.target.value)}>
                  <option value="">Select a budget</option>
                  {budgets.map((o) => <option key={o}>{o}</option>)}
                </select>
              ))}
              <div className="sm:col-span-2">{field("message", "Message", <textarea {...aria("message")} rows={6} value={values.message} onChange={(e) => set("message", e.target.value)} />)}</div>
              <button type="submit" className={cn(btn.primary, "sm:col-span-2")}>Send Message <Send className="h-4 w-4" /></button>
            </form>
          )}
        </Reveal>
      </section>
    </>
  );
}

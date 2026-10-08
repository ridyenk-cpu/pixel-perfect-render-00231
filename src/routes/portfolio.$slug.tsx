import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ImageIcon } from "lucide-react";
import { CtaBand, PageHero, Placeholder } from "@/components/site/ui";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Project not found — Rid Yenk" }, { name: "robots", content: "noindex" }] };
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} — Rid Yenk Portfolio` },
        { name: "description", content: project.description },
        { property: "og:title", content: `${project.title} — Rid Yenk` },
        { property: "og:description", content: project.description },
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={project.category} title={project.title} text={project.description} />
      <section className="container-x py-20">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground"><ArrowLeft className="h-4 w-4" /> All projects</Link>
        <Placeholder label="Project visuals coming soon" className="mt-8 aspect-[16/8] rounded-3xl"><ImageIcon className="h-10 w-10" /></Placeholder>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {[["The Challenge", "Details of the brand's starting point and goals will be shared here."], ["The Approach", "The strategy, creative direction and channels used will be outlined here."], ["The Outcome", "Results and key learnings from the project will be added here."]].map(([t, d]) => (
            <div key={t} className="border-t-2 border-primary pt-5">
              <h2 className="text-lg font-bold uppercase">{t}</h2>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

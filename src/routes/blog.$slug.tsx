import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CtaBand, PageHero } from "@/components/site/ui";
import { posts } from "@/lib/site-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Article not found — Rid Yenk" }, { name: "robots", content: "noindex" }] };
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | Rid Yenk Blog` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  return (
    <>
      <PageHero eyebrow={`${post.category} · ${post.date} · ${post.read} read`} title={post.title} />
      <article className="container-x max-w-3xl py-16">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground"><ArrowLeft className="h-4 w-4" /> All articles</Link>
        <p className="mt-8 text-xl font-medium">{post.excerpt}</p>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
          {post.body.map((para, i) => <p key={i}>{para}</p>)}
        </div>
      </article>
      <section className="container-x border-t py-16">
        <h2 className="text-2xl font-extrabold uppercase">Keep reading</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {more.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="rounded-2xl border p-6 transition-colors hover:border-primary">
              <p className="eyebrow">{p.category}</p>
              <h3 className="mt-3 font-bold">{p.title}</h3>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

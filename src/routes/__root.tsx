import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { btn } from "@/components/site/ui";

function NotFoundComponent() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink px-4 text-ink-foreground">
      <div className="absolute inset-0 grid-lines opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-glow" aria-hidden />
      <div className="relative max-w-lg text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 font-display text-8xl font-black md:text-9xl">404</h1>
        <h2 className="mt-4 text-2xl font-bold uppercase">This page went offline.</h2>
        <p className="mt-3 text-ink-muted">The page you're looking for doesn't exist or has been moved.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className={btn.primary}>Back to Home</Link>
          <Link to="/contact" className={btn.ghostInk}>Contact Rid Yenk</Link>
        </div>
      </div>
    </section>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong on our end. You can try refreshing or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className={btn.primary}>Try again</button>
          <a href="/" className={btn.outline}>Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Rid Yenk — Digital That Deliver" },
      { name: "description", content: "Rid Yenk is a digital marketing brand for social media, brand strategy, content, SEO and web design." },
      { name: "author", content: "Rid Yenk" },
      { property: "og:site_name", content: "Rid Yenk" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#050505" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Manrope:wght@400;500;600;700&display=swap" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main key={path} className="animate-page">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}

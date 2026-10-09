import {
  Megaphone, Share2, Compass, FileText, MonitorSmartphone, Search, Target, Users, Palette,
  Instagram, Facebook, Twitter, AtSign,
  type LucideIcon,
} from "lucide-react";

export const EMAIL = "ridyenk@gmail.com";

export type Social = { label: string; url: string; icon: LucideIcon };
export const SOCIALS: Social[] = [
  { label: "Instagram", url: "https://www.instagram.com/ridyenk/", icon: Instagram },
  { label: "Threads", url: "https://www.threads.net/@ridyenk", icon: AtSign },
  { label: "Facebook", url: "https://www.facebook.com/ridyenk", icon: Facebook },
  { label: "X / Twitter", url: "https://x.com/ridyenk", icon: Twitter },
];

export type Service = {
  slug: string; name: string; short: string; icon: LucideIcon;
  description: string; benefits: string[]; included: string[];
};

export const services: Service[] = [
  { slug: "digital-marketing", name: "Digital Marketing", icon: Megaphone,
    short: "Strategic digital campaigns designed to increase visibility, engagement, and growth.",
    description: "End-to-end digital marketing that connects your brand with the right audience across the channels that matter, with a clear strategy behind every move.",
    benefits: ["Greater online visibility", "Consistent, qualified engagement", "Clear direction for growth"],
    included: ["Marketing audit & strategy", "Channel planning", "Campaign execution", "Performance reporting"] },
  { slug: "social-media-management", name: "Social Media Management", icon: Share2,
    short: "Content planning, account management, audience engagement, and social media growth.",
    description: "Professional social media management that keeps your accounts active, on-brand, and growing, so you can focus on running your business.",
    benefits: ["Consistent brand presence", "Stronger community engagement", "Steady follower growth"],
    included: ["Content calendar", "Post creation & scheduling", "Community engagement", "Monthly insights"] },
  { slug: "content-strategy", name: "Content Strategy", icon: FileText,
    short: "Creating strategic content systems that attract, educate, engage, and convert audiences.",
    description: "A content system built around your audience: what to say, where to say it, and how each piece moves people closer to working with you.",
    benefits: ["Content with purpose", "Higher audience trust", "Better conversion from content"],
    included: ["Audience & topic research", "Content pillars", "Editorial calendar", "Repurposing framework"] },
  { slug: "brand-strategy", name: "Brand Strategy", icon: Compass,
    short: "Helping brands develop a clear identity, positioning, and digital presence.",
    description: "Define what makes your brand different and communicate it with clarity, from positioning and messaging to how you show up online.",
    benefits: ["Clear market positioning", "Consistent messaging", "Memorable brand identity"],
    included: ["Brand discovery workshop", "Positioning & messaging", "Audience personas", "Brand voice guide"] },
  { slug: "branding", name: "Branding", icon: Palette,
    short: "Visual identity systems that make your brand instantly recognizable.",
    description: "Visual identity work that turns your strategy into a look and feel people remember: logo direction, color, typography, and brand assets.",
    benefits: ["Professional first impression", "Recognition across platforms", "Cohesive brand assets"],
    included: ["Logo direction", "Color & typography system", "Social media templates", "Brand guidelines"] },
  { slug: "web-design", name: "Web Design", icon: MonitorSmartphone,
    short: "Modern, responsive websites designed to build credibility and convert visitors.",
    description: "Fast, modern, mobile-friendly websites designed to build credibility and turn visitors into enquiries and customers.",
    benefits: ["Credible online home", "Better visitor conversion", "Works on every device"],
    included: ["Site structure & copy guidance", "Custom responsive design", "SEO-ready setup", "Launch support"] },
  { slug: "seo", name: "SEO", icon: Search,
    short: "Helping brands improve their online visibility and reach the right audience through search.",
    description: "Search engine optimization that helps the right people find you when they are actively looking for what you offer.",
    benefits: ["Long-term organic visibility", "More qualified traffic", "Less reliance on paid ads"],
    included: ["SEO audit", "Keyword research", "On-page optimization", "Progress tracking"] },
  { slug: "digital-campaigns", name: "Digital Campaigns", icon: Target,
    short: "Planning and executing targeted campaigns across digital platforms.",
    description: "Focused campaigns for launches, promotions, and awareness, planned around a clear goal and measured from start to finish.",
    benefits: ["Focused, goal-driven outreach", "Coordinated multi-platform presence", "Measurable outcomes"],
    included: ["Campaign concept", "Creative & copy", "Platform setup", "Results analysis"] },
  { slug: "audience-growth", name: "Audience Growth", icon: Users,
    short: "Strategies designed to build engaged communities and expand online reach.",
    description: "Grow a community that actually cares about your brand, through smart content, collaborations, and engagement strategies.",
    benefits: ["Engaged, loyal audience", "Expanded reach", "Stronger personal brand"],
    included: ["Growth audit", "Engagement strategy", "Collaboration planning", "Growth reporting"] },
];

export const homeServiceSlugs = ["digital-marketing", "social-media-management", "brand-strategy", "content-strategy", "web-design", "seo", "digital-campaigns", "audience-growth"];

export type Project = { slug: string; title: string; category: string; description: string };
export const projectCategories = ["Social Media", "Branding", "Web Design", "Digital Marketing", "Content Strategy", "Campaigns"];
export const projects: Project[] = [
  { slug: "brand-growth-project", title: "Brand Growth Project", category: "Digital Marketing", description: "A full-funnel approach to growing an emerging brand's online presence." },
  { slug: "social-media-campaign", title: "Social Media Campaign", category: "Social Media", description: "A content-led social campaign built to spark engagement and reach." },
  { slug: "website-transformation", title: "Website Transformation", category: "Web Design", description: "Redesigning an outdated website into a modern, conversion-focused experience." },
  { slug: "digital-brand-strategy", title: "Digital Brand Strategy", category: "Branding", description: "Defining positioning, voice, and visual direction for a personal brand." },
  { slug: "content-system-build", title: "Content System Build", category: "Content Strategy", description: "A repeatable content framework that turns ideas into consistent output." },
  { slug: "product-launch-campaign", title: "Product Launch Campaign", category: "Campaigns", description: "A coordinated multi-platform launch plan from teaser to release." },
];

export type Post = { slug: string; title: string; category: string; excerpt: string; date: string; read: string; body: string[] };
export const blogCategories = ["Digital Marketing", "Social Media", "Branding", "Content", "SEO", "Business Growth"];
export const posts: Post[] = [
  { slug: "build-strong-digital-presence-2026", title: "How to Build a Strong Digital Presence in 2026", category: "Digital Marketing", date: "Sep 2026", read: "6 min",
    excerpt: "The fundamentals every brand needs to stand out online this year, from clarity to consistency.",
    body: ["A strong digital presence is no longer optional. Whether you run a business, lead an organization, or are building a personal brand, people will look you up online before they decide to trust you.", "Start with clarity. Define who you serve, what problem you solve, and why you are the right choice. Every piece of digital marketing becomes easier once this foundation is in place.", "Next, choose your channels deliberately. You do not need to be everywhere. Focus on the platforms where your audience already spends time, and show up consistently with content that is genuinely useful.", "Finally, make it easy to take the next step. A clear website, a simple way to get in touch, and a consistent brand across every touchpoint turn attention into real opportunities."] },
  { slug: "social-media-strategies-growing-brands", title: "5 Social Media Strategies Every Growing Brand Needs", category: "Social Media", date: "Aug 2026", read: "5 min",
    excerpt: "Practical social media marketing strategies that help growing brands earn attention and trust.",
    body: ["Social media marketing works best when it is intentional. Here are five strategies that consistently help growing brands.", "1. Build content pillars so your audience always knows what you stand for. 2. Prioritize conversations over broadcasts — reply, ask, and engage.", "3. Use short-form video to show the people and process behind your brand. 4. Repurpose your best ideas across formats instead of constantly starting from scratch.", "5. Review your insights monthly, double down on what works, and let go of what does not."] },
  { slug: "why-your-brand-needs-content-strategy", title: "Why Your Brand Needs a Content Strategy", category: "Content", date: "Aug 2026", read: "4 min",
    excerpt: "Posting more is not the answer. A content strategy makes every piece work harder.",
    body: ["Many brands create content without a plan, and then wonder why it is not producing results.", "A content strategy connects what you publish to what your business needs. It defines your audience, your core topics, the formats you use, and how each piece leads to action.", "With a strategy in place, content becomes a system rather than a scramble — and it compounds over time."] },
  { slug: "turn-followers-into-customers", title: "How to Turn Followers Into Customers", category: "Business Growth", date: "Jul 2026", read: "5 min",
    excerpt: "Followers are only the beginning. Here is how to guide your audience toward real action.",
    body: ["Growing an audience is valuable, but followers alone do not pay the bills.", "Bridge the gap by giving people clear next steps: a newsletter, a free resource, a consultation, or a simple offer.", "Build trust with proof — behind-the-scenes content, client stories, and transparent expertise. When people trust you, buying becomes the natural next step."] },
  { slug: "personal-brand-that-gets-noticed", title: "Building a Personal Brand That Gets Noticed", category: "Branding", date: "Jun 2026", read: "6 min",
    excerpt: "Personal branding is about being known for something specific. Here is how to get there.",
    body: ["Your personal brand is what people say about you when you are not in the room.", "Choose a clear focus, share your perspective consistently, and show your work publicly. Specificity beats being general every time.", "Over time, a well-built personal brand opens doors to clients, partnerships, and opportunities you could not have planned for."] },
  { slug: "digital-marketing-mistakes", title: "Digital Marketing Mistakes That Can Hold Your Brand Back", category: "SEO", date: "May 2026", read: "5 min",
    excerpt: "Avoid these common pitfalls that quietly limit your online brand growth.",
    body: ["Even good brands make digital marketing mistakes that slow their growth.", "The most common: no clear audience, inconsistent posting, ignoring SEO, a website that is hard to use on mobile, and never measuring results.", "The fix is rarely complicated. Start with strategy, stay consistent, and review your progress regularly."] },
];

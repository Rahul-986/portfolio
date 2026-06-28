import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Code2, ExternalLink, Layers3 } from "lucide-react";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) return {};

  return {
    title: `${project.title} Case Study`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      url: `/projects/${project.slug}`,
      title: `${project.title} — Engineering Case Study`,
      description: project.summary,
      images: project.screenshots[0]?.src ? [{ url: project.screenshots[0].src, alt: project.screenshots[0].alt }] : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `${siteConfig.url}/projects/${project.slug}`,
    author: { "@type": "Person", name: siteConfig.name, url: siteConfig.url },
    keywords: project.stack.join(", "),
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <nav aria-label="Case study navigation" className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0a0a0a]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/#projects" className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white">
            <ArrowLeft size={16} /> All projects
          </Link>
          <Link href="/" className="font-bold">RG<span className="text-blue-400">.</span></Link>
        </div>
      </nav>

      <header className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-28">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-mono text-blue-300">{project.status}</span>
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-zinc-600">{project.eyebrow}</span>
        </div>
        <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">{project.title}</h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">{project.summary}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold hover:bg-blue-400">Visit live project <ArrowUpRight size={15} /></a>}
          {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm"><Code2 size={15} /> View source</a>}
        </div>
        <dl className="mt-16 grid gap-6 border-y border-white/[0.07] py-7 sm:grid-cols-3">
          {[['Role', project.role], ['Timeline', project.timeline], ['Stack', project.stack.slice(0, 3).join(' · ')]].map(([label, value]) => (
            <div key={label}><dt className="text-xs font-mono uppercase tracking-widest text-zinc-600">{label}</dt><dd className="mt-2 text-sm text-zinc-300">{value}</dd></div>
          ))}
        </dl>
      </header>

      <div className="mx-auto max-w-6xl space-y-24 px-6 pb-28">
        <section className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="text-xs font-mono uppercase tracking-[0.2em] text-blue-400">01 · Context</p><h2 className="mt-4 text-3xl font-bold">Problem and users</h2></div>
          <div><p className="text-lg leading-8 text-zinc-400">{project.problem}</p><ul className="mt-8 space-y-4">{project.users.map((user) => <li key={user} className="flex gap-3 text-zinc-300"><Check className="mt-0.5 shrink-0 text-blue-400" size={18} />{user}</li>)}</ul></div>
        </section>

        <section className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="text-xs font-mono uppercase tracking-[0.2em] text-blue-400">02 · Ownership</p><h2 className="mt-4 text-3xl font-bold">My responsibilities</h2></div>
          <ul className="grid gap-4">{project.responsibilities.map((item) => <li key={item} className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-5 text-zinc-300">{item}</li>)}</ul>
        </section>

        <section>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-blue-400">03 · System design</p><h2 className="mt-4 text-3xl font-bold">Architecture</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">{project.architecture.map((layer, index) => <article key={layer.title} className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7"><div className="mb-5 flex items-center justify-between"><Layers3 className="text-blue-400" size={20} /><span className="font-mono text-xs text-zinc-700">0{index + 1}</span></div><h3 className="text-lg font-semibold">{layer.title}</h3><p className="mt-3 text-sm leading-6 text-zinc-500">{layer.detail}</p></article>)}</div>
          <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-mono text-zinc-400">{item}</span>)}</div>
        </section>

        <section>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-blue-400">04 · Engineering judgment</p><h2 className="mt-4 text-3xl font-bold">Difficult technical decisions</h2>
          <div className="mt-10 divide-y divide-white/[0.07] border-y border-white/[0.07]">{project.decisions.map((decision, index) => <article key={decision.title} className="grid gap-4 py-7 md:grid-cols-[3rem_0.8fr_1.2fr]"><span className="font-mono text-sm text-blue-400">0{index + 1}</span><h3 className="font-semibold">{decision.title}</h3><p className="text-sm leading-6 text-zinc-500">{decision.detail}</p></article>)}</div>
        </section>

        <section>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-blue-400">05 · Impact</p><h2 className="mt-4 text-3xl font-bold">Results and metrics</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{project.metrics.map((metric) => <div key={metric.label} className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6"><div className="text-3xl font-bold text-blue-300">{metric.value}</div><p className="mt-3 text-sm leading-6 text-zinc-500">{metric.label}</p></div>)}</div>
        </section>

        <section>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-blue-400">06 · Product</p><h2 className="mt-4 text-3xl font-bold">Screenshots and product views</h2>
          {project.screenshots.length ? <div className="mt-10 space-y-5">{project.screenshots.map((shot) => <figure key={shot.src} className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]"><Image src={shot.src} alt={shot.alt} width={1920} height={1200} className="h-auto w-full" priority /><figcaption className="border-t border-white/[0.07] px-5 py-4 text-sm text-zinc-500">{shot.caption}</figcaption></figure>)}</div> : <div className="mt-10 rounded-2xl border border-dashed border-white/10 p-10 text-center"><p className="text-zinc-400">Project screenshots are being prepared.</p><p className="mt-2 text-sm text-zinc-600">Only verified product media will be published here.</p></div>}
        </section>

        <section className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-blue-500/[0.08] to-transparent p-8 md:p-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="text-xs font-mono uppercase tracking-[0.2em] text-blue-400">Source and live links</p><p className="mt-4 max-w-2xl text-zinc-400">{project.sourceNote}</p></div><div className="flex shrink-0 gap-3">{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold">Live site <ExternalLink size={15} /></a>}{project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm"><Code2 size={15} /> Source</a>}</div></div>
        </section>
      </div>
    </main>
  );
}

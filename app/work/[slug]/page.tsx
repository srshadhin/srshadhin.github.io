import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/data/projects";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { FlowDiagram } from "@/components/shared/FlowDiagram";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
    openGraph: { title: study.title, description: study.summary },
  };
}

const steps = (study: NonNullable<ReturnType<typeof getCaseStudy>>) => [
  { label: "Problem", kind: "text" as const, content: study.problem },
  { label: "Constraints", kind: "list" as const, content: study.constraints },
  { label: "Architecture", kind: "text" as const, content: study.architecture },
  { label: "Engineering Decisions", kind: "list" as const, content: study.decisions },
  { label: "Trade-offs", kind: "list" as const, content: study.tradeoffs },
  { label: "Implementation", kind: "text" as const, content: study.implementation },
  { label: "Lessons Learned", kind: "list" as const, content: study.lessons },
];

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const studySteps = steps(study);

  return (
    <article className="pb-28 pt-16">
      <Container>
        <Reveal>
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-accent"
          >
            <span aria-hidden="true">←</span> Back to systems
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8">
            <span className="font-mono-tight text-sm text-accent">{study.index}</span>
            <h1 className="mt-2 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              {study.title}
            </h1>
            <p className="mt-2 font-mono-tight text-sm text-fg-subtle">{study.context}</p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg-muted">
              {study.summary}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border px-2.5 py-1 font-mono-tight text-[11px] text-fg-subtle"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-bg-elevated/40 p-6 sm:p-10">
            <div className="min-w-max md:min-w-0">
              <FlowDiagram nodes={study.flow} variant="hero" />
            </div>
          </div>
        </Reveal>

        <ol className="mt-16 flex flex-col">
          {studySteps.map((step, i) => (
            <Reveal as="li" key={step.label} delay={Math.min(i * 0.04, 0.2)}>
              <div className="relative flex gap-6 pb-12 last:pb-0">
                <div className="flex flex-col items-center">
                  <span
                    className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent-line font-mono-tight text-[10px] text-accent"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  {i < studySteps.length - 1 && (
                    <span className="mt-2 w-px flex-1 bg-border" aria-hidden="true" />
                  )}
                </div>
                <div className="flex-1 pb-2">
                  <h2 className="font-mono-tight text-xs uppercase tracking-[0.18em] text-fg-subtle">
                    {step.label}
                  </h2>
                  {step.kind === "text" ? (
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-fg">
                      {step.content as string}
                    </p>
                  ) : (
                    <ul className="mt-3 flex max-w-2xl flex-col gap-3">
                      {(step.content as string[]).map((item) => (
                        <li key={item} className="flex gap-3 text-base leading-relaxed text-fg">
                          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        {study.links && study.links.length > 0 && (
          <Reveal className="mt-4 flex flex-wrap gap-4 border-t border-border pt-8">
            {study.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border-strong px-4 py-2.5 text-sm font-medium text-fg transition-colors hover:border-accent-line hover:text-accent-strong"
              >
                {link.label}
              </a>
            ))}
          </Reveal>
        )}
      </Container>
    </article>
  );
}

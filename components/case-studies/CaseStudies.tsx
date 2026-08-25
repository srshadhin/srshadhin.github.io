import Link from "next/link";
import { caseStudies } from "@/data/projects";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { FlowDiagram } from "@/components/shared/FlowDiagram";

export function CaseStudies() {
  return (
    <section id="work" className="border-t border-border py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Systems I've Worked On"
            title="Engineering case studies, not a project list."
            description="Generalized write-ups of the type of problem, constraints and trade-offs — without exposing confidential architecture or internal data."
          />
        </Reveal>

        <div className="mt-14 flex flex-col gap-6">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={i * 0.05}>
              <Link
                href={`/work/${study.slug}`}
                className="group block rounded-2xl border border-border bg-bg-elevated/30 p-6 transition-colors duration-300 hover:border-accent-line hover:bg-bg-elevated/60 sm:p-8"
              >
                <div className="flex flex-col gap-8">
                  <div className="max-w-2xl">
                    <span className="font-mono-tight text-sm text-accent">{study.index}</span>
                    <h3 className="mt-2 text-xl font-semibold text-fg sm:text-2xl">
                      {study.title}
                    </h3>
                    <p className="mt-1.5 font-mono-tight text-xs text-fg-subtle">
                      {study.context}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-fg-muted">{study.summary}</p>
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
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors group-hover:text-accent-strong">
                      Read case study
                      <span
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </span>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-border bg-bg/60 p-5 sm:p-6">
                    <div className="min-w-max md:min-w-0">
                      <FlowDiagram nodes={study.flow} variant="compact" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { timeline } from "@/data/timeline";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function Timeline() {
  return (
    <section className="border-t border-border py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Career Progression" title="Engineering timeline" />
        </Reveal>

        <ol className="mt-14 flex flex-col">
          {timeline.map((entry, i) => (
            <Reveal as="li" key={entry.company} delay={i * 0.05}>
              <div className="relative flex gap-6 pb-12 last:pb-0">
                <div className="flex flex-col items-center">
                  <span
                    className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${
                      entry.current ? "bg-accent" : "border border-border-strong bg-bg"
                    }`}
                    aria-hidden="true"
                  />
                  {i < timeline.length - 1 && (
                    <span className="mt-2 w-px flex-1 bg-border" aria-hidden="true" />
                  )}
                </div>

                <div className="flex-1 pb-2">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-base font-semibold text-fg">
                      {entry.company}
                      {entry.companyNote && (
                        <span className="ml-2 font-normal text-fg-subtle">
                          — {entry.companyNote}
                        </span>
                      )}
                    </h3>
                    <span className="font-mono-tight text-xs text-fg-subtle">
                      {entry.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-accent">{entry.role}</p>
                  <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-fg-muted">
                    {entry.focus}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {entry.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border px-2.5 py-1 font-mono-tight text-[11px] text-fg-subtle"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

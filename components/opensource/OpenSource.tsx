import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { ossProjects } from "@/data/opensource";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function OpenSource() {
  return (
    <section className="border-t border-border py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Open Source & Experiments" title="Code outside of work" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {ossProjects.map((project, i) => {
            const isExternal = project.href.startsWith("http");
            const content = (
              <>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-fg">{project.name}</h3>
                  {project.status === "planned" ? (
                    <span className="flex items-center gap-1 whitespace-nowrap rounded-full border border-dashed border-border-strong px-2.5 py-1 font-mono-tight text-[10px] text-fg-subtle">
                      <Clock size={11} /> planned
                    </span>
                  ) : (
                    <span className="whitespace-nowrap rounded-full border border-border px-2.5 py-1 font-mono-tight text-[10px] text-accent">
                      case study
                    </span>
                  )}
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border px-2.5 py-1 font-mono-tight text-[11px] text-fg-subtle"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  {project.status === "planned" ? "View GitHub profile" : "Read case study"}
                  <ArrowRight size={14} aria-hidden="true" />
                </span>
              </>
            );

            const className =
              "group block h-full rounded-xl border border-border bg-bg-elevated/40 p-6 transition-colors duration-300 hover:border-accent-line hover:bg-bg-elevated/70";

            return (
              <Reveal key={project.name} delay={i * 0.06}>
                {isExternal ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {content}
                  </a>
                ) : (
                  <Link href={project.href} className={className}>
                    {content}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

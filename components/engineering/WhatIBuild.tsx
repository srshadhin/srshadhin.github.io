import { CreditCard, Server, Workflow, Database, Boxes, type LucideIcon } from "lucide-react";
import { whatIBuild } from "@/data/build";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

const icons: LucideIcon[] = [CreditCard, Server, Workflow, Database, Boxes];

export function WhatIBuild() {
  return (
    <section id="engineering" className="border-t border-border py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="What I Build" title="Systems, not just screens." />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whatIBuild.map((card, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={card.title} delay={i * 0.06}>
                <article className="group h-full rounded-xl border border-border bg-bg-elevated/40 p-6 transition-colors duration-300 hover:border-accent-line hover:bg-bg-elevated/70">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border-strong text-accent transition-colors group-hover:border-accent-line">
                    <Icon size={17} strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-fg">{card.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">
                    {card.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border px-2.5 py-1 font-mono-tight text-[11px] text-fg-subtle"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

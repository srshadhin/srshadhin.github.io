import { technologies } from "@/data/technologies";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function TechConstellation() {
  return (
    <section className="border-t border-border py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Toolkit"
            title="A technology constellation, not a rating chart."
            description="Grouped by where each tool actually earns its place. Hover or focus a name for context."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {technologies.map((group) => (
            <Reveal key={group.group}>
              <h3 className="font-mono-tight text-xs uppercase tracking-[0.18em] text-fg-subtle">
                {group.group}
              </h3>
              <div className="mt-4">
                {group.items.map((tech) => (
                  <div key={tech.name} className="group border-b border-border/70 last:border-none">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-2.5 text-left text-sm text-fg transition-colors hover:text-accent focus-visible:text-accent"
                    >
                      <span className="font-mono-tight">{tech.name}</span>
                      <span
                        aria-hidden="true"
                        className="text-xs text-fg-subtle opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
                      >
                        i
                      </span>
                    </button>
                    <p className="max-h-0 overflow-hidden text-xs leading-relaxed text-fg-muted opacity-0 transition-all duration-300 group-hover:max-h-16 group-hover:pb-3 group-hover:opacity-100 group-focus-within:max-h-16 group-focus-within:pb-3 group-focus-within:opacity-100">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

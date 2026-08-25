import { principles } from "@/data/philosophy";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function Philosophy() {
  return (
    <section className="border-t border-border py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How I Think"
            title="How I think about systems"
            description="Not generic advice — the assumptions that actually shape how I approach backend work."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {principles.map((principle, i) => (
            <Reveal key={principle.title} delay={i * 0.05} className="bg-bg">
              <div className="h-full bg-bg-elevated/40 p-6 sm:p-7">
                <span className="font-mono-tight text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-semibold text-fg">{principle.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">
                  {principle.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

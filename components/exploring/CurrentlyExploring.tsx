import { exploring } from "@/data/exploring";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";

export function CurrentlyExploring() {
  return (
    <section className="border-t border-border py-20">
      <Container>
        <Reveal>
          <div className="rounded-2xl border border-dashed border-border-strong bg-transparent p-6 sm:p-10">
            <p className="font-mono-tight text-xs uppercase tracking-[0.2em] text-accent">
              Currently Exploring
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-fg-muted">
              Experienced doesn&apos;t mean finished learning. These are active areas of study,
              not claimed strengths.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {exploring.map((topic) => (
                <li
                  key={topic}
                  className="rounded-full border border-dashed border-border-strong px-3.5 py-1.5 font-mono-tight text-xs text-fg-muted"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

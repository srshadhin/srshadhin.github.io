import { hobbies } from "@/data/hobbies";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";

export function OutsideTheCode() {
  return (
    <section className="border-t border-border py-16">
      <Container>
        <Reveal>
          <p className="font-mono-tight text-xs uppercase tracking-[0.2em] text-fg-subtle">
            Outside the Code
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {hobbies.map((hobby) => (
              <li
                key={hobby.label}
                className="flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-sm text-fg-muted"
              >
                <span aria-hidden="true">{hobby.emoji}</span>
                {hobby.label}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

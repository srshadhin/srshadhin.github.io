import { profile } from "@/data/profile";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function About() {
  const { about, location, yearsExperience } = profile;
  return (
    <section id="about" className="border-t border-border py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <SectionHeading eyebrow="About" title="Who I am" />
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-lg leading-relaxed text-fg">{about.lede}</p>
            <p className="mt-4 text-base leading-relaxed text-fg-muted">{about.body}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {about.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-border px-3 py-1.5 font-mono-tight text-xs text-fg-subtle"
                >
                  {interest}
                </span>
              ))}
            </div>

            <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-2">
              <div>
                <dt className="font-mono-tight text-xs uppercase tracking-wide text-fg-subtle">
                  Experience
                </dt>
                <dd className="mt-1.5 text-sm text-fg-muted">
                  {yearsExperience} years, backend-focused
                </dd>
              </div>
              <div>
                <dt className="font-mono-tight text-xs uppercase tracking-wide text-fg-subtle">
                  Based in
                </dt>
                <dd className="mt-1.5 text-sm text-fg-muted">{location}</dd>
              </div>
              <div>
                <dt className="font-mono-tight text-xs uppercase tracking-wide text-fg-subtle">
                  Education
                </dt>
                <dd className="mt-1.5 text-sm text-fg-muted">
                  {about.education.degree}, {about.education.institution}
                </dd>
              </div>
              <div>
                <dt className="font-mono-tight text-xs uppercase tracking-wide text-fg-subtle">
                  Period
                </dt>
                <dd className="mt-1.5 text-sm text-fg-muted">{about.education.period}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

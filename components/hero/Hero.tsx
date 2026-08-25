import { profile } from "@/data/profile";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { FlowDiagram } from "@/components/shared/FlowDiagram";
import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";

const heroFlow = ["Client", "API", "Service", "Queue", "Worker", "Database", "Settlement"];

export function Hero() {
  return (
    <section id="top" className="relative pb-24 pt-20 sm:pt-28">
      <Container>
        <Reveal>
          <div className="flex items-center gap-2 font-mono-tight text-xs text-fg-muted">
            <span className="relative flex h-2 w-2">
              {profile.status.active && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              )}
              <span
                className={`relative inline-flex h-2 w-2 rounded-full ${
                  profile.status.active ? "bg-accent" : "bg-fg-subtle"
                }`}
              />
            </span>
            {profile.status.label}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-fg sm:text-6xl">
            {profile.tagline}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
            {profile.supportingLine}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 font-mono-tight text-sm text-fg-subtle">
            {profile.identityStack.join(" · ")}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-bg-elevated px-4 py-2.5 text-sm font-medium text-fg transition-colors hover:border-accent-line hover:text-accent-strong"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-bg-elevated px-4 py-2.5 text-sm font-medium text-fg transition-colors hover:border-accent-line hover:text-accent-strong"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-1.5 px-2 py-2.5 text-sm font-medium text-accent transition-colors hover:text-accent-strong"
            >
              Explore My Work
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.3} className="mt-20">
          <p className="text-center font-mono-tight text-xs uppercase tracking-[0.22em] text-fg-subtle">
            Behind every transaction is a system
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-bg-elevated/40 p-6 sm:p-10">
            <div className="min-w-max md:min-w-0">
              <FlowDiagram nodes={heroFlow} variant="hero" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

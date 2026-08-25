import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";
import { profile } from "@/data/profile";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-28">
      <Container className="text-center">
        <Reveal>
          <p className="font-mono-tight text-xs uppercase tracking-[0.2em] text-accent">
            Let&apos;s Build
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Have a system worth building?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-fg-muted">
            I&apos;m interested in backend engineering, distributed systems, fintech, APIs and
            technically challenging products.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.links.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent-strong"
            >
              <Mail size={16} />
              {profile.links.email}
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent-line hover:text-accent-strong"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent-line hover:text-accent-strong"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

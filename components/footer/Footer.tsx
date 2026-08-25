import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";
import { profile } from "@/data/profile";
import { Container } from "@/components/shared/Container";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-fg">{profile.name}</p>
          <p className="mt-1 font-mono-tight text-xs text-fg-subtle">
            Backend Engineer · Python · Go · Distributed Systems
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-accent"
          >
            <GithubIcon size={15} /> GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-accent"
          >
            <LinkedinIcon size={15} /> LinkedIn
          </a>
        </div>

        <p className="font-mono-tight text-xs text-fg-subtle">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </Container>
    </footer>
  );
}

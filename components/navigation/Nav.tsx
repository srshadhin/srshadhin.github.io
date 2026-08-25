"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "@/components/shared/Container";
import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Engineering", href: "/#engineering" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const reduceMotion = usePrefersReducedMotion();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/#top"
          className="font-mono-tight text-sm font-medium text-fg"
          onClick={() => setOpen(false)}
        >
          {profile.shortName}
          <span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 border-l border-border pl-6">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-fg-muted transition-colors hover:text-accent"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-fg-muted transition-colors hover:text-accent"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </nav>

        <button
          type="button"
          className="flex items-center justify-center rounded-md p-2 text-fg md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={reduceMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
            animate={reduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border bg-bg md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-3 text-base text-fg-muted transition-colors hover:bg-bg-elevated hover:text-fg"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex items-center gap-5 border-t border-border px-2 pt-4">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-fg-muted hover:text-accent"
                >
                  <GithubIcon size={16} /> GitHub
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-fg-muted hover:text-accent"
                >
                  <LinkedinIcon size={16} /> LinkedIn
                </a>
              </div>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

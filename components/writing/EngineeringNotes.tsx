import { articles } from "@/data/articles";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function EngineeringNotes() {
  return (
    <section className="border-t border-border py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Engineering Notes"
            title="A technical notebook, in progress"
            description="Draft topics — full write-ups are on the way, not published yet."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <Reveal key={article.title} delay={i * 0.05}>
              <article className="flex h-full flex-col rounded-xl border border-border bg-bg-elevated/30 p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono-tight text-[11px] uppercase tracking-wide text-accent">
                    {article.category}
                  </span>
                  <span className="rounded-full border border-dashed border-border-strong px-2 py-0.5 font-mono-tight text-[10px] text-fg-subtle">
                    draft
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold leading-snug text-fg">
                  {article.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">{article.teaser}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

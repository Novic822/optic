type LegalSection = {
  heading: string;
  paragraphs: string[];
};

type LegalDocumentProps = {
  title: string;
  updated: string;
  intro: string[];
  sections: LegalSection[];
};

export default function LegalDocument({
  title,
  updated,
  intro,
  sections,
}: LegalDocumentProps) {
  return (
    <article className="bg-silver pt-32 pb-24 lg:pb-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <span className="text-xs tracking-[0.25em] uppercase text-gold font-body font-medium">
          {updated}
        </span>
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mt-4 leading-tight">
          {title}
        </h1>
        <div className="gold-rule mt-8 max-w-16" />

        <div className="mt-10 space-y-4">
          {intro.map((p) => (
            <p key={p.slice(0, 40)} className="text-navy/60 text-base leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                {section.heading}
              </h2>
              <div className="space-y-3">
                {section.paragraphs.map((p) => (
                  <p
                    key={p.slice(0, 40)}
                    className="text-navy/60 text-base leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}

import type { Dictionary } from "@/i18n/get-dictionary";
import SectionHeading from "@/components/shared/section-heading";

type FaqSectionProps = {
  copy: Dictionary["contactPage"]["faq"];
};

export default function FaqSection({ copy }: FaqSectionProps) {
  return (
    <section className="py-24 lg:py-32 bg-silver">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <SectionHeading label={copy.label} title={copy.title} />
        <dl className="space-y-6">
          {copy.items.map((item) => (
            <div
              key={item.question}
              className="bg-white rounded-2xl p-6 lg:p-8 border border-navy/5"
            >
              <dt className="font-display text-xl font-semibold text-navy">
                {item.question}
              </dt>
              <dd className="mt-3 text-navy/55 text-sm leading-relaxed">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

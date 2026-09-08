const PLACE_URL =
  "https://www.google.com/maps/place/OCULUS+dr+Magdalena+Turek/@52.0889849,16.6451353,17z/data=!3m1!4b1!4m6!3m5!1s0x4705b107f851e7a9:0xcde61effdea9a636!8m2!3d52.0889849!4d16.6451353!16s%2Fg%2F1thg94h0";

const EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1216!2d16.6451353!3d52.0889849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4705b107f851e7a9%3A0xcde61effdea9a636!2sOCULUS%20dr%20Magdalena%20Turek!5e0!3m2!1spl!2spl!4v1";

type ContactMapProps = {
  title: string;
  address: string;
  directions: string;
  iframeTitle: string;
};

export default function ContactMap({
  title,
  address,
  directions,
  iframeTitle,
}: ContactMapProps) {
  return (
    <section className="h-[400px] lg:h-[500px] relative">
      <iframe
        title={iframeTitle}
        src={EMBED_URL}
        className="w-full h-full border-0 grayscale contrast-[1.1]"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="absolute top-6 left-6 bg-white rounded-2xl shadow-lg p-5 max-w-xs">
        <p className="font-display text-lg font-semibold text-navy">{title}</p>
        <p className="text-navy/50 text-sm mt-1">{address}</p>
        <a
          href={PLACE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold text-sm mt-2 inline-block hover:underline"
        >
          {directions}
        </a>
      </div>
    </section>
  );
}

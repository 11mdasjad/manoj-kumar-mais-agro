import Link from "next/link";
export default function SectionHeading({
  eyebrow,
  title,
  description,
  link,
  light = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  link?: { href: string; label: string };
  light?: boolean;
}) {
  return (
    <div className={`section-heading ${light ? "heading-light" : ""}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {link && (
        <Link href={link.href} className="text-link">
          {link.label}
        </Link>
      )}
    </div>
  );
}

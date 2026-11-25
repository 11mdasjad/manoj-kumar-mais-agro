import { notFound } from "next/navigation";
import Image from "next/image";
import { Check } from "lucide-react";
import { services } from "@/data/services";
import PageIntro from "@/components/PageIntro";
import InquiryForm from "@/components/InquiryForm";
import { pageMetadata } from "@/lib/metadata";
export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s
    ? pageMetadata(s.title, s.description, `/services/${slug}`, s.image)
    : { title: "Service not found" };
}
export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  return (
    <>
      <PageIntro
        eyebrow="PROPERTY SERVICES"
        title={s.title}
        description={s.description}
      />
      <div className="container detail-layout section">
        <div>
          <div className="service-detail-image">
            <Image
              src={s.image}
              alt={s.title}
              fill
              sizes="(max-width:800px) 100vw, 65vw"
            />
          </div>
          <section className="detail-section">
            <p className="eyebrow">{s.eyebrow}</p>
            <h2>How we can support you.</h2>
            <ul className="check-list">
              {s.scope.map((x) => (
                <li key={x}>
                  <Check size={20} />
                  {x}
                </li>
              ))}
            </ul>
          </section>
          <div className="documentation-note">
            <h3>Start with what matters to you.</h3>
            <p>
              Tell us your preferred location, property type, and the questions
              you’d like answered. Our team will discuss the relevant service
              scope and next steps with you.
            </p>
          </div>
        </div>
        <aside className="inquiry-panel">
          <p className="eyebrow">PERSONAL GUIDANCE</p>
          <h2>Let’s talk it through.</h2>
          <InquiryForm property={s.title} />
        </aside>
      </div>
    </>
  );
}

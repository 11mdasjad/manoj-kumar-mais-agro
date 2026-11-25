// Publish only testimonials approved by the customer. An empty set renders nothing.
export interface Testimonial {
  name: string;
  context: string;
  quote: string;
  approved: boolean;
}
export default function TestimonialsSection({
  testimonials = [],
}: {
  testimonials?: Testimonial[];
}) {
  const approved = testimonials.filter((t) => t.approved);
  if (!approved.length) return null;
  return (
    <section className="container section">
      <p className="eyebrow">CLIENT EXPERIENCES</p>
      <h2>Stories from our community.</h2>
      <div className="property-grid">
        {approved.map((t) => (
          <figure className="testimonial" key={`${t.name}-${t.context}`}>
            <blockquote>“{t.quote}”</blockquote>
            <figcaption>
              <strong>{t.name}</strong>
              <span>{t.context}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

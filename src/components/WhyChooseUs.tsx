import {
  FileCheck2,
  Compass,
  Handshake,
  ClipboardCheck,
  Landmark,
  MessagesSquare,
} from "lucide-react";
const items = [
  {
    Icon: FileCheck2,
    title: "Documentation guidance",
    text: "Understand the paperwork behind your property.",
  },
  {
    Icon: Compass,
    title: "Guided site visits",
    text: "See the location and ask the questions that matter.",
  },
  {
    Icon: Handshake,
    title: "Personal buyer support",
    text: "A dedicated conversation, from shortlist to next steps.",
  },
  {
    Icon: ClipboardCheck,
    title: "Clear property information",
    text: "Discuss specifications, pricing, and availability.",
  },
  {
    Icon: MessagesSquare,
    title: "Property advisory",
    text: "Explore options around your purpose and priorities.",
  },
  {
    Icon: Landmark,
    title: "Registration assistance",
    text: "Get help navigating documentation and coordination.",
  },
];
export default function WhyChooseUs({
  compact = false,
}: {
  compact?: boolean;
}) {
  if (compact)
    return (
      <div
        className="trust-strip"
        aria-label="Support throughout your property journey"
      >
        {items.slice(0, 3).map(({ Icon, title }) => (
          <div key={title}>
            <span className="trust-icon">
              <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <span>{title}</span>
          </div>
        ))}
      </div>
    );
  return (
    <section className="container section">
      <div className="center-heading">
        <p className="eyebrow">THOUGHTFUL FROM THE START</p>
        <h2>Confidence at every step.</h2>
        <p>Property decisions deserve time, clarity, and people who listen.</p>
      </div>
      <div className="values-grid">
        {items.map(({ Icon, title, text }) => (
          <div key={title}>
            <Icon size={30} strokeWidth={1.3} />
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

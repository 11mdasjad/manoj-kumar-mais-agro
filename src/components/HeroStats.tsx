import { Building2, CalendarDays, MapPin, ShieldCheck, UsersRound } from "lucide-react";

// Figures supplied in the owner's reference banner.
const stats = [
  { category: "Experience", value: "10", suffix: "+", label: "Years in real estate", Icon: CalendarDays },
  { category: "Delivery", value: "250", suffix: "+", label: "Developed & handed over", Icon: Building2 },
  { category: "Assurance", value: "100", suffix: "%", label: "Verified legal clear titles", Icon: ShieldCheck },
  { category: "Community", value: "1,200", suffix: "+", label: "Happy homeowners & investors", Icon: UsersRound },
];

export default function HeroStats() {
  return (
    <section className="hero-stats" aria-labelledby="hero-stats-title">
      <div className="container">
        <div className="hero-stats-heading">
          <h2 id="hero-stats-title">Our journey, in numbers.</h2>
          <span><MapPin size={15} aria-hidden="true" /> Bhubaneswar, Odisha</span>
        </div>
        <dl className="hero-stats-grid">
          {stats.map(({ category, value, suffix, label, Icon }) => (
            <div className="hero-stat-card" key={label}>
              <dt>
                <span className="hero-stat-icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.7} />
                </span>
                {category}
              </dt>
              <dd>
                <span className="hero-stat-value">{value}<span>{suffix}</span></span>
                <span className="hero-stat-caption">{label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

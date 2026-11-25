import { Building2, CalendarDays, ShieldCheck, UsersRound } from "lucide-react";

// Figures supplied in the owner's reference banner.
const stats = [
  { value: "10", suffix: "+", label: "Years in real estate", Icon: CalendarDays },
  { value: "250", suffix: "+", label: "Developed & handed over", Icon: Building2 },
  { value: "100", suffix: "%", label: "Verified legal clear titles", Icon: ShieldCheck },
  { value: "1,200", suffix: "+", label: "Happy homeowners & investors", Icon: UsersRound },
];

export default function HeroStats() {
  return (
    <section className="hero-stats" aria-label="Mais Agro House at a glance">
      <div className="container">
        <dl className="hero-stats-grid">
          {stats.map(({ value, suffix, label, Icon }) => (
            <div className="hero-stat-card" key={label}>
              <span className="hero-stat-icon" aria-hidden="true">
                <Icon size={21} strokeWidth={1.7} />
              </span>
              <dt>{label}</dt>
              <dd>{value}<span>{suffix}</span></dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

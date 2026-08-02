import { stats } from "@/lib/home-content";

export default function StatsSection() {
  return (
    <section className="stats">
      <div className="wrap">
        <div className="stats-grid">
          {stats.map((item) => (
            <div key={item.label} className="stat">
              <div className="stat-num">
                {item.value}
                {item.suffix ? (
                  <span className="stat-plus">{item.suffix}</span>
                ) : null}
              </div>
              <p className="stat-label">{item.label}</p>
              <span className="stat-line" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

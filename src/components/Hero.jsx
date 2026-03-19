export default function Hero() {
  const services = [
    ["#01", "Acting & Film"],
    ["#02", "Action & Stunts"],
    ["#03", "Music & Comics"],
    ["#04", "Philanthropy"],
  ];

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />

      {/* Portrait — right side */}
      <div className="hero-photo-wrap">
        <img
          src="https://variety.com/wp-content/uploads/2020/12/Keanu_Reeves.png"
          alt="Keanu Reeves"
        />
      </div>

      {/* Noise texture */}
      <div className="hero-noise" />

      {/* Main content */}
      <div className="hero-content">
        <div className="hero-eyebrow">Beirut · Born 1964 · Hollywood Icon</div>
        <h1 className="hero-title">
          Keanu<br /><em>Reeves</em>
        </h1>
        <div className="hero-tagline">
          <strong>Be excellent to each other.</strong>
          <p>
            Four decades of iconic cinema — from The Matrix to John Wick —
            one of Hollywood's most beloved and genuinely kind legends.
          </p>
        </div>
        <div className="hero-actions">
          <a href="#about" className="btn-primary">
            Discover More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
            </svg>
          </a>
          <a href="#meet-greet" className="btn-outline">Book Meet & Greet</a>
        </div>
      </div>

      {/* Service tags — right bottom */}
      <div className="hero-services">
        {services.map(([n, l], i) => (
          <div key={i}>
            <span className="svc-num">{n}</span>
            <span className="svc-name">{l}</span>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section className="about-full" id="about">
      <div className="af-image-col sr">
        <div className="af-img-wrap">
          <img
            src="https://www.nfi.edu/wp-content/uploads/2023/01/image22.png"
            alt="Keanu Reeves"
          />
          <div className="af-img-caption">
            <span>Beirut, Lebanon · Born 1964</span>
            <span>Raised in Toronto, Canada</span>
          </div>
        </div>
        <div className="af-credentials">
          {[
            ["4+", "Decades of Film"],
            ["100+", "Film & TV Credits"],
            ["$4B+", "Box Office (John Wick)"],
            ["300M+", "Books Donated*"],
          ].map(([n, l]) => (
            <div className="af-cred" key={l}>
              <span className="af-cred-n">{n}</span>
              <span className="af-cred-l">{l}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="af-text-col sr d1">
        <span className="section-tag">The Legend</span>
        <h2 className="af-heading">
          More Than an Actor —<br /><em>A Cultural Icon</em>
        </h2>
        <div className="af-body">
          <p>
            Keanu Charles Reeves was born on September 2, 1964 in Beirut, Lebanon,
            to an English costume designer mother and a Hawaiian-Chinese geologist father.
            Raised in Toronto after his parents' separation, Reeves dropped out of school
            to pursue acting — a decision that reshaped Hollywood forever.
          </p>
          <p>
            His breakthrough came with <strong>Bill &amp; Ted's Excellent Adventure</strong> (1989),
            followed by career-defining roles in <strong>Point Break</strong> (1991),
            <strong> Speed</strong> (1994), and the franchise that made him a global superstar —
            <strong> The Matrix</strong> (1999). In 2014, he reinvented himself once more with
            <strong> John Wick</strong>, creating one of cinema's most enduring action icons
            across four blockbuster installments. In 2025, he reprised the role in the
            spin-off <strong>Ballerina</strong>.
          </p>
          <p>
            Beyond acting, Reeves is co-founder of <strong>ARCH Motorcycle</strong>, a custom
            manufacturer; creator of the <strong>BRZRKR</strong> comic franchise (adapted for
            Netflix); bassist of rock band <strong>Dogstar</strong>; and a dedicated philanthropist
            known for his extraordinary generosity to crew members and cancer research charities.
            In 2022, <em>Time</em> magazine named him one of the 100 most influential people
            in the world. He made his Broadway debut in 2025 in <em>Waiting for Godot</em>.
          </p>
        </div>
        <div className="af-tags">
          {[
            "The Matrix Franchise · 1999–2021",
            "John Wick Franchise · 2014–2025",
            "ARCH Motorcycle · Co-Founder",
            "BRZRKR · Creator & Writer",
            "Dogstar · Bassist",
            "Time 100 Most Influential · 2022",
          ].map((t) => (
            <span className="af-tag" key={t}>{t}</span>
          ))}
        </div>
        <div className="af-cta-row">
          <a href="#discography" className="cta-btn">
            Explore Filmography
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

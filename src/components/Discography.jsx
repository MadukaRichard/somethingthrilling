import { useState } from "react";

const DECADES = [
  { decade: "1980s", albums: ["Youngblood (1986)", "River's Edge (1986)", "Permanent Record (1988)", "Bill & Ted's Excellent Adventure (1989)", "Parenthood (1989)"] },
  { decade: "1990s", albums: ["Point Break (1991)", "My Own Private Idaho (1991)", "Bram Stoker's Dracula (1992)", "Much Ado About Nothing (1993)", "Speed (1994)", "Johnny Mnemonic (1995)", "The Devil's Advocate (1997)"] },
  { decade: "2000s", albums: ["The Matrix (1999)", "The Matrix Reloaded (2003)", "The Matrix Revolutions (2003)", "Constantine (2005)", "The Lake House (2006)", "The Day the Earth Stood Still (2008)"] },
  { decade: "2010s", albums: ["John Wick (2014)", "Knock Knock (2015)", "The Neon Demon (2016)", "John Wick: Chapter 2 (2017)", "John Wick: Chapter 3 — Parabellum (2019)", "Always Be My Maybe (2019)", "Toy Story 4 (2019)"] },
  { decade: "2020s", albums: ["Bill & Ted Face the Music (2020)", "The Matrix Resurrections (2021)", "DC League of Super-Pets (2022)", "John Wick: Chapter 4 (2023)", "Sonic the Hedgehog 3 (2024)", "Good Fortune (2025)", "Ballerina (2025)"] },
];

const RECENT = [
  { year: "2025", title: "Ballerina", type: "Action · Spin-off", desc: "Returns as John Wick in the franchise spin-off starring Ana de Armas — grossing over $90M opening weekend.", highlight: true },
  { year: "2025", title: "Good Fortune", type: "Comedy · Drama", desc: "Plays Gabriel, a low-key guardian angel, in Aziz Ansari's indie comedy — Ansari joked Reeves 'is actually an angel'.", highlight: false },
  { year: "2025", title: "Broadway Debut", type: "Theatre · Waiting for Godot", desc: "Made his long-awaited Broadway debut in Samuel Beckett's classic — a career milestone decades in the making.", highlight: false },
  { year: "2024", title: "Sonic the Hedgehog 3", type: "Voice · Shadow the Hedgehog", desc: "Voiced villain-turned-antihero Shadow in the blockbuster sequel — one of the franchise's highest-rated entries.", highlight: false },
];

const DIAMONDS = [
  { num: "01", title: "The Matrix", year: "1999", note: "Redefined sci-fi cinema and the action genre" },
  { num: "02", title: "John Wick", year: "2014", note: "Reinvented the action thriller at age 50" },
  { num: "03", title: "Speed", year: "1994", note: "Made him a box-office superstar" },
  { num: "04", title: "Point Break", year: "1991", note: "Iconic Kathryn Bigelow action classic" },
  { num: "05", title: "Bill & Ted's Excellent Adventure", year: "1989", note: "Breakthrough role — beloved worldwide" },
];

const COLLABS = [
  {
    partners: "Laurence Fishburne & Carrie-Anne Moss", title: "The Matrix Trilogy", years: "1999 · 2003 · 2021",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
  },
  {
    partners: "Chad Stahelski · 87Eleven", title: "John Wick Franchise", years: "2014–2025",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  },
  {
    partners: "Sandra Bullock", title: "Speed · The Lake House · Untitled Amazon Thriller", years: "1994 · 2006 · TBA",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  },
];

export default function Discography() {
  const [activeDecade, setActiveDecade] = useState(0);

  return (
    <section className="disco" id="discography">
      <div className="disco-header sr">
        <span className="section-tag">The Filmography</span>
        <h2 className="disco-title">100+ Credits.<br /><em>Four Decades of Cinema.</em></h2>
        <p className="disco-intro">
          Over four decades, Keanu Reeves has built one of Hollywood's most versatile and beloved
          filmographies — from indie dramas to blockbuster franchises that redefined entire genres.
        </p>
      </div>

      <div className="disco-block sr d1">
        <div className="disco-block-label"><span className="section-tag">Films by Era</span></div>
        <div className="disco-tabs">
          {DECADES.map((d, i) => (
            <button key={i} className={`disco-tab${activeDecade === i ? " active" : ""}`} onClick={() => setActiveDecade(i)}>
              {d.decade}
            </button>
          ))}
        </div>
        <div className="disco-album-list">
          {DECADES[activeDecade].albums.map((a, i) => (
            <div className="disco-album-row" key={`${activeDecade}-${i}`} style={{ animationDelay: `${i * 0.07}s` }}>
              <span className="disco-album-idx">{String(i + 1).padStart(2, "0")}</span>
              <span className="disco-album-name">{a}</span>
              <span className="disco-album-line" />
            </div>
          ))}
        </div>
      </div>

      <div className="disco-recent sr d1">
        <span className="section-tag">Recent Work · 2023–2025</span>
        <div className="disco-recent-grid">
          {RECENT.map((r, i) => (
            <div className={`disco-release${r.highlight ? " highlight" : ""}`} key={i}>
              <div className="dr-year">{r.year}</div>
              <div className="dr-type">{r.type}</div>
              <div className="dr-title">{r.title}</div>
              <div className="dr-desc">{r.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="disco-diamonds sr d2">
        <span className="section-tag">Signature Roles</span>
        <p className="disco-diamonds-sub">The five performances that define his legacy</p>
        <div className="disco-diamond-list">
          {DIAMONDS.map((d, i) => (
            <div className="dd-row" key={i}>
              <span className="dd-num">{d.num}</span>
              <div className="dd-info">
                <span className="dd-title">{d.title}</span>
                <span className="dd-note">{d.note}</span>
              </div>
              <span className="dd-year">{d.year}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="disco-collabs sr d2">
        <span className="section-tag">Key Collaborations</span>
        <div className="disco-collab-grid">
          {COLLABS.map((c, i) => (
            <div className="dc-card" key={i}>
              <div className="dc-icon">{c.icon}</div>
              <div className="dc-title">{c.title}</div>
              <div className="dc-partners">{c.partners}</div>
              <div className="dc-years">{c.years}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="disco-stats sr">
        {[
          ["100+",  "Film & TV Credits"],
          ["4",     "Matrix Films"],
          ["4",     "John Wick Films"],
          ["$4B+",  "JW Box Office"],
          ["60+",   "Years of Life"],
        ].map(([n, l]) => (
          <div className="disco-stat" key={l}>
            <span className="disco-stat-n">{n}</span>
            <span className="disco-stat-l">{l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const close = () => { setOpen(false); setGalleryOpen(false); };

  const galleryImages = [
    { src: "https://people.com/thmb/Y-RXPxBQiHzO5Jo2_5lquEzceEk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(649x269:651x271)/PEOPLE-San-Diego-Comic-Con-2022-Keanu-Reeves-BRZRKR-072222-30f7f59c3e1940b383a32dfd66bda394.jpg", caption: "Comic-Con · San Diego 2014" },
    { src: "https://media.cnn.com/api/v1/images/stellar/prod/140902152925-keanu-reeves-09022014.jpg?q=x_0,y_159,h_2693,w_4788,c_crop/h_653,w_1160/f_avif", caption: "Press Tour · 2019" },
    { src: "https://people.com/thmb/vC1-T-twXUPx_C0VX1SjvelGoso=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(919x372:921x374):format(webp)/Keanu-Reeves-Alexandra-Grant-041623-03-2000-e67e735b9a104cb5bcaff07cd91fc19f.jpg", caption: "Red Carpet · 2023" },
    { src: "https://b3313143.smushcdn.com/3313143/wp-content/uploads/2023/09/78a61-cyberpunk-2077-keanu-reeves-cd-projekt-red.jpg?lossy=2&strip=1&webp=1", caption: "SDCC · Cyberpunk 2077 Panel 2019" },
    { src: "https://www.hollywoodreporter.com/wp-content/uploads/2021/12/Carrie-Anne-Moss-Lana-Wachowski-Keanu-Reeves-Matrix-Resurrections-Premiere-Getty-H-2021.jpg?w=1296&h=730&crop=1", caption: "Matrix Resurrections Premiere · 2021" },
    { src: "https://i.insider.com/6419798650c7b20018f16218?width=2000&format=jpeg&auto=webp", caption: "John Wick: Chapter 4 Premiere · 2023" },
  ];

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-logo">Keanu<span className="dot">✦</span></div>

        <div className="nav-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#discography">Filmography</a>
          <button className="nav-gallery-btn" onClick={() => setGalleryOpen(true)}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
            Gallery
          </button>
          <button className="theme-btn" onClick={onToggleTheme} title="Toggle theme">
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <a href="#contact" className="nav-btn">Get in touch</a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button className="theme-btn" onClick={onToggleTheme} style={{ display: "none" }} aria-label="toggle theme">
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <button className={`nav-hamburger${open ? " open" : ""}`} onClick={() => setOpen(!open)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`nav-mobile-menu${open ? " open" : ""}`}>
        <a href="#hero" onClick={close}>Home</a>
        <a href="#about" onClick={close}>About</a>
        <a href="#discography" onClick={close}>Filmography</a>
        <a href="#" onClick={() => { setOpen(false); setGalleryOpen(true); }}>Gallery</a>
        <a href="#contact" onClick={close} className="nav-btn">Get in touch</a>
        <button
          onClick={() => { onToggleTheme(); close(); }}
          style={{ background: "none", border: "1px solid var(--border2)", borderRadius: "100px", padding: "10px 24px", color: "var(--text)", fontSize: "0.85rem", cursor: "pointer", marginTop: "8px" }}
        >
          {theme === "dark" ? "☀ Light Mode" : "☾ Dark Mode"}
        </button>
      </div>

      {/* Gallery overlay */}
      {galleryOpen && (
        <div className="gallery-overlay" onClick={() => setGalleryOpen(false)}>
          <div className="gallery-panel" onClick={e => e.stopPropagation()}>
            <div className="gallery-panel-header">
              <div>
                <span className="section-tag" style={{ marginBottom: 0 }}>Visual Archive</span>
                <h3 className="gallery-panel-title">Gallery</h3>
              </div>
              <button className="gallery-close" onClick={() => setGalleryOpen(false)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <div className="gallery-grid">
              {galleryImages.map((img, i) => (
                <div className="gallery-item" key={i}>
                  <img src={img.src} alt={img.caption} loading="lazy" />
                  <div className="gallery-item-caption">{img.caption}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

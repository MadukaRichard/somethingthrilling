import { useEffect, useRef, useState } from "react";
import "./App.css";
// @ts-ignore
import Navbar from "./components/Navbar";
// @ts-ignore
import Hero from "./components/Hero";
// @ts-ignore
import About from "./components/About";
// @ts-ignore
import FanCard from "./components/FanCard";
// @ts-ignore
import MeetGreet from "./components/MeetGreet";
// @ts-ignore
import Discography from "./components/Discography";
// @ts-ignore
import Footer from "./components/Footer";

const BRANDS = [
  { name: "Warner Bros.",     Icon: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg> },
  { name: "Lionsgate Films",  Icon: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/></svg> },
  { name: "ARCH Motorcycle",  Icon: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="17" r="3"/><circle cx="19" cy="17" r="3"/><path d="M5 17H3l3-9h8l4 5 2 4"/></svg> },
  { name: "BRZRKR · Netflix", Icon: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg> },
  { name: "Company Films",    Icon: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18"/><polygon points="10 8 16 12 10 16 10 8"/></svg> },
  { name: "Dogstar · Band",   Icon: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg> },
  { name: "Sony Pictures",    Icon: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
];

const PROJECTS = [
  {
    tag: "The Franchise", title: "John Wick", sub: "2014–2025 · Lionsgate · $1B+ Worldwide",
    image: "https://time.com/redesign/_next/image/?url=https%3A%2F%2Fapi.time.com%2Fwp-content%2Fuploads%2F2023%2F03%2FUntitled-2400-%C3%97-1600-px-1.png%3Fw%3D1800&w=3840&q=75",
  },
  {
    tag: "Sci-Fi Landmark", title: "The Matrix", sub: "1999 · Warner Bros. · $467M Worldwide",
    image: "https://people.com/thmb/kqiBr5FPcG_UnsgN6b08fvXY7H4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2):format(webp)/keanu-reeves-b000b57ec9774787bdfe01d50658c867.jpg",
  },
  {
    tag: "Comics & Beyond", title: "BRZRKR", sub: "Boom! Studios · Netflix Adaptation In Dev",
    image: "https://imageio.forbes.com/specials-images/imageserve/61539713c7ad87f6ec28050f/Ron-Garney-cover-of-BZRKR-Graphic-Novel--1/0x0.jpg?width=960&dpr=2",
  },
];

const STATS = [
  { n: "40+",  l: "Years Acting"     },
  { n: "$2B+", l: "Box Office Total" },
  { n: "100+", l: "Film Credits"     },
  { n: "60",   l: "Age in 2024"      },
];

export default function App() {
  const [theme, setTheme] = useState<string>("dark");
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const mousePos  = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const ringPos   = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const rafRef    = useRef<number>(0);

  // ── Theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // ── Cursor
  useEffect(() => {
    const move = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top  = e.clientY + "px";
      }
    };

    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.13;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.13;
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + "px";
        ringRef.current.style.top  = ringPos.current.y + "px";
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const enter = () => document.body.classList.add("hovering");
    const leave = () => document.body.classList.remove("hovering");

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a,button").forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // ── Scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("vis");
        }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".sr").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <>
      {/* Custom cursor */}
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />

      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Hero />

      {/* BRANDS TICKER */}
      <div className="brands">
        <div className="brands-track">
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <div className="brand-pill" key={i}>
              <b.Icon />
              {b.name}
            </div>
          ))}
        </div>
      </div>

      <About />
      <FanCard />
      <MeetGreet />
      <Discography />

      {/* PROJECTS */}
      <div className="projects">
        {PROJECTS.map((p, i) => (
          <div className={`pc sr d${i}`} key={i}>
            <div className="pc-bg">
              <img src={p.image} alt={p.title} />
            </div>
            <div className="pc-overlay" />
            <div className="pc-info">
              <span className="pc-tag">{p.tag}</span>
              <div className="pc-title">{p.title}</div>
              <div className="pc-sub">{p.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* STATS */}
      <div className="stats">
        {STATS.map((s, i) => (
          <div className={`stat sr d${i}`} key={i}>
            <div className="stat-n">{s.n}</div>
            <div className="stat-l">{s.l}</div>
          </div>
        ))}
      </div>

      {/* QUOTE */}
      <section className="quote-wrap sr">
        <div className="q-watermark">KEANU</div>
        <span className="q-mark">"</span>
        <blockquote>
          None of us are getting out of here alive, so please stop treating
          yourself like an afterthought. Eat the delicious food. Walk in the
          sunshine. Jump in the ocean. Be ridiculous, silly, proud, and happy.
        </blockquote>
        <div className="q-by">— Keanu Reeves</div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-left sr">
          <span className="section-tag">Get In Touch</span>
          <h2>
            Let's Make
            <br />
            <em>Magic</em>
            <br />
            Together
          </h2>
          <p>
            Whether it's a collaboration, film booking, brand partnership, or
            press inquiry — reach out and let's create something unforgettable.
          </p>
        </div>
        <div className="cf sr d1">
          <div className="cf-row">
            <input placeholder="Your name" />
            <input placeholder="Your email" />
          </div>
          <input placeholder="Subject" />
          <textarea placeholder="Tell me about your project..." />
          <a
            href="mailto:keanu.reeves.management.office12@gmail.com"
            className="cf-btn"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            Send Message
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

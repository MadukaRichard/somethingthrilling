export default function MeetGreet() {
  const phone = "16036820744";
  const whatsappUrl = `https://wa.me/${phone}?text=Hi%20Keanu's%20Team!%20I'd%20love%20to%20book%20a%20Meet%20%26%20Greet.`;

  const steps = [
    {
      n: "01",
      title: "Click to Connect",
      desc: "Tap the button below and you'll be taken directly to WhatsApp to start a conversation with Keanu's team.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
    },
    {
      n: "02",
      title: "Share Your Details",
      desc: "Let the team know your preferred date, city, and any special requests for your meet & greet experience.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
        </svg>
      ),
    },
    {
      n: "03",
      title: "Confirm & Experience",
      desc: "Once confirmed, get ready for an unforgettable personal moment with one of Hollywood's greatest icons.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="mg-section" id="meet-greet">
      <div className="mg-bg" />

      <div className="mg-inner">
        <div className="mg-header sr">
          <span className="section-tag" style={{ color: "var(--gold)" }}>
            <span style={{ background:"var(--gold)", display:"inline-block", width:22, height:1, marginRight:8 }}/>
            Personal Experience
          </span>
          <h2 className="mg-title">
            Meet &amp; Greet<br /><em>with Keanu</em>
          </h2>
          <p className="mg-subtitle">
            A rare, intimate opportunity to meet Keanu in person.
            Limited spots available — reach out directly on WhatsApp to secure yours.
          </p>
        </div>

        <div className="mg-body">
          <div className="mg-steps sr d1">
            {steps.map((s, i) => (
              <div className="mg-step" key={i}>
                <div className="mg-step-icon">{s.icon}</div>
                <div className="mg-step-content">
                  <div className="mg-step-num">{s.n}</div>
                  <div className="mg-step-title">{s.title}</div>
                  <div className="mg-step-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mg-cta-card sr d2">
            <div className="mg-cta-top">
              <div className="mg-cta-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </div>
              <div>
                <div className="mg-cta-label">Book via WhatsApp</div>
                <div className="mg-cta-number">+1 (603) 682-0744</div>
              </div>
            </div>

            <p className="mg-cta-body">
              Our team responds within 24 hours. Tap the button below to open
              WhatsApp with a pre-filled message — just hit send.
            </p>

            <div className="mg-availability">
              <div className="mg-avail-dot" />
              <span>Team is currently available</span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mg-whatsapp-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Book on WhatsApp
            </a>

            <p className="mg-disclaimer">
              Direct line to Keanu's management team · Confidential &amp; secure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

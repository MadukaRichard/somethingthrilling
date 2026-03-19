export default function FanCard() {
  return (
    <section className="fancard-section" id="fan-card">
      <div className="fancard-bg" />

      <div className="fancard-inner">
        <div className="fancard-copy sr">
          <span className="section-tag" style={{ color: "var(--gold)" }}>
            <span style={{ background:"var(--gold)", display:"inline-block", width:22, height:1, marginRight:8 }}/>
            Exclusive Membership
          </span>

          <h2 className="fancard-heading">
            The Official<br /><em>Keanu Fan Card</em>
          </h2>

          <p className="fancard-desc">
            Join a community of the most devoted fans of one of Hollywood's greatest icons.
            The Keanu Fan Card is your passport to exclusive experiences, early access,
            and recognition as one of Keanu's most loyal supporters.
          </p>

          <div className="fancard-benefits">
            <div className="fancard-benefit">
              <div className="fb-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <div className="fb-text">
                <span className="fb-title">Verified Top Fan Status</span>
                <span className="fb-desc">Carry a unique digital card that proves your place among Keanu's most loyal fans — recognized across all platforms and live events.</span>
              </div>
            </div>

            <div className="fancard-benefit">
              <div className="fb-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/>
                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
                </svg>
              </div>
              <div className="fb-text">
                <span className="fb-title">Priority Giveaway Access</span>
                <span className="fb-desc">Get first entry into exclusive giveaways including signed merchandise, VIP premiere tickets, and meet &amp; greet packages.</span>
              </div>
            </div>

            <div className="fancard-benefit">
              <div className="fb-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="fb-text">
                <span className="fb-title">Early Access &amp; Announcements</span>
                <span className="fb-desc">Be the first to hear about new films, events, BRZRKR releases, and ARCH Motorcycle drops — before anyone else.</span>
              </div>
            </div>
          </div>

          <a
            href={`mailto:keanu.reeves.management.office12@gmail.com?subject=Fan%20Card%20Application&body=Hi%20Keanu's%20Team%2C%0A%0AI%20would%20love%20to%20apply%20for%20the%20Official%20Keanu%20Fan%20Card.%0A%0AName%3A%20%0AEmail%3A%20%0ALocation%3A%20`}
            className="fancard-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><polyline points="1,4 12,13 23,4"/>
            </svg>
            Apply for Your Fan Card
          </a>
          <p className="fancard-note">Free to apply · Limited memberships available</p>
        </div>

        <div className="fancard-visual sr d1">
          <div className="fc-card">
            <div className="fc-card-shine" />
            <div className="fc-card-top">
              <div className="fc-card-logo">
                Keanu<span style={{color:"var(--gold)"}}>✦</span>
              </div>
              <div className="fc-card-type">Official Fan Card</div>
            </div>
            <div className="fc-card-mid">
              <div className="fc-card-name-label">Member Name</div>
              <div className="fc-card-name">Your Name Here</div>
            </div>
            <div className="fc-card-bottom">
              <div className="fc-card-meta">
                <span className="fc-meta-label">Member Since</span>
                <span className="fc-meta-val">2026</span>
              </div>
              <div className="fc-card-meta">
                <span className="fc-meta-label">Card No.</span>
                <span className="fc-meta-val">KR · 0001</span>
              </div>
              <div className="fc-card-star">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="fc-floating-tag fc-tag-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Top Fan Verified
          </div>
          <div className="fc-floating-tag fc-tag-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Giveaway Access
          </div>
        </div>
      </div>
    </section>
  );
}

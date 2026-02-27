import "./styles/GoShiprLanding.css";
import { useState, useRef } from "react";

// ── Place hero image in your public folder or src/assets and update the path ──
import heroImage from "./assets/hreo_image.png";
// If using public folder: const heroImage = "/hero_image.png";

export default function GoShiprLanding() {
  const [form, setForm] = useState({ businessName: "", mobile: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const heroRef = useRef(null);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidMobile = (m) => /^[6-9]\d{9}$/.test(m);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzq6kqALxavMK6XdQjqGwwB1J5aZpEYGrwZaPOd1wZZK7472_1O7DcW3gxoPSHQUW1w0A/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setErrorMsg("");

    if (!form.businessName || !form.mobile || !form.email) {
      setErrorMsg("Please fill all fields");
      return;
    }

    if (!isValidMobile(form.mobile)) {
      setErrorMsg("Enter valid 10-digit Indian mobile");
      return;
    }

    if (!isValidEmail(form.email)) {
      setErrorMsg("Enter valid email");
      return;
    }

    setLoading(true);

    try {
      const body = new URLSearchParams(form).toString();

      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
      });

      const data = await res.json();

      if (!data.success) {
        setErrorMsg(data.message); // duplicate from backend
        return;
      }

      // success
      setSubmitted(true);
      setForm({ businessName: "", mobile: "", email: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setErrorMsg("Submission failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const TICKER_ITEMS = [
    "Smart Automation",
    "Real-time Tracking",
    "Multi-carrier Support",
    "Instant Rate Comparison",
    "Smart Label Printing",
    "Bulk Shipping",
    "AI-Powered Routing",
    "Seamless Integrations",
  ];

  const FEATURES = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
            stroke="#4F46E5"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Instant Rate Comparison",
      desc: "Compare shipping rates across all major carriers in real time and always choose the smartest option.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" stroke="#4F46E5" strokeWidth="1.8" />
          <path
            d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"
            stroke="#4F46E5"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Smart Automation",
      desc: "Automate order fulfilment, label generation, and dispatch workflows — set it once, ship forever.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#4F46E5"
            strokeWidth="1.8"
          />
          <path
            d="M2 12H22M12 2C9.33 6.67 8 9.33 8 12C8 14.67 9.33 17.33 12 22M12 2C14.67 6.67 16 9.33 16 12C16 14.67 14.67 17.33 12 22"
            stroke="#4F46E5"
            strokeWidth="1.8"
          />
        </svg>
      ),
      title: "Real-time Tracking",
      desc: "End-to-end visibility for you and your customers with live shipment tracking across every touchpoint.",
    },
  ];

  return (
    <div className="gs-root">
      {/* ── NAV ── */}
      <nav className="gs-nav">
        <div className="gs-nav-logo">
          <div className="gs-nav-logo-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M2 17L12 22L22 17"
                stroke="#fff"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="#fff"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.6"
              />
              <path d="M12 2L22 7L12 12L2 7L12 2Z" fill="#fff" />
            </svg>
          </div>
          <span className="gs-nav-logo-text">
            Go<span>Shipr</span>
          </span>
        </div>
        <div className="gs-nav-badge">
          <span className="gs-nav-badge-dot" />
          Launching 2026
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="gs-hero" ref={heroRef}>
        {/* Full-bleed background image */}
        <img
          src={heroImage}
          alt=""
          className="gs-hero-bg-img"
          aria-hidden="true"
        />

        {/* Gradient overlay for readability */}
        <div className="gs-hero-overlay" />

        {/* Content — floats over image */}
        <div className="gs-hero-left">
          <span className="gs-eyebrow">
            <span className="gs-eyebrow-dash" />
            Smart Logistics Platform
          </span>

          <span className="gs-hero-emoji">🚀</span>

          <h1 className="gs-hero-title">
            Smarter Shipping
            <br />
            <span className="gs-blue">is Coming.</span>
          </h1>

          <p className="gs-hero-subtitle">
            Join GoShipr and streamline your logistics with smart automation. Be
            the first to access our platform when we go live.
          </p>

          <p className="gs-hero-cta-text">
            Fill the form below and our team will get in touch with you shortly.
          </p>

          {/* FORM */}
          <div className="gs-form-wrap">
            {!submitted ? (
              <form className="gs-form-card" onSubmit={handleSubmit}>
                {/* Row 1 — full width */}
                <div className="gs-field">
                  <label className="gs-label" htmlFor="businessName">
                    Seller / Business Name
                  </label>
                  <input
                    id="businessName"
                    className="gs-input"
                    name="businessName"
                    type="text"
                    required
                    placeholder="Your business name"
                    value={form.businessName}
                    onChange={handleChange}
                  />
                </div>

                {/* Row 2 — two columns */}
                <div className="gs-form-row-2">
                  <div>
                    <label className="gs-label" htmlFor="mobile">
                      Mobile Number
                    </label>
                    <input
                      id="mobile"
                      className="gs-input"
                      name="mobile"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.mobile}
                      onChange={(e) => {
                        let v = e.target.value.replace(/\D/g, "");

                        // remove leading 91 if user pasted
                        if (v.startsWith("91") && v.length > 10) {
                          v = v.slice(2);
                        }

                        // limit 10 digits
                        v = v.slice(0, 10);

                        setForm({ ...form, mobile: v });
                      }}
                    />
                  </div>
                  <div>
                    <label className="gs-label" htmlFor="email">
                      Work Email
                    </label>
                    <input
                      id="email"
                      className="gs-input"
                      name="email"
                      type="email"
                      required
                      placeholder="you@business.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button className="gs-btn" type="submit" disabled={loading}>
                  {loading ? "Submitting…" : "Get Early Access →"}
                </button>

                {errorMsg && <p className="gs-error-text">{errorMsg}</p>}

                <p className="gs-form-privacy">
                  We'll keep your info secure. <a href="#">Privacy Policy</a>
                </p>
              </form>
            ) : (
              <div className="gs-success-card">
                <div className="gs-success-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="#4F46E5"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>You're on the list!</h3>
                <p>
                  Thank you! Your details have been received.
                  <br />
                  Our team will contact you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="gs-ticker-wrap">
        <div className="gs-ticker-track">
          {[0, 1].map((_, i) => (
            <div key={i} className="gs-ticker-group">
              {TICKER_ITEMS.map((t, j) => (
                <span key={j} className="gs-ticker-item">
                  <span className="gs-ticker-dot">✦</span> {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section className="gs-features">
        <p className="gs-section-label">What's Coming</p>
        <div className="gs-features-grid">
          {FEATURES.map((f, i) => (
            <div key={i} className="gs-feature-card">
              <div className="gs-feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="gs-bottom-cta">
        <div className="gs-bottom-cta-card">
          <div className="gs-cta-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path
                d="M2 17L12 22L22 17"
                stroke="#fff"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="#fff"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.6"
              />
              <path d="M12 2L22 7L12 12L2 7L12 2Z" fill="#fff" />
            </svg>
          </div>
          <h2>
            GoShipr – <span>Smart Shipping</span>,<br />
            Simplified.
          </h2>
          <p>
            We're launching soon. Register your business to get
            <br />
            early access to our smart logistics platform.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="gs-footer">
        <div className="gs-footer-logo">
          <div className="gs-footer-logo-icon">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L22 7L12 12L2 7L12 2Z" fill="#fff" />
            </svg>
          </div>
          <span className="gs-footer-logo-text">
            Go<span>Shipr</span>
          </span>
        </div>
        <p>© 2026 GoShipr. All Rights Reserved.</p>
        <div className="gs-footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </div>
  );
}

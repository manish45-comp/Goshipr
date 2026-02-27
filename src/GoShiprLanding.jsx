// import "../src/styles/GoShiprLanding.css";
// import { useState, useEffect, useRef } from "react";

// export default function GoShiprLanding() {
//   const [form, setForm] = useState({ businessName: "", mobile: "", email: "" });
//   const [loading, setLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [focused, setFocused] = useState(null);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [mounted, setMounted] = useState(false);
//   const heroRef = useRef(null);

//   useEffect(() => {
//     setMounted(true);
//     const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
//     window.addEventListener("mousemove", handleMouse);
//     return () => window.removeEventListener("mousemove", handleMouse);
//   }, []);

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });
//   const SCRIPT_URL =
//     "https://script.google.com/macros/s/AKfycbzq6kqALxavMK6XdQjqGwwB1J5aZpEYGrwZaPOd1wZZK7472_1O7DcW3gxoPSHQUW1w0A/exec";

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (loading) return;

//     // simple validation
//     if (!form.businessName || !form.mobile || !form.email) return;

//     setLoading(true);

//     try {
//       const body = new URLSearchParams(form).toString();

//       await fetch(SCRIPT_URL, {
//         method: "POST",
//         mode: "no-cors",
//         redirect: "follow",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body,
//       });

//       // assume success (Apps Script no-cors)
//       setSubmitted(true);
//       setForm({ businessName: "", mobile: "", email: "" });

//       setTimeout(() => setSubmitted(false), 4000);
//     } catch (err) {
//       console.error(err);
//       alert("Submission failed");
//     } finally {
//       setLoading(false);
//     }
//   };
//   const gradX = (mousePos.x / window.innerWidth) * 100;
//   const gradY = (mousePos.y / window.innerHeight) * 100;

//   return (
//     <div className="goshipr-root min-h-screen overflow-hidden relative">
//       {/* Noise overlay */}
//       <div className="noise-overlay fixed inset-0 pointer-events-none z-50" />

//       {/* Dynamic gradient orb following cursor */}
//       <div
//         className="orb w-[600px] h-[600px] transition-all duration-700 ease-out z-0"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(74,245,194,0.12) 0%, transparent 70%)",
//           left: `${gradX}%`,
//           top: `${gradY}%`,
//           transform: "translate(-50%, -50%)",
//         }}
//       />

//       {/* Static background orbs */}
//       <div
//         className="orb w-[500px] h-[500px] animate-pulse-glow z-0"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(0,180,230,0.1) 0%, transparent 70%)",
//           top: "-10%",
//           right: "-5%",
//         }}
//       />
//       <div
//         className="orb w-[400px] h-[400px] animate-pulse-glow z-0"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(120,80,255,0.08) 0%, transparent 70%)",
//           bottom: "20%",
//           left: "-5%",
//           animationDelay: "1.5s",
//         }}
//       />

//       {/* Grid background */}
//       <div className="grid-bg animate-grid fixed inset-0 pointer-events-none z-0" />

//       {/* ── NAV ── */}
//       <nav className="animate-fade-in relative z-20 flex items-center justify-between px-6 md:px-12 py-6">
//         <div className="flex items-center gap-2">
//           <div
//             className="w-8 h-8 rounded-lg flex items-center justify-center"
//             style={{ background: "linear-gradient(135deg,#2563EB,#22D3EE)" }}
//           >
//             <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//               <path
//                 d="M2 17L12 22L22 17"
//                 stroke="#050810"
//                 strokeWidth="2.5"
//                 strokeLinecap="round"
//               />
//               <path
//                 d="M2 12L12 17L22 12"
//                 stroke="#050810"
//                 strokeWidth="2.5"
//                 strokeLinecap="round"
//                 opacity="0.6"
//               />
//               <path d="M12 2L22 7L12 12L2 7L12 2Z" fill="#050810" />
//             </svg>
//           </div>
//           <span className="goshipr-heading font-extrabold">
//             Go<span style={{ color: "#2563EB" }}>Shipr</span>
//           </span>
//         </div>
//         <div
//           className="animate-badge flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
//           style={{
//             background: "rgba(74,245,194,0.12)",
//             border: "1px solid rgba(74,245,194,0.25)",
//             color: "#2563EB",
//             fontFamily: "'DM Sans', sans-serif",
//           }}
//         >
//           <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
//           Launching 2026
//         </div>
//       </nav>

//       {/* ── HERO ── */}
//       <section
//         ref={heroRef}
//         className="relative z-10 min-h-[85vh] flex flex-col items-center justify-center px-4 text-center pt-8 pb-16"
//       >
//         {/* Floating decorative elements */}
//         <div className="animate-float-slow absolute top-16 left-8 md:left-24 opacity-40">
//           <div className="w-12 h-12 rounded-xl rotate-12 border border-[#2563EB]/30 flex items-center justify-center">
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//               <path
//                 d="M20 7H4C2.9 7 2 7.9 2 9V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9C22 7.9 21.1 7 20 7Z"
//                 stroke="#2563EB"
//                 strokeWidth="1.5"
//               />
//               <path
//                 d="M16 21V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V21"
//                 stroke="#2563EB"
//                 strokeWidth="1.5"
//               />
//             </svg>
//           </div>
//         </div>
//         <div className="animate-float-med absolute top-24 right-8 md:right-28 opacity-30">
//           <div className="w-10 h-10 rounded-full border border-[#22D3EE]/40 flex items-center justify-center">
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//               <circle cx="12" cy="12" r="3" stroke="#22D3EE" strokeWidth="2" />
//               <path
//                 d="M12 1V4M12 20V23M4.22 4.22L6.34 6.34M17.66 17.66L19.78 19.78M1 12H4M20 12H23"
//                 stroke="#22D3EE"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </div>
//         </div>

//         {/* Tag line pill */}
//         <div
//           className="animate-slide-up mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-widest uppercase"
//           style={{
//             background: "rgba(255,255,255,0.05)",
//             border: "1px solid rgba(255,255,255,0.1)",
//             color: "rgba(255,255,255,0.5)",
//             fontFamily: "'DM Sans',sans-serif",
//           }}
//         >
//           <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
//             <path
//               d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
//               stroke="#2563EB"
//               strokeWidth="2"
//               fill="none"
//             />
//           </svg>
//           Smart Logistics Platform
//         </div>

//         {/* HEADLINE */}
//         <h1
//           className="animate-slide-up-d1 font-extrabold leading-[1.05] tracking-[-0.04em] max-w-4xl"
//           style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
//         >
//           Smarter Shipping
//           <br />
//           <span className="shimmer-text">is Coming.</span>
//         </h1>

//         <p
//           className="animate-slide-up-d2 mt-6 max-w-lg text-base md:text-lg leading-relaxed"
//           style={{
//             color: "rgba(255,255,255,0.45)",
//             fontFamily: "'DM Sans',sans-serif",
//             fontWeight: 300,
//           }}
//         >
//           Join GoShipr and streamline your logistics with smart automation. Be
//           the first to access our platform when we go live.
//         </p>

//         {/* ── FORM ── */}
//         <div className="animate-slide-up-d3 mt-10 w-full max-w-md">
//           {!submitted ? (
//             <form
//               onSubmit={handleSubmit}
//               className="glass-card rounded-2xl p-6 md:p-8 glow-green space-y-4"
//             >
//               <div className="text-left mb-6">
//                 <h2
//                   style={{
//                     fontWeight: 700,
//                     fontSize: "1.05rem",
//                     letterSpacing: "-0.01em",
//                   }}
//                 >
//                   Get Early Access
//                 </h2>
//                 <p
//                   style={{
//                     color: "rgba(255,255,255,0.35)",
//                     fontSize: "0.82rem",
//                     fontFamily: "'DM Sans',sans-serif",
//                     marginTop: "4px",
//                   }}
//                 >
//                   Register your business below
//                 </p>
//               </div>

//               <div className="relative group">
//                 <label
//                   style={{
//                     fontSize: "0.72rem",
//                     letterSpacing: "0.08em",
//                     textTransform: "uppercase",
//                     color: "rgba(255,255,255,0.4)",
//                     fontFamily: "'DM Sans',sans-serif",
//                   }}
//                 >
//                   Seller / Business Name
//                 </label>
//                 <input
//                   name="businessName"
//                   type="text"
//                   required
//                   placeholder="Your business name"
//                   value={form.businessName}
//                   onChange={handleChange}
//                   onFocus={() => setFocused("businessName")}
//                   onBlur={() => setFocused(null)}
//                   className="input-field w-full mt-1.5 px-4 py-3 rounded-xl text-sm"
//                 />
//               </div>

//               <div className="relative group">
//                 <label
//                   style={{
//                     fontSize: "0.72rem",
//                     letterSpacing: "0.08em",
//                     textTransform: "uppercase",
//                     color: "rgba(255,255,255,0.4)",
//                     fontFamily: "'DM Sans',sans-serif",
//                   }}
//                 >
//                   Mobile Number
//                 </label>
//                 <input
//                   name="mobile"
//                   type="tel"
//                   required
//                   placeholder="+91 00000 00000"
//                   value={form.mobile}
//                   onChange={handleChange}
//                   onFocus={() => setFocused("mobile")}
//                   onBlur={() => setFocused(null)}
//                   className="input-field w-full mt-1.5 px-4 py-3 rounded-xl text-sm"
//                 />
//               </div>

//               <div className="relative group">
//                 <label
//                   style={{
//                     fontSize: "0.72rem",
//                     letterSpacing: "0.08em",
//                     textTransform: "uppercase",
//                     color: "rgba(255,255,255,0.4)",
//                     fontFamily: "'DM Sans',sans-serif",
//                   }}
//                 >
//                   Email ID
//                 </label>
//                 <input
//                   name="email"
//                   type="email"
//                   required
//                   placeholder="you@business.com"
//                   value={form.email}
//                   onChange={handleChange}
//                   onFocus={() => setFocused("email")}
//                   onBlur={() => setFocused(null)}
//                   className="input-field w-full mt-1.5 px-4 py-3 rounded-xl text-sm"
//                 />
//               </div>

//               <button
//                 disabled={loading}
//                 type="submit"
//                 className="btn-primary w-full py-3.5 rounded-xl text-sm mt-2"
//               >
//                 {loading ? "Submitting" : "Get Early Access →"}
//               </button>

//               <p
//                 style={{
//                   textAlign: "center",
//                   fontSize: "0.72rem",
//                   color: "rgba(255,255,255,0.2)",
//                   fontFamily: "'DM Sans',sans-serif",
//                 }}
//               >
//                 No spam, ever. We'll only reach out when we're live.
//               </p>
//             </form>
//           ) : (
//             <div className="glass-card rounded-2xl p-10 glow-green text-center animate-slide-up">
//               <div
//                 className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center"
//                 style={{
//                   background: "rgba(74,245,194,0.15)",
//                   border: "1px solid rgba(74,245,194,0.3)",
//                 }}
//               >
//                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
//                   <path
//                     d="M5 13l4 4L19 7"
//                     stroke="#2563EB"
//                     strokeWidth="2.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//               <h3 style={{ fontWeight: 700, fontSize: "1.15rem" }}>
//                 You're on the list!
//               </h3>
//               <p
//                 style={{
//                   color: "rgba(255,255,255,0.4)",
//                   fontSize: "0.88rem",
//                   fontFamily: "'DM Sans',sans-serif",
//                   marginTop: "10px",
//                   lineHeight: 1.7,
//                 }}
//               >
//                 Thank you! Your details have been received.
//                 <br />
//                 Our team will contact you soon.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* ── TICKER ── */}
//       <div
//         className="relative z-10 py-4 overflow-hidden"
//         style={{
//           borderTop: "1px solid rgba(255,255,255,0.05)",
//           borderBottom: "1px solid rgba(255,255,255,0.05)",
//           background: "rgba(255,255,255,0.02)",
//         }}
//       >
//         <div className="animate-ticker flex gap-0 whitespace-nowrap">
//           {[...Array(2)].map((_, i) => (
//             <div
//               key={i}
//               className="flex items-center gap-10 pr-10"
//               style={{
//                 fontFamily: "'DM Sans',sans-serif",
//                 fontSize: "0.78rem",
//                 letterSpacing: "0.12em",
//                 color: "rgba(255,255,255,0.25)",
//                 textTransform: "uppercase",
//               }}
//             >
//               {[
//                 "Smart Automation",
//                 "Real-time Tracking",
//                 "Multi-carrier Support",
//                 "Instant Rate Comparison",
//                 "Smart Label Printing",
//                 "Bulk Shipping",
//                 "AI-Powered Routing",
//                 "Seamless Integrations",
//               ].map((t, j) => (
//                 <span key={j} className="flex items-center gap-3">
//                   <span style={{ color: "#2563EB", opacity: 0.6 }}>✦</span> {t}
//                 </span>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── FEATURE CARDS ── */}
//       <section className="relative z-10 px-6 md:px-12 py-20 max-w-5xl mx-auto">
//         <p
//           className="text-center mb-10"
//           style={{
//             fontSize: "0.72rem",
//             letterSpacing: "0.15em",
//             textTransform: "uppercase",
//             color: "rgba(255,255,255,0.3)",
//             fontFamily: "'DM Sans',sans-serif",
//           }}
//         >
//           What's coming
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {[
//             {
//               icon: (
//                 <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//                   <path
//                     d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
//                     stroke="#2563EB"
//                     strokeWidth="1.8"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               ),
//               title: "Instant Rate Comparison",
//               desc: "Compare shipping rates across all major carriers in real time and always choose the smartest option.",
//             },
//             {
//               icon: (
//                 <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//                   <circle
//                     cx="12"
//                     cy="12"
//                     r="3"
//                     stroke="#2563EB"
//                     strokeWidth="1.8"
//                   />
//                   <path
//                     d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"
//                     stroke="#2563EB"
//                     strokeWidth="1.8"
//                     strokeLinecap="round"
//                   />
//                 </svg>
//               ),
//               title: "Smart Automation",
//               desc: "Automate order fulfilment, label generation, and dispatch workflows — set it once, ship forever.",
//             },
//             {
//               icon: (
//                 <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//                   <path
//                     d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
//                     stroke="#2563EB"
//                     strokeWidth="1.8"
//                   />
//                   <path
//                     d="M2 12H22M12 2C9.33 6.67 8 9.33 8 12C8 14.67 9.33 17.33 12 22M12 2C14.67 6.67 16 9.33 16 12C16 14.67 14.67 17.33 12 22"
//                     stroke="#2563EB"
//                     strokeWidth="1.8"
//                   />
//                 </svg>
//               ),
//               title: "Real-time Tracking",
//               desc: "End-to-end visibility for you and your customers with live shipment tracking across every touchpoint.",
//             },
//           ].map((f, i) => (
//             <div key={i} className="feature-card rounded-2xl p-6">
//               <div
//                 className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center"
//                 style={{
//                   background: "rgba(74,245,194,0.1)",
//                   border: "1px solid rgba(74,245,194,0.15)",
//                 }}
//               >
//                 {f.icon}
//               </div>
//               <h3
//                 style={{
//                   fontWeight: 700,
//                   fontSize: "0.95rem",
//                   marginBottom: "8px",
//                 }}
//               >
//                 {f.title}
//               </h3>
//               <p
//                 style={{
//                   color: "rgba(255,255,255,0.38)",
//                   fontSize: "0.84rem",
//                   lineHeight: 1.7,
//                   fontFamily: "'DM Sans',sans-serif",
//                   fontWeight: 300,
//                 }}
//               >
//                 {f.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ── BOTTOM CTA ── */}
//       <section className="relative z-10 px-6 py-16 text-center">
//         <div
//           className="max-w-2xl mx-auto glass-card rounded-3xl p-10 md:p-14"
//           style={{ border: "1px solid rgba(74,245,194,0.1)" }}
//         >
//           <div
//             className="w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center animate-spin-slow"
//             style={{
//               background: "linear-gradient(135deg,#2563EB,#22D3EE)",
//               borderRadius: "18px",
//             }}
//           >
//             <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
//               <path
//                 d="M2 17L12 22L22 17"
//                 stroke="#050810"
//                 strokeWidth="2.5"
//                 strokeLinecap="round"
//               />
//               <path
//                 d="M2 12L12 17L22 12"
//                 stroke="#050810"
//                 strokeWidth="2.5"
//                 strokeLinecap="round"
//                 opacity="0.6"
//               />
//               <path d="M12 2L22 7L12 12L2 7L12 2Z" fill="#050810" />
//             </svg>
//           </div>
//           <h2
//             style={{
//               fontWeight: 800,
//               fontSize: "clamp(1.5rem,4vw,2.2rem)",
//               letterSpacing: "-0.03em",
//             }}
//           >
//             GoShipr – <span style={{ color: "#2563EB" }}>Smart Shipping</span>,
//             <br />
//             Simplified.
//           </h2>
//           <p
//             style={{
//               color: "rgba(255,255,255,0.38)",
//               marginTop: "12px",
//               fontFamily: "'DM Sans',sans-serif",
//               fontWeight: 300,
//               lineHeight: 1.8,
//             }}
//           >
//             We're launching soon. Register your business to get
//             <br />
//             early access to our smart logistics platform.
//           </p>
//         </div>
//       </section>

//       {/* ── FOOTER ── */}
//       <footer
//         className="relative z-10 border-t px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3"
//         style={{ borderColor: "rgba(255,255,255,0.06)" }}
//       >
//         <div className="flex items-center gap-2">
//           <div
//             className="w-6 h-6 rounded-md flex items-center justify-center"
//             style={{ background: "linear-gradient(135deg,#2563EB,#22D3EE)" }}
//           >
//             <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//               <path d="M12 2L22 7L12 12L2 7L12 2Z" fill="#050810" />
//             </svg>
//           </div>
//           <span
//             style={{
//               fontFamily: "'Syne',sans-serif",
//               fontWeight: 700,
//               fontSize: "0.9rem",
//             }}
//           >
//             Go<span style={{ color: "#2563EB" }}>Shipr</span>
//           </span>
//         </div>
//         <p
//           style={{
//             color: "rgba(255,255,255,0.2)",
//             fontSize: "0.78rem",
//             fontFamily: "'DM Sans',sans-serif",
//           }}
//         >
//           © 2026 GoShipr. All Rights Reserved.
//         </p>
//         <div
//           style={{
//             color: "rgba(255,255,255,0.2)",
//             fontSize: "0.78rem",
//             fontFamily: "'DM Sans',sans-serif",
//           }}
//         >
//           Privacy · Terms
//         </div>
//       </footer>
//     </div>
//   );
// }
import "./styles/GoShiprLanding.css";
import { useState, useRef } from "react";

// ── Place hero image in your public folder or src/assets and update the path ──
import heroImage from "./assets/hreo_image.png";
// If using public folder: const heroImage = "/hero_image.png";

export default function GoShiprLanding() {
  const [form, setForm] = useState({ businessName: "", mobile: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useRef(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzq6kqALxavMK6XdQjqGwwB1J5aZpEYGrwZaPOd1wZZK7472_1O7DcW3gxoPSHQUW1w0A/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (!form.businessName || !form.mobile || !form.email) return;

    setLoading(true);
    try {
      const body = new URLSearchParams(form).toString();
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        redirect: "follow",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      setSubmitted(true);
      setForm({ businessName: "", mobile: "", email: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error(err);
      alert("Submission failed");
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
                      placeholder="+91 00000 00000"
                      value={form.mobile}
                      onChange={handleChange}
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

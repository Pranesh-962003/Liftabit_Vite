import { useScrollReveal } from '../hooks/useScrollReveal.js'
import CTABanner from '../components/CTABanner.jsx'
import SEO from '../components/SEO.jsx'
import './AboutPage.css' // Reuse page hero styles
import './HomePage.css'  // Reuse homepage section styles

const whyItems = [
  {
    icon: <><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>,
    title: 'Outcome-driven, not activity-driven',
    desc: 'We tie every decision to a measurable goal — growth, retention, or efficiency. Busy work is not billable work here.',
  },
  {
    icon: <><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>,
    title: 'Elite design, not template decoration',
    desc: 'Our design team has shipped products used by tens of millions. The craft shows in every component, every transition, every screen.',
  },
  {
    icon: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>,
    title: 'Modern, maintainable code',
    desc: 'We write code for the next engineer on your team, not just for deployment day. Documented, tested, and built to last.',
  },
  {
    icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
    title: 'Delivery that you can plan around',
    desc: 'Predictable sprints. Real-time progress visibility. We communicate proactively — you\'re never left wondering.',
  },
  {
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
    title: 'Long-term partnership, not a transaction',
    desc: 'After launch, we stay. Ongoing support, scaling, feature evolution — we\'re invested in your product\'s success for the long run.',
  },
]

const proofItems = [
  { num: '50+', label: 'Projects on time' },
  { num: '98%', label: 'Client retention' },
  { num: '3x', label: 'Faster delivery' },
  { num: '10+', label: 'Industries served' },
  { num: '4.9', label: 'Avg client rating' },
  { num: '30+', label: 'Happy clients' },
]

export default function WhyPage() {
  useScrollReveal()

  return (
    <>
      <SEO
        title="Why Choose Liftabit – Top IT & Software Company"
        description="Learn why Liftabit is the best IT company in Tamil Nadu. We deliver high-performance web and mobile apps on schedule with absolute transparency."
        keywords="Liftabit,Software company,Best IT company,Top IT company,IT company Coimbatore,Software Company Coimbatore,Best IT company Tamil Nadu,Software company near me,Why us"
      />
      {/* PAGE HERO */}
      <section id="page-hero">
        <div className="page-hero-inner">
          <div className="eyebrow">Why Liftabit</div>
          <h1 className="page-title">The studio built<br />for <span className="accent">serious products.</span></h1>
          <p className="page-desc">
            We don't do templates. We don't do agency bloat. We build custom software designed to win your market, written in code that lasts.
          </p>
        </div>
      </section>

      {/* WHY DETAILED GRID */}
      <section id="why" style={{ padding: '80px 0', background: 'var(--surface)' }}>
        <div className="wrap">
          <div className="why-grid">
            <div className="why-left">
              <div className="eyebrow reveal">Our Edge</div>
              <h2 className="section-h reveal d1">Designed for speed,<br />engineered for scale.</h2>
              <p className="section-p reveal d2">
                We've spent a decade refining our process to eliminate the friction, overhead, and guesswork of typical development cycles.
              </p>
              <img className="why-img reveal d3"
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&auto=format&fit=crop&q=75"
                alt="High performance development team"
              />
            </div>

            <div className="why-right">
              <div className="why-items">
                {whyItems.map((w, i) => (
                  <div key={i} className={`why-item reveal${i > 0 ? ' d' + i : ''}`}>
                    <div className="why-step">
                      <svg viewBox="0 0 24 24">{w.icon}</svg>
                    </div>
                    <div className="why-text">
                      <h4>{w.title}</h4>
                      <p>{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="why-proof-strip reveal d2">
                <div className="why-proof-track">
                  {[...proofItems, ...proofItems].map((p, i) => (
                    <div key={i} className="proof-item">
                      <div className="proof-num">{p.num}</div>
                      <div className="proof-label">{p.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CTABanner
        title="Ready to experience the difference?"
        subtitle="Connect with our founding team today and receive a tailored engineering proposal."
      />
    </>
  )
}

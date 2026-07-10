import { useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import Testimonials from '../components/Testimonials.jsx'
import ContactSection from './sections/ContactSection.jsx'
import SEO from '../components/SEO.jsx'

const industries = ['Healthcare','Fintech','Logistics','Retail','Education','Real Estate','E-Commerce','SaaS','Manufacturing','Food & Beverage']

const services = [
  {
    cls: 'svc dark svc-b1',
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&auto=format&fit=crop&q=75',
    imgCls: 'svc-img svc-img-tall',
    n: '01 — Core',
    title: 'Web Application Development',
    desc: 'Scalable, pixel-perfect web apps built on modern stacks. From internal tools to consumer products serving millions — architecture that holds under pressure.',
    tags: ['React','Next.js','Node.js','TypeScript'],
    revealCls: 'reveal',
  },
  {
    cls: 'svc svc-b2',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=75',
    imgCls: 'svc-img',
    n: '02 — Mobile',
    title: 'Mobile App Development',
    desc: 'Cross-platform apps that feel native on every device — fast, fluid, and built for the user at every touch.',
    tags: ['Flutter','React Native'],
    revealCls: 'reveal d1',
  },
  {
    cls: 'svc svc-b3',
    img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&auto=format&fit=crop&q=75',
    imgCls: 'svc-img',
    n: '03 — Design',
    title: 'UI/UX Design & Strategy',
    desc: 'Design systems and interaction design that win awards and retain users. We make the complex feel effortless.',
    tags: ['Figma','Design Systems'],
    revealCls: 'reveal d1',
  },
  {
    cls: 'svc svc-b4',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=75',
    imgCls: 'svc-img',
    n: '04 — Vertical',
    title: 'Industry-Specific Solutions',
    desc: 'Deep domain expertise in healthcare, fintech, logistics, and retail. Software that speaks your industry\'s language.',
    tags: ['Any Industry'],
    revealCls: 'reveal d2',
  },
  {
    cls: 'svc svc-b5',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=75',
    imgCls: 'svc-img',
    n: '05 — Infrastructure',
    title: 'Cloud & DevOps',
    desc: 'Resilient cloud architecture and automated pipelines. Infrastructure that never becomes your problem.',
    tags: ['AWS','Docker','CI/CD'],
    revealCls: 'reveal d3',
  },
]

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

export default function HomePage() {
  useScrollReveal()

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const nav = document.getElementById('mainNav')
      const navH = nav ? nav.offsetHeight : 64
      const top = el.getBoundingClientRect().top + window.scrollY - navH - 8
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  // Counter animation
  useEffect(() => {
    function animateCounters() {
      document.querySelectorAll('[data-target]').forEach(el => {
        const target = +el.dataset.target
        const suffix = el.dataset.suffix || ''
        let cur = 0
        const step = Math.ceil(target / 50)
        const t = setInterval(() => {
          cur = Math.min(cur + step, target)
          el.innerHTML = cur + '<span>' + suffix + '</span>'
          if (cur >= target) clearInterval(t)
        }, 30)
      })
    }
    const heroStats = document.querySelector('.hero-numbers')
    if (!heroStats) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { animateCounters(); obs.disconnect() } })
    }, { threshold: 0.4 })
    obs.observe(heroStats)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* ─── HERO ─── */}
      <SEO
          title="Liftabit – Software Company in Coimbatore"
          description="Liftabit delivers custom web and mobile solutions. Best IT company in Tamil Nadu. Software company near you."
          keywords="Liftabit,Software company,Best IT company,Top IT company,IT company Coimbatore,Software Company Coimbatore,Best IT company Tamil Nadu,Software company near me"
        />
      <section id="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-badge">
              <div className="badge-dot">
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              Trusted by 30+ organizations worldwide
            </div>
            <h1 className="hero-title">
              Software that<br /><span className="accent">lifts</span> your<br />entire business.
            </h1>
            <p className="hero-desc">
              Liftabit delivers customizable web and mobile solutions for any industry —
              built with precision engineering and elite-level design at a fraction of agency cost.
            </p>
            <div className="hero-actions">
              <button onClick={() => scrollToSection('contact')} className="btn btn-dark btn-arrow">Start Your Project</button>
              <button onClick={() => scrollToSection('services')} className="btn btn-outline">View Services</button>
            </div>

            <div className="hero-numbers">
              <div className="hero-num-item">
                <div className="hero-num-val" data-target="50" data-suffix="+">50<span>+</span></div>
                <div className="hero-num-label">Projects shipped</div>
              </div>
              <div className="hero-num-item">
                <div className="hero-num-val" data-target="30" data-suffix="+">30<span>+</span></div>
                <div className="hero-num-label">Happy clients</div>
              </div>
              <div className="hero-num-item">
                <div className="hero-num-val" data-target="98" data-suffix="%">98<span>%</span></div>
                <div className="hero-num-label">Satisfaction rate</div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <img className="hero-img-main"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80"
              alt="Team collaborating on software project"
              loading="eager"
            />
            <div className="hero-img-card">
              <div className="hic-icon">
                <svg viewBox="0 0 24 24"><path d="M12 20V10M18 20V4M6 20v-4" /></svg>
              </div>
              <div>
                <div className="hic-label">Client growth</div>
                <div className="hic-val">+240% avg</div>
              </div>
            </div>
            <div className="hero-img-tag">
              <span className="hero-img-tag-num">3x</span>
              <div className="hero-img-tag-txt">Faster delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOGO BAR ─── */}
      <div id="logobar">
        <div className="wrap">
          <p className="logobar-label">Trusted across industries</p>
        </div>
        <div className="logobar-track-wrap">
          <div className="logobar-track">
            {[...industries, ...industries].map((ind, i) => (
              <span key={i} className="logobar-item">{ind}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── ABOUT ─── */}
      <section id="about">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-img-block reveal">
              <img className="about-img-main"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&auto=format&fit=crop&q=80"
                alt="Design and development team at work"
              />
              <div className="about-img-overlay">
                <div className="aio-num">4.9</div>
                <div className="aio-label">Average rating from clients</div>
              </div>
              <div className="about-img-dot">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
                </svg>
              </div>
            </div>

            <div className="about-text">
              <div className="eyebrow reveal">About Liftabit</div>
              <h2 className="section-h reveal d1">We don't build software.<br />We engineer advantage.</h2>
              <p className="section-p reveal d2">
                Founded by engineers and designers who grew tired of watching great ideas fail due to
                high agency costs and mediocre execution. Liftabit exists to change that —
                delivering world-class digital products that are accessible to every ambition.
              </p>
              <div className="about-pillars">
                {[
                  { n: '01', title: 'Research-led design', desc: 'Every interface begins with understanding your users deeply — their goals, frustrations, and expectations — before a single wireframe is drawn.' },
                  { n: '02', title: 'Engineering that scales', desc: 'Clean architecture, documented code, and systems built to handle 10x your current load without touching the foundation.' },
                  { n: '03', title: 'Radical transparency', desc: 'Full visibility into every sprint, decision, and dollar. No surprises. No scope creep without your approval.' },
                ].map((p, i) => (
                  <div key={i} className={`pillar reveal d${i + 2}`}>
                    <span className="pillar-num">{p.n}</span>
                    <div>
                      <h4>{p.title}</h4>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services">
        <div className="wrap">
          <div className="services-head">
            <div>
              <div className="eyebrow reveal">What We Build</div>
              <h2 className="section-h reveal d1">Every capability<br />you need, in one team.</h2>
            </div>
            <p className="section-p reveal d2">From concept to deployment, we handle the full product lifecycle so you can focus entirely on your business.</p>
          </div>

          <div className="services-bento">
            {services.map((s, i) => (
              <div key={i} className={`${s.cls} ${s.revealCls}`}>
                <img className={s.imgCls} src={s.img} alt={s.title} />
                <div className="svc-n">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="svc-tags">
                  {s.tags.map(t => <span key={t} className="svc-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section id="why">
        <div className="wrap">
          <div className="why-grid">
            <div className="why-left">
              <div className="eyebrow reveal">Why Liftabit</div>
              <h2 className="section-h reveal d1">The standard others<br />measure against.</h2>
              <p className="section-p reveal d2">
                We've absorbed the best practices from the world's top product companies
                and distilled them into a process that consistently delivers outcomes — not just outputs.
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

      {/* ─── TESTIMONIALS ─── */}
      <Testimonials bgColor="var(--surface)" />

      {/* ─── CONTACT ─── */}
      <ContactSection />
    </>
  )
}

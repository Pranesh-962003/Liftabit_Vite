import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import Testimonials from '../components/Testimonials.jsx'
import CTABanner from '../components/CTABanner.jsx'
import './AboutPage.css'

const values = [
  { icon: <><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>, title: 'Outcome over Output', desc: "We tie every decision to a measurable goal — growth, retention, or efficiency. We don't celebrate deliverables; we celebrate results." },
  { icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />, title: 'Craft Without Compromise', desc: 'Good enough is never good enough. Every pixel, every interaction, every line of code reflects our commitment to excellence.' },
  { icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></>, title: 'Partnership, Not Transactions', desc: 'We invest in your success long after launch. The best software relationships are built on trust, and trust is built over time.' },
  { icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>, title: 'Respect for Time', desc: "Yours and ours. Predictable sprints, honest timelines, and proactive communication — because your roadmap depends on ours." },
  { icon: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>, title: 'Radical Transparency', desc: "You'll never wonder where your project stands. Full visibility into progress, blockers, and decisions at every stage." },
  { icon: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>, title: 'Modern by Default', desc: "We use the best current tools, frameworks, and practices — not because they're trendy, but because they produce better outcomes." },
]

const team = [
  { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&q=80', name: 'Rohan Menon', role: 'Co-Founder & CTO', bio: '10+ years building scalable systems for fintech and SaaS. Obsessed with clean architecture and developer experience.' },
  { img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=80', name: 'Priya Suresh', role: 'Co-Founder & Head of Design', bio: 'Former design lead at two Y Combinator companies. Believes that great design solves real problems — not just aesthetic ones.' },
  { img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop&q=80', name: 'Arjun Iyer', role: 'Lead Engineer', bio: 'Full-stack engineer specialising in React, Node, and cloud infrastructure. Built systems that now handle millions of daily users.' },
  { img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&auto=format&fit=crop&q=80', name: 'Divya Krishnan', role: 'Product Strategist', bio: 'Bridges the gap between business goals and technical execution. Turns vague requirements into razor-sharp product roadmaps.' },
]

const stats = [
  { num: '50', suffix: '+', label: 'Projects shipped' },
  { num: '30', suffix: '+', label: 'Happy clients' },
  { num: '98', suffix: '%', label: 'Satisfaction rate' },
  { num: '4.9', suffix: '', label: 'Avg client rating' },
]

export default function AboutPage() {
  useScrollReveal()

  return (
    <>
      <SEO
        title="About Liftabit – Software Company"
        description="Learn about Liftabit, our mission, values, and team. Leading software development company in Coimbatore."
        keywords="Liftabit,Software company,IT company Coimbatore,About us"
      />
      {/* PAGE HERO */}
      <section id="page-hero">
        <div className="page-hero-inner">
          <div className="eyebrow">About Liftabit</div>
          <h1 className="page-title">We don't build software.<br /><span className="accent">We engineer advantage.</span></h1>
          <p className="page-desc">
            Founded by engineers and designers who grew tired of watching great ideas fail due to
            high agency costs and mediocre execution. Liftabit exists to change that —
            delivering world-class digital products that are accessible to every ambition.
          </p>
          <div className="page-hero-actions">
            <Link to="/contact" className="btn btn-dark btn-arrow">Work With Us</Link>
            <Link to="/services" className="btn btn-outline">Our Services</Link>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story">
        <div className="wrap">
          <div className="story-grid">
            <div className="story-img-block reveal">
              <img className="story-img-main" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&auto=format&fit=crop&q=80" alt="Design and development team at work" />
              <div className="story-img-overlay">
                <div className="sio-num">4.9</div>
                <div className="sio-label">Average rating from clients</div>
              </div>
              <div className="story-img-dot">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>
              </div>
            </div>
            <div className="story-text">
              <div className="eyebrow reveal">Our Story</div>
              <h2 className="section-h reveal d1">Born from frustration.<br />Built for ambition.</h2>
              <p className="section-p reveal d2">
                Liftabit was born when three engineers realized the same pattern kept repeating:
                businesses with brilliant ideas were being failed by expensive agencies, poor
                communication, and generic solutions. We set out to build the studio we always wished existed.
              </p>
              <div className="about-pillars">
                {[
                  { n: '01', title: 'Research-led design', desc: 'Every interface begins with understanding your users deeply — their goals, frustrations, and expectations — before a single wireframe is drawn.' },
                  { n: '02', title: 'Engineering that scales', desc: 'Clean architecture, documented code, and systems built to handle 10x your current load without touching the foundation.' },
                  { n: '03', title: 'Radical transparency', desc: 'Full visibility into every sprint, decision, and dollar. No surprises. No scope creep without your approval.' },
                ].map((p, i) => (
                  <div key={i} className={`pillar reveal d${i + 2}`}>
                    <span className="pillar-num">{p.n}</span>
                    <div><h4>{p.title}</h4><p>{p.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section id="values">
        <div className="wrap">
          <div className="values-head">
            <div className="eyebrow reveal">Our Values</div>
            <h2 className="section-h reveal d1">The principles that<br />guide everything we do.</h2>
            <p className="section-p reveal d2">These aren't slogans on a wall — they're the standards our team is held to on every project, every day.</p>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className={`value-card reveal${i > 0 ? ' d' + Math.min(i, 3) : ''}`}>
                <div className="value-icon"><svg viewBox="0 0 24 24">{v.icon}</svg></div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team">
        <div className="wrap">
          <div className="team-head">
            <div>
              <div className="eyebrow reveal">The Team</div>
              <h2 className="section-h reveal d1">Makers, thinkers,<br />and builders.</h2>
            </div>
            <p className="section-p reveal d2">A tight-knit team of specialists who've worked across startups, scale-ups, and enterprise — bringing deep craft to every engagement.</p>
          </div>
          <div className="team-grid">
            {team.map((t, i) => (
              <div key={i} className={`team-card reveal${i > 0 ? ' d' + i : ''}`}>
                <img className="team-img" src={t.img} alt={t.name} />
                <div className="team-info">
                  <div className="team-name">{t.name}</div>
                  <div className="team-role">{t.role}</div>
                  <div className="team-bio">{t.bio}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section id="stats-strip">
        <div className="wrap">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} className={`stat-item reveal${i > 0 ? ' d' + i : ''}`}>
                <div className="stat-num">{s.num}{s.suffix && <span style={{ color: 'rgba(255,119,0,0.6)' }}>{s.suffix}</span>}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials bgColor="var(--white)" />

      {/* CTA */}
      <CTABanner
        title="Ready to build something<br />remarkable together?"
        subtitle="Share your idea and we'll get back within 24 hours with a clear, no-obligation roadmap."
      />
    </>
  )
}

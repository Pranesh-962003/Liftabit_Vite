import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { Link } from 'react-router-dom'
import CTABanner from '../components/CTABanner.jsx'
import SEO from '../components/SEO.jsx'
import './AboutPage.css' // Reuse page hero styles

const openings = [
  {
    role: 'Senior Full-Stack Engineer',
    team: 'Engineering',
    location: 'Coimbatore, India / Remote',
    type: 'Full-Time',
    desc: 'Lead the architecture and delivery of modern React and Next.js applications for global clients. Requires deep TypeScript and Cloud (AWS/Docker) expertise.'
  },
  {
    role: 'Senior UI/UX Product Designer',
    team: 'Design',
    location: 'Remote (India)',
    type: 'Full-Time',
    desc: 'Craft premium interactive prototypes, define design tokens, and build scalable design systems in Figma. Strong portfolio in SaaS and Web Apps required.'
  },
  {
    role: 'Product Strategist',
    team: 'Product Management',
    location: 'Remote (India)',
    type: 'Full-Time',
    desc: 'Collaborate directly with client founders to clarify requirements, architect product roadmaps, and coordinate two-week sprint priorities with engineering.'
  }
]

export default function CareersPage() {
  useScrollReveal()

  return (
    <>
      <SEO
        title="Careers – Join the Liftabit Team"
        description="Explore career opportunities at Liftabit. We are looking for talented React, Next.js engineers, and product designers in Coimbatore and remote."
        keywords="Liftabit,Software company careers,IT jobs Coimbatore,React developer jobs,Product designer jobs"
      />
      {/* PAGE HERO */}
      <section id="page-hero">
        <div className="page-hero-inner">
          <div className="eyebrow">Careers at Liftabit</div>
          <h1 className="page-title">Build software that<br />matters, <span className="accent">from anywhere.</span></h1>
          <p className="page-desc">
            We're a distributed team of engineers, designer-craftspeople, and product managers. We value high agency, clear communication, and outstanding execution.
          </p>
        </div>
      </section>

      {/* CULTURE SECTION */}
      <section id="values" style={{ padding: '80px 0', background: 'var(--surface)' }}>
        <div className="wrap">
          <div className="values-head" style={{ marginBottom: '60px' }}>
            <div className="eyebrow reveal">Our Culture</div>
            <h2 className="section-h reveal d1">High trust. High agency.</h2>
            <p className="section-p reveal d2" style={{ margin: '16px auto 0' }}>
              We don't watch clocks or count keyboard clicks. We focus on results, design quality, and clean code.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card reveal d1">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>Remote-First Flexibility</h3>
              <p>Work from wherever you're most productive. We build around asynchronous updates so you can control your calendar.</p>
            </div>
            <div className="value-card reveal d2">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h3>Continuous Mastery</h3>
              <p>We provide a dedicated annual learning budget for courses, books, and conference tickets to support your craft's growth.</p>
            </div>
            <div className="value-card reveal d3">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3>Modern Stack, Minimal Legacy</h3>
              <p>We work exclusively on current frameworks and infrastructure. No outdated systems, no legacy technical debt holding you back.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OPENINGS SECTION */}
      <section id="openings" style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="wrap">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="eyebrow reveal" style={{ textTransform: 'uppercase' }}>Open Positions</div>
            <h2 className="section-h reveal d1" style={{ marginBottom: '40px' }}>Join the craft studio.</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {openings.map((job, idx) => (
                <div
                  key={idx}
                  className="reveal"
                  style={{
                    padding: '32px',
                    borderRadius: 'var(--r-lg)',
                    border: '1px solid var(--border)',
                    background: 'var(--white)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(255, 119, 0, 0.22)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.transform = 'none'
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.02)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--ink)' }}>{job.role}</h3>
                    <span style={{ fontSize: '0.75rem', padding: '4px 12px', background: 'var(--orange-dim)', color: 'var(--orange)', borderRadius: '100px', fontWeight: 600 }}>{job.type}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', color: 'var(--ink-4)', fontWeight: 500 }}>
                    <span>{job.team}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--ink-3)', lineHeight: 1.6, margin: '8px 0 16px' }}>{job.desc}</p>
                  <div>
                    <a href="mailto:hello@liftabit.com?subject=Application for Senior Full-Stack Engineer" className="btn btn-dark" style={{ padding: '10px 24px', fontSize: '0.8rem' }}>Apply Now</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Don't see your role?"
        subtitle="We're always looking for outstanding builders. Drop us a line at hello@liftabit.com anyway."
      />
    </>
  )
}

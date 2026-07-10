import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import CTABanner from '../components/CTABanner.jsx'
import SEO from '../components/SEO.jsx'
import './ServicesPage.css'

const services = [
  {
    num: '01',
    category: 'Core',
    title: 'Web Application Development',
    desc: 'Scalable, pixel-perfect web apps built on modern stacks. From internal tools to consumer products serving millions — architecture that holds under pressure.',
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&auto=format&fit=crop&q=75',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    dark: true,
    gridClass: 'svc-b1',
    delayClass: ''
  },
  {
    num: '02',
    category: 'Mobile',
    title: 'Mobile App Development',
    desc: 'Cross-platform apps that feel native on every device — fast, fluid, and built for the user at every touch.',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=75',
    tags: ['Flutter', 'React Native'],
    dark: false,
    gridClass: 'svc-b2',
    delayClass: 'd1'
  },
  {
    num: '03',
    category: 'Design',
    title: 'UI/UX Design & Strategy',
    desc: 'Design systems and interaction design that win awards and retain users. We make the complex feel effortless.',
    img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&auto=format&fit=crop&q=75',
    tags: ['Figma', 'Design Systems'],
    dark: false,
    gridClass: 'svc-b3',
    delayClass: 'd1'
  },
  {
    num: '04',
    category: 'Vertical',
    title: 'Industry-Specific Solutions',
    desc: "Software that speaks your industry's language. Deep domain expertise in healthcare, fintech, logistics, and retail.",
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=75',
    tags: ['Any Industry'],
    dark: false,
    gridClass: 'svc-b4',
    delayClass: 'd2'
  },
  {
    num: '05',
    category: 'Infrastructure',
    title: 'Cloud & DevOps',
    desc: 'Resilient cloud architecture and automated pipelines. Infrastructure that never becomes your problem.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=75',
    tags: ['AWS', 'Docker', 'CI/CD'],
    dark: false,
    gridClass: 'svc-b5',
    delayClass: 'd3'
  }
]

const processSteps = [
  {
    num: '01',
    title: 'Discovery & Brief',
    desc: 'We deep-dive into your business, users, and goals to define what success looks like before a single line of code is written.'
  },
  {
    num: '02',
    title: 'Design & Prototype',
    desc: 'From wireframes to high-fidelity prototypes, we validate the experience before building it — saving time and eliminating rework.'
  },
  {
    num: '03',
    title: 'Build & Iterate',
    desc: 'Two-week sprints with live demos, real-time Slack access, and total transparency into progress, blockers, and decisions.'
  },
  {
    num: '04',
    title: 'Launch & Support',
    desc: "We don't vanish after go-live. Ongoing support, performance monitoring, and feature evolution — we're with you for the long run."
  }
]

const details = [
  {
    icon: <><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>,
    title: 'Outcome-driven, not activity-driven',
    desc: 'We tie every decision to a measurable goal — growth, retention, or efficiency. Busy work is not billable work here.'
  },
  {
    icon: <><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>,
    title: 'Elite design, not template decoration',
    desc: "Our design team has shipped products used by tens of millions. The craft shows in every component, every transition, every screen."
  },
  {
    icon: <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>,
    title: 'Modern, maintainable code',
    desc: 'We write code for the next engineer on your team, not just for deployment day. Documented, tested, and built to last.'
  },
  {
    icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
    title: 'Delivery that you can plan around',
    desc: "Predictable sprints. Real-time progress visibility. We communicate proactively — you're never left wondering."
  },
  {
    icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>,
    title: 'Long-term partnership, not a transaction',
    desc: "After launch, we stay. Ongoing support, scaling, feature evolution — we're invested in your product's success for the long run."
  }
]

const pricingPlans = [
  {
    name: 'Starter',
    price: 'Custom',
    period: 'per project — fixed scope',
    desc: 'Perfect for MVPs, landing pages, and focused product modules.',
    features: [
      { text: 'Fixed scope & timeline', has: true },
      { text: 'Up to 2 design revisions', has: true },
      { text: '30-day post-launch support', has: true },
      { text: 'Dedicated project manager', has: false },
      { text: 'Ongoing retainer access', has: false }
    ],
    featured: false,
    ctaText: 'Get a Quote →',
    delayClass: ''
  },
  {
    name: 'Growth',
    price: 'Retainer',
    period: 'monthly — flexible sprints',
    desc: 'Ongoing development capacity that scales up or down with your needs each month.',
    features: [
      { text: 'Dedicated team pod', has: true },
      { text: 'Unlimited revision cycles', has: true },
      { text: 'Dedicated project manager', has: true },
      { text: 'Priority Slack support', has: true },
      { text: 'Bi-weekly strategy calls', has: true }
    ],
    featured: true,
    ctaText: 'Start Now →',
    delayClass: 'd1'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'bespoke — fully managed',
    desc: 'Full product studio embedded into your organization with dedicated resources and SLAs.',
    features: [
      { text: 'Fully dedicated team', has: true },
      { text: 'Custom SLA & reporting', has: true },
      { text: 'On-site workshops available', has: true },
      { text: 'IP ownership & NDA included', has: true },
      { text: '24/7 emergency support', has: true }
    ],
    featured: false,
    ctaText: 'Contact Us →',
    delayClass: 'd2'
  }
]

const techStack = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' }
]

export default function ServicesPage() {
  useScrollReveal()

  const processRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSteps, setActiveSteps] = useState([true, false, false, false])

  useEffect(() => {
    const handleScroll = () => {
      const section = processRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const sectionTop = rect.top
      const sectionHeight = rect.height - window.innerHeight

      let progressVal = 0
      if (sectionTop <= 0 && sectionTop >= -sectionHeight) {
        progressVal = Math.abs(sectionTop) / sectionHeight
      } else if (sectionTop < -sectionHeight) {
        progressVal = 1
      }

      setScrollProgress(progressVal)

      const totalSteps = 4
      const nextActiveSteps = Array(totalSteps).fill(false)

      if (sectionTop > 0) {
        nextActiveSteps[0] = true
      } else if (sectionTop < -sectionHeight) {
        nextActiveSteps.fill(true)
      } else {
        for (let i = 0; i < totalSteps; i++) {
          const threshold = i / (totalSteps - 1)
          if (progressVal >= threshold - 0.1) {
            nextActiveSteps[i] = true
          }
        }
      }
      setActiveSteps(nextActiveSteps)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial run
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <SEO
        title="Our Services – Web & Mobile App Development | Liftabit"
        description="Explore our specialized services including Web & Mobile App Development, UI/UX Design, Cloud/DevOps, and custom enterprise software in Coimbatore, Tamil Nadu."
        keywords="Liftabit,Software company,Best IT company,Top IT company,IT company Coimbatore,Software Company Coimbatore,Best IT company Tamil Nadu,Software company near me,Web application development,Mobile app development"
      />
      {/* PAGE HERO */}
      <section id="page-hero">
        <div className="page-hero-inner">
          <div className="eyebrow">What We Build</div>
          <h1 className="page-title">Every capability<br /><span className="accent">you need, one team.</span></h1>
          <p className="page-desc">
            From concept to deployment, we handle the full product lifecycle so you can focus
            entirely on your business. Five core disciplines, one cohesive team.
          </p>
          <div className="page-hero-actions">
            <Link to="/contact" className="btn btn-dark btn-arrow">Start a Project</Link>
            <Link to="/about" className="btn btn-outline">About the Team</Link>
          </div>
        </div>
      </section>

      {/* SERVICES BENTO */}
      <section id="services-main">
        <div className="wrap">
          <div className="services-head">
            <div>
              <div className="eyebrow reveal">Core Services</div>
              <h2 className="section-h reveal d1">Built for every<br />ambition and scale.</h2>
            </div>
            <p className="section-p reveal d2">
              From early-stage MVPs to enterprise-grade platforms — we tailor our approach to where you are and where you're going.
            </p>
          </div>

          <div className="services-bento">
            {services.map((svc, i) => (
              <div key={i} className={`svc ${svc.dark ? 'dark' : ''} ${svc.gridClass} reveal ${svc.delayClass}`}>
                <img
                  className={`svc-img ${svc.gridClass === 'svc-b1' ? 'svc-img-tall' : ''}`}
                  src={svc.img}
                  alt={svc.title}
                />
                <div className="svc-n">{svc.num} — {svc.category}</div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <div className="svc-tags">
                  {svc.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="svc-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" ref={processRef}>
        <div className="process-sticky">
          <div className="wrap">
            <div className="process-head">
              <div className="eyebrow reveal">How We Work</div>
              <h2 className="section-h reveal d1">A process built for<br />predictable success.</h2>
              <p className="section-p reveal d2">
                No guessing. No scope creep. A disciplined workflow that keeps your project on time, on budget, and on brief.
              </p>
            </div>

            <div
              className="process-steps"
              style={{ '--progress': scrollProgress }}
            >
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className={`process-step reveal ${idx > 0 ? 'd' + idx : ''} ${activeSteps[idx] ? 'active' : ''}`}
                >
                  <div className="step-num">{step.num}</div>
                  <div className="step-title">{step.title}</div>
                  <div className="step-desc">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE DETAIL */}
      <section id="service-detail">
        <div className="wrap">
          <div className="detail-grid">
            <div className="detail-left">
              <div className="eyebrow reveal">The Difference</div>
              <h2 className="section-h reveal d1">What sets our<br />delivery apart.</h2>
              <p className="section-p reveal d2">
                We've absorbed the best practices from the world's top product companies
                and distilled them into a process that consistently delivers outcomes — not just outputs.
              </p>
              <img
                className="detail-img reveal d3"
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&auto=format&fit=crop&q=75"
                alt="High performance development team"
              />
            </div>

            <div className="detail-right">
              {details.map((item, idx) => (
                <div key={idx} className={`detail-item reveal ${idx > 0 ? 'd' + idx : ''}`}>
                  <div className="detail-icon">
                    <svg viewBox="0 0 24 24">{item.icon}</svg>
                  </div>
                  <div className="detail-text">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing">
        <div className="wrap">
          <div className="pricing-head">
            <div className="eyebrow reveal">Engagement Models</div>
            <h2 className="section-h reveal d1">Flexible pricing<br />that scales with you.</h2>
            <p className="section-p reveal d2">
              Every project is scoped and priced transparently. No hidden costs, no surprises — just honest value.
            </p>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`pricing-card reveal ${plan.delayClass} ${plan.featured ? 'featured' : ''}`}
              >
                {plan.featured && <div className="featured-badge">Most Popular</div>}
                <div className="pricing-name">{plan.name}</div>
                <div className="pricing-val">{plan.price}</div>
                <div className="pricing-period">{plan.period}</div>
                <div className="pricing-desc">{plan.desc}</div>
                <div className="pricing-features">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className={`pricing-feature ${feat.has ? 'has' : ''}`}>
                      {feat.has ? (
                        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                      ) : (
                        <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                      )}
                      {feat.text}
                    </div>
                  ))}
                </div>
                <div className="pricing-btn">
                  <Link
                    to="/contact"
                    className={plan.featured ? '' : 'btn-surface'}
                  >
                    {plan.ctaText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="tech">
        <div className="wrap">
          <div className="tech-head">
            <div className="eyebrow reveal">Technology</div>
            <h2 className="section-h reveal d1" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)' }}>The stack behind the magic.</h2>
          </div>
        </div>
        <div className="tech-track-wrap">
          <div className="tech-track">
            {[...techStack, ...techStack].map((tech, idx) => (
              <div className="tech-item" key={idx}>
                <div className="tech-dot">
                  <img src={tech.logo} style={{ width: '26px', height: '26px' }} alt={tech.name} />
                </div>
                <div className="tech-name">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CTABanner
        title="Ready to build something<br />remarkable together?"
        subtitle="Share your idea and we'll get back within 24 hours with a clear, no-obligation roadmap."
      />
    </>
  )
}

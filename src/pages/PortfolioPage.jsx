import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { Link } from 'react-router-dom'
import CTABanner from '../components/CTABanner.jsx'
import SEO from '../components/SEO.jsx'
import './AboutPage.css' // Reuse page hero styles
import './ServicesPage.css' // Reuse services card layout styles

const projects = [
  {
    n: '01 — Fintech',
    title: 'PayApex Wealth Platform',
    desc: 'A complete wealth management portal serving 200,000+ active retail investors. Built with low-latency charts, real-time portfolio tracking, and enterprise-grade encryption.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    cls: 'svc dark svc-b1',
    imgCls: 'svc-img svc-img-tall'
  },
  {
    n: '02 — Healthcare',
    title: 'Aura Telehealth Portal',
    desc: 'HIPAA-compliant telemedicine platform connecting patient health records, video consultations, and smart scheduling. Reduced wait times by 40% across 5 clinics.',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80',
    tags: ['Next.js', 'WebRTC', 'AWS', 'MongoDB'],
    cls: 'svc svc-b2',
    imgCls: 'svc-img'
  },
  {
    n: '03 — Logistics',
    title: 'Fleetflow Real-time Tracker',
    desc: 'High-performance dispatching dashboard and mobile tracker handling 10,000+ daily package movements. Leverages real-time geolocation maps and predictive routing algorithms.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80',
    tags: ['Flutter', 'Python', 'WebSockets', 'Docker'],
    cls: 'svc svc-b3',
    imgCls: 'svc-img'
  },
  {
    n: '04 — Real Estate',
    title: 'Dwell Finder System',
    desc: 'A modern, interactive property portal with high-fidelity filtering, VR tour integration, and automated seller messaging pipelines. Drives 3x higher leads than standard listings.',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&auto=format&fit=crop&q=80',
    tags: ['React Native', 'Framer Motion', 'GraphQL'],
    cls: 'svc svc-b4',
    imgCls: 'svc-img'
  },
  {
    n: '05 — EdTech',
    title: 'ScholarSpace LMS',
    desc: 'Interactive, lightweight learning management portal serving schools with customizable course builders, video streaming, and automated grading pipelines.',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=80',
    tags: ['React', 'Tailwind', 'Express', 'Redis'],
    cls: 'svc svc-b5',
    imgCls: 'svc-img'
  }
]

export default function PortfolioPage() {
  useScrollReveal()

  return (
    <>
      <SEO
        title="Our Portfolio – Case Studies & Digital Products | Liftabit"
        description="Browse the high-performance web applications, mobile apps, and custom designs we've shipped for clients worldwide."
        keywords="Liftabit,Software company portfolio,Web application development,Mobile app development,Case studies"
      />
      {/* PAGE HERO */}
      <section id="page-hero">
        <div className="page-hero-inner">
          <div className="eyebrow">Our Work</div>
          <h1 className="page-title">Digital products that<br /><span className="accent">move metrics.</span></h1>
          <p className="page-desc">
            We partner with ambitious founders and established teams to design, engineer, and deploy high-performance software that elevates business operations.
          </p>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section id="portfolio-main" style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="wrap">
          <div className="services-head" style={{ marginBottom: '60px' }}>
            <div>
              <div className="eyebrow reveal">Featured Projects</div>
              <h2 className="section-h reveal d1">Designed to convert.<br />Built to scale.</h2>
            </div>
            <p className="section-p reveal d2">
              Explore a curated selection of systems we've shipped for sectors like finance, medical care, logistics, and real estate.
            </p>
          </div>

          <div className="services-bento">
            {projects.map((proj, i) => (
              <div key={i} className={`${proj.cls} reveal d${Math.min(i, 3)}`}>
                <img className={proj.imgCls} src={proj.img} alt={proj.title} />
                <div className="svc-n">{proj.n}</div>
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <div className="svc-tags">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="svc-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Have a project in mind?"
        subtitle="Let's build it together. Get in touch to schedule a project discovery call."
      />
    </>
  )
}

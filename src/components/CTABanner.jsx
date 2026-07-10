import { Link } from 'react-router-dom'

export default function CTABanner({ title, subtitle }) {
  return (
    <section id="cta-banner">
      <div className="wrap">
        <div className="cta-inner reveal">
          <div className="cta-text">
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
            <p>{subtitle}</p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-orange btn-arrow">Start a Project</Link>
            <Link to="/services" className="btn btn-ghost">Explore Services</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

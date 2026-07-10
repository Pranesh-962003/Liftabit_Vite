import { useScrollReveal } from '../hooks/useScrollReveal.js'
import ContactSection from './sections/ContactSection.jsx'
import SEO from '../components/SEO.jsx'
import './AboutPage.css' // Reuse page hero styles
import './HomePage.css'  // Reuse contact section styles

export default function ContactPage() {
  useScrollReveal()

  return (
    <>
      <SEO
        title="Contact Us – Software Company in Coimbatore | Liftabit"
        description="Get in touch with Liftabit for custom software development. We offer web, mobile, and custom IT services in Coimbatore, Tamil Nadu."
        keywords="Liftabit,Software company,Best IT company,Top IT company,IT company Coimbatore,Software Company Coimbatore,Best IT company Tamil Nadu,Software company near me,Contact us"
      />
      {/* PAGE HERO */}
      <section id="page-hero">
        <div className="page-hero-inner">
          <div className="eyebrow">Get In Touch</div>
          <h1 className="page-title">Let's build something<br /><span className="accent">extraordinary.</span></h1>
          <p className="page-desc">
            Share your vision with us. We reply within 24 hours with a comprehensive, no-obligation implementation roadmap for your project.
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <ContactSection />
    </>
  )
}


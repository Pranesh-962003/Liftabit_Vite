import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './AboutPage.css' // Reuse page hero styles

export default function LegalPage({ type }) {
  useScrollReveal()

  const titles = {
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    cookies: 'Cookie Policy'
  }

  const descriptions = {
    privacy: 'How we collect, use, and safeguard your data when using Liftabit services.',
    terms: 'The terms, rules, and guidelines governing your relationship with Liftabit.',
    cookies: 'Information on how we utilize cookies and tracking technologies.'
  }

  const getContent = () => {
    switch (type) {
      case 'privacy':
        return (
          <>
            <h3>1. Data We Collect</h3>
            <p>We collect information you provide directly to us, such as when you submit a project request form or communicate with us via email. This information may include your name, business email, phone number, company name, and details about your project request.</p>

            <h3>2. How We Use Your Data</h3>
            <p>We utilize the collected information to respond to your project requests, coordinate consultations, deliver software updates, perform customer support, and compile aggregated site performance analytics.</p>

            <h3>3. Data Security</h3>
            <p>We implement comprehensive security measures designed to protect your personal data from unauthorized access, accidental alteration, disclosure, or destruction. We utilize SSL encryption for secure data transmission.</p>

            <h3>4. Contact Us</h3>
            <p>If you have any questions or feedback regarding this Privacy Policy, please reach out to us at <strong>hello@liftabit.com</strong>.</p>
          </>
        )
      case 'terms':
        return (
          <>
            <h3>1. Agreement to Terms</h3>
            <p>By accessing our website or utilizing Liftabit services, you represent that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree, you must immediately cease usage of our platform.</p>

            <h3>2. Project Scope and Delivery</h3>
            <p>All client design and engineering engagements are governed by separate master service agreements (MSA) and statements of work (SOW). Timelines, payment structures, and IP rights are specified within those dedicated contracts.</p>

            <h3>3. Intellectual Property</h3>
            <p>Unless explicitly stated otherwise in a client agreement, the design, codebase, content, logos, and materials published on this website are the intellectual property of Liftabit and are protected under copyright laws.</p>

            <h3>4. Limitation of Liability</h3>
            <p>In no event shall Liftabit, its founders, or team members be liable for any indirect, special, incidental, or consequential damages resulting from your usage or inability to use our website or products.</p>
          </>
        )
      case 'cookies':
        return (
          <>
            <h3>1. What Are Cookies</h3>
            <p>Cookies are small text files stored on your computer or mobile device when you visit websites. They help us understand site navigation patterns, track user session states, and optimize overall site loading speeds.</p>

            <h3>2. Requisite Cookies</h3>
            <p>We use essential cookies strictly needed for site navigation, security features, and processing contact form submissions. These cookies do not collect any identifying personal information.</p>

            <h3>3. Performance &amp; Analytics</h3>
            <p>We may leverage analytics cookies (e.g. Google Analytics) to track visitor numbers, referral sources, and popular pages. This data is fully anonymized and helps us iteratively improve our design system.</p>

            <h3>4. Opt-Out Preferences</h3>
            <p>You can manage, restrict, or disable cookies directly within your internet browser settings. Note that disabling cookies may affect the functionality of certain elements of the site.</p>
          </>
        )
      default:
        return <p>Legal document not found.</p>
    }
  }

  return (
    <>
      {/* PAGE HERO */}
      <section id="page-hero">
        <div className="page-hero-inner">
          <div className="eyebrow">Legal Documents</div>
          <h1 className="page-title">{titles[type]}</h1>
          <p className="page-desc">{descriptions[type]}</p>
        </div>
      </section>

      {/* DOCUMENT CONTENT */}
      <section id="document-body" style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="wrap">
          <div
            style={{
              maxWidth: '740px',
              margin: '0 auto',
              color: 'var(--ink-2)',
              fontSize: '0.95rem',
              lineHeight: '1.8'
            }}
          >
            <style>{`
              #document-body h3 {
                font-size: 1.25rem;
                font-weight: 700;
                color: var(--ink);
                margin: 40px 0 16px;
                letter-spacing: -0.02em;
              }
              #document-body p {
                margin-bottom: 20px;
                color: var(--ink-3);
              }
              #document-body strong {
                color: var(--ink);
              }
            `}</style>
            <div className="reveal d1">
              <p style={{ fontSize: '0.85rem', color: 'var(--ink-4)', marginBottom: '32px', fontWeight: 500 }}>
                Last Updated: June 14, 2026
              </p>
              {getContent()}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

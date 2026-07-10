import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-wrap">
              <img src="/logo1.svg" alt="Liftabit" className="footer-logo-img" />
            </Link>
            <p>Crafting affordable, world-class web and mobile solutions for individuals and organizations across every industry.</p>
            <div className="footer-socials">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hr@liftabit.in" target='_blank' className="f-social" aria-label="Mail">
                <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/liftabit/" target="_blank" rel="noopener noreferrer" className="f-social" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="https://www.instagram.com/liftabit.in?igsh=NDRoZHJmNWZhZXg2" target="_blank" rel="noopener noreferrer" className="f-social" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><Link to="/services">Web Development</Link></li>
              <li><Link to="/services">Mobile Apps</Link></li>
              <li><Link to="/services">UI/UX Design</Link></li>
              <li><Link to="/services">Custom Software</Link></li>
              <li><Link to="/services">Cloud &amp; DevOps</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Process</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Legal</h5>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/cookies">Cookie Policy</Link></li>
              <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=hr@liftabit.in" target='_blank'>hr@liftabit.in</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} <b>Liftabit</b>. All rights reserved.</p>
          <p>Built with precision in <b>Coimbatore, India</b></p>
        </div>
      </div>
    </footer>
  )
}

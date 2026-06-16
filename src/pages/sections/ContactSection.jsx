import { useState, useRef } from 'react'

export default function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [particles, setParticles] = useState([])
  const btnRef = useRef(null)

  function submitForm(e) {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMsg = msg.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMsg) {
      alert("Please fill all fields");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

    if (!emailPattern.test(trimmedEmail) || trimmedEmail.split("@").length !== 2) {
      alert("Please enter a valid email address.");
      setEmail(""); 
      return;
    }

    setSending(true);

    const scriptURL = "https://script.google.com/macros/s/AKfycbxqLGreRNMI9UNMgSqd-Vs_0h-oyJCIhALIfWL9-BThOK34DtAy7bMwjt0fMDt2eCdf/exec";
    const url = `${scriptURL}?name=${encodeURIComponent(trimmedName)}&email=${encodeURIComponent(trimmedEmail)}&message=${encodeURIComponent(trimmedMsg)}`;

    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = url;
    
    iframe.onload = () => {
      document.body.removeChild(iframe);
      setSending(false);
      showSuccess(); // 🔥 Calls your particles animation function here!
    };

    document.body.appendChild(iframe);
  }

  function showSuccess() {
    const colors = ['#ff7700','#ff9533','#0ea5e9','#10b981','#8b5cf6','#f59e0b']
    const pts = Array.from({ length: 18 }, (_, i) => {
      const angle = Math.random() * Math.PI * 2
      const dist = 60 + Math.random() * 80
      return {
        id: i,
        bg: colors[i % colors.length],
        dx: Math.cos(angle) * dist,
        dy: Math.sin(angle) * dist,
        delay: Math.random() * 0.3,
        dur: 0.6 + Math.random() * 0.4,
      }
    })
    setParticles(pts)
    setSuccess(true)
  }

  function resetContact() {
    setSuccess(false)
    setName(''); 
    setEmail(''); 
    setMsg('')
    setParticles([])
  }

  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-left">
            <div className="eyebrow reveal">Start a Conversation</div>
            <h2 className="section-h reveal d1">Tell us what<br />you're building.</h2>
            <p className="section-p reveal d2">
              Share your vision and we will respond within 24 hours with a clear,
              no-obligation roadmap for how we can bring it to life.
            </p>
            <div className="reveal d3">
              <div className="c-detail">
                <div className="c-icon">
                  <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <div className="c-txt"><span>Email</span><strong>hr@liftabit.in</strong></div>
              </div>
              <div className="c-detail">
                <div className="c-icon">
                  <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <div className="c-txt"><span>Location</span><strong>Coimbatore, Tamil Nadu, India</strong></div>
              </div>
              <div className="c-detail">
                <div className="c-icon">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                </div>
                <div className="c-txt"><span>Response time</span><strong>Within 24 hours</strong></div>
              </div>
            </div>
          </div>

          <div className="contact-panel reveal d2">
            <form id="contactForm" onSubmit={submitForm} style={{ display: success ? 'none' : '' }}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="fname">Name</label>
                  <input type="text" id="fname" name="name" autoComplete="name" placeholder="Your full name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-field">
                  <label htmlFor="femail">Email</label>
                  <input type="email" id="femail" name="email" autoComplete="email" placeholder="you@company.com" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="fmsg">Message</label>
                <textarea id="fmsg" name="message" placeholder="Describe your project, goals, or any questions you have..." value={msg} onChange={e => setMsg(e.target.value)} />
              </div>
              <button className="form-btn" type="submit" disabled={sending} ref={btnRef}>
                {sending ? 'Sending...' : (
                  <>
                    Send Message
                    <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </>
                )}
              </button>
            </form>

            <div className={`success-panel${success ? ' show' : ''}`} id="successPanel">
              <div className="particles-burst" id="burstContainer">
                {particles.map(p => (
                  <div key={p.id} className="p-burst" style={{
                    left: '50%', top: '50%',
                    background: p.bg,
                    '--dx': p.dx + 'px',
                    '--dy': p.dy + 'px',
                    animationDelay: p.delay + 's',
                    animationDuration: p.dur + 's',
                  }} />
                ))}
              </div>
              <div className="success-graphic">
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <div className="success-title">Message received.</div>
              <p className="success-sub">We have your message and will get back to you within 24 hours. Keep an eye on your inbox.</p>
              <button className="success-back" onClick={resetContact}>Send another message</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

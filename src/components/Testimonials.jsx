import './Testimonials.css'

const testimonials = [
  {
    quote: "Liftabit redesigned and rebuilt our client portal in six weeks. The design quality is exceptional — our clients noticed immediately and our support tickets dropped by 40%.",
    name: "Arjun Rao",
    role: "CTO, FinEdge Technologies",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&auto=format&fit=crop&q=80",
  },
  {
    quote: "I expected good code. I did not expect the level of strategic thinking they brought to the product. They challenged our assumptions in the best possible way.",
    name: "Sana Patel",
    role: "Founder, ShopFresh",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&auto=format&fit=crop&q=80",
  },
  {
    quote: "They understood our logistics domain better than agencies we had worked with for years. The platform they built handles 50,000 daily operations without a hiccup.",
    name: "Mohammed Khan",
    role: "Operations Head, SwiftRoute",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&auto=format&fit=crop&q=80",
  },
  {
    quote: "Our healthcare dashboard went from concept to production in record time. The UI is clean, intuitive, and our medical staff adopted it with zero training. Remarkable.",
    name: "Dr. Divya Nair",
    role: "Co-Founder, MediTrack",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&auto=format&fit=crop&q=80",
  },
  {
    quote: "We're a small retail business and couldn't afford enterprise software prices. Liftabit gave us enterprise-grade quality at a cost that made business sense. That's rare.",
    name: "Riya Verma",
    role: "Owner, Fabric & Co.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&auto=format&fit=crop&q=80",
  },
  {
    quote: "The transparency throughout the project was unlike any agency we have engaged. Weekly demos, honest status updates, and zero scope creep. They set a new standard.",
    name: "Kiran Sharma",
    role: "Director, EduPathways",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&auto=format&fit=crop&q=80",
  },
]

function TCard({ quote, name, role, avatar }) {
  return (
    <div className="t-card">
      <div className="t-rating">
        {[...Array(5)].map((_, i) => <div key={i} className="t-star" />)}
      </div>
      <p className="t-quote">"{quote}"</p>
      <div className="t-author">
        <img className="t-av" src={avatar} alt={name} />
        <div>
          <div className="t-name">{name}</div>
          <div className="t-role">{role}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials({ bgColor = 'var(--surface)' }) {
  const doubled = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" style={{ background: bgColor }}>
      <div className="wrap">
        <div className="t-head">
          <div className="eyebrow reveal">Client Voices</div>
          <h2 className="section-h reveal d1">The results speak<br />for themselves.</h2>
          <p className="section-p reveal d2">Real words from real clients who trusted Liftabit to build what mattered most to them.</p>
        </div>
      </div>
      <div className="t-scroll-wrap" style={{ '--bg': bgColor }}>
        <div className="t-track">
          {doubled.map((t, i) => <TCard key={i} {...t} />)}
        </div>
      </div>
    </section>
  )
}

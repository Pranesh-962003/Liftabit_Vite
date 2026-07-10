import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import SEO from '../components/SEO.jsx'
import './BlogPage.css'

const authors = {
  rohan: {
    name: 'Rohan Menon',
    role: 'Co-Founder & CTO',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&auto=format&fit=crop&q=80'
  },
  priya: {
    name: 'Priya Suresh',
    role: 'Co-Founder & Head of Design',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&auto=format&fit=crop&q=80'
  },
  arjun: {
    name: 'Arjun Iyer',
    role: 'Lead Engineer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&auto=format&fit=crop&q=80'
  },
  divya: {
    name: 'Divya Krishnan',
    role: 'Product Strategist',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&auto=format&fit=crop&q=80'
  }
}

const featuredPost = {
  category: 'engineering',
  tag: 'Engineering',
  date: 'May 28, 2026',
  readTime: '8 min read',
  title: 'Why We Chose Next.js App Router for Every New Client Project in 2026',
  excerpt: "After shipping 12 web applications this year, we've solidified our stance: the Next.js App Router paired with React Server Components isn't just a trend — it's the architecture that makes the most sense for performance-critical, SEO-dependent products. Here's everything we learned.",
  img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&auto=format&fit=crop&q=80',
  author: authors.rohan
}

const recentArticles = [
  {
    category: 'design',
    tag: 'Design',
    readTime: '6 min',
    title: 'The Design System Approach That Saved 3 Weeks on Our Last Project',
    excerpt: 'How a well-structured component library and design token system cut our design-to-development handoff time by 60%.',
    img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&auto=format&fit=crop&q=75',
    author: authors.priya,
    date: 'May 20, 2026',
    delayClass: ''
  },
  {
    category: 'engineering',
    tag: 'Engineering',
    readTime: '10 min',
    title: 'Zero-Downtime Deployments: Our Kubernetes Playbook',
    excerpt: 'The exact strategy we use to ship to production dozens of times per day with zero user impact, even for database migrations.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=75',
    author: authors.arjun,
    date: 'May 14, 2026',
    delayClass: 'd1'
  },
  {
    category: 'product',
    tag: 'Product',
    readTime: '7 min',
    title: 'Before You Write a Line of Code: The Discovery Sprint That Saves Startups',
    excerpt: 'Why the most valuable work we do happens before development begins — and the five questions every founder needs to answer first.',
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format&fit=crop&q=75',
    author: authors.divya,
    date: 'May 7, 2026',
    delayClass: 'd2'
  },
  {
    category: 'business',
    tag: 'Business',
    readTime: '5 min',
    title: 'How to Evaluate a Software Agency (Without Getting Burned)',
    excerpt: 'After talking to hundreds of business owners, we identified the five red flags that always precede a failed agency relationship.',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=75',
    author: authors.divya,
    date: 'Apr 29, 2026',
    delayClass: ''
  },
  {
    category: 'design',
    tag: 'Design',
    readTime: '9 min',
    title: 'Mobile-First Is Dead. Device-Agnostic Thinking Is What Wins.',
    excerpt: 'Why designing for "mobile first" often produces mediocre desktop experiences — and the mental model shift that fixes it.',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=75',
    author: authors.priya,
    date: 'Apr 21, 2026',
    delayClass: 'd1'
  },
  {
    category: 'engineering',
    tag: 'Engineering',
    readTime: '12 min',
    title: 'Our TypeScript Style Guide: The Rules Every Team Member Follows',
    excerpt: "After three years of TypeScript in production, here are the patterns we enforce, the anti-patterns we've banned, and why.",
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=75',
    author: authors.rohan,
    date: 'Apr 14, 2026',
    delayClass: 'd2'
  }
]

const morePosts = [
  {
    category: 'business',
    tag: 'Business',
    readTime: '6 min',
    title: 'The Real Cost of Cheap Software (And How to Calculate the True ROI)',
    excerpt: 'Why the cheapest quote almost always leads to the most expensive outcome — and a framework for making smarter software investment decisions.',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&auto=format&fit=crop&q=75',
    author: authors.priya,
    date: 'Apr 5, 2026'
  },
  {
    category: 'engineering',
    tag: 'Engineering',
    readTime: '11 min',
    title: "Flutter vs React Native in 2026: An Honest Comparison from a Team That's Shipped Both",
    excerpt: "We've built 8 mobile apps — 5 in Flutter, 3 in React Native. Here's exactly when to choose each, with no agenda.",
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&auto=format&fit=crop&q=75',
    author: authors.arjun,
    date: 'Mar 28, 2026'
  },
  {
    category: 'product',
    tag: 'Product',
    readTime: '8 min',
    title: 'How We Scope an MVP in 48 Hours (Without Cutting Important Corners)',
    excerpt: 'The exact framework we use to determine what goes in a v1, what gets parked for v2, and how we get founders aligned on both.',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=75',
    author: authors.divya,
    date: 'Mar 18, 2026'
  },
  {
    category: 'design',
    tag: 'Design',
    readTime: '7 min',
    title: 'Typography & Color Done Right: Why Most SaaS Products Look Generic',
    excerpt: 'A breakdown of the typographic and color decisions that separate premium product interfaces from everything else on the market.',
    img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&auto=format&fit=crop&q=75',
    author: authors.priya,
    date: 'Mar 10, 2026'
  },
  {
    category: 'business',
    tag: 'Business',
    readTime: '4 min',
    title: 'The Weekly Update Template That Keeps Every Client Happy',
    excerpt: "The exact format we send every Friday to every client — and why it's responsible for our 98% client retention rate.",
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=75',
    author: authors.rohan,
    date: 'Mar 3, 2026'
  }
]

const categories = [
  { id: 'all', label: 'All', count: 12 },
  { id: 'engineering', label: 'Engineering', count: 4 },
  { id: 'design', label: 'Design', count: 3 },
  { id: 'product', label: 'Product', count: 2 },
  { id: 'business', label: 'Business', count: 3 }
]

export default function BlogPage() {
  useScrollReveal()

  const [activeFilter, setActiveFilter] = useState('all')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setEmailError(true)
      setTimeout(() => setEmailError(false), 1500)
      return
    }
    setIsSubscribed(true)
    setEmail('')
  }

  // Helper to check if item is visible
  const isVisible = (cat) => activeFilter === 'all' || cat === activeFilter

  return (
    <>
      <SEO
        title="Software Engineering & Design Blog | Liftabit"
        description="Insights on Web Application Development, Next.js, Flutter, and UI/UX design strategy from the engineering team at Liftabit."
        keywords="Liftabit,Software company blog,Next.js App Router,React Server Components,Web application development,Mobile app development"
      />
      {/* PAGE HERO */}
      <section id="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-left">
            <div className="eyebrow">Liftabit Blog</div>
            <h1 className="page-title">Insights from<br /><span className="accent">builders, for builders.</span></h1>
            <p className="page-desc">
              Engineering deep-dives, design thinking, product strategy, and the lessons we've learned
              shipping software for 30+ clients across 10+ industries.
            </p>
          </div>
          <div className="page-hero-right">
            <Link to="/contact" className="btn btn-dark btn-arrow">Start a Project</Link>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <div id="filter-bar">
        <div className="filter-inner">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label} <span className="filter-count">{cat.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* FEATURED POST */}
      <section id="featured-post">
        <div className="wrap">
          <div className="featured-card reveal">
            <div className="featured-img-wrap">
              <img className="featured-img" src={featuredPost.img} alt={featuredPost.title} />
            </div>
            <div className="featured-body">
              <div className="post-meta">
                <span className="post-tag">{featuredPost.tag}</span>
                <span className="post-meta-sep">·</span>
                <span className="post-date">{featuredPost.date}</span>
                <span className="post-meta-sep">·</span>
                <span className="post-read-time">{featuredPost.readTime}</span>
              </div>
              <a href="#" className="featured-title">
                {featuredPost.title}
              </a>
              <p className="featured-excerpt">
                {featuredPost.excerpt}
              </p>
              <div className="featured-author">
                <img className="author-av" src={featuredPost.author.avatar} alt={featuredPost.author.name} />
                <div>
                  <div className="author-name">{featuredPost.author.name}</div>
                  <div className="author-role">{featuredPost.author.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section id="blog-grid">
        <div className="wrap">
          <div className="blog-grid-head">
            <h2>Recent Articles</h2>
            <a href="#">View all →</a>
          </div>

          <div className="blog-grid" id="blogGrid">
            {recentArticles.map((post, idx) => {
              const visible = isVisible(post.category)
              return (
                <a
                  href="#"
                  className="blog-card reveal"
                  key={idx}
                  style={{ display: visible ? 'flex' : 'none' }}
                >
                  <div className="blog-card-img-wrap">
                    <img className="blog-card-img" src={post.img} alt={post.title} />
                  </div>
                  <div className="blog-card-body">
                    <div className="post-meta">
                      <span className="post-tag">{post.tag}</span>
                      <span className="post-meta-sep">·</span>
                      <span className="post-read-time">{post.readTime}</span>
                    </div>
                    <div className="blog-card-title">{post.title}</div>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <div className="blog-card-footer">
                      <img className="author-av" src={post.author.avatar} alt={post.author.name} />
                      <div>
                        <div className="blog-card-footer-name">{post.author.name}</div>
                        <div className="blog-card-footer-date">{post.date}</div>
                      </div>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter">
        <div className="wrap">
          <div className="newsletter-inner reveal">
            <div className="newsletter-text">
              <div className="eyebrow">Stay in the Loop</div>
              <h2>Engineering insights,<br />straight to your inbox.</h2>
              <p>No noise. Just one well-crafted article every two weeks from the Liftabit team — covering code, design, and the business of building software.</p>
            </div>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <div className="newsletter-input-wrap">
                <input
                  type="email"
                  id="newsletter-email"
                  name="email"
                  autoComplete="email"
                  className="newsletter-input"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ borderColor: emailError ? '#ef4444' : '' }}
                />
                <button type="submit" className="newsletter-btn">Subscribe →</button>
              </div>
              {isSubscribed ? (
                <p className="newsletter-note" style={{ color: 'rgba(255, 119, 0, 0.9)' }}>
                  🎉 You're in! First edition lands in your inbox soon.
                </p>
              ) : (
                <p className="newsletter-note">Join 2,400+ readers. Unsubscribe any time. No spam, ever.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* MORE POSTS */}
      <section id="more-posts">
        <div className="wrap">
          <div className="more-posts-head">
            <h2>More from the Team</h2>
            <a href="#" style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--orange)', textDecoration: 'none' }}>View all →</a>
          </div>

          <div className="more-posts-list" id="morePostsList">
            {morePosts.map((post, idx) => {
              const visible = isVisible(post.category)
              return (
                <a
                  href="#"
                  className="list-post reveal"
                  key={idx}
                  style={{ display: visible ? 'grid' : 'none' }}
                >
                  <div className="list-post-img-wrap">
                    <img className="list-post-img" src={post.img} alt={post.title} />
                  </div>
                  <div>
                    <div className="post-meta">
                      <span className="post-tag">{post.tag}</span>
                      <span className="post-meta-sep">·</span>
                      <span className="post-read-time">{post.readTime}</span>
                    </div>
                    <div className="list-post-title">{post.title}</div>
                    <p className="list-post-excerpt">{post.excerpt}</p>
                    <div className="list-post-footer">
                      <img className="author-av" src={post.author.avatar} alt={post.author.name} />
                      <div>
                        <div className="list-post-footer-name">{post.author.name}</div>
                        <span className="list-post-footer-date">{post.date}</span>
                      </div>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section id="cta-banner">
        <div className="wrap">
          <div className="cta-inner reveal">
            <div className="cta-text">
              <h2>Ready to build something<br />with us?</h2>
              <p>You've read enough. Let's get on a call and talk about what you're building.</p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-orange btn-arrow">Start a Project</Link>
              <Link to="/services" className="btn btn-ghost">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

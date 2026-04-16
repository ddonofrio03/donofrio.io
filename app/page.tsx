import Image from "next/image";
import Link from "next/link";
import { getSortedPostsMetadata } from "@/lib/posts";

const team = [
  { name: "David D'Onofrio", role: "Lead Talker", image: "/images/david.jpg" },
  { name: "Bill D'Onofrio", role: "Lead Thinker", image: "/images/bill.jpg" },
  { name: "Ryan D'Onofrio", role: "Lead Creative", image: "/images/ryan.jpg" },
  { name: "Melissa Chelius", role: "Lead Marketer", image: "/images/missy.jpg" },
  { name: "Alex Chelius", role: "Lead Strategist", image: "/images/alex.jpg" },
  { name: "Allison Triefler", role: "Lead Analyst", image: "/images/alli.jpg" },
  { name: "Nick Triefler", role: "Lead Sales", image: "/images/nick.jpg" },
  { name: "TJ D'Onofrio", role: "Lead Coordinator", image: "/images/tj.jpg" },
];

const services = [
  {
    icon: "⚡",
    title: "Code & AI Solutions",
    desc: "Engineering-minded thinking that solves real business problems — bridging the gap between technical teams and the real world.",
  },
  {
    icon: "📡",
    title: "Message & Community",
    desc: "Clear, credible communication for customers, voters, community members, and decision-makers who all hear things differently.",
  },
  {
    icon: "📈",
    title: "Media & Marketing",
    desc: "Smart strategy without the fluff. Media, marketing, outreach, and positioning so your business is easier to understand and trust.",
  },
];

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function Home() {
  const posts = getSortedPostsMetadata().slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-eyebrow">A Family of Builders</span>
            <h1>
              Create. <em>Amaze.</em> Inspire.
            </h1>
            <p className="hero-sub">
              We&apos;re the D&apos;Onofrios — problem-solvers and straight shooters with
              expertise across AI, sales, marketing, and public affairs.
            </p>
            <div className="hero-actions">
              <a href="#about" className="btn-primary">Learn More</a>
              <a href="#contact" className="btn-ghost">Get in Touch &rarr;</a>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="/images/meeting.jpg"
              alt="The D'Onofrio team in conversation"
              width={600}
              height={520}
              priority
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="section-inner">
          <div className="about-grid">
            <div>
              <div className="section-label">What makes us unique</div>
              <h2 className="section-title">Communication should make sense to real people.</h2>
              <p className="section-sub">
                Some families argue about holidays. We argue about strategy, messaging,
                analytics, and how to improve customer experience. And it works.
              </p>
              <ul className="about-list">
                <li>AI and technical thinking grounded in real-world use</li>
                <li>Sales experience rooted in actual customer conversations</li>
                <li>Marketing that respects your audience</li>
                <li>Public affairs built in high-pressure situations</li>
              </ul>
            </div>
            <div className="about-image">
              <Image
                src="/images/conversation.jpg"
                alt="Team conversation"
                width={560}
                height={480}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services">
        <div className="section-inner">
          <div className="section-label">What we bring to the table</div>
          <h2 className="section-title">A lot of companies offer one skill. We offer many.</h2>
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="diff">
        <div className="section-inner">
          <div className="diff-grid">
            <div>
              <div className="section-label" style={{ color: "var(--gold-light)" }}>
                Disconnection = inefficiency
              </div>
              <h2 className="section-title">
                We solve the disconnect between businesses and the people they need to reach.
              </h2>
              <ul className="diff-list">
                <li><span className="bullet">—</span> Sales expertise grounded in real conversations</li>
                <li><span className="bullet">—</span> Marketing that respects your audience</li>
                <li><span className="bullet">—</span> Technology that enhances human connection</li>
                <li><span className="bullet">—</span> Public affairs that builds relationships</li>
              </ul>
            </div>
            <div className="diff-stats">
              <div className="stat-box">
                <div className="number">40+</div>
                <div className="label">Years combined expertise</div>
              </div>
              <div className="stat-box">
                <div className="number">4</div>
                <div className="label">Core disciplines</div>
              </div>
              <div className="stat-box">
                <div className="number">4</div>
                <div className="label">Major metro markets</div>
              </div>
              <div className="stat-box">
                <div className="number">1</div>
                <div className="label">Tight-knit family team</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team">
        <div className="section-inner">
          <div className="section-label">Our Team</div>
          <h2 className="section-title">The people behind the work.</h2>
          <div className="team-grid">
            {team.map((member) => (
              <div className="team-card" key={member.name}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                />
                <h3>{member.name}</h3>
                <div className="role">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      {posts.length > 0 && (
        <section style={{ background: "var(--cream)" }}>
          <div className="section-inner">
            <div className="section-label">From the blog</div>
            <h2 className="section-title">Latest Thoughts</h2>
            <div className="posts-grid">
              {posts.map((post) => (
                <Link href={`/thoughts/${post.slug}`} key={post.slug} className="post-card">
                  <div className="date">{formatDate(post.date)}</div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="read-more">Read more &rarr;</span>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: "3rem" }}>
              <Link href="/thoughts" className="btn-primary">View All Posts</Link>
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="section-inner">
          <div className="section-label">Let&apos;s connect</div>
          <h2 className="section-title">Ready to start?</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <p>
                Four decades of combined expertise in AI, sales, marketing, and public affairs.
                We bridge the gap between your business and the customers who matter most.
              </p>
              <div className="contact-detail">
                <a href="tel:7039816034">📞 703-981-6034</a>
                <a href="mailto:dave@donofr.io">✉️ dave@donofr.io</a>
              </div>
              <div className="contact-actions">
                <a href="mailto:dave@donofr.io" className="btn-primary">Email Dave</a>
                <a href="tel:7039816034" className="btn-ghost">Call &rarr;</a>
              </div>
            </div>
            <div>
              <div className="locations">
                {[
                  ["NY/NJ", "North Jersey & New York City"],
                  ["DC", "Northern Virginia / Washington DC"],
                  ["CA", "Sacramento / San Francisco"],
                  ["SC", "Grand Strand, South Carolina"],
                ].map(([abbr, full]) => (
                  <div className="location-item" key={abbr}>
                    <h4>{abbr}</h4>
                    <p>{full}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

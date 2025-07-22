const Hackathons = () => {
  return (
    <div className="fade-in page">
      {/* Page Hero */}
      <div style={{ paddingTop: "120px", paddingBottom: "2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
            HAVK Hackathons
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
            Fair, transparent hackathons that celebrate real innovation. Check out our past events and upcoming
            competitions.
          </p>
        </div>
      </div>

      {/* Past Hackathons */}
      <section className="content-section">
        <h2>Past Hackathons</h2>
        <div className="content-grid grid-2">
          <div className="content-card text-center">
            <h3>HAVK: Hacking the Desert</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>July 8-18, 2025 | Completed</p>
            <p style={{ marginBottom: "2rem" }}>
              Our first hackathon focused on solving resource-scarcity challenges. Amazing projects from water leak
              detection to desert agriculture solutions.
            </p>
            <a href="/hacking-the-desert" className="btn btn-primary">
              View Results & Details
            </a>
          </div>

          <div className="content-card text-center" style={{ opacity: 0.6 }}>
            <h3>Next Hackathon</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>Coming Soon</p>
            <p style={{ marginBottom: "2rem" }}>
              We're planning our next fair and transparent hackathon. Join our community to be the first to know!
            </p>
            <a
              href="https://discord.gg/EBXR4SuBCT"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Notified
            </a>
          </div>
        </div>
      </section>

      {/* All Projects Link - At Top */}
      <section className="content-section">
        <div className="highlight-section text-center">
          <h2>All Amazing Projects</h2>
          <p className="text-large" style={{ marginBottom: "2rem" }}>
            Checkout all of our amazing projects from HAVK: Hacking the Desert!
          </p>
          <a
            href="https://havk-hacking-the-desert.devpost.com/project-gallery"
            className="btn btn-primary btn-large"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects on Devpost
          </a>
        </div>
      </section>

      {/* What Makes HAVK Different */}
      <section className="content-section">
        <h2>What Makes HAVK Hackathons Different</h2>
        <div className="content-grid grid-2">
          <div className="content-card">
            <h3>Fair Judging</h3>
            <p>
              External judges evaluate all projects transparently. No insider winners, just merit-based recognition.
            </p>
          </div>
          <div className="content-card">
            <h3>Real Support</h3>
            <p>
              Active mentors and Discord community help participants learn, build, and succeed throughout the event.
            </p>
          </div>
          <div className="content-card">
            <h3>Meaningful Themes</h3>
            <p>
              We focus on real-world problems that matter. Our hackathons address genuine challenges facing communities
              worldwide.
            </p>
          </div>
          <div className="content-card">
            <h3>Community First</h3>
            <p>
              Built by developers, for developers. We prioritize learning, growth, and building lasting connections over
              just competition.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hackathons

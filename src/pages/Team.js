const Team = () => {
  return (
    <div className="fade-in">
      <section className="section" style={{ paddingTop: "120px" }}>
        <h2>Meet the HAVK Team</h2>

        {/* Co-Founders */}
        <div className="section">
          <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>Co-Founders</h3>
          <div className="grid grid-2">
            <div className="card" style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  background: "linear-gradient(45deg, var(--primary-red), #c53030)",
                  margin: "0 auto 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3rem",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                SM
              </div>
              <h3>Summer Malik</h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: "1rem", fontWeight: "600" }}>
                Co-Founder & CEO
              </p>
              <p style={{ marginBottom: "2rem" }}>
                Passionate about creating fair and inclusive hackathons. Summer leads HAVK's mission to revolutionize
                the competitive programming landscape with transparency and community focus.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  href="https://linkedin.com/in/summer-malik"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
                <a href="mailto:summer@havk.org" className="btn btn-primary">
                  Contact
                </a>
              </div>
            </div>

            <div className="card" style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  background: "linear-gradient(45deg, #c53030, var(--primary-red))",
                  margin: "0 auto 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3rem",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                VS
              </div>
              <h3>Vedansh Shenoy</h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: "1rem", fontWeight: "600" }}>
                Co-Founder & CTO
              </p>
              <p style={{ marginBottom: "2rem" }}>
                Technical visionary behind HAVK's platform and infrastructure. Vedansh ensures our hackathons run
                smoothly with cutting-edge technology and robust systems.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  href="https://linkedin.com/in/vedansh-shenoy"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
                <a href="mailto:vedansh@havk.org" className="btn btn-primary">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hacking the Desert Team */}
        <div className="highlight-section" style={{ marginTop: "3rem" }}>
          <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>Hacking the Desert Team</h3>

          <div className="card" style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h4 style={{ color: "var(--primary-red)", marginBottom: "1rem" }}>Event Organizers</h4>
            <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
              The dedicated team making Hacking the Desert 2025 an unforgettable experience.
            </p>

            <div className="grid grid-3">
              <div className="card" style={{ background: "var(--dark-bg)" }}>
                <h4>Event Coordinators</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Coming Soon...</p>
              </div>

              <div className="card" style={{ background: "var(--dark-bg)" }}>
                <h4>Mentor Leads</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Coming Soon...</p>
              </div>

              <div className="card" style={{ background: "var(--dark-bg)" }}>
                <h4>Tech Support</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Coming Soon...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Advisory Board */}
        <div className="section">
          <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>Advisory Board</h3>

          <div className="card" style={{ textAlign: "center" }}>
            <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
              Industry experts and community leaders helping guide HAVK's mission.
            </p>

            <div className="grid grid-2">
              <div className="card" style={{ background: "var(--dark-bg)" }}>
                <h4 style={{ color: "var(--primary-red)" }}>Technical Advisors</h4>
                <p style={{ color: "var(--text-secondary)" }}>
                  Senior engineers and architects from leading tech companies providing guidance on platform development
                  and best practices.
                </p>
                <p style={{ marginTop: "1rem", fontStyle: "italic", color: "var(--text-muted)" }}>
                  Announcements coming soon...
                </p>
              </div>

              <div className="card" style={{ background: "var(--dark-bg)" }}>
                <h4 style={{ color: "var(--primary-red)" }}>Community Advisors</h4>
                <p style={{ color: "var(--text-secondary)" }}>
                  Hackathon veterans and community builders helping shape our events to be more inclusive and impactful.
                </p>
                <p style={{ marginTop: "1rem", fontStyle: "italic", color: "var(--text-muted)" }}>
                  Announcements coming soon...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Join Our Team */}
        <div className="highlight-section" style={{ marginTop: "3rem" }}>
          <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>Join Our Mission</h3>

          <div className="grid grid-3">
            <div className="card" style={{ textAlign: "center" }}>
              <h4>Become a Mentor</h4>
              <p style={{ marginBottom: "1.5rem" }}>
                Share your expertise and help the next generation of developers succeed.
              </p>
              <a href="mailto:mentors@havk.org" className="btn btn-primary">
                Apply to Mentor
              </a>
            </div>

            <div className="card" style={{ textAlign: "center" }}>
              <h4>Join as a Judge</h4>
              <p style={{ marginBottom: "1.5rem" }}>
                Help evaluate projects and recognize outstanding innovation and impact.
              </p>
              <a href="mailto:judges@havk.org" className="btn btn-primary">
                Apply to Judge
              </a>
            </div>

            <div className="card" style={{ textAlign: "center" }}>
              <h4>Partner With Us</h4>
              <p style={{ marginBottom: "1.5rem" }}>
                Collaborate with HAVK to create better opportunities for developers.
              </p>
              <a href="mailto:partnerships@havk.org" className="btn btn-primary">
                Explore Partnership
              </a>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="section">
          <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>What Drives Us</h3>

          <div className="grid grid-2">
            <div className="card">
              <h4 style={{ color: "var(--primary-red)" }}>Our Mission</h4>
              <p>
                To create fair, transparent, and inclusive hackathons that truly celebrate innovation and provide equal
                opportunities for all participants to showcase their talents.
              </p>
            </div>

            <div className="card">
              <h4 style={{ color: "var(--primary-red)" }}>Our Vision</h4>
              <p>
                A world where every developer, regardless of background or experience level, has access to genuine
                opportunities to learn, build, and grow in a supportive community.
              </p>
            </div>
          </div>

          <div className="card" style={{ marginTop: "2rem" }}>
            <h4 style={{ color: "var(--primary-red)" }}>Core Values</h4>
            <div className="grid grid-3">
              <div style={{ textAlign: "center" }}>
                <h5>Transparency</h5>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                  Open processes, clear criteria, and honest communication in everything we do.
                </p>
              </div>

              <div style={{ textAlign: "center" }}>
                <h5>Fairness</h5>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                  Equal opportunities for all participants, with external judging and merit-based recognition.
                </p>
              </div>

              <div style={{ textAlign: "center" }}>
                <h5>Community</h5>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                  Built by developers, for developers, with genuine support and collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Team */}
        <div className="section" style={{ textAlign: "center" }}>
          <h3>Get in Touch with Our Team</h3>
          <p style={{ marginBottom: "2rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
            Have questions about joining our team or want to learn more about our mission? We'd love to hear from you!
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:team@havk.org" className="btn btn-primary">
              Contact Our Team
            </a>
            <a
              href="https://linkedin.com/company/havk"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow on LinkedIn
            </a>
            <a href="https://discord.gg/havk" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Join Our Community
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team

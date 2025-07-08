const Contributors = () => {
  return (
    <div className="fade-in page">
      {/* Page Hero - Compact */}
      <div style={{ paddingTop: "120px", paddingBottom: "2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
            HAVK Contributors
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
            HAVK is built by an amazing community of developers, mentors, and supporters who believe in fair,
            transparent hackathons. Here are the people making it happen.
          </p>
        </div>
      </div>

      {/* Founders */}
      <section className="content-section">
        <h2>Founders</h2>
        <div className="content-grid grid-2">
          <div className="content-card team-profile">
            <div className="profile-avatar">SM</div>
            <h3>Summer Malik</h3>
            <p className="role">Co-Founder</p>
            <p style={{ marginBottom: "2rem" }}></p>
            <a href="mailto:hackwithhavk@gmail.com" className="btn btn-primary">
              Contact
            </a>
          </div>

          <div className="content-card team-profile">
            <div className="profile-avatar">VS</div>
            <h3>Vedanth Shenoy</h3>
            <p className="role">Co-Founder</p>
            <p style={{ marginBottom: "2rem" }}></p>
            <a href="mailto:hackwithhavk@gmail.com" className="btn btn-primary">
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* People Who Made It Possible */}
      <section className="content-section">
        <h2>People Who Made Our Journey Possible</h2>
        <p className="text-center" style={{ marginBottom: "3rem", color: "var(--text-secondary)" }}>
          Special recognition for the incredible individuals who believed in our mission from the beginning.
        </p>

        <div className="content-grid grid-4">
          <div className="action-card">
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--text-primary), var(--text-secondary))",
                margin: "0 auto 1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                color: "var(--dark-bg)",
                fontWeight: "bold",
              }}
            >
              ME
            </div>
            <h3>Magd Elkayfe</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Community Champion</p>
            <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "1rem", lineHeight: "1.4" }}>
              Tirelessly promoting HAVK and welcoming new community members.
            </p>
            <a
              href="https://www.linkedin.com/in/magd-elkayfe/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.9rem", padding: "0.5rem 1rem" }}
            >
              LinkedIn
            </a>
          </div>

          {/* Placeholder cards for more people */}
          <div className="action-card" style={{ opacity: 0.5 }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--border), var(--accent))",
                margin: "0 auto 1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                color: "var(--text-muted)",
                fontWeight: "bold",
              }}
            >
              ?
            </div>
            <h3 style={{ color: "var(--text-muted)" }}>Your Name Here</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Future Contributor</p>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "1rem", lineHeight: "1.4" }}>
              Your contribution description here.
            </p>
            <div style={{ fontSize: "0.9rem", padding: "0.5rem 1rem", color: "var(--text-muted)" }}>Coming Soon</div>
          </div>

          <div className="action-card" style={{ opacity: 0.5 }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--border), var(--accent))",
                margin: "0 auto 1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                color: "var(--text-muted)",
                fontWeight: "bold",
              }}
            >
              ?
            </div>
            <h3 style={{ color: "var(--text-muted)" }}>Your Name Here</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Future Contributor</p>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "1rem", lineHeight: "1.4" }}>
              Your contribution description here.
            </p>
            <div style={{ fontSize: "0.9rem", padding: "0.5rem 1rem", color: "var(--text-muted)" }}>Coming Soon</div>
          </div>

          <div className="action-card" style={{ opacity: 0.5 }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--border), var(--accent))",
                margin: "0 auto 1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                color: "var(--text-muted)",
                fontWeight: "bold",
              }}
            >
              ?
            </div>
            <h3 style={{ color: "var(--text-muted)" }}>Your Name Here</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Future Contributor</p>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "1rem", lineHeight: "1.4" }}>
              Your contribution description here.
            </p>
            <div style={{ fontSize: "0.9rem", padding: "0.5rem 1rem", color: "var(--text-muted)" }}>Coming Soon</div>
          </div>
        </div>
      </section>

      {/* Current Mentors */}
      <section className="content-section">
        <div className="highlight-section text-center">
          <h2>Current Mentors</h2>
          <p className="text-large" style={{ marginBottom: "2rem" }}>
            We're building our mentor community. Be among the first to join and help shape the future of fair
            hackathons.
          </p>
          <p style={{ color: "var(--text-muted)", fontStyle: "italic", fontSize: "1.1rem", marginBottom: "2rem" }}>
            Mentor profiles coming soon...
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdlcbh48I_pmhnqvhItdjIPvtC8-LAGQnVowe0bG4FQVPxrvQ/viewform?usp=header"
            className="btn btn-primary btn-large"
            target="_blank"
            rel="noopener noreferrer"
          >
            Become Our First Mentor
          </a>
        </div>
      </section>

      {/* Recognition Program */}
      <section className="content-section">
        <h2>Recognition Program</h2>
        <div className="content-grid grid-2">
          <div className="content-card">
            <h3>How We Recognize Contributors</h3>
            <ul>
              <li>Featured profiles on our website</li>
              <li>Special Discord roles and recognition</li>
              <li>LinkedIn recommendations</li>
              <li>Resume and portfolio enhancement</li>
              <li>Priority access to new opportunities</li>
              <li>Networking with other contributors</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>Contribution Levels</h3>
            <ul>
              <li>
                <strong>Supporter:</strong> Community members who help spread the word
              </li>
              <li>
                <strong>Contributor:</strong> Active participants in hackathons and community
              </li>
              <li>
                <strong>Mentor:</strong> Experienced developers guiding participants
              </li>
              <li>
                <strong>Core Team:</strong> Regular contributors to HAVK's operations
              </li>
              <li>
                <strong>Founder:</strong> Original creators and leaders of HAVK
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="content-section">
        <div className="highlight-section text-center">
          <h2>Want to Be Featured Here?</h2>
          <p className="text-large" style={{ marginBottom: "3rem", maxWidth: "600px", margin: "0 auto 3rem" }}>
            Contribute to HAVK's mission and get recognized for your efforts. Whether you're mentoring, creating
            content, or helping with community management, we value every contribution.
          </p>

          <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdlcbh48I_pmhnqvhItdjIPvtC8-LAGQnVowe0bG4FQVPxrvQ/viewform?usp=header"
              className="btn btn-primary btn-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply to Mentor
            </a>
            <a href="mailto:hackwithhavk@gmail.com" className="btn btn-secondary btn-large">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contributors


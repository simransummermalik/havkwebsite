import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="fade-in">
      {/* Hero Section - Full Screen */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Fair Hackathons</h1>
            <p className="subtitle">
              Community-driven competitions with external judging, real mentorship, and genuine opportunities for career
              growth.
            </p>

            <div className="hero-cta">
              <a
                href="https://discord.gg/EBXR4SuBCT"
                className="btn btn-primary btn-large"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Community
              </a>
              <Link to="/hackathons" className="btn btn-secondary btn-large">
                Learn About Hackathons
              </Link>
            </div>
          </div>

          <div className="hero-video-section">
            <Link to="/hackathons" className="hackathon-link">
              Next Hackathon Coming Soon - Click Here
            </Link>
            <div className="hero-video">
              <iframe
                src="https://www.youtube.com/embed/WtXjkk70lcY"
                title="HAVK Story - Exposing Hackathon Fraud"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Winners Announcement */}
      <section className="content-section" style={{ padding: "2rem 2rem 1rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div className="content-card" style={{ padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.75rem", fontSize: "1.3rem" }}>🎉 HAVK: Hacking the Desert Winners!</h3>
            <p style={{ marginBottom: "1rem", color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              Congratulations to Shrinav Loka (AquaSpot), Hunter Forsythe (Where's the Well?), and Neha Kandpal
              (DesertSmart)!
            </p>
            <Link to="/hacking-the-desert" className="btn btn-primary">
              View All Winners & Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Why HAVK Is Different - Full Screen Section */}
      <section className="spacious-section">
        <div className="section-content">
          <h2 className="section-title">Why HAVK Is Different</h2>
          <p className="section-subtitle">
            We're building hackathons the way they should be - fair, transparent, and focused on real developer growth.
          </p>

          <div className="spacious-grid grid-2-spacious">
            <div className="spacious-card">
              <h3>No Insider Winners</h3>
              <p>Externally judged by real developers, not event organizers. Every submission gets fair evaluation.</p>
            </div>
            <div className="spacious-card">
              <h3>Real Support</h3>
              <p>
                Live mentors and active Discord help for all participants. Get unstuck, learn new skills, and build
                better projects.
              </p>
            </div>
            <div className="spacious-card">
              <h3>Fast & Online</h3>
              <p>
                One week, online, open to solo developers and teams. No travel required, just bring your passion for
                building.
              </p>
            </div>
            <div className="spacious-card">
              <h3>We Care</h3>
              <p>Feature standout builds and provide detailed feedback. Your work matters and deserves recognition.</p>
            </div>
            <div className="spacious-card">
              <h3>Anti-Scam</h3>
              <p>
                Built after witnessing rigged hackathon competitions. We're here to restore trust in competitive
                programming.
              </p>
            </div>
            <div className="spacious-card">
              <h3>Resume-Worthy</h3>
              <p>
                Valuable experience for participants, mentors, and judges. Build your portfolio with meaningful
                projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links - Full Screen Section */}
      <section className="spacious-section">
        <div className="section-content">
          <h2 className="section-title">Quick Links</h2>
          <p className="section-subtitle">Everything you need to get started with HAVK.</p>

          <div className="spacious-grid grid-6-compact">
            <div className="action-card">
              <div>
                <h3>Discord</h3>
                <p>24/7 community support</p>
              </div>
              <a
                href="https://discord.gg/EBXR4SuBCT"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join
              </a>
            </div>

            <div className="action-card">
              <div>
                <h3>Hackathons</h3>
                <p>See past winners & upcoming events</p>
              </div>
              <Link to="/hackathons" className="btn btn-primary">
                Learn More
              </Link>
            </div>

            <div className="action-card">
              <div>
                <h3>Mentors</h3>
                <p>Guide participants</p>
              </div>
              <Link to="/mentors" className="btn btn-primary">
                Apply
              </Link>
            </div>

            <div className="action-card">
              <div>
                <h3>Get Involved</h3>
                <p>Contribute to HAVK</p>
              </div>
              <Link to="/get-involved" className="btn btn-primary">
                Help Out
              </Link>
            </div>

            <div className="action-card">
              <div>
                <h3>GitHub</h3>
                <p>Open source code</p>
              </div>
              <a
                href="https://github.com/hackwithhavk"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
            </div>

            <div className="action-card">
              <div>
                <h3>Email</h3>
                <p>Direct contact</p>
              </div>
              <a href="mailto:hackwithhavk@gmail.com" className="btn btn-primary">
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

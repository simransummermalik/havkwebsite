import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="fade-in page">
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero-content">
          <h1>About HAVK</h1>
          <p className="subtitle">
            Creating fair, transparent, and inclusive hackathons that genuinely celebrate innovation and provide equal
            opportunities for all participants to showcase their talents.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="content-section">
        <div className="content-grid grid-2">
          <div className="content-card">
            <h3>Our Mission</h3>
            <p>
              HAVK creates fair, transparent, and inclusive hackathons that genuinely celebrate innovation and provide
              equal opportunities for all participants to showcase their talents and build meaningful projects.
            </p>
            <p>We believe in merit-based recognition, external validation, and community-driven success.</p>
          </div>

          <div className="content-card">
            <h3>Our Vision</h3>
            <p>
              A world where every developer, regardless of background or experience level, has access to genuine
              opportunities to learn, build, and grow in a supportive, transparent environment.
            </p>
            <p>We envision hackathons as catalysts for innovation, learning, and professional development.</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="content-section">
        <div className="highlight-section">
          <h2>Core Values</h2>
          <div className="content-grid grid-3">
            <div className="text-center">
              <h3>Transparency</h3>
              <p>Open processes, clear criteria, and honest communication in everything we do.</p>
            </div>
            <div className="text-center">
              <h3>Fairness</h3>
              <p>Equal opportunities for all participants, with external judging and merit-based recognition.</p>
            </div>
            <div className="text-center">
              <h3>Community</h3>
              <p>Built by developers, for developers, with genuine support and collaboration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="content-section">
        <h2>What Makes Us Different</h2>
        <div className="content-grid grid-2">
          <div className="content-card">
            <h3>Our Approach</h3>
            <ul>
              <li>External judging panel with industry professionals</li>
              <li>Open-source judging criteria and scoring methodology</li>
              <li>Real mentorship from experienced developers</li>
              <li>Community-driven event planning and feedback</li>
              <li>Zero tolerance for fraud or manipulation</li>
              <li>Focus on learning and growth over just winning</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>Our Programs</h3>
            <ul>
              <li>
                <strong>Regular Hackathons:</strong> Themed competitions addressing real-world problems
              </li>
              <li>
                <strong>Mentorship Network:</strong> Connecting experienced developers with newcomers
              </li>
              <li>
                <strong>Skill Workshops:</strong> Technical training and professional development
              </li>
              <li>
                <strong>Career Support:</strong> Resume building and interview preparation
              </li>
              <li>
                <strong>Community Events:</strong> Networking and knowledge sharing opportunities
              </li>
              <li>
                <strong>Industry Partnerships:</strong> Connecting participants with potential employers
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="content-section">
        <h2>Our Commitment</h2>
        <div className="content-grid grid-2">
          <div className="content-card">
            <h3>To Participants</h3>
            <ul>
              <li>Fair evaluation of all submissions</li>
              <li>Constructive feedback from industry experts</li>
              <li>Networking opportunities with professionals</li>
              <li>Recognition for outstanding work</li>
              <li>Career development support</li>
            </ul>
          </div>
          <div className="content-card">
            <h3>To the Community</h3>
            <ul>
              <li>Transparent operations and decision-making</li>
              <li>Regular community feedback integration</li>
              <li>Open communication about processes</li>
              <li>Continuous improvement based on input</li>
              <li>Ethical practices in all activities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="content-section">
        <div className="highlight-section text-center">
          <h2>Join Our Mission</h2>
          <p className="text-large" style={{ marginBottom: "3rem" }}>
            Whether you're a participant, mentor, judge, or supporter, there's a place for you in the HAVK community.
            Together, we're building the future of fair and inclusive hackathons.
          </p>
          <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://discord.gg/EBXR4SuBCT"
              className="btn btn-primary btn-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Community
            </a>
            <Link to="/mentors" className="btn btn-secondary btn-large">
              Become a Mentor
            </Link>
            <Link to="/help" className="btn btn-secondary btn-large">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
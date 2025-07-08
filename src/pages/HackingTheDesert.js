const HackingTheDesert = () => {
  return (
    <div className="fade-in page">
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero-content">
          <h1>HAVK: Hacking the Desert</h1>
          <p className="subtitle">
            Survive and Innovate in Resource-Scarce Environments
            <br />
            July 8-18, 2025 | Online | Beginner Friendly
          </p>
          <div style={{ display: "flex", gap: "2rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
            <a
              href="https://havk-hacking-the-desert.devpost.com/"
              className="btn btn-primary btn-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register on Devpost
            </a>
            <a
              href="https://discord.gg/EBXR4SuBCT"
              className="btn btn-secondary btn-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>

      {/* The Challenge */}
      <section className="content-section">
        <h2>The Challenge</h2>
        <div className="highlight-section">
          <p className="text-large text-center" style={{ marginBottom: "3rem" }}>
            Use code to develop impactful solutions to any form of scarcity — whether it's water, food, energy,
            healthcare access, digital equity, or resource distribution. Interpret the theme your way and build
            something meaningful.
          </p>

          <div className="content-grid grid-2">
            <div className="content-card">
              <h3>Event Details</h3>
              <ul>
                <li>
                  <strong>Duration:</strong> 1 week (July 8-18, 2025)
                </li>
                <li>
                  <strong>Format:</strong> Online hackathon
                </li>
                <li>
                  <strong>Focus:</strong> Software solutions only
                </li>
                <li>
                  <strong>Eligibility:</strong> Above legal age in your country
                </li>
                <li>
                  <strong>Teams:</strong> Solo or team participation
                </li>
                <li>
                  <strong>Skill Level:</strong> All levels welcome
                </li>
              </ul>
            </div>

            <div className="content-card">
              <h3>Registration</h3>
              <p style={{ marginBottom: "2rem" }}>To participate, you need to register on both platforms:</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <a
                  href="https://havk-hacking-the-desert.devpost.com/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register on Devpost
                </a>
                <a
                  href="https://forms.gle/bobG8g2tgNza7aU98"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fill Registration Form
                </a>
                <a
                  href="https://discord.gg/EBXR4SuBCT"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Discord Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Areas */}
      <section className="content-section">
        <h2>Challenge Inspiration</h2>
        <p className="text-center" style={{ marginBottom: "3rem", color: "var(--text-secondary)" }}>
          These are just suggestions! You are not required to follow them. We encourage original, impactful, and
          unconventional ideas.
        </p>

        <div className="content-grid grid-3">
          <div className="content-card">
            <h4>Food & Water Security</h4>
            <p>Tech solutions for food deserts, water scarcity, or drought-resistant agriculture systems.</p>
          </div>

          <div className="content-card">
            <h4>Supply Chain Resilience</h4>
            <p>Apps for supply chain management in remote or unstable regions with limited resources.</p>
          </div>

          <div className="content-card">
            <h4>Community Uplift</h4>
            <p>Systems that support marginalized and underserved communities facing resource challenges.</p>
          </div>

          <div className="content-card">
            <h4>Smart Resource Management</h4>
            <p>Solutions for urban or rural "resource deserts" and efficient resource distribution.</p>
          </div>

          <div className="content-card">
            <h4>Emergency Technologies</h4>
            <p>Tools for climate-driven migration zones and emergency resource allocation.</p>
          </div>

          <div className="content-card">
            <h4>Digital Equity</h4>
            <p>Bridging digital divides and ensuring technology access in underserved areas.</p>
          </div>
        </div>
      </section>

      {/* Submission Requirements */}
      <section className="content-section">
        <h2>Submission Requirements</h2>
        <div className="content-grid grid-3">
          <div className="content-card">
            <h3>Video Presentation</h3>
            <ul>
              <li>5-minute maximum duration</li>
              <li>Explain your product, idea, and process</li>
              <li>Upload to YouTube (unlisted is fine)</li>
              <li>Clear and concise presentation</li>
              <li>Contact us on Discord for help</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>GitHub Repository</h3>
            <ul>
              <li>All code must start from hackathon start date</li>
              <li>Clear and consistent commit messages</li>
              <li>Comprehensive README file</li>
              <li>Include setup instructions</li>
              <li>Document your tech stack</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>Project Description</h3>
            <ul>
              <li>What your project does</li>
              <li>Who it helps</li>
              <li>How it works (technical overview)</li>
              <li>Why it matters</li>
              <li>Impact and potential</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Judging */}
      <section className="content-section">
        <div className="highlight-section">
          <h2>Judging Criteria</h2>
          <div className="content-grid grid-2">
            <div>
              <h3>Judges</h3>
              <div className="content-card" style={{ background: "var(--dark-bg)" }}>
                <h4>Summer Malik</h4>
                <p>Co-Founder - HAVK</p>
              </div>
              <div className="content-card" style={{ background: "var(--dark-bg)" }}>
                <h4>Vedansh Shenoy</h4>
                <p>Co-Founder - HAVK</p>
              </div>
            </div>

            <div>
              <h3>Evaluation Criteria</h3>
              <ul>
                <li>
                  <strong>Technical Depth (10 points):</strong> Implementation complexity and challenge
                </li>
                <li>
                  <strong>Creativity (10 points):</strong> Originality and inventiveness
                </li>
                <li>
                  <strong>Accessibility (10 points):</strong> Works for diverse backgrounds and abilities
                </li>
                <li>
                  <strong>Usability (5 points):</strong> Easy to use and understand
                </li>
                <li>
                  <strong>Visuals (5 points):</strong> Polished UI/UX and design
                </li>
                <li>
                  <strong>Fun Factor (5 points):</strong> Engaging and delightful experience
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section className="content-section">
        <h2>Recognition & Prizes</h2>
        <p className="text-center" style={{ marginBottom: "3rem", color: "var(--text-secondary)" }}>
          Prizes are simple for now — as we grow and explore international prize logistics, we aim to offer more in
          future editions.
        </p>

        <div className="content-grid grid-3">
          <div className="content-card text-center" style={{ border: "2px solid #FFD700" }}>
            <h3>1st Place</h3>
            <ul>
              <li>HAVK Certificate</li>
              <li>Special Discord Role</li>
              <li>Featured on HAVK platform</li>
              <li>Recognition in community</li>
            </ul>
          </div>

          <div className="content-card text-center" style={{ border: "2px solid #C0C0C0" }}>
            <h3>2nd Place</h3>
            <ul>
              <li>HAVK Certificate</li>
              <li>Featured on HAVK platform</li>
              <li>Community recognition</li>
            </ul>
          </div>

          <div className="content-card text-center" style={{ border: "2px solid #CD7F32" }}>
            <h3>3rd Place</h3>
            <ul>
              <li>HAVK Certificate</li>
              <li>Featured on HAVK platform</li>
              <li>Community recognition</li>
            </ul>
          </div>
        </div>

        <div className="content-card text-center" style={{ marginTop: "2rem" }}>
          <h3>All Participants Receive</h3>
          <p>
            Digital certificate of participation, detailed feedback, networking opportunities, and resume enhancement.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="content-section">
        <div className="highlight-section text-center">
          <h2>Ready to Build Something Meaningful?</h2>
          <p className="text-large" style={{ marginBottom: "3rem", maxWidth: "600px", margin: "0 auto 3rem" }}>
            Join developers worldwide in creating solutions that address real scarcity challenges.
          </p>

          <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://havk-hacking-the-desert.devpost.com/"
              className="btn btn-primary btn-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </a>
            <a
              href="https://discord.gg/EBXR4SuBCT"
              className="btn btn-secondary btn-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discord
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HackingTheDesert

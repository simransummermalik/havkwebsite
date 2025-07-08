const Help = () => {
  return (
    <div className="fade-in page">
      {/* Page Header */}
      <div className="page-header">
        <h1>Want to Help HAVK?</h1>
        <p className="subtitle">
          HAVK is built by the community, for the community. There are many ways you can contribute to our mission of
          creating fair, transparent hackathons.
        </p>
      </div>

      {/* Current Opportunities */}
      <section className="section">
        <h2>Current Opportunities</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3>Become a Mentor</h3>
            <p>
              We're actively looking for experienced developers to guide participants during hackathons. Share your
              expertise and help build the next generation of developers.
            </p>
            <div style={{ marginTop: "2rem" }}>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdlcbh48I_pmhnqvhItdjIPvtC8-LAGQnVowe0bG4FQVPxrvQ/viewform?usp=header"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply to Mentor
              </a>
            </div>
          </div>

          <div className="card">
            <h3>Spread the Word</h3>
            <p>
              Help us grow by sharing HAVK with your network. The more developers who know about fair hackathons, the
              stronger our community becomes.
            </p>
            <div style={{ marginTop: "2rem" }}>
              <a
                href="https://discord.gg/EBXR4SuBCT"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section">
        <div className="highlight-section">
          <h2>Coming Soon</h2>
          <div className="grid grid-3">
            <div className="card text-center">
              <h3>Judge Applications</h3>
              <p>Help evaluate projects fairly and provide constructive feedback to participants.</p>
              <span style={{ color: "var(--text-muted)", fontStyle: "italic" }}>Coming Soon</span>
            </div>

            <div className="card text-center">
              <h3>Community Management</h3>
              <p>Help moderate Discord, create content, and foster a welcoming community environment.</p>
              <span style={{ color: "var(--text-muted)", fontStyle: "italic" }}>Coming Soon</span>
            </div>

            <div className="card text-center">
              <h3>Content Creation</h3>
              <p>Create tutorials, write blog posts, or produce video content to help our community grow.</p>
              <span style={{ color: "var(--text-muted)", fontStyle: "italic" }}>Coming Soon</span>
            </div>

            <div className="card text-center">
              <h3>Partnership Outreach</h3>
              <p>Help us connect with sponsors, educational institutions, and other organizations.</p>
              <span style={{ color: "var(--text-muted)", fontStyle: "italic" }}>Coming Soon</span>
            </div>

            <div className="card text-center">
              <h3>Technical Contributors</h3>
              <p>Contribute to HAVK's platform development, website improvements, and technical infrastructure.</p>
              <span style={{ color: "var(--text-muted)", fontStyle: "italic" }}>Coming Soon</span>
            </div>

            <div className="card text-center">
              <h3>Event Coordinators</h3>
              <p>Help organize and coordinate hackathon events, manage logistics, and ensure smooth operations.</p>
              <span style={{ color: "var(--text-muted)", fontStyle: "italic" }}>Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Help HAVK */}
      <section className="section">
        <h2>Why Help HAVK?</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3>Make a Real Impact</h3>
            <ul>
              <li>Help create fair opportunities for developers worldwide</li>
              <li>Combat fraudulent practices in hackathons</li>
              <li>Support the next generation of innovators</li>
              <li>Build a transparent, community-driven platform</li>
            </ul>
          </div>

          <div className="card">
            <h3>Professional Benefits</h3>
            <ul>
              <li>Build your professional network</li>
              <li>Gain valuable experience for your resume</li>
              <li>Develop leadership and mentoring skills</li>
              <li>Get recognized in the developer community</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="section">
        <h2>Other Ways to Contribute</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3>Participate in Hackathons</h3>
            <p>
              The best way to support HAVK is to participate in our hackathons. Build amazing projects, provide
              feedback, and help us improve our events.
            </p>
          </div>

          <div className="card">
            <h3>Provide Feedback</h3>
            <p>
              Share your thoughts on how we can improve HAVK. Your feedback helps us create better experiences for
              everyone in the community.
            </p>
          </div>

          <div className="card">
            <h3>Connect Us with Sponsors</h3>
            <p>
              Know companies that might want to sponsor fair hackathons? Help us connect with brands that align with our
              values of transparency and fairness.
            </p>
          </div>

          <div className="card">
            <h3>Share Your Story</h3>
            <p>
              If you've experienced unfair hackathons or have success stories from HAVK events, share them to help
              others understand why fair competition matters.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section">
        <div className="highlight-section text-center">
          <h2>Ready to Get Involved?</h2>
          <p className="text-large" style={{ marginBottom: "3rem", maxWidth: "600px", margin: "0 auto 3rem" }}>
            Have ideas for how you can contribute? Want to discuss partnership opportunities? We'd love to hear from
            you.
          </p>

          <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:hackwithhavk@gmail.com" className="btn btn-primary btn-large">
              Email Us
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

export default Help

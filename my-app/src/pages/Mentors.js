const Mentors = () => {
  return (
    <div className="fade-in page">
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero-content">
          <h1>HAVK Mentor Program</h1>
          <p className="subtitle">
            Join our community of developers helping the next generation build their careers through hackathons and
            mentorship.
          </p>
        </div>
      </div>

      {/* What Mentors Do & What You Gain */}
      <section className="content-section">
        <div className="content-grid grid-2">
          <div className="content-card">
            <h3>What Mentors Do</h3>
            <ul>
              <li>
                <strong>Guide participants:</strong> Help teams navigate technical challenges
              </li>
              <li>
                <strong>Provide feedback:</strong> Review projects and offer constructive advice
              </li>
              <li>
                <strong>Share expertise:</strong> Offer insights from your professional experience
              </li>
              <li>
                <strong>Support beginners:</strong> Help newcomers feel welcome and confident
              </li>
              <li>
                <strong>Network building:</strong> Connect participants with opportunities
              </li>
              <li>
                <strong>Career advice:</strong> Share guidance on professional development
              </li>
            </ul>
          </div>

          <div className="content-card">
            <h3>What You Gain</h3>
            <ul>
              <li>
                <strong>Professional recognition:</strong> Featured on our platform and materials
              </li>
              <li>
                <strong>Resume enhancement:</strong> Valuable mentoring experience
              </li>
              <li>
                <strong>Community networking:</strong> Connect with other developers
              </li>
              <li>
                <strong>Skill development:</strong> Improve your leadership and communication
              </li>
              <li>
                <strong>Community impact:</strong> Make a real difference in developers' careers
              </li>
              <li>
                <strong>Flexible commitment:</strong> Choose your level of involvement
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mentor Responsibilities */}
      <section className="content-section">
        <div className="highlight-section">
          <h2>Mentor Responsibilities</h2>
          <div className="content-grid grid-3">
            <div className="text-center">
              <h3>During Hackathons</h3>
              <p>
                Be available on Discord to answer questions, provide guidance, and help teams overcome technical
                challenges during the event week.
              </p>
            </div>
            <div className="text-center">
              <h3>Project Reviews</h3>
              <p>
                Review submitted projects and provide constructive feedback to help participants improve their work and
                presentation skills.
              </p>
            </div>
            <div className="text-center">
              <h3>Community Support</h3>
              <p>
                Participate in our Discord community, share knowledge, and help create a welcoming environment for all
                skill levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements & Time Commitment */}
      <section className="content-section">
        <div className="content-grid grid-2">
          <div className="content-card">
            <h3>Mentor Requirements</h3>
            <ul>
              <li>Professional development experience (2+ years)</li>
              <li>Willingness to help others learn and grow</li>
              <li>Available for Discord support during hackathons</li>
              <li>Commitment to fair and constructive feedback</li>
              <li>Alignment with HAVK's values of transparency and fairness</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>Time Commitment</h3>
            <ul>
              <li>
                <strong>Hackathon weeks:</strong> 3-5 hours of Discord availability
              </li>
              <li>
                <strong>Project reviews:</strong> 2-3 hours per hackathon
              </li>
              <li>
                <strong>Community participation:</strong> As much as you'd like
              </li>
              <li>
                <strong>Flexibility:</strong> Work around your schedule
              </li>
              <li>
                <strong>No long-term obligation:</strong> Participate when available
              </li>
            </ul>
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
          <p style={{ color: "var(--text-muted)", fontStyle: "italic", fontSize: "1.1rem" }}>
            Mentor profiles and testimonials coming soon...
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="content-section">
        <div className="text-center">
          <h2>Ready to Make an Impact?</h2>
          <p className="text-large" style={{ marginBottom: "3rem", maxWidth: "600px", margin: "0 auto 3rem" }}>
            Join our mentor program and help create opportunities for the next generation of developers.
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
            <a
              href="https://discord.gg/EBXR4SuBCT"
              className="btn btn-secondary btn-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discord First
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Mentors

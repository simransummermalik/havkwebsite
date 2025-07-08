"use client"

import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create mailto link
    const mailtoLink = `mailto:hackwithhavk@gmail.com?subject=${encodeURIComponent(
      `[${formData.subject}] ${formData.name}`,
    )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`

    window.location.href = mailtoLink

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    alert("Opening your email client...")
  }

  return (
    <div className="fade-in">
      <section className="section" style={{ paddingTop: "120px" }}>
        <h2>Contact HAVK</h2>

        <div className="grid grid-2">
          <div className="card">
            <h3>Get in Touch</h3>
            <p>
              Have questions about HAVK or our hackathons? Want to get involved as a mentor? Looking to partner with us?
              We'd love to hear from you!
            </p>

            <div style={{ marginTop: "2rem" }}>
              <h4 style={{ color: "var(--primary-red)", marginBottom: "1rem" }}>Contact Information</h4>
              <div style={{ lineHeight: "2.2" }}>
                <p>
                  <strong>Email:</strong> hackwithhavk@gmail.com
                </p>
                <p>
                  <strong>Discord:</strong> Join our community for real-time support
                </p>
              </div>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <h4 style={{ color: "var(--primary-red)", marginBottom: "1rem" }}>Connect With Us</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <a
                  href="https://discord.gg/EBXR4SuBCT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ textAlign: "left", justifyContent: "flex-start" }}
                >
                  Discord Community
                </a>
                <a
                  href="https://havk-hacking-the-desert.devpost.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ textAlign: "left", justifyContent: "flex-start" }}
                >
                  Devpost
                </a>
                <a
                  href="https://github.com/hackwithhavk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ textAlign: "left", justifyContent: "flex-start" }}
                >
                  GitHub
                </a>
                <a
                  href="https://youtu.be/WtXjkk70lcY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ textAlign: "left", justifyContent: "flex-start" }}
                >
                  Our Story (YouTube)
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Mentorship">Mentorship Application</option>
                  <option value="Partnership">Partnership Proposal</option>
                  <option value="Hackathon Question">Hackathon Questions</option>
                  <option value="Sponsorship">Sponsorship Opportunity</option>
                  <option value="Press">Press Inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="highlight-section" style={{ marginTop: "3rem" }}>
          <h3>Response Times & Support</h3>
          <div className="grid grid-2">
            <div>
              <h4 style={{ color: "var(--primary-red)" }}>Expected Response Times</h4>
              <ul>
                <li>General inquiries: 24-48 hours</li>
                <li>Mentorship applications: 3-5 business days</li>
                <li>Partnership proposals: 1 week</li>
                <li>Press inquiries: Same day</li>
                <li>Urgent hackathon issues: Within 4 hours</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: "var(--primary-red)" }}>Best Ways to Reach Us</h4>
              <ul>
                <li>Discord: 24/7 community support</li>
                <li>Email: Business inquiries and formal communication</li>
                <li>During hackathons: Round-the-clock support on Discord</li>
                <li>For urgent issues: Contact @summer7892 or @lavav on Discord</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center" style={{ marginTop: "3rem" }}>
          <h3>Prefer Real-Time Chat?</h3>
          <p style={{ marginBottom: "2rem" }}>
            Join our Discord community for immediate support and to connect with other developers.
          </p>
          <a
            href="https://discord.gg/EBXR4SuBCT"
            className="btn btn-primary btn-large"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Discord Community
          </a>
        </div>
      </section>
    </div>
  )
}

export default Contact

const HackingTheDesert = () => {
  return (
    <div className="fade-in page">
      {/* Page Hero - Compact */}
      <div style={{ paddingTop: "120px", paddingBottom: "1rem", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1rem", color: "var(--text-primary)" }}>
            HAVK: Hacking the Desert
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "1.5rem" }}>
            Survive and Innovate in Resource-Scarce Environments
            <br />
            July 8-18, 2025 | Online | Completed
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
      </div>

      {/* Winners - Compact */}
      <section style={{ padding: "2rem", maxWidth: "1400px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "2rem", fontSize: "2rem" }}>Winners</h2>
        <div className="content-grid grid-4">
          {/* 1st Place */}
          <div className="content-card text-center" style={{ border: "2px solid #FFD700", padding: "1.5rem" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #FFD700, #FFA500)",
                margin: "0 auto 1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
                color: "var(--dark-bg)",
                fontWeight: "bold",
              }}
            >
              🥇
            </div>
            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>1st Place: AquaSpot</h3>
            <h4 style={{ color: "var(--text-secondary)", marginBottom: "0.75rem", fontSize: "0.9rem" }}>
              Shrinav Loka
            </h4>
            <p style={{ fontSize: "0.8rem", marginBottom: "1rem" }}>
              AI-powered water leak detection using satellite imagery.
            </p>
            <a
              href="https://www.linkedin.com/in/shrinavloka/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.8rem", padding: "0.5rem 1rem" }}
            >
              LinkedIn
            </a>
          </div>

          {/* 2nd Place */}
          <div className="content-card text-center" style={{ border: "2px solid #C0C0C0", padding: "1.5rem" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #C0C0C0, #A0A0A0)",
                margin: "0 auto 1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
                color: "var(--dark-bg)",
                fontWeight: "bold",
              }}
            >
              🥈
            </div>
            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>2nd Place: Where's the Well?</h3>
            <h4 style={{ color: "var(--text-secondary)", marginBottom: "0.75rem", fontSize: "0.9rem" }}>
              Hunter Forsythe
            </h4>
            <p style={{ fontSize: "0.8rem", marginBottom: "1rem" }}>
              Water access solutions for resource-scarce environments.
            </p>
            <a
              href="https://www.linkedin.com/in/hunterforsythe/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.8rem", padding: "0.5rem 1rem" }}
            >
              LinkedIn
            </a>
          </div>

          {/* 3rd Place */}
          <div className="content-card text-center" style={{ border: "2px solid #CD7F32", padding: "1.5rem" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #CD7F32, #B8860B)",
                margin: "0 auto 1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
                color: "var(--dark-bg)",
                fontWeight: "bold",
              }}
            >
              🥉
            </div>
            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>3rd Place: DesertSmart</h3>
            <h4 style={{ color: "var(--text-secondary)", marginBottom: "0.75rem", fontSize: "0.9rem" }}>
              Neha Kandpal
            </h4>
            <p style={{ fontSize: "0.8rem", marginBottom: "1rem" }}>
              AI desert agriculture platform with multilingual support.
            </p>
            <div style={{ fontSize: "0.8rem", padding: "0.5rem 1rem", color: "var(--text-muted)" }}>
              LinkedIn Coming Soon
            </div>
          </div>

          {/* Honorable Mention - Next to 3rd Place */}
          <div
            className="content-card text-center"
            style={{ border: "2px solid var(--text-primary)", padding: "1.5rem" }}
          >
            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem", marginTop: "1rem" }}>Honorable Mention</h3>
            <h4 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>FoodLoop</h4>
            <h4 style={{ color: "var(--text-secondary)", marginBottom: "0.75rem", fontSize: "0.9rem" }}>
              Shiva Radharapu
            </h4>
            <p style={{ fontSize: "0.8rem", marginBottom: "0.5rem" }}>
              MERN app connecting food donors with volunteers to reduce waste.
            </p>
            <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontStyle: "italic" }}>
              Really close to winning!
            </p>
          </div>
        </div>
      </section>

      {/* All Participants - Compact */}
      <section style={{ padding: "2rem", maxWidth: "1400px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem", fontSize: "2rem" }}>All Participants</h2>
        <p style={{ textAlign: "center", marginBottom: "2rem", color: "var(--text-secondary)" }}>
          (As listed on Devpost)
        </p>

        <div className="content-card" style={{ padding: "2rem" }}>
          <p style={{ marginBottom: "1.5rem", textAlign: "center" }}>
            We want to thank all 150+ participants who joined HAVK: Hacking the Desert. Here are some of our incredible
            participants:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "0.5rem",
              fontSize: "0.85rem",
              lineHeight: "1.4",
            }}
          >
            <div>
              <p>
                <strong>Shrinav Loka</strong> - Winner
              </p>
              <p>
                <strong>Hunter Forsythe</strong> - 2nd Place
              </p>
              <p>
                <strong>Neha Kandpal</strong> - 3rd Place
              </p>
              <p>
                <strong>Shiva Radharapu</strong> - Honorable Mention
              </p>
              <p>Bhoomika</p>
              <p>Thrupthi Thrupthi</p>
              <p>Atharv Mahajan</p>
              <p>Dhanya Shree</p>
              <p>Umar Farooq Shaik</p>
              <p>Amrah Imtiaz</p>
              <p>Harsh Yadav</p>
              <p>Zeshan Zhang</p>
              <p>RADHIKA SAWLE</p>
              <p>Muneer Abass</p>
              <p>eshaan46 godbole</p>
              <p>Sparsh Jain Chajjed</p>
              <p>Md. Radoan Bin Mahabubur</p>
              <p>Peter Vu</p>
              <p>Erick Chavez</p>
              <p>Akarsh Mathur</p>
              <p>Soham Mhatre</p>
              <p>Ethan Wan</p>
              <p>Ezi Ilabor</p>
              <p>Minh Nguyen</p>
              <p>Krish Iyer</p>
            </div>
            <div>
              <p>Dharshini Venkatesan</p>
              <p>Kaneki Chavan</p>
              <p>Ankan Debnath</p>
              <p>Dev A</p>
              <p>Hòa Phạm Phú</p>
              <p>Chi Nguyen</p>
              <p>Trung Kiệt</p>
              <p>Trương Bảo Trân</p>
              <p>Mỹ Linh Bàng</p>
              <p>Nguyễn Lâm Phú Quý</p>
              <p>Ba Thanh Phan</p>
              <p>Dao Sy Duy Minh</p>
              <p>Mariya Soumya</p>
              <p>roshnirajak Rajak</p>
              <p>Sanjay H S</p>
              <p>Puneeth Aradhya</p>
              <p>Aradhya Pavan H S</p>
              <p>fatima arif</p>
              <p>Srisai Varanasi</p>
              <p>Rakesh Reddy Bakkireddy</p>
              <p>Muhammad Assad Ullah</p>
              <p>Manas Shinde</p>
              <p>Gajanan Patange</p>
              <p>Nitesh Ray</p>
              <p>farah atitallah</p>
            </div>
            <div>
              <p>Urvashi Changlani</p>
              <p>Skandhan Karthik</p>
              <p>Sriram Karthik</p>
              <p>Karan Singh</p>
              <p>Vivek Kumar</p>
              <p>Senior Pickles</p>
              <p>vanipriyakilaparthi Kilaparthi</p>
              <p>Vyom Dubey</p>
              <p>BHAVANA GUJJULA</p>
              <p>Benjamin Cooley</p>
              <p>Dharani lmp</p>
              <p>Messou F</p>
              <p>Ananya Dandi</p>
              <p>Pradeep0997 Pradeep Reddy</p>
              <p>Dyutikar G V and Hridan Saikia</p>
              <p>Deepanshi Bhardwaj</p>
              <p>siddhi rawool</p>
              <p>Aditya Tripathi</p>
              <p>Punya B R</p>
              <p>Agampreet Singh</p>
              <p>Parth Kalia</p>
              <p>Ayush Dhiman</p>
              <p>kajal jha</p>
              <p>Utkarsh Ojha</p>
              <p>Anjani Reddy</p>
            </div>
            <div>
              <p>Jasmitha V</p>
              <p>Éverson Filipe C. S. Moura</p>
              <p>SURJITH S SHETTY</p>
              <p>Branden Crenshaw</p>
              <p>Iqra Zafar</p>
              <p>Riddhiman Rakshit</p>
              <p>Tanha Ahmed</p>
              <p>Pranav Khatade</p>
              <p>Arham I</p>
              <p>Akshita Ravichandran</p>
              <p>divagar navean</p>
              <p>Shaman Shetty</p>
              <p>harjot8-arch Harjot singh</p>
              <p>Ayush Shukla</p>
              <p>Prathana Ray</p>
              <p>JOYSTON Monteiro</p>
              <p>Kushal Katare</p>
              <p>Arush Dogra</p>
              <p>Davy Hallihan</p>
              <p>magdelkayfe22 Elkayfe</p>
              <p>Sujal Thapa</p>
              <p>Shubham Singh</p>
              <p>And many more amazing participants!</p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a
              href="https://havk-hacking-the-desert.devpost.com/participants"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Participants on Devpost
            </a>
          </div>
        </div>
      </section>

      {/* The Challenge - Compact */}
      <section style={{ padding: "2rem", maxWidth: "1400px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem", fontSize: "2rem" }}>The Challenge</h2>
        <div className="content-card" style={{ padding: "2rem" }}>
          <p style={{ marginBottom: "1.5rem", fontSize: "1.1rem", textAlign: "center" }}>
            Use code to develop impactful solutions to any form of scarcity — whether it's water, food, energy,
            healthcare access, digital equity, or resource distribution.
          </p>

          <div className="content-grid grid-2">
            <div>
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

            <div>
              <h3>Judging Criteria</h3>
              <ul>
                <li>
                  <strong>Technical Depth (10 points):</strong> Implementation complexity
                </li>
                <li>
                  <strong>Creativity (10 points):</strong> Originality and inventiveness
                </li>
                <li>
                  <strong>Accessibility (10 points):</strong> Works for diverse backgrounds
                </li>
                <li>
                  <strong>Usability (5 points):</strong> Easy to use and understand
                </li>
                <li>
                  <strong>Visuals (5 points):</strong> Polished UI/UX and design
                </li>
                <li>
                  <strong>Fun Factor (5 points):</strong> Engaging experience
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Compact */}
      <section style={{ padding: "2rem", maxWidth: "1400px", margin: "0 auto" }}>
        <div className="highlight-section text-center" style={{ padding: "2rem" }}>
          <h2 style={{ marginBottom: "1rem" }}>Join Our Next Hackathon</h2>
          <p style={{ marginBottom: "2rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
            HAVK: Hacking the Desert was just the beginning. Join our community to be the first to know about our next
            fair and transparent hackathon.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://discord.gg/EBXR4SuBCT"
              className="btn btn-primary btn-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discord for Updates
            </a>
            <a href="mailto:hackwithhavk@gmail.com" className="btn btn-secondary btn-large">
              Get Notified
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HackingTheDesert

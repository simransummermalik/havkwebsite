import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Hackathons from "./pages/Hackathons"
import HackingTheDesert from "./pages/HackingTheDesert"
import Team from "./pages/Team"
import Mentors from "./pages/Mentors"
import GetInvolved from "./pages/GetInvolved"
import Contributors from "./pages/Contributors"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hackathons" element={<Hackathons />} />
            <Route path="/hacking-the-desert" element={<HackingTheDesert />} />
            <Route path="/team" element={<Team />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/contributors" element={<Contributors />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

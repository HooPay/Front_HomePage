import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { SiteHeader } from "./components/site-header"
import { Footer } from "./components/footer"
import Home from "./pages/Home"
import MembersAreaPage from "./pages/MembersAreaPage"
import { cn } from "./lib/utils"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#020807] min-h-screen bg-[#020807] text-white antialiased">
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/area-membros" element={<MembersAreaPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App


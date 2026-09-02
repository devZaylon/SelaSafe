import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import OurStory from './pages/OurStory'
import Works from './pages/Works'
import Clients from './pages/Clients'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-dark text-sela-white">
      <ScrollToTop />
      <Header />
      <main className="flex-1 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/how-it-works" element={<Works />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

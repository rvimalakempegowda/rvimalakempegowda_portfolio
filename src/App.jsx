import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Publications from './components/Publications'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0c0c0c]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Publications />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  )
}

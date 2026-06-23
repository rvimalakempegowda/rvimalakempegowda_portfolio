import { useState, useCallback, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import './index.css'
import CustomCursor from './components/CustomCursor'
import SplashScreen from './components/SplashScreen'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Publications from './components/Publications'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const [splashDone, setSplashDone] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
  }, [])

  useEffect(() => {
    document.body.style.overflow = splashDone ? '' : 'hidden'
  }, [splashDone])

  const handleSplashComplete = useCallback(() => setSplashDone(true), [])

  return (
    <>
      <CustomCursor />
      <AnimatePresence>
        {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>
      {splashDone && (
        <div className="min-h-screen bg-black">
          <Header />
          <main>
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Publications />
            <Contact />
          </main>
          <ScrollToTop />
        </div>
      )}
    </>
  )
}

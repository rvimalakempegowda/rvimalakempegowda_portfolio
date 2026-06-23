import { useState, useEffect } from 'react'
import { HiArrowLongUp } from 'react-icons/hi2'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-50 w-10 h-10 flex items-center justify-center bg-gold text-black hover:bg-gold-light transition-all duration-200 shadow-lg hover:-translate-y-0.5">
      <HiArrowLongUp size={18} />
    </button>
  )
}

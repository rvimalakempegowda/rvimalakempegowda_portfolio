import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [trail, setTrail] = useState({ x: -100, y: -100 })
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    const down = () => setClicking(true)
    const up = () => setClicking(false)

    const checkHover = (e) => {
      const el = e.target
      setHovering(
        el.tagName === 'A' || el.tagName === 'BUTTON' ||
        el.closest('a') || el.closest('button') ||
        el.classList.contains('cursor-pointer')
      )
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousemove', checkHover)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousemove', checkHover)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [])

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setTrail(prev => ({
        x: prev.x + (pos.x - prev.x) * 0.12,
        y: prev.y + (pos.y - prev.y) * 0.12,
      }))
    })
    return () => cancelAnimationFrame(id)
  }, [pos])

  return (
    <>
      {/* Main cursor — sharp square */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        style={{ x: pos.x - 6, y: pos.y - 6 }}
        animate={{ scale: clicking ? 0.6 : hovering ? 1.6 : 1 }}
        transition={{ type: 'spring', stiffness: 800, damping: 30 }}
      >
        <div
          className={`w-3 h-3 ${hovering ? 'bg-red' : 'bg-green'} transition-colors duration-150`}
        />
      </motion.div>

      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block"
        style={{ x: trail.x - 16, y: trail.y - 16 }}
        animate={{ scale: hovering ? 1.4 : 1, opacity: clicking ? 0.5 : 0.7 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <div className={`w-8 h-8 border ${hovering ? 'border-red' : 'border-green'} transition-colors duration-200`} />
      </motion.div>
    </>
  )
}

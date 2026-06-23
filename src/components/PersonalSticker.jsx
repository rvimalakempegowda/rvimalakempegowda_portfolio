import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const LAYERS = [
  { size: 220, border: '2px solid rgba(16,185,129,0.3)', rotate: 0,   speed: 20 },
  { size: 190, border: '2px solid rgba(239,68,68,0.3)',  rotate: 45,  speed: -28 },
  { size: 160, border: '1px solid rgba(16,185,129,0.5)', rotate: 0,   speed: 16 },
]

export default function PersonalSticker({ size = 280, skipIntro = false }) {
  const containerRef = useRef(null)
  const [flipped, setFlipped] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { stiffness: 150, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 20 })

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
    }
    const onLeave = () => { mouseX.set(0); mouseY.set(0) }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave) }
  }, [mouseX, mouseY])

  useEffect(() => {
    const id = setInterval(() => setFlipped(f => !f), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      ref={containerRef}
      style={{ width: size, height: size, perspective: 1000, rotateX, rotateY }}
      className="relative flex items-center justify-center cursor-pointer select-none"
      initial={skipIntro ? {} : { opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.2 }}
      onClick={() => setFlipped(f => !f)}
    >
      {/* Rotating rings */}
      {LAYERS.map((l, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: l.size, height: l.size,
            border: l.border,
            top: '50%', left: '50%',
            marginTop: -l.size / 2, marginLeft: -l.size / 2,
          }}
          animate={{ rotate: 360 * Math.sign(l.speed) }}
          transition={{ duration: Math.abs(l.speed), repeat: Infinity, ease: 'linear' }}
        />
      ))}

      {/* Orbiting squares */}
      {[0, 90, 180, 270].map((angle, i) => (
        <motion.div
          key={`orbit-${i}`}
          className="absolute"
          style={{ top: '50%', left: '50%' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, ease: 'linear' }}
        >
          <div
            style={{
              width: 8, height: 8,
              transform: `rotate(${angle}deg) translateX(${100 + i * 8}px)`,
              background: i % 2 === 0 ? '#10B981' : '#EF4444',
            }}
          />
        </motion.div>
      ))}

      {/* Corner accent squares */}
      <div className="absolute top-2 left-2 w-5 h-5 bg-green animate-pulse-geo" />
      <div className="absolute top-2 right-2 w-5 h-5 bg-red animate-pulse-geo" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-2 left-2 w-5 h-5 bg-red animate-pulse-geo" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-2 right-2 w-5 h-5 bg-green animate-pulse-geo" style={{ animationDelay: '1.5s' }} />

      {/* Center flip card */}
      <div style={{ perspective: 600 }} className="relative">
        <motion.div
          style={{ transformStyle: 'preserve-3d', width: 110, height: 110 }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          {/* Front — initials */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center border-2 border-green geo-shadow-green bg-black"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <span className="font-mono font-bold text-4xl text-white leading-none">RG</span>
            <span className="font-mono text-green text-xs mt-1 tracking-widest">DE</span>
          </div>

          {/* Back — role */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center border-2 border-red geo-shadow-red bg-black"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <span className="font-mono text-red text-xs text-center leading-tight tracking-wide px-2">DATA<br/>ENGINEER</span>
          </div>
        </motion.div>
      </div>

      {/* Floating badge */}
      <motion.div
        className="absolute -top-2 -right-2 bg-green text-black font-mono font-bold text-xs px-2 py-1"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        RG
      </motion.div>
    </motion.div>
  )
}

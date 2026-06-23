import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => setDone(true), 300)
          return 100
        }
        return p + 2
      })
    }, 45)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (done) setTimeout(onComplete, 600)
  }, [done, onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center geo-bg"
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Corner decorations */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-green" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-red" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-red" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-green" />

          {/* Animated sticker placeholder */}
          <motion.div
            className="relative mb-12"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
          >
            <div className="w-28 h-28 border-2 border-green geo-shadow-green flex items-center justify-center relative">
              <span className="font-mono font-bold text-4xl text-white">RG</span>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-red" />
            </div>
          </motion.div>

          <motion.p
            className="font-mono text-green text-xs tracking-[6px] uppercase mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Loading Portfolio
          </motion.p>

          {/* Progress bar */}
          <div className="w-64 h-px bg-white/10 relative overflow-hidden">
            <motion.div
              className="h-full bg-green absolute left-0 top-0"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          <motion.p
            className="font-mono text-white/30 text-xs mt-3 tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {progress}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

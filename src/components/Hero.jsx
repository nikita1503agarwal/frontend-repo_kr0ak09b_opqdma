import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Hero() {
  const [Spline, setSpline] = useState(null)

  useEffect(() => {
    let mounted = true
    // Dynamically import Spline on client to avoid SSR/WebGL issues
    import('@splinetool/react-spline')
      .then((mod) => {
        if (mounted) setSpline(() => mod.default)
      })
      .catch(() => {
        // If it fails, we simply keep the fallback background
      })
    return () => {
      mounted = false
    }
  }, [])

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        {Spline ? (
          <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12),transparent_60%)]" />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            Interactive 3D • Futuristic Design
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight text-white">
            Build immersive 3D experiences that wow
          </h1>
          <p className="mt-5 text-lg text-white/80">
            We craft custom 3D objects, animations, and interactive product visuals that elevate your brand and convert visitors into fans.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 px-5 py-3 text-white shadow-lg shadow-cyan-500/20">
              Start a Project
            </a>
            <a href="#showcase" className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white/90">
              View Showcase
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

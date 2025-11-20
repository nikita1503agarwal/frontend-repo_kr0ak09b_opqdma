import { motion } from 'framer-motion'
import { Cube, Orbit, Layers3, Zap } from 'lucide-react'

const features = [
  {
    title: 'Custom 3D Objects',
    desc: 'Tailor-made 3D models that match your brand and product aesthetics.',
    icon: Cube,
  },
  {
    title: 'Interactive Scenes',
    desc: 'Scroll, hover, and click interactions for engaging experiences.',
    icon: Orbit,
  },
  {
    title: 'Cinematic Animations',
    desc: 'Smooth, performant motion powered by WebGL and GPU acceleration.',
    icon: Zap,
  },
  {
    title: 'Optimized Delivery',
    desc: 'Compression, lazy loading, and device-aware quality for speed.',
    icon: Layers3,
  },
]

function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Capabilities designed for impact</h2>
          <p className="mt-3 text-white/70">From concept to shipping, we handle the complex parts so your audience enjoys the magic.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur shadow-lg"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white ring-1 ring-white/20">
                {<f.icon className="h-6 w-6" />}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

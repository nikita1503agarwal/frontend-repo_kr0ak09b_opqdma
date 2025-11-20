import { motion } from 'framer-motion'

const items = [
  {
    title: 'Iridescent Spheres',
    desc: 'Shader-driven color shifts and reflections.',
    img: 'https://images.unsplash.com/photo-1640177196991-71b2f458bc26?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Cubic Matrix',
    desc: 'Synchronized pulses with emissive edges.',
    img: 'https://images.unsplash.com/photo-1535378620166-273708d44e04?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Neon Fabric',
    desc: 'Cloth simulation with bloom and DOF.',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  },
]

function Showcase() {
  return (
    <section id="showcase" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Selected work</h2>
          <p className="mt-3 text-white/70">A peek at the kinds of interactive visuals we can craft for you.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div key={it.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={it.img} alt={it.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{it.title}</h3>
                <p className="mt-1 text-white/70 text-sm">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase

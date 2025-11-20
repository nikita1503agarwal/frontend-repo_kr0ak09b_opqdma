import { useState } from 'react'
import { Menu, X, Shapes, Sparkles } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-4">
            <a href="#" className="group inline-flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 ring-1 ring-white/20 shadow-lg">
                <Shapes className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm leading-none text-white/70">Nebula</p>
                <p className="-mt-0.5 text-lg font-semibold text-white tracking-tight">3D Studio</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollTo('features')} className="text-white/80 hover:text-white transition-colors">Features</button>
              <button onClick={() => scrollTo('showcase')} className="text-white/80 hover:text-white transition-colors">Showcase</button>
              <button onClick={() => scrollTo('contact')} className="text-white/80 hover:text-white transition-colors">Contact</button>
              <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}} className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 px-4 py-2 text-white shadow hover:shadow-cyan-500/20 transition-all">
                <Sparkles className="h-4 w-4" /> Start a Project
              </a>
            </nav>

            <button className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-white/80" onClick={() => setOpen(!open)}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-2">
                <button onClick={() => scrollTo('features')} className="text-left rounded-lg px-3 py-2 text-white/80 hover:bg-white/5">Features</button>
                <button onClick={() => scrollTo('showcase')} className="text-left rounded-lg px-3 py-2 text-white/80 hover:bg-white/5">Showcase</button>
                <button onClick={() => scrollTo('contact')} className="text-left rounded-lg px-3 py-2 text-white/80 hover:bg-white/5">Contact</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar

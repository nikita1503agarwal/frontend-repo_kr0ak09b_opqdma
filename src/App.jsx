import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background gradient accents */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-[-10%] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-1/3 h-[30rem] w-[30rem] rounded-full bg-purple-600/20 blur-[120px]" />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <Showcase />
        <Contact />
        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">© {new Date().getFullYear()} Nebula 3D Studio. All rights reserved.</p>
            <div className="text-white/50 text-sm">Built with interactive 3D and love.</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App

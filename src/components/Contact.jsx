import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('Thanks! We will get back to you shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Tell us about your project</h2>
            <p className="mt-3 text-white/70">Share a few details and we’ll craft a tailored 3D concept for you.</p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-white/70">Name</label>
                  <input name="name" required className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm text-white/70">Email</label>
                  <input name="email" type="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="jane@company.com" />
                </div>
                <div>
                  <label className="block text-sm text-white/70">Budget</label>
                  <select name="budget" className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                    <option value="<$5k">Below $5k</option>
                    <option value="$5k-$10k">$5k - $10k</option>
                    <option value="$10k-$25k">$10k - $25k</option>
                    <option value=">$25k">Above $25k</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-white/70">Project details</label>
                  <textarea name="details" rows={4} className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Describe your vision, goals, and timeline..." />
                </div>
                <button type="submit" className="inline-flex items-center rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 px-5 py-3 text-white shadow-lg shadow-cyan-500/20">Send Inquiry</button>
                {status && <p className="text-sm text-white/80">{status}</p>}
              </form>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-slate-900/60 p-8">
              <h3 className="text-white text-xl font-semibold">What you get</h3>
              <ul className="mt-4 space-y-3 text-white/70">
                <li>• A tailored 3D concept board</li>
                <li>• Timeline and investment options</li>
                <li>• One interactive prototype</li>
                <li>• Clear next steps</li>
              </ul>
              <p className="mt-6 text-white/60 text-sm">Average response time: under 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

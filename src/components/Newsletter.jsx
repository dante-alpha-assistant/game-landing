import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-void-900 to-void-800" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 border border-white/5 mb-8">
          <svg className="w-8 h-8 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>

        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-white mb-4">
          Stay in the Loop
        </h2>
        <p className="text-white/50 mb-8 max-w-md mx-auto">
          Get exclusive updates, dev diaries, and early access to the beta. No spam — just echoes from the Void.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-neon-cyan/10 border border-neon-cyan/20">
            <svg className="w-5 h-5 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-neon-cyan font-medium">You're in! Watch your inbox.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-5 py-3.5 rounded-full bg-void-700/50 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/20 transition-all"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-gradient-to-r from-neon-cyan to-neon-blue text-void-900 font-bold text-sm tracking-wider uppercase rounded-full hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-white/20 text-xs mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}

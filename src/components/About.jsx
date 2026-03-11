export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-neon-purple/5 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Key art placeholder */}
          <div className="relative group">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-void-700 to-void-800 border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-t from-void-900/80 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center border border-white/10">
                    <svg className="w-16 h-16 text-neon-cyan/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                    </svg>
                  </div>
                  <p className="text-white/20 text-sm font-medium tracking-wider uppercase">Key Art</p>
                </div>
              </div>
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }} />
            </div>
            {/* Glow effect on hover */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
          </div>

          {/* Text content */}
          <div>
            <span className="text-neon-cyan text-sm font-semibold tracking-widest uppercase">The Story</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              A Universe Unraveling at the Seams
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                In the year 3847, the Void Resonance — a cosmic anomaly that erases matter and memory — is consuming reality itself. You are Kael, a former Void Walker stripped of their memories, awakening on a dying space station at the edge of known existence.
              </p>
              <p>
                As fragments of your past resurface, you discover you were once the architect of the Resonance — and now the only one who can stop it. Traverse shattered worlds, forge alliances with survivors of erased civilizations, and wield the echoes of what was to reshape what will be.
              </p>
              <p>
                Every choice reverberates through the Void. Every echo carries a price.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-white/5">
              <div>
                <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-neon-cyan">60+</div>
                <div className="text-white/40 text-sm mt-1">Hours of Story</div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-neon-purple">12</div>
                <div className="text-white/40 text-sm mt-1">Shattered Worlds</div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-neon-pink">∞</div>
                <div className="text-white/40 text-sm mt-1">Possible Endings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

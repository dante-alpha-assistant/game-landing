const screenshots = [
  { label: 'Shattered Citadel', color: 'from-neon-cyan/20 to-void-700' },
  { label: 'Void Rift Encounter', color: 'from-neon-purple/20 to-void-700' },
  { label: 'Echo Forge Chamber', color: 'from-neon-pink/20 to-void-700' },
  { label: 'Nebula Wastes', color: 'from-neon-blue/20 to-void-700' },
  { label: 'The Last Station', color: 'from-neon-cyan/10 to-neon-purple/10' },
  { label: 'Kael Awakening', color: 'from-neon-pink/10 to-neon-blue/10' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-neon-cyan text-sm font-semibold tracking-widest uppercase">Gallery</span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
            Glimpses of the Void
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {screenshots.map((shot, i) => (
            <div
              key={i}
              className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Placeholder image */}
              <div className={`absolute inset-0 bg-gradient-to-br ${shot.color}`} />
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }} />

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Label overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-void-900/90 to-transparent">
                <p className="text-white/70 text-sm font-medium">{shot.label}</p>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 rounded-xl border border-white/0 group-hover:border-neon-cyan/30 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

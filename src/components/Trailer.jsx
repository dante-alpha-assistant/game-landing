export default function Trailer() {
  return (
    <section id="trailer" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-void-900 via-void-800 to-void-900" />
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-neon-purple/5 blur-[120px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-neon-cyan text-sm font-semibold tracking-widest uppercase">Official Trailer</span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
            See the Void
          </h2>
        </div>

        {/* Video embed placeholder */}
        <div className="relative group">
          <div className="aspect-video rounded-2xl overflow-hidden bg-void-800 border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-void-700/50 to-void-900/80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="group/play relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-neon-cyan/20 hover:border-neon-cyan/40 transition-all duration-300">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1 group-hover/play:text-neon-cyan transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-full border border-white/10 animate-ping opacity-20" />
              </button>
            </div>
            {/* Bottom info bar */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-void-900 to-transparent">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/70 font-medium">Echoes of the Void — Reveal Trailer</p>
                  <p className="text-white/30 text-sm mt-1">4K | 3:42</p>
                </div>
                <div className="flex items-center gap-2 text-white/30">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs">YouTube</span>
                </div>
              </div>
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
        </div>
      </div>
    </section>
  )
}

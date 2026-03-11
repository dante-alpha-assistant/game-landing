export default function Hero() {
  return (
    <section id="preorder" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-700 via-void-900 to-void-900">
        {/* Stars */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(2px 2px at 20px 30px, rgba(0,240,255,0.3), transparent),
            radial-gradient(2px 2px at 40px 70px, rgba(179,71,234,0.2), transparent),
            radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.3), transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(0,240,255,0.2), transparent),
            radial-gradient(2px 2px at 160px 30px, rgba(255,255,255,0.2), transparent)`,
          backgroundSize: '200px 100px',
        }} />
        {/* Nebula glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-neon-purple/10 blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-neon-cyan/8 blur-[100px]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Studio badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
          <span className="text-xs text-white/60 font-medium tracking-wider uppercase">Aether Forge Studios</span>
        </div>

        {/* Title */}
        <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6">
          <span className="block bg-gradient-to-r from-neon-cyan via-white to-neon-purple bg-clip-text text-transparent">
            ECHOES
          </span>
          <span className="block text-white/40 text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.3em] mt-2">
            OF THE
          </span>
          <span className="block bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan bg-clip-text text-transparent">
            VOID
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-white/50 max-w-xl mx-auto mb-10 font-light leading-relaxed">
          The universe forgot you. Now it's afraid you'll remember.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-void-900 font-bold text-sm tracking-wider uppercase rounded-full hover:shadow-[0_0_40px_rgba(0,240,255,0.3)] transition-all duration-300">
            <span className="relative z-10">Pre-order Now</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
          </button>
          <a href="#trailer" className="px-8 py-4 border border-white/20 text-white/70 font-medium text-sm tracking-wider uppercase rounded-full hover:border-neon-cyan/50 hover:text-neon-cyan transition-all">
            Watch Trailer
          </a>
        </div>

        {/* Platforms */}
        <div className="mt-16 flex items-center justify-center gap-8 text-white/30 text-xs tracking-widest uppercase">
          <span>PS5</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Xbox Series X</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>PC</span>
        </div>

        {/* Release */}
        <p className="mt-4 text-white/20 text-sm tracking-wider">Q4 2026</p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/20 text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  )
}

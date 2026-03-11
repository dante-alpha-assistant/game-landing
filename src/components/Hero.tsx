export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-dark via-void-deeper to-void-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(107,33,168,0.15),transparent_70%)]" />

      {/* Stars background */}
      <div className="absolute inset-0 opacity-60">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `pulse-glow ${Math.random() * 4 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Floating orb decoration */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-void-purple/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-void-blue/10 rounded-full blur-3xl animate-float delay-300" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Studio badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-void-purple/30 bg-void-purple/10 mb-8 opacity-0 animate-fade-in-up">
          <div className="w-2 h-2 rounded-full bg-void-cyan animate-pulse" />
          <span className="text-xs tracking-[0.2em] uppercase text-void-muted font-medium">
            Obsidian Forge Studios
          </span>
        </div>

        {/* Title */}
        <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-4 opacity-0 animate-fade-in-up delay-100">
          <span className="bg-gradient-to-r from-void-glow via-white to-void-cyan bg-clip-text text-transparent">
            ECHOES
          </span>
          <br />
          <span className="text-white/80 text-3xl sm:text-5xl lg:text-6xl font-light tracking-[0.15em]">
            OF THE VOID
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-void-muted max-w-2xl mx-auto mb-4 opacity-0 animate-fade-in-up delay-200 leading-relaxed">
          The galaxy is dying. Its last echoes hold the key to salvation — or annihilation.
        </p>

        {/* Platforms */}
        <div className="flex items-center justify-center gap-4 text-xs text-white/40 tracking-widest uppercase mb-10 opacity-0 animate-fade-in-up delay-300">
          <span>PS5</span>
          <span className="w-1 h-1 rounded-full bg-void-purple" />
          <span>Xbox Series X</span>
          <span className="w-1 h-1 rounded-full bg-void-purple" />
          <span>PC</span>
          <span className="w-1 h-1 rounded-full bg-void-purple" />
          <span>Q4 2026</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up delay-400">
          <a
            href="#newsletter"
            className="group relative px-8 py-4 bg-gradient-to-r from-void-purple to-void-blue text-white font-bold rounded-full text-sm tracking-wider uppercase animate-pulse-glow hover:scale-105 transition-transform"
          >
            <span className="relative z-10">Pre-order Now</span>
          </a>
          <a
            href="#trailer"
            className="flex items-center gap-2 px-8 py-4 border border-void-purple/40 text-white/80 hover:text-white hover:border-void-glow rounded-full text-sm tracking-wider uppercase transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Trailer
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void-deeper to-transparent" />
    </section>
  );
}

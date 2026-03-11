export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Key art placeholder */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-void-purple/20 via-void-blue/10 to-void-cyan/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-void-purple/20 flex items-center justify-center border border-void-purple/30">
                  <svg className="w-12 h-12 text-void-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <p className="text-void-muted text-sm">Concept Key Art</p>
              </div>
            </div>
            <div className="absolute inset-0 border border-void-purple/20 rounded-2xl group-hover:border-void-purple/40 transition-colors" />
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-void-cyan/30 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-void-cyan/30 rounded-br-2xl" />
          </div>

          {/* Text */}
          <div>
            <p className="text-void-cyan text-sm tracking-[0.2em] uppercase font-medium mb-4">
              The Story
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              A Galaxy on the{" "}
              <span className="bg-gradient-to-r from-void-glow to-void-cyan bg-clip-text text-transparent">
                Brink of Silence
              </span>
            </h2>
            <div className="space-y-4 text-void-muted leading-relaxed">
              <p>
                In the year 3147, the Resonance — the mysterious energy that binds all life — is
                fading. Stars collapse without warning. Civilizations crumble into dust. The void
                consumes everything it touches.
              </p>
              <p>
                You are Kael, a Driftborn scavenger who discovers an ancient artifact that lets you
                hear the Echoes — fragments of the galaxy&apos;s dying memories. Each Echo reveals a
                piece of the truth: the Resonance wasn&apos;t natural. Someone built it. And someone is
                tearing it apart.
              </p>
              <p>
                Forge alliances with fractured factions, master resonance-powered combat, and make
                choices that will determine whether the galaxy finds a new song — or falls into
                eternal silence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-void-purple/20">
              {[
                { value: "200+", label: "Hours of Story" },
                { value: "12", label: "Explorable Systems" },
                { value: "∞", label: "Ways to Play" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-void-glow">
                    {stat.value}
                  </div>
                  <div className="text-xs text-void-muted tracking-wide uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

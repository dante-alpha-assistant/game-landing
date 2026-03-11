const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Open Universe',
    description: 'Explore 12 shattered worlds, each with unique biomes, hidden lore, and civilizations frozen in the moment of their erasure.',
    gradient: 'from-neon-cyan to-neon-blue',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Co-op Multiplayer',
    description: 'Team up with up to 4 players to tackle Void Rifts — dynamic raid encounters that shift and mutate as you fight.',
    gradient: 'from-neon-purple to-neon-pink',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Story-Driven',
    description: 'A branching narrative where your choices permanently alter the fabric of reality. No two playthroughs are the same.',
    gradient: 'from-neon-pink to-neon-cyan',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Echo Powers',
    description: 'Wield devastating abilities drawn from erased timelines. Combine echoes to create combat styles never seen before.',
    gradient: 'from-neon-blue to-neon-purple',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-void-900 via-void-800 to-void-900" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-neon-cyan text-sm font-semibold tracking-widest uppercase">Features</span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
            Defy the Void
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Every system is designed to make you feel the weight of a universe on the brink of oblivion.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl bg-void-800/50 border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent mb-4`}>
                  <div className={`bg-gradient-to-r ${feature.gradient} bg-clip-text`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

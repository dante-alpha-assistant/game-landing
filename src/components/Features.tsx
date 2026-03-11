const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Vast Open Galaxy",
    description:
      "Explore 12 interconnected star systems, each with unique planets, hidden dungeons, and emergent encounters. No two playthroughs are the same.",
    accent: "from-void-purple to-void-blue",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Seamless Co-op",
    description:
      "Drop in and out of your friends' campaigns seamlessly. Tackle galactic threats together or compete in the Arena of Echoes PvP mode.",
    accent: "from-void-blue to-void-cyan",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Branching Narrative",
    description:
      "Every choice reverberates. Ally with the Resonance Keepers or the Void Heralds. Your decisions reshape entire star systems and alter the ending.",
    accent: "from-void-cyan to-void-glow",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Resonance Combat",
    description:
      "Harness the dying energy of the Resonance to fuel devastating abilities. Combine melee, ranged, and psionic powers in fluid real-time combat.",
    accent: "from-void-glow to-void-purple",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(107,33,168,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-void-cyan text-sm tracking-[0.2em] uppercase font-medium mb-4">
            Core Mechanics
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Forge Your{" "}
            <span className="bg-gradient-to-r from-void-glow to-void-cyan bg-clip-text text-transparent">
              Legend
            </span>
          </h2>
          <p className="text-void-muted leading-relaxed">
            Built on a next-generation engine, Echoes of the Void delivers a
            seamless experience that blends exploration, combat, and narrative
            into one unforgettable journey.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl bg-void-surface/50 border border-void-purple/10 hover:border-void-purple/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top accent line */}
              <div
                className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity`}
              />

              <div className="w-14 h-14 rounded-xl bg-void-purple/10 flex items-center justify-center text-void-glow mb-5 group-hover:bg-void-purple/20 transition-colors">
                {feature.icon}
              </div>

              <h3 className="font-heading text-lg font-semibold mb-3 tracking-wide">
                {feature.title}
              </h3>

              <p className="text-sm text-void-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

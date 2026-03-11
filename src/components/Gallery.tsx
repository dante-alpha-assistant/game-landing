"use client";

import { useState } from "react";

const screenshots = [
  {
    title: "The Shattered Nebula",
    subtitle: "Explore remnants of collapsed star systems",
    gradient: "from-purple-900/40 via-blue-900/30 to-cyan-900/20",
  },
  {
    title: "Void Citadel",
    subtitle: "Ancient structures defy the laws of physics",
    gradient: "from-blue-900/40 via-indigo-900/30 to-purple-900/20",
  },
  {
    title: "Resonance Combat",
    subtitle: "Harness energy beams in fluid real-time battles",
    gradient: "from-cyan-900/40 via-purple-900/30 to-pink-900/20",
  },
  {
    title: "The Driftborn Fleet",
    subtitle: "Customize and command your starship armada",
    gradient: "from-indigo-900/40 via-blue-900/30 to-cyan-900/20",
  },
  {
    title: "Crystal Wastes",
    subtitle: "A frozen world holding the galaxy's deepest secrets",
    gradient: "from-purple-900/40 via-pink-900/30 to-red-900/20",
  },
  {
    title: "The Convergence",
    subtitle: "Where all echoes meet — the final battleground",
    gradient: "from-violet-900/40 via-purple-900/30 to-blue-900/20",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-void-cyan text-sm tracking-[0.2em] uppercase font-medium mb-4">
            Screenshots
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Glimpses of{" "}
            <span className="bg-gradient-to-r from-void-glow to-void-cyan bg-clip-text text-transparent">
              Another World
            </span>
          </h2>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {screenshots.map((shot, i) => (
            <div
              key={i}
              className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Gradient placeholder background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${shot.gradient}`} />

              {/* Geometric decorations to make it look less empty */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/3 w-32 h-32 border border-white/10 rounded-full" />
                <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border border-white/10 rotate-45" />
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_20px_10px_rgba(168,85,247,0.3)]" />
              </div>

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-void-deeper/60 flex items-end p-4 transition-opacity duration-300 ${
                  activeIndex === i ? "opacity-100" : "opacity-0"
                }`}
              >
                <div>
                  <h3 className="font-heading text-sm font-semibold tracking-wide">
                    {shot.title}
                  </h3>
                  <p className="text-xs text-void-muted mt-1">{shot.subtitle}</p>
                </div>
              </div>

              {/* Border */}
              <div className="absolute inset-0 border border-void-purple/10 rounded-xl group-hover:border-void-purple/30 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

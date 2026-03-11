export default function Trailer() {
  return (
    <section id="trailer" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(107,33,168,0.1),transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-void-cyan text-sm tracking-[0.2em] uppercase font-medium mb-4">
            Official Trailer
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Witness the{" "}
            <span className="bg-gradient-to-r from-void-glow to-void-cyan bg-clip-text text-transparent">
              Void
            </span>
          </h2>
        </div>

        {/* Video embed container */}
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-void-purple/20 group">
          {/* Placeholder background */}
          <div className="absolute inset-0 bg-gradient-to-br from-void-surface via-void-dark to-void-surface" />

          {/* Decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-void-purple/10 rounded-full blur-3xl" />
          </div>

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="group/btn relative w-24 h-24 rounded-full bg-void-purple/20 border-2 border-void-glow/50 flex items-center justify-center hover:bg-void-purple/40 hover:border-void-glow transition-all hover:scale-110">
              <svg
                className="w-10 h-10 text-void-glow ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-full border-2 border-void-glow/30 animate-ping" />
            </button>
          </div>

          {/* Bottom info bar */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-void-deeper/90 to-transparent">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-heading text-sm font-semibold tracking-wide">
                  Echoes of the Void — Reveal Trailer
                </p>
                <p className="text-xs text-void-muted mt-1">4K • 3:42 • Coming Q4 2026</p>
              </div>
              <div className="flex items-center gap-2 text-void-muted">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="text-xs">2.4M views</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

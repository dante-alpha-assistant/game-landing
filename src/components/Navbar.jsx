import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-void-900/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-[family-name:var(--font-display)] text-neon-cyan font-bold text-lg tracking-wider">
            ECHOES<span className="text-white/60">OF THE</span>VOID
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-white/70 hover:text-neon-cyan transition-colors">About</a>
            <a href="#features" className="text-sm text-white/70 hover:text-neon-cyan transition-colors">Features</a>
            <a href="#gallery" className="text-sm text-white/70 hover:text-neon-cyan transition-colors">Gallery</a>
            <a href="#trailer" className="text-sm text-white/70 hover:text-neon-cyan transition-colors">Trailer</a>
            <a
              href="#preorder"
              className="px-5 py-2 bg-gradient-to-r from-neon-cyan to-neon-blue text-void-900 font-semibold text-sm rounded-full hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
            >
              Pre-order
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white/70">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-void-800/95 backdrop-blur-md border-t border-white/5 px-4 py-4 space-y-3">
          <a href="#about" className="block text-sm text-white/70 hover:text-neon-cyan" onClick={() => setIsOpen(false)}>About</a>
          <a href="#features" className="block text-sm text-white/70 hover:text-neon-cyan" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#gallery" className="block text-sm text-white/70 hover:text-neon-cyan" onClick={() => setIsOpen(false)}>Gallery</a>
          <a href="#trailer" className="block text-sm text-white/70 hover:text-neon-cyan" onClick={() => setIsOpen(false)}>Trailer</a>
          <a href="#preorder" className="block px-5 py-2 bg-gradient-to-r from-neon-cyan to-neon-blue text-void-900 font-semibold text-sm rounded-full text-center" onClick={() => setIsOpen(false)}>Pre-order</a>
        </div>
      )}
    </nav>
  )
}

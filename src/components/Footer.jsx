export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-[family-name:var(--font-display)] text-neon-cyan font-bold text-lg tracking-wider">
              ECHOES<span className="text-white/40">OF THE</span>VOID
            </span>
            <p className="text-white/30 text-sm mt-3 leading-relaxed">
              A sci-fi action RPG from Aether Forge Studios. Coming Q4 2026.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {['X', 'IG', 'YT', 'DC'].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 text-xs font-medium hover:border-neon-cyan/30 hover:text-neon-cyan transition-all"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white/60 font-semibold text-sm tracking-wider uppercase mb-4">Game</h4>
            <ul className="space-y-2.5">
              {['About', 'Features', 'Gallery', 'Pre-order'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/30 text-sm hover:text-neon-cyan transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/60 font-semibold text-sm tracking-wider uppercase mb-4">Studio</h4>
            <ul className="space-y-2.5">
              {['About Us', 'Careers', 'Press Kit', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/30 text-sm hover:text-neon-cyan transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/60 font-semibold text-sm tracking-wider uppercase mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {['Privacy Policy', 'Terms of Service', 'EULA', 'Cookie Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/30 text-sm hover:text-neon-cyan transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © 2026 Aether Forge Studios. All rights reserved. "Echoes of the Void" is a trademark of Aether Forge Studios.
          </p>
          <div className="flex items-center gap-4 text-white/20 text-xs">
            <span>PS5</span>
            <span>Xbox Series X</span>
            <span>PC</span>
          </div>
        </div>

        {/* ESRB-style rating placeholder */}
        <div className="mt-6 flex items-center gap-3">
          <div className="w-10 h-14 rounded border border-white/10 bg-white/5 flex items-center justify-center">
            <span className="font-bold text-white/30 text-xs">T</span>
          </div>
          <div className="text-white/20 text-xs">
            <p>Rated T for Teen</p>
            <p>Fantasy Violence, Mild Language</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

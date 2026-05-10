import { BarChart3, HeartHandshake, Home, TimerReset } from 'lucide-react'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600 text-white shadow-sm">
            <HeartHandshake size={22} strokeWidth={2.4} />
          </span>
          <span>
            <span className="block text-lg font-bold leading-5 text-slate-950">KeenKeeper</span>
            <span className="block text-xs font-medium text-slate-500">Friendship tracker</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm">
            <Home size={18} strokeWidth={2.2} />
            <span>Home</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950">
            <TimerReset size={18} strokeWidth={2.2} />
            <span>Timeline</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950">
            <BarChart3 size={18} strokeWidth={2.2} />
            <span>Stats</span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

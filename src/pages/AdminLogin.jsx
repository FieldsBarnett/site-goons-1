import { useState } from 'react'
import { CONTACT } from '../data/siteData'

function ChevronIcon({ className = 'h-3.5 w-3.5' }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path
        d="M6 3.5L10.5 8L6 12.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  )
}

/**
 * Customer-facing 3D Extruded Cut-Block Quarry Login Page (/admin when signed out).
 * Continues the public site's 3D stone slab aesthetic over the Atlanta Sky Void.
 */
export default function AdminLogin({ onLogin, onNavigate }) {
  const [email, setEmail] = useState(CONTACT.email)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim()) {
      setError('Enter your crew email address to sign in.')
      return
    }
    setError('')
    onLogin({ email: email.trim() })
  }

  return (
    <div className="cq-sky-void-3d flex min-h-screen flex-col justify-between px-3 pb-10 pt-0 text-[#0F2442]">
      {/* Matching Twin-Slab 3D Top Bar */}
      <header className="w-full">
        <div className="mx-auto grid max-w-[1440px] grid-cols-[1fr_auto] items-stretch gap-2.5">
          <div className="cq-slab-3d-sm-shell">
            <div className="cq-nav-slab-3d flex items-center justify-between px-5 py-3.5 sm:px-8">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault()
                  onNavigate('/')
                }}
                className="font-display text-2xl tracking-wider text-[#0D2E5E] transition hover:text-[#1565C0]"
              >
                SITEGOONS
              </a>
              <span className="font-mono-tech hidden text-xs font-bold uppercase tracking-[0.14em] text-[#3B4F68] sm:inline">
                CREW ADMIN ACCESS
              </span>
            </div>
          </div>

          <div className="cq-slab-3d-sm-shell">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault()
                onNavigate('/')
              }}
              className="cq-nav-slab-3d font-mono-tech flex h-full items-center whitespace-nowrap px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0D2E5E] transition hover:text-[#1565C0] sm:px-6"
            >
              Back to Site
            </a>
          </div>
        </div>
      </header>

      {/* Centered 3D Extruded Cut-Block Login Monolith */}
      <main className="mx-auto my-10 w-full max-w-[480px] px-1">
        <div className="cq-slab-3d-shell">
          <div className="cq-slab-3d-depth">
            <div className="cq-slab-3d-face relative overflow-hidden px-7 py-9 sm:px-9 sm:py-10">
              <h1 className="font-display text-3xl text-[#0D2E5E] sm:text-4xl">
                ADMIN SIGN IN
              </h1>
              <p className="mt-2.5 text-sm leading-relaxed text-[#253A54]">
                Sign in to open the SiteGoons Control Deck for inbound quotes, active Atlanta
                builds, and sample scopes.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                <div>
                  <label
                    htmlFor="admin-email"
                    className="font-mono-tech mb-1.5 block text-[11px] font-bold uppercase tracking-[0.12em] text-[#3B4F68]"
                  >
                    Crew Email
                  </label>
                  <div className="cq-input-wrap">
                    <input
                      id="admin-email"
                      type="email"
                      autoComplete="username"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (error) setError('')
                      }}
                      placeholder="fields@sitegoons.com"
                      className="cq-input px-3.5 py-2.5 text-sm placeholder:text-[#5B7088] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="admin-password"
                    className="font-mono-tech mb-1.5 block text-[11px] font-bold uppercase tracking-[0.12em] text-[#3B4F68]"
                  >
                    Password
                  </label>
                  <div className="cq-input-wrap">
                    <input
                      id="admin-password"
                      type="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="cq-input px-3.5 py-2.5 text-sm placeholder:text-[#5B7088] focus:outline-none"
                    />
                  </div>
                </div>

                {error && (
                  <p
                    role="alert"
                    className="border border-[#B91C1C]/35 bg-[#FEF2F2] px-3 py-2 text-xs font-bold text-[#991B1B]"
                  >
                    {error}
                  </p>
                )}

                <div className="space-y-2.5 pt-2">
                  <button type="submit" className="cq-btn-primary w-full px-5 py-3.5 text-xs sm:text-sm">
                    <span>Enter Control Deck</span>
                    <ChevronIcon />
                  </button>
                </div>
              </form>

              <div className="mt-6 border-t border-[#C9D2DB] pt-4 font-mono-tech text-[11px] text-[#3B4F68]">
                LOCAL PREVIEW MODE · CONVEX AUTH READY TO CONNECT
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mx-auto w-full max-w-[1440px] px-4 text-center font-mono-tech text-xs text-[#C6DEF6]">
        SITEGOONS · ATLANTA RESIDENTIAL GENERAL CONTRACTING · {CONTACT.phoneDisplay}
      </footer>
    </div>
  )
}

import { useState } from 'react'
import {
  INITIAL_PROJECTS,
  INITIAL_QUOTES,
  QUOTE_STATUSES,
} from '../data/adminData'
import {
  ATLANTA_AREAS,
  CONTACT,
  PROJECT_TYPES,
  SAMPLE_PROJECTS,
} from '../data/siteData'

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

function CubeMark() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-7 w-7 text-[#0D2E5E]">
      <polygon points="16,3 28,9.5 16,16 4,9.5" fill="#4DA7E6" stroke="currentColor" strokeWidth="1.6" />
      <polygon points="4,9.5 16,16 16,29 4,22.5" fill="#1565C0" stroke="currentColor" strokeWidth="1.6" />
      <polygon points="28,9.5 16,16 16,29 28,22.5" fill="#0D2E5E" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

const STATUS_BADGE = {
  New: 'border-[#1565C0]/35 bg-[#E8F2FC] text-[#1565C0]',
  'Site Walk': 'border-[#B45309]/35 bg-[#FEF3C7] text-[#92400E]',
  'Estimate Sent': 'border-[#0D2E5E]/35 bg-[#E9EDF1] text-[#0D2E5E]',
  Booked: 'border-[#15803D]/35 bg-[#DCFCE7] text-[#15803D]',
}

/**
 * Internal Admin Panel (/admin when authenticated).
 * Uses the Atmospheric Quarry Control Deck (Operate mode — cloud-quarry-hero.webp language):
 * left architectural rail, top telemetry strip with '+' action block, hairline-divided workspace,
 * zero floating cards, zero decorative characters. Ready for Convex backend wiring.
 */
export default function AdminDeck({ user, onLogout, onNavigate }) {
  const [section, setSection] = useState('Overview')
  const [quotes, setQuotes] = useState(INITIAL_QUOTES)
  const [projects] = useState(INITIAL_PROJECTS)
  const [statusFilter, setStatusFilter] = useState('All')
  const [showNewQuote, setShowNewQuote] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // New Quote Lead form state (Convex-ready shape)
  const [newHomeowner, setNewHomeowner] = useState('')
  const [newNeighborhood, setNewNeighborhood] = useState('')
  const [newTrade, setNewTrade] = useState('Kitchen')
  const [newContact, setNewContact] = useState('')
  const [newNotes, setNewNotes] = useState('')

  const newQuotesCount = quotes.filter((q) => q.status === 'New').length
  const filteredQuotes =
    statusFilter === 'All' ? quotes : quotes.filter((q) => q.status === statusFilter)

  function cycleQuoteStatus(id) {
    setQuotes((prev) =>
      prev.map((q) => {
        if (q.id !== id) return q
        const idx = QUOTE_STATUSES.indexOf(q.status)
        const nextStatus = QUOTE_STATUSES[(idx + 1) % QUOTE_STATUSES.length]
        return { ...q, status: nextStatus }
      })
    )
  }

  function handleAddQuote(e) {
    e.preventDefault()
    if (!newHomeowner.trim() || !newContact.trim()) return
    const nextNum = 105 + quotes.length
    setQuotes((prev) => [
      {
        id: `QT-${nextNum}`,
        homeowner: newHomeowner.trim(),
        neighborhood: newNeighborhood.trim() || 'Atlanta Metro',
        trade: newTrade,
        contact: newContact.trim(),
        status: 'New',
        submittedAt: 'Just now',
        notes: newNotes.trim() || 'Added manually in Control Deck.',
      },
      ...prev,
    ])
    setNewHomeowner('')
    setNewNeighborhood('')
    setNewContact('')
    setNewNotes('')
    setShowNewQuote(false)
    setSection('Quote Requests')
  }

  const navItems = ['Overview', 'Quote Requests', 'Active Builds', 'Sample Scopes', 'Settings']

  return (
    <div className="cq-deck-surface min-h-screen text-[#0F2442]">
      {/* Mobile Header */}
      <div className="cq-deck-rail sticky top-0 z-40 flex items-center justify-between border-b border-[#B6C5D6] px-4 py-3 lg:hidden">
        <div className="flex items-center gap-2.5">
          <CubeMark />
          <span className="font-display text-xl tracking-wider text-[#0D2E5E]">
            SITEGOONS ADMIN
          </span>
        </div>
        <button
          type="button"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Toggle admin navigation"
          className="inline-flex h-9 w-9 items-center justify-center border border-[#9BB0C6] bg-white text-[#0D2E5E]"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {mobileMenuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-b border-[#B6C5D6] bg-[#EDF2F7] px-4 py-3 lg:hidden">
          <div className="grid grid-cols-2 gap-1.5">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setSection(item)
                  setMobileMenuOpen(false)
                }}
                className={`font-mono-tech px-3 py-2 text-left text-xs font-bold uppercase tracking-wider ${
                  section === item
                    ? 'bg-[#1565C0] text-white'
                    : 'border border-[#C5D2DF] bg-white text-[#0D2E5E]'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Split Architectural Control-Deck Shell */}
      <div className="mx-auto flex min-h-screen max-w-[1640px] border-x border-[#B8C7D8] shadow-[0_0_60px_rgba(13,46,94,0.14)]">
        {/* LEFT ARCHITECTURAL RAIL */}
        <aside className="cq-deck-rail hidden w-[245px] shrink-0 flex-col justify-between border-r border-[#B6C5D6] lg:flex">
          <div>
            <div className="border-b border-[#C5D2DF] px-5 py-6">
              <div className="flex items-center gap-2.5">
                <CubeMark />
                <span className="font-display text-2xl tracking-wider text-[#0D2E5E]">
                  SITEGOONS
                </span>
              </div>
              <p className="font-mono-tech mt-2 text-[10px] font-bold uppercase leading-relaxed tracking-[0.14em] text-[#455B75]">
                OPERATIONS CONTROL DECK
                <br />
                ATLANTA RESIDENTIAL
              </p>
            </div>

            <nav aria-label="Admin navigation" className="py-4">
              {navItems.map((item) => {
                const isActive = section === item
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSection(item)}
                    className={`font-mono-tech flex w-full items-center justify-between px-5 py-3 text-left text-xs font-bold uppercase tracking-[0.12em] transition ${
                      isActive
                        ? 'cq-deck-nav-active'
                        : 'border-b border-[#D5DFE9]/70 text-[#263F5C] hover:bg-white/60 hover:text-[#0D2E5E]'
                    }`}
                  >
                    <span>{item}</span>
                    {item === 'Quote Requests' && newQuotesCount > 0 ? (
                      <span
                        className={`px-1.5 py-0.5 text-[10px] ${
                          isActive ? 'bg-white/20 text-white' : 'bg-[#1565C0] text-white'
                        }`}
                      >
                        {newQuotesCount}
                      </span>
                    ) : (
                      isActive && <ChevronIcon className="h-3 w-3" />
                    )}
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Lower Rail Backend & Session Status Boxes */}
          <div className="space-y-3.5 p-4">
            <div className="border border-[#9BB0C6] bg-white/70 p-3.5">
              <div className="flex items-center justify-between border-b border-[#C8D4E1] pb-2 font-mono-tech text-[10px] font-bold uppercase tracking-[0.14em] text-[#0D2E5E]">
                <span>BACKEND · CONVEX</span>
                <span className="h-2 w-2 rounded-full bg-[#D97706]" />
              </div>
              <dl className="mt-2.5 space-y-1.5 font-mono-tech text-[11px]">
                <div className="flex justify-between gap-2">
                  <dt className="text-[#4F6680]">MODE</dt>
                  <dd className="font-bold text-[#0D2E5E]">LOCAL PREVIEW</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-[#4F6680]">USER</dt>
                  <dd className="truncate font-bold text-[#0D2E5E]">{user?.email || CONTACT.email}</dd>
                </div>
              </dl>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault()
                  onNavigate('/')
                }}
                className="font-mono-tech mt-3 flex items-center justify-between border-t border-[#C8D4E1] pt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1565C0] hover:text-[#0D2E5E]"
              >
                <span>VIEW PUBLIC SITE</span>
                <ChevronIcon className="h-3 w-3" />
              </a>
            </div>

            <button
              type="button"
              onClick={onLogout}
              className="font-mono-tech w-full border border-[#9BB0C6] bg-[#E7EDF3] px-3 py-2.5 text-center text-[11px] font-bold uppercase tracking-[0.12em] text-[#0D2E5E] transition hover:border-[#0D2E5E] hover:bg-[#0D2E5E] hover:text-white"
            >
              Sign Out
            </button>
          </div>
        </aside>

        {/* RIGHT MAIN OPERATIONAL WORKSPACE */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Top Telemetry Strip + Blue '+' Action Block */}
          <header className="flex flex-wrap items-stretch justify-between border-b border-[#B6C5D6] bg-[#F2F5F8]/95">
            <div className="flex flex-wrap divide-x divide-[#C8D4E1]">
              <div className="px-5 py-3">
                <p className="font-mono-tech text-[10px] font-bold uppercase tracking-[0.14em] text-[#4E647D]">
                  INBOUND QUOTES
                </p>
                <p className="font-mono-tech mt-0.5 text-sm font-bold text-[#0D2E5E]">
                  {quotes.length} TOTAL · {newQuotesCount} NEW
                </p>
              </div>
              <div className="px-5 py-3">
                <p className="font-mono-tech text-[10px] font-bold uppercase tracking-[0.14em] text-[#4E647D]">
                  ACTIVE BUILDS
                </p>
                <p className="font-mono-tech mt-0.5 text-sm font-bold text-[#0D2E5E]">
                  {projects.length} JOBSITES (SAMPLE)
                </p>
              </div>
              <div className="hidden px-5 py-3 sm:block">
                <p className="font-mono-tech text-[10px] font-bold uppercase tracking-[0.14em] text-[#4E647D]">
                  DATA SOURCE
                </p>
                <p className="font-mono-tech mt-0.5 text-sm font-bold text-[#B45309]">
                  SAMPLE STATE · CONVEX READY
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowNewQuote((v) => !v)}
              className="flex items-center gap-3 border-l border-[#B6C5D6] bg-white pr-5 text-left transition hover:bg-[#EDF5FC]"
            >
              <span className="flex h-full min-h-[54px] w-12 items-center justify-center bg-[#1565C0] font-mono-tech text-xl font-bold text-white">
                {showNewQuote ? '×' : '+'}
              </span>
              <span className="py-2">
                <span className="font-mono-tech block text-[10px] font-bold uppercase tracking-[0.14em] text-[#4E647D]">
                  DISPATCH
                </span>
                <span className="font-mono-tech block text-xs font-bold uppercase tracking-wider text-[#0D2E5E]">
                  {showNewQuote ? 'CLOSE FORM' : 'NEW QUOTE LEAD'}
                </span>
              </span>
            </button>
          </header>

          {/* Optional Inline "+ New Quote Lead" Drawer */}
          {showNewQuote && (
            <form
              onSubmit={handleAddQuote}
              className="border-b border-[#9EB2C8] bg-white/90 px-6 py-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <h2 className="font-mono-tech text-xs font-bold uppercase tracking-[0.14em] text-[#0D2E5E]">
                  LOG NEW HOMEOWNER QUOTE LEAD
                </h2>
                <span className="font-mono-tech text-[10px] text-[#4E647D]">
                  SAVES TO LOCAL PREVIEW STATE (READY FOR CONVEX MUTATION)
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                <input
                  type="text"
                  required
                  value={newHomeowner}
                  onChange={(e) => setNewHomeowner(e.target.value)}
                  placeholder="Homeowner name *"
                  className="border border-[#9BB0C6] bg-white px-3 py-2 text-xs text-[#0F2442] focus:border-[#1565C0] focus:outline-none"
                />
                <input
                  type="text"
                  value={newNeighborhood}
                  onChange={(e) => setNewNeighborhood(e.target.value)}
                  placeholder="Atlanta neighborhood"
                  className="border border-[#9BB0C6] bg-white px-3 py-2 text-xs text-[#0F2442] focus:border-[#1565C0] focus:outline-none"
                />
                <select
                  value={newTrade}
                  onChange={(e) => setNewTrade(e.target.value)}
                  className="border border-[#9BB0C6] bg-white px-3 py-2 font-mono-tech text-xs font-bold text-[#0D2E5E] focus:border-[#1565C0] focus:outline-none"
                >
                  {PROJECT_TYPES.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.label}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  required
                  value={newContact}
                  onChange={(e) => setNewContact(e.target.value)}
                  placeholder="Phone or email *"
                  className="border border-[#9BB0C6] bg-white px-3 py-2 text-xs text-[#0F2442] focus:border-[#1565C0] focus:outline-none"
                />
                <button type="submit" className="cq-btn-primary px-4 py-2 text-xs">
                  Add Lead
                </button>
              </div>
              <input
                type="text"
                value={newNotes}
                onChange={(e) => setNewNotes(e.target.value)}
                placeholder="Brief scope notes (optional)"
                className="mt-2.5 w-full border border-[#9BB0C6] bg-white px-3 py-2 text-xs text-[#0F2442] focus:border-[#1565C0] focus:outline-none"
              />
            </form>
          )}

          {/* MAIN WORKSPACE CONTENT */}
          <main className="flex-1">
            {section === 'Overview' && (
              <div className="divide-y divide-[#B6C5D6]">
                {/* Section Header Strip */}
                <div className="flex flex-wrap items-end justify-between gap-4 px-6 py-6 sm:px-8">
                  <div>
                    <h1 className="font-display text-3xl text-[#0D2E5E] sm:text-4xl">
                      OPERATIONS OVERVIEW
                    </h1>
                    <p className="mt-1 text-sm text-[#384F69]">
                      Live residential pipeline preview — click any quote status badge to advance it
                      through your workflow.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setSection('Quote Requests')}
                      className="cq-btn-primary px-4 py-2.5 text-xs"
                    >
                      <span>All Quotes</span>
                      <ChevronIcon />
                    </button>
                  </div>
                </div>

                {/* Hairline-Divided 3-Column Operational Deck */}
                <div className="grid divide-y divide-[#B6C5D6] lg:grid-cols-12 lg:divide-x lg:divide-y-0">
                  {/* Column 1-2: Recent Quote Leads */}
                  <div className="p-6 lg:col-span-7">
                    <div className="flex items-center justify-between border-b border-[#C5D2DF] pb-3">
                      <h2 className="font-mono-tech text-xs font-bold uppercase tracking-[0.14em] text-[#0D2E5E]">
                        RECENT QUOTE REQUESTS
                      </h2>
                      <span className="font-mono-tech text-[10px] font-bold uppercase tracking-wider text-[#4E647D]">
                        CLICK STATUS TO ADVANCE
                      </span>
                    </div>

                    <div className="mt-4 divide-y divide-[#D2DCE6] border border-[#B6C5D6] bg-white/80">
                      {quotes.map((q) => (
                        <div
                          key={q.id}
                          className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between"
                        >
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2 font-mono-tech text-[11px] font-bold">
                              <span className="text-[#1565C0]">{q.id}</span>
                              <span className="text-[#0D2E5E]">{q.homeowner}</span>
                              <span className="text-[#5B7088]">· {q.neighborhood}</span>
                            </div>
                            <p className="mt-1 text-xs text-[#263F5C]">{q.notes}</p>
                            <p className="font-mono-tech mt-1 text-[10px] text-[#4E647D]">
                              {q.trade.toUpperCase()} · {q.contact} · {q.submittedAt}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => cycleQuoteStatus(q.id)}
                            title="Click to advance quote status"
                            className={`font-mono-tech shrink-0 border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider transition ${
                              STATUS_BADGE[q.status]
                            }`}
                          >
                            {q.status}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 3: Active Jobsites */}
                  <div className="p-6 lg:col-span-5">
                    <div className="flex items-center justify-between border-b border-[#C5D2DF] pb-3">
                      <h2 className="font-mono-tech text-xs font-bold uppercase tracking-[0.14em] text-[#0D2E5E]">
                        ACTIVE RESIDENTIAL BUILDS
                      </h2>
                      <span className="font-mono-tech text-[10px] font-bold uppercase tracking-wider text-[#4E647D]">
                        SAMPLE DATA
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      {projects.map((job) => (
                        <div
                          key={job.id}
                          className="border border-[#B6C5D6] bg-white/80 p-4"
                        >
                          <div className="flex items-center justify-between gap-2 font-mono-tech text-[10px] font-bold uppercase tracking-wider">
                            <span className="text-[#1565C0]">
                              {job.id} · {job.neighborhood}
                            </span>
                            <span className="text-[#0D2E5E]">{job.progress}%</span>
                          </div>
                          <h3 className="mt-1 text-sm font-bold text-[#0D2E5E]">{job.title}</h3>
                          <div className="mt-2.5 h-2 w-full bg-[#DCE4EE]">
                            <div
                              className="h-full bg-[#1565C0]"
                              style={{ width: `${job.progress}%` }}
                            />
                          </div>
                          <p className="font-mono-tech mt-2 text-[11px] text-[#384F69]">
                            PHASE: <strong className="text-[#0D2E5E]">{job.phase}</strong> ·{' '}
                            {job.nextMilestone}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {section === 'Quote Requests' && (
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#B6C5D6] pb-5">
                  <div>
                    <h1 className="font-display text-3xl text-[#0D2E5E]">QUOTE REQUESTS</h1>
                    <p className="mt-1 text-sm text-[#384F69]">
                      Filter inbound Atlanta homeowner inquiries and click any status badge to
                      update it.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['All', ...QUOTE_STATUSES].map((st) => (
                      <button
                        key={st}
                        type="button"
                        onClick={() => setStatusFilter(st)}
                        className={`font-mono-tech px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider transition ${
                          statusFilter === st
                            ? 'bg-[#0D2E5E] text-white'
                            : 'border border-[#B6C5D6] bg-white text-[#263F5C] hover:border-[#1565C0]'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-5 overflow-x-auto border border-[#B6C5D6] bg-white/85">
                  <table className="w-full border-collapse text-left text-xs">
                    <thead>
                      <tr className="border-b border-[#B6C5D6] bg-[#EDF2F7] font-mono-tech text-[10px] font-bold uppercase tracking-[0.12em] text-[#3B4F68]">
                        <th className="px-4 py-3">ID</th>
                        <th className="px-4 py-3">Homeowner</th>
                        <th className="px-4 py-3">Neighborhood</th>
                        <th className="px-4 py-3">Trade</th>
                        <th className="px-4 py-3">Contact</th>
                        <th className="px-4 py-3">Scope Notes</th>
                        <th className="px-4 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D6E0EA]">
                      {filteredQuotes.map((q) => (
                        <tr key={q.id} className="hover:bg-[#F4F8FC]">
                          <td className="font-mono-tech whitespace-nowrap px-4 py-3 font-bold text-[#1565C0]">
                            {q.id}
                          </td>
                          <td className="whitespace-nowrap px-4 py-3 font-bold text-[#0D2E5E]">
                            {q.homeowner}
                          </td>
                          <td className="whitespace-nowrap px-4 py-3 text-[#263F5C]">
                            {q.neighborhood}
                          </td>
                          <td className="font-mono-tech whitespace-nowrap px-4 py-3 font-bold uppercase text-[#0D2E5E]">
                            {q.trade}
                          </td>
                          <td className="font-mono-tech whitespace-nowrap px-4 py-3 text-[#263F5C]">
                            {q.contact}
                          </td>
                          <td className="max-w-xs px-4 py-3 text-[#384F69]">{q.notes}</td>
                          <td className="whitespace-nowrap px-4 py-3">
                            <button
                              type="button"
                              onClick={() => cycleQuoteStatus(q.id)}
                              className={`font-mono-tech border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                                STATUS_BADGE[q.status]
                              }`}
                            >
                              {q.status}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {section === 'Active Builds' && (
              <div className="p-6 sm:p-8">
                <div className="border-b border-[#B6C5D6] pb-5">
                  <h1 className="font-display text-3xl text-[#0D2E5E]">ACTIVE BUILDS</h1>
                  <p className="mt-1 text-sm text-[#384F69]">
                    Residential jobsite progress and upcoming inspection milestones (sample data
                    ready for Convex `projects` table).
                  </p>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {projects.map((job) => (
                    <article
                      key={job.id}
                      className="border border-[#B6C5D6] bg-white/85 p-5"
                    >
                      <div className="flex items-center justify-between font-mono-tech text-[11px] font-bold">
                        <span className="text-[#1565C0]">{job.id}</span>
                        <span className="text-[#0D2E5E]">{job.progress}% COMPLETE</span>
                      </div>
                      <h2 className="mt-2 text-base font-bold text-[#0D2E5E]">{job.title}</h2>
                      <p className="font-mono-tech mt-1 text-xs text-[#4E647D]">
                        {job.neighborhood} · {job.trade}
                      </p>
                      <div className="mt-4 h-2.5 w-full bg-[#DCE4EE]">
                        <div className="h-full bg-[#1565C0]" style={{ width: `${job.progress}%` }} />
                      </div>
                      <p className="mt-3 text-xs text-[#263F5C]">
                        <strong>Current Phase:</strong> {job.phase}
                      </p>
                      <p className="mt-1 text-xs text-[#384F69]">
                        <strong>Next:</strong> {job.nextMilestone}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {section === 'Sample Scopes' && (
              <div className="p-6 sm:p-8">
                <div className="border-b border-[#B6C5D6] pb-5">
                  <h1 className="font-display text-3xl text-[#0D2E5E]">
                    PUBLIC SAMPLE SCOPES
                  </h1>
                  <p className="mt-1 text-sm text-[#384F69]">
                    These illustrative scopes currently render on the customer-facing `/` site and
                    can be managed from Convex once connected.
                  </p>
                </div>
                <div className="mt-6 divide-y divide-[#C5D2DF] border border-[#B6C5D6] bg-white/85">
                  {SAMPLE_PROJECTS.map((item) => (
                    <div key={item.id} className="p-5">
                      <div className="flex flex-wrap items-center justify-between gap-2 font-mono-tech text-[11px] font-bold">
                        <span className="text-[#1565C0]">{item.badge}</span>
                        <span className="text-[#4E647D]">
                          {item.neighborhood} · {item.area} · {item.duration}
                        </span>
                      </div>
                      <h2 className="mt-1.5 text-base font-bold text-[#0D2E5E]">{item.title}</h2>
                      <p className="mt-1 text-sm text-[#263F5C]">{item.summary}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section === 'Settings' && (
              <div className="p-6 sm:p-8">
                <div className="border-b border-[#B6C5D6] pb-5">
                  <h1 className="font-display text-3xl text-[#0D2E5E]">
                    SITE &amp; CONVEX SETTINGS
                  </h1>
                  <p className="mt-1 text-sm text-[#384F69]">
                    Public business contact details and backend integration status.
                  </p>
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  <div className="border border-[#B6C5D6] bg-white/85 p-5">
                    <h2 className="font-mono-tech text-xs font-bold uppercase tracking-[0.14em] text-[#0D2E5E]">
                      PUBLIC CONTACT CONFIG
                    </h2>
                    <dl className="mt-4 space-y-2.5 font-mono-tech text-xs">
                      <div className="flex justify-between border-b border-[#E2E9F0] pb-2">
                        <dt className="text-[#4E647D]">PHONE</dt>
                        <dd className="font-bold text-[#0D2E5E]">{CONTACT.phoneDisplay}</dd>
                      </div>
                      <div className="flex justify-between border-b border-[#E2E9F0] pb-2">
                        <dt className="text-[#4E647D]">EMAIL</dt>
                        <dd className="font-bold text-[#0D2E5E]">{CONTACT.email}</dd>
                      </div>
                      <div className="flex justify-between pb-1">
                        <dt className="text-[#4E647D]">SERVICE AREA</dt>
                        <dd className="font-bold text-[#0D2E5E]">{CONTACT.area}</dd>
                      </div>
                    </dl>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {ATLANTA_AREAS.map((a) => (
                        <span
                          key={a}
                          className="font-mono-tech border border-[#C5D2DF] bg-[#F4F7FA] px-2 py-0.5 text-[10px] font-bold text-[#253A54]"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border border-[#B6C5D6] bg-white/85 p-5">
                    <h2 className="font-mono-tech text-xs font-bold uppercase tracking-[0.14em] text-[#0D2E5E]">
                      CONVEX BACKEND STATUS
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-[#263F5C]">
                      This Control Deck is running in local preview mode. Next step when ready:
                      run <code className="font-mono-tech bg-[#EDF2F7] px-1.5 py-0.5 text-xs">npx convex dev</code>{' '}
                      and wire <code className="font-mono-tech bg-[#EDF2F7] px-1.5 py-0.5 text-xs">quoteRequests</code>,{' '}
                      <code className="font-mono-tech bg-[#EDF2F7] px-1.5 py-0.5 text-xs">projects</code>, and Convex Auth.
                    </p>
                    <div className="mt-5 flex gap-3">
                      <button
                        type="button"
                        onClick={onLogout}
                        className="cq-btn-primary px-4 py-2.5 text-xs"
                      >
                        Sign Out to Login Screen
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

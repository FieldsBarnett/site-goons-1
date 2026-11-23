import { useEffect, useRef, useState } from 'react'
import {
  BackgroundRollerGoon,
  ButtonPainterGoon,
  CraneHoistGoon,
  SawCutterGoon,
} from './components/ConstructionGoons'
import {
  ATLANTA_AREAS,
  CONTACT,
  PROCESS_STEPS,
  PROJECT_TYPES,
  SAMPLE_PROJECTS,
  SERVICES,
} from './data/siteData'

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

function DatumCrosshair({ className = '' }) {
  return (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" className={`h-3.5 w-3.5 ${className}`}>
      <line x1="7" y1="0" x2="7" y2="14" stroke="currentColor" strokeWidth="1.25" />
      <line x1="0" y1="7" x2="14" y2="7" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}

function App() {
  const [selectedTrade, setSelectedTrade] = useState('Kitchen')
  const [neighborhood, setNeighborhood] = useState('')
  const [contactInput, setContactInput] = useState('')
  const [projectNotes, setProjectNotes] = useState('')
  const [formError, setFormError] = useState('')
  const [submittedQuote, setSubmittedQuote] = useState(null)
  const [ctaHovered, setCtaHovered] = useState(false)
  const [isLevel, setIsLevel] = useState(true)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const quoteRef = useRef(null)
  const levelTimerRef = useRef(null)

  useEffect(() => {
    return () => {
      if (levelTimerRef.current) window.clearTimeout(levelTimerRef.current)
    }
  }, [])

  function triggerReLevel() {
    if (levelTimerRef.current) window.clearTimeout(levelTimerRef.current)
    setIsLevel(false)
    levelTimerRef.current = window.setTimeout(() => {
      setIsLevel(true)
    }, 1150)
  }

  function jumpToQuoteWithTrade(tradeId) {
    setSelectedTrade(tradeId)
    setSubmittedQuote(null)
    setFormError('')
    quoteRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    triggerReLevel()
  }

  function handleQuoteSubmit(e) {
    e.preventDefault()
    const cleanContact = contactInput.trim()
    const cleanNeighborhood = neighborhood.trim()

    if (!cleanContact) {
      setFormError('Add a phone number or email so Fields can reach you back.')
      return
    }

    setFormError('')
    setSubmittedQuote({
      trade: selectedTrade,
      neighborhood: cleanNeighborhood || 'Atlanta Metro',
      contact: cleanContact,
      notes: projectNotes.trim(),
    })
    triggerReLevel()
  }

  const mailtoSummaryHref = submittedQuote
    ? `mailto:${CONTACT.email}?subject=${encodeURIComponent(
        `Quote Request — ${submittedQuote.trade} (${submittedQuote.neighborhood})`
      )}&body=${encodeURIComponent(
        `Project Type: ${submittedQuote.trade}\nNeighborhood: ${submittedQuote.neighborhood}\nContact: ${submittedQuote.contact}\nNotes: ${submittedQuote.notes || 'None added'}`
      )}`
    : CONTACT.emailHref

  return (
    <div className="cq-sky-void min-h-screen text-[#0F2442]">
      {/* Skip link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[#0D2E5E] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to main content
      </a>

      {/* Full-Bleed Edge-to-Edge Top Architectural Navigation Slab */}
      <header className="sticky top-0 z-40 w-full">
        <div className="cq-nav-block w-full">
          <nav
            aria-label="Primary navigation"
            className="mx-auto flex max-w-[1380px] items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8"
          >
            <a
              href="#"
              className="font-display text-2xl tracking-wider text-[#0D2E5E] transition hover:text-[#1565C0] sm:text-[1.75rem]"
            >
              SITEGOONS
            </a>

            <div className="hidden items-center gap-7 md:flex">
              <a
                href="#services"
                className="font-mono-tech text-xs font-bold uppercase tracking-[0.12em] text-[#0F2442] transition hover:text-[#1565C0]"
              >
                Services
              </a>
              <a
                href="#sample-work"
                className="font-mono-tech text-xs font-bold uppercase tracking-[0.12em] text-[#0F2442] transition hover:text-[#1565C0]"
              >
                Sample Work
              </a>
              <a
                href="#process"
                className="font-mono-tech text-xs font-bold uppercase tracking-[0.12em] text-[#0F2442] transition hover:text-[#1565C0]"
              >
                Process
              </a>
              <a
                href="#contact"
                className="font-mono-tech text-xs font-bold uppercase tracking-[0.12em] text-[#0F2442] transition hover:text-[#1565C0]"
              >
                Contact
              </a>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3">
              <a
                href={CONTACT.phoneHref}
                className="font-mono-tech inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap border border-[#0D2E5E]/25 bg-[#E9EDF1] px-2.5 py-2 text-[11px] font-bold tracking-wider text-[#0D2E5E] transition hover:border-[#1565C0] hover:bg-[#1565C0] hover:text-white sm:gap-2 sm:px-3.5 sm:text-sm"
              >
                <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M3.5 4.5C3.5 3.67 4.17 3 5 3h2.2c.46 0 .86.31.97.76l.7 2.8a1 1 0 0 1-.42 1.07l-1.45.97a10.5 10.5 0 0 0 4.4 4.4l.97-1.45a1 1 0 0 1 1.07-.42l2.8.7c.45.11.76.51.76.97V15c0 .83-.67 1.5-1.5 1.5h-.5C7.82 16.5 3.5 12.18 3.5 5v-.5Z"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinejoin="round"
                  />
                </svg>
                {CONTACT.phoneDisplay}
              </a>

              <button
                type="button"
                onClick={() => setMobileNavOpen((prev) => !prev)}
                aria-expanded={mobileNavOpen}
                aria-label="Toggle navigation menu"
                className="inline-flex h-10 w-10 items-center justify-center border border-[#0D2E5E]/25 bg-white text-[#0D2E5E] md:hidden"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {mobileNavOpen ? (
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
                  ) : (
                    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
                  )}
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Drawer */}
          {mobileNavOpen && (
            <div className="border-t border-[#C9D2DB] bg-[#F5F7F9] px-5 py-4 md:hidden">
              <div className="flex flex-col gap-3">
                {[
                  ['Services', '#services'],
                  ['Sample Work', '#sample-work'],
                  ['Process', '#process'],
                  ['Contact', '#contact'],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMobileNavOpen(false)}
                    className="font-mono-tech py-1.5 text-sm font-bold uppercase tracking-[0.1em] text-[#0D2E5E]"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      <main id="main-content">
        {/* FIRST VIEWPORT: Cut-Block Hero + Hoisted Quote Request Block */}
        <section className="mx-auto max-w-[1380px] px-3 pb-8 pt-6 sm:px-5 lg:px-7 lg:pb-10 lg:pt-8">
          <div className="grid items-start gap-8 lg:grid-cols-[1.16fr_0.84fr] lg:gap-10">
            {/* LEFT ARCHITECTURAL CUT-BLOCK */}
            <div className="relative">
              <div className="cq-block-shadow">
                <div className="cq-block relative overflow-hidden px-6 py-8 sm:px-10 sm:py-11 lg:px-12 lg:py-12">
                  {/* Subtle Cloud Quarry datum registration crosshairs */}
                  <DatumCrosshair className="pointer-events-none absolute right-5 top-5 text-[#9AB0C7]" />

                  <h1 className="font-display max-w-[16ch] text-[clamp(2.35rem,4.9vw,4.15rem)] leading-[1.03] text-[#0D2E5E]">
                    SITEGOONS — ATLANTA RESIDENTIAL CONTRACTING
                  </h1>

                  <p className="mt-5 max-w-[54ch] text-lg leading-relaxed text-[#253A54] sm:text-[1.18rem]">
                    Kitchens, bathrooms, home additions, and custom renovations across the Atlanta
                    area — built square, level, and directly with the crew doing the work.
                  </p>

                  {/* Direct Contact Readout */}
                  <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-[#C9D2DB] py-3.5 font-mono-tech text-sm font-bold text-[#0D2E5E]">
                    <a
                      href={CONTACT.phoneHref}
                      className="transition hover:text-[#1565C0] hover:underline"
                    >
                      {CONTACT.phoneDisplay}
                    </a>
                    <span aria-hidden="true" className="text-[#7D93AC]">
                      ·
                    </span>
                    <a
                      href={CONTACT.emailHref}
                      className="transition hover:text-[#1565C0] hover:underline"
                    >
                      {CONTACT.email}
                    </a>
                  </div>

                  {/* Primary & Secondary Chamfered Actions */}
                  <div className="mt-7 flex flex-wrap items-center gap-3.5 pb-6 sm:pb-0">
                    <a
                      href="#quote-block"
                      onClick={(e) => {
                        e.preventDefault()
                        quoteRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                        triggerReLevel()
                      }}
                      className="cq-btn-primary px-6 py-3.5 text-xs sm:text-sm"
                    >
                      <span>Request a Quote</span>
                      <ChevronIcon />
                    </a>
                    <span className="cq-btn-secondary-wrap">
                      <a
                        href="#sample-work"
                        className="cq-btn-secondary px-6 py-3.5 text-xs sm:text-sm"
                      >
                        <span>Sample Work</span>
                        <ChevronIcon />
                      </a>
                    </span>
                  </div>

                  {/* Recessed Volumetric Diagonal Saw-Cut Channel */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-2 -right-4 h-36 w-44 sm:h-44 sm:w-56"
                  >
                    <svg viewBox="0 0 220 176" fill="none" className="h-full w-full">
                      {/* Detached corner wedge */}
                      <polygon points="62,176 220,18 220,176" fill="#DCE5EF" />
                      {/* Recessed deep shadow groove */}
                      <polygon points="36,176 220,-8 220,10 54,176" fill="#9BB0C6" />
                      <polygon points="44,176 220,0 220,8 52,176" fill="#5D7B9B" />
                      {/* Gleaming sunlit silver bevel edge */}
                      <line x1="54" y1="176" x2="220" y2="10" stroke="#FFFFFF" strokeWidth="3" />
                      <line x1="66" y1="176" x2="220" y2="22" stroke="#8CA4BC" strokeWidth="1.25" strokeDasharray="6 5" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Animated Illustrated Saw-Line Cutter Goon (visible on mobile and desktop) */}
              <div className="pointer-events-none absolute -bottom-4 right-2 z-20 w-24 sm:right-5 sm:w-32 lg:right-7 lg:w-36">
                <SawCutterGoon />
              </div>
            </div>

            {/* RIGHT HOISTED QUOTE REQUEST BLOCK */}
            <div
              id="quote-block"
              ref={quoteRef}
              className="relative pt-24 sm:pt-28 lg:pt-24"
            >
              {/* Animated Illustrated Crane & Leveler Goon perched cleanly on the top-right edge */}
              <div className="pointer-events-none absolute -top-2 right-2 z-20 w-36 sm:right-4 sm:w-44">
                <CraneHoistGoon isLevel={isLevel} />
              </div>

              {/* Block tilts slightly when user nudges the level indicator, then locks to 0.0 deg */}
              <div
                className="cq-block-shadow transition-transform duration-700 ease-out"
                style={{
                  transform: isLevel ? 'rotate(0deg)' : 'rotate(-1.35deg)',
                  transformOrigin: 'center center',
                }}
              >
                <div className="cq-block px-6 py-7 sm:px-8 sm:py-8">
                  <div className="flex items-center justify-between gap-2 border-b border-[#C9D2DB] pb-3.5">
                    <h2 className="font-display text-2xl text-[#0D2E5E] sm:text-[1.75rem]">
                      REQUEST A QUOTE
                    </h2>

                    {/* Interactive Level Status Readout — clicking makes the crew re-level the block */}
                    <button
                      type="button"
                      onClick={triggerReLevel}
                      title="Click to nudge and watch our SiteGoon re-level this block"
                      className={`font-mono-tech inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider transition ${
                        isLevel
                          ? 'border-[#15803D]/35 bg-[#DCFCE7] text-[#15803D] hover:bg-[#BBF7D0]'
                          : 'border-[#B45309]/40 bg-[#FEF3C7] text-[#B45309]'
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${
                          isLevel ? 'bg-[#15803D]' : 'bg-[#D97706]'
                        }`}
                      />
                      {isLevel ? '0.0° LEVEL' : 'LEVELING…'}
                    </button>
                  </div>

                  {submittedQuote ? (
                    <div className="mt-5 space-y-4">
                      <div className="border border-[#15803D]/30 bg-[#F0FDF4] p-4">
                        <p className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[#15803D]">
                          Quote Spec Ready
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-[#0F2442]">
                          Got your <strong>{submittedQuote.trade}</strong> details for{' '}
                          <strong>{submittedQuote.neighborhood}</strong>. Send the pre-filled email
                          directly to Fields or call now to book a site walk.
                        </p>
                      </div>

                      <div className="flex flex-col gap-2.5">
                        <a
                          href={mailtoSummaryHref}
                          className="cq-btn-primary w-full py-3.5 text-xs sm:text-sm"
                        >
                          <span>Send to {CONTACT.email}</span>
                          <ChevronIcon />
                        </a>
                        <span className="cq-btn-secondary-wrap w-full">
                          <a
                            href={CONTACT.phoneHref}
                            className="cq-btn-secondary w-full py-3 text-xs sm:text-sm"
                          >
                            Call {CONTACT.phoneDisplay}
                          </a>
                        </span>
                        <button
                          type="button"
                          onClick={() => setSubmittedQuote(null)}
                          className="font-mono-tech pt-1 text-xs font-bold uppercase tracking-wider text-[#3B4F68] underline hover:text-[#0D2E5E]"
                        >
                          Edit quote details
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleQuoteSubmit} className="mt-5 space-y-4" noValidate>
                      {/* Chamfered Trade Selector Chips */}
                      <fieldset>
                        <legend className="font-mono-tech mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#3B4F68]">
                          Project Type
                        </legend>
                        <div className="grid grid-cols-2 gap-2">
                          {PROJECT_TYPES.map((type) => {
                            const active = selectedTrade === type.id
                            return (
                              <div
                                key={type.id}
                                className={`cq-chip-wrap ${active ? 'cq-chip-wrap-active' : ''}`}
                              >
                                <button
                                  type="button"
                                  aria-pressed={active}
                                  onClick={() => setSelectedTrade(type.id)}
                                  className={`cq-chip px-3 py-2.5 text-center ${
                                    active ? 'cq-chip-active' : ''
                                  }`}
                                >
                                  {type.label}
                                </button>
                              </div>
                            )
                          })}
                        </div>
                      </fieldset>

                      <div>
                        <label
                          htmlFor="quote-neighborhood"
                          className="font-mono-tech mb-1.5 block text-[11px] font-bold uppercase tracking-[0.12em] text-[#3B4F68]"
                        >
                          Atlanta Neighborhood
                        </label>
                        <div className="cq-input-wrap">
                          <input
                            id="quote-neighborhood"
                            type="text"
                            value={neighborhood}
                            onChange={(e) => setNeighborhood(e.target.value)}
                            placeholder="e.g. Virginia-Highland, Decatur, Kirkwood"
                            className="cq-input px-3.5 py-2.5 text-sm placeholder:text-[#5B7088] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="quote-contact"
                          className="font-mono-tech mb-1.5 block text-[11px] font-bold uppercase tracking-[0.12em] text-[#3B4F68]"
                        >
                          Phone or Email
                        </label>
                        <div className="cq-input-wrap">
                          <input
                            id="quote-contact"
                            type="text"
                            required
                            value={contactInput}
                            onChange={(e) => {
                              setContactInput(e.target.value)
                              if (formError) setFormError('')
                            }}
                            placeholder="Your best phone number or email"
                            className="cq-input px-3.5 py-2.5 text-sm placeholder:text-[#5B7088] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="quote-notes"
                          className="font-mono-tech mb-1.5 block text-[11px] font-bold uppercase tracking-[0.12em] text-[#3B4F68]"
                        >
                          Brief Scope (Optional)
                        </label>
                        <div className="cq-input-wrap">
                          <textarea
                            id="quote-notes"
                            rows={2}
                            value={projectNotes}
                            onChange={(e) => setProjectNotes(e.target.value)}
                            placeholder="Tell us what you're remodeling or hoping to change"
                            className="cq-input resize-none px-3.5 py-2 text-sm placeholder:text-[#5B7088] focus:outline-none"
                          />
                        </div>
                      </div>

                      {formError && (
                        <p
                          role="alert"
                          className="border border-[#B91C1C]/35 bg-[#FEF2F2] px-3 py-2 text-xs font-bold text-[#991B1B]"
                        >
                          {formError}
                        </p>
                      )}

                      {/* Primary Submit Button actively rolled by the illustrated ButtonPainterGoon */}
                      <div className="relative flex items-center gap-2.5 pt-1">
                        <div className="pointer-events-none -ml-2 w-20 shrink-0 sm:w-24">
                          <ButtonPainterGoon fast={ctaHovered} />
                        </div>
                        <button
                          type="submit"
                          onMouseEnter={() => setCtaHovered(true)}
                          onMouseLeave={() => setCtaHovered(false)}
                          className="cq-btn-primary w-full overflow-hidden px-5 py-3.5 text-xs sm:text-sm"
                        >
                          <span aria-hidden="true" className="cta-paint-sheen" />
                          <span className="relative z-10 inline-flex items-center gap-1.5">
                            <span>Get Estimate</span>
                            <ChevronIcon />
                          </span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RESIDENTIAL SERVICES STACK */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="mx-auto max-w-[1380px] px-3 pb-14 pt-4 sm:px-5 lg:px-7"
        >
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4 px-1">
            <h2
              id="services-heading"
              className="font-display text-3xl text-white sm:text-4xl"
            >
              RESIDENTIAL SERVICES
            </h2>
            <p className="max-w-md text-sm text-[#D7E9FA] sm:text-base">
              Focused exclusively on residential remodeling across the Atlanta area — never
              stretched thin on commercial towers.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <article key={service.id} className="cq-block-shadow-sm flex">
                <div className="cq-block-sm flex w-full flex-col justify-between p-6">
                  <div>
                    <div className="flex items-baseline gap-2 border-b border-[#C9D2DB] pb-3">
                      <span className="font-mono-tech shrink-0 whitespace-nowrap text-sm font-bold text-[#1565C0]">
                        {service.code} /
                      </span>
                      <h3 className="font-display text-xl leading-tight text-[#0D2E5E] xl:text-2xl">
                        {service.title.toUpperCase()}
                      </h3>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-[#253A54]">
                      {service.summary}
                    </p>

                    <ul className="mt-4 space-y-1.5 border-t border-[#D6DADF] pt-3.5 text-xs font-bold text-[#0F2442]">
                      {service.trades.map((trade) => (
                        <li key={trade} className="flex items-center gap-2">
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 shrink-0 bg-[#1565C0]"
                          />
                          <span>{trade}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 border-t border-[#D6DADF] pt-3.5">
                    <p className="font-mono-tech text-[11px] text-[#3B4F68]">
                      {service.typicalWindow}
                    </p>
                    <button
                      type="button"
                      onClick={() => jumpToQuoteWithTrade(service.id)}
                      className="font-mono-tech mt-2.5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#1565C0] transition hover:text-[#0D2E5E]"
                    >
                      <span>{service.ctaLabel}</span>
                      <ChevronIcon className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ANIMATED BACKGROUND PAINTER SEAM */}
        <div
          aria-hidden="true"
          className="mx-auto max-w-[1380px] overflow-hidden px-3 py-2 sm:px-5 lg:px-7"
        >
          <div className="relative flex h-24 items-end">
            {/* Base silver seam */}
            <div className="h-2.5 w-full bg-[#0D2E5E]/55">
              {/* Freshly rolled Cumulus-Sky architectural coating bar */}
              <div className="seam-paint-bar h-full w-full bg-gradient-to-r from-[#F5F7F9] via-[#4DA7E6] to-[#4DA7E6]" />
            </div>
            {/* Illustrated Background Roller Goon patrolling along the seam */}
            <div className="goon-seam-patrol pointer-events-none absolute bottom-1 left-2 w-24 sm:left-10">
              <BackgroundRollerGoon />
            </div>
          </div>
        </div>

        {/* SAMPLE WORK (Asymmetric Cut-Block Editorial Layout, explicitly labeled Sample) */}
        <section
          id="sample-work"
          aria-labelledby="sample-work-heading"
          className="mx-auto max-w-[1380px] px-3 py-14 sm:px-5 lg:px-7"
        >
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4 px-1">
            <h2
              id="sample-work-heading"
              className="font-display text-3xl text-white sm:text-4xl"
            >
              SAMPLE PROJECT SCOPES
            </h2>
            <p className="max-w-lg text-sm text-[#D7E9FA] sm:text-base">
              Illustrative residential scopes showing how we plan and sequence Atlanta remodels
              before photography from upcoming builds is added.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">
            {/* Featured wide scope block */}
            <article className="cq-block-shadow lg:col-span-7">
              <div className="cq-block relative flex h-full flex-col justify-between p-7 sm:p-9">
                <DatumCrosshair className="pointer-events-none absolute right-5 top-5 text-[#9AB0C7]" />
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#C9D2DB] pb-3 pr-6">
                    <span className="font-mono-tech bg-[#E9EDF1] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0D2E5E]">
                      {SAMPLE_PROJECTS[0].badge}
                    </span>
                    <span className="font-mono-tech text-xs font-bold text-[#3B4F68]">
                      {SAMPLE_PROJECTS[0].neighborhood}
                    </span>
                  </div>

                  <h3 className="font-display mt-5 text-2xl text-[#0D2E5E] sm:text-3xl">
                    {SAMPLE_PROJECTS[0].title}
                  </h3>

                  <p className="mt-3 max-w-[60ch] text-base leading-relaxed text-[#253A54]">
                    {SAMPLE_PROJECTS[0].summary}
                  </p>

                  {/* Tabular Measurement Strip */}
                  <dl className="mt-6 grid grid-cols-3 gap-3 border-y border-[#C9D2DB] py-3.5 font-mono-tech">
                    <div>
                      <dt className="text-[10px] font-bold uppercase tracking-widest text-[#3B4F68]">
                        Trade
                      </dt>
                      <dd className="mt-0.5 text-sm font-bold text-[#0D2E5E]">
                        {SAMPLE_PROJECTS[0].trade}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-bold uppercase tracking-widest text-[#3B4F68]">
                        Footprint
                      </dt>
                      <dd className="mt-0.5 text-sm font-bold text-[#0D2E5E]">
                        {SAMPLE_PROJECTS[0].area}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-bold uppercase tracking-widest text-[#3B4F68]">
                        Schedule
                      </dt>
                      <dd className="mt-0.5 text-sm font-bold text-[#0D2E5E]">
                        {SAMPLE_PROJECTS[0].duration}
                      </dd>
                    </div>
                  </dl>

                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {SAMPLE_PROJECTS[0].deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-[#0F2442]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-2 w-2 shrink-0 bg-[#1565C0]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 pt-2">
                  <button
                    type="button"
                    onClick={() => jumpToQuoteWithTrade(SAMPLE_PROJECTS[0].trade)}
                    className="cq-btn-primary px-5 py-3 text-xs"
                  >
                    <span>Plan a Similar Kitchen</span>
                    <ChevronIcon />
                  </button>
                </div>
              </div>
            </article>

            {/* Right column: two stacked sample scopes */}
            <div className="flex flex-col gap-6 lg:col-span-5">
              {SAMPLE_PROJECTS.slice(1).map((project) => (
                <article key={project.id} className="cq-block-shadow-sm flex-1">
                  <div className="cq-block-sm flex h-full flex-col justify-between p-6 sm:p-7">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#C9D2DB] pb-2.5">
                        <span className="font-mono-tech bg-[#E9EDF1] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0D2E5E]">
                          {project.badge}
                        </span>
                        <span className="font-mono-tech text-xs font-bold text-[#3B4F68]">
                          {project.neighborhood}
                        </span>
                      </div>

                      <h3 className="font-display mt-4 text-xl text-[#0D2E5E] sm:text-2xl">
                        {project.title}
                      </h3>

                      <p className="mt-2.5 text-sm leading-relaxed text-[#253A54]">
                        {project.summary}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-4 border-t border-[#D6DADF] pt-3 font-mono-tech text-xs font-bold text-[#0D2E5E]">
                        <span>{project.area}</span>
                        <span aria-hidden="true" className="text-[#7D93AC]">
                          /
                        </span>
                        <span>{project.duration}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={() => jumpToQuoteWithTrade(project.trade)}
                        className="font-mono-tech inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#1565C0] transition hover:text-[#0D2E5E]"
                      >
                        <span>Request {project.trade} Quote</span>
                        <ChevronIcon className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE BUILD (Process Block) */}
        <section
          id="process"
          aria-labelledby="process-heading"
          className="mx-auto max-w-[1380px] px-3 py-10 sm:px-5 lg:px-7"
        >
          <div className="cq-block-shadow">
            <div className="cq-block px-6 py-9 sm:px-10 sm:py-12">
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#C9D2DB] pb-6">
                <h2
                  id="process-heading"
                  className="font-display text-3xl text-[#0D2E5E] sm:text-4xl"
                >
                  HOW THE CREW WORKS
                </h2>
                <p className="max-w-md text-sm text-[#3B4F68] sm:text-base">
                  Straightforward steps from first site walk to final punch list — no middlemen
                  and no guesswork.
                </p>
              </div>

              <ol className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                {PROCESS_STEPS.map((item) => (
                  <li key={item.step} className="relative">
                    <div className="flex items-center gap-3">
                      <span className="font-mono-tech inline-flex h-9 w-9 items-center justify-center bg-[#0D2E5E] text-sm font-bold text-white">
                        {item.step}
                      </span>
                      <div aria-hidden="true" className="h-[2px] flex-1 bg-[#C9D2DB]" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-[#0D2E5E]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#253A54]">{item.detail}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* DIRECT CONTACT & ATLANTA SERVICE AREA */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="mx-auto max-w-[1380px] px-3 pb-16 pt-10 sm:px-5 lg:px-7 lg:pb-20"
        >
          <div className="cq-block-shadow">
            <div className="cq-block px-6 py-9 sm:px-10 sm:py-12">
              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div>
                  <h2
                    id="contact-heading"
                    className="font-display text-3xl text-[#0D2E5E] sm:text-4xl"
                  >
                    READY TO TALK THROUGH YOUR REMODEL?
                  </h2>
                  <p className="mt-3 max-w-[56ch] text-base leading-relaxed text-[#253A54]">
                    Call or email Fields directly, or send your room details through the quote
                    block above. We&apos;ll schedule an Atlanta site walk and put together a clear
                    scope.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3.5">
                    <a
                      href={CONTACT.phoneHref}
                      className="cq-btn-primary px-6 py-3.5 text-xs sm:text-sm"
                    >
                      <span>Call {CONTACT.phoneDisplay}</span>
                      <ChevronIcon />
                    </a>
                    <span className="cq-btn-secondary-wrap">
                      <a
                        href={CONTACT.emailHref}
                        className="cq-btn-secondary px-6 py-3.5 text-xs sm:text-sm"
                      >
                        Email {CONTACT.email}
                      </a>
                    </span>
                  </div>
                </div>

                {/* Atlanta Service Area Readout */}
                <div className="border border-[#C9D2DB] bg-[#EDF2F7] p-5 sm:p-6">
                  <p className="font-mono-tech text-xs font-bold uppercase tracking-[0.12em] text-[#0D2E5E]">
                    Serving Greater Atlanta
                  </p>
                  <ul className="mt-3.5 flex flex-wrap gap-2">
                    {ATLANTA_AREAS.map((area) => (
                      <li
                        key={area}
                        className="font-mono-tech border border-[#B8C7D8] bg-white px-2.5 py-1 text-xs font-bold text-[#0F2442]"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/15 bg-[#092145] text-[#D7E9FA]">
        <div className="mx-auto flex max-w-[1380px] flex-col items-center justify-between gap-4 px-5 py-7 text-sm sm:flex-row lg:px-7">
          <div className="flex items-center gap-3">
            <span className="font-display text-xl tracking-wider text-white">SITEGOONS</span>
            <span aria-hidden="true" className="text-[#4DA7E6]">
              ·
            </span>
            <span className="font-mono-tech text-xs uppercase tracking-wider text-[#B8D7F5]">
              Atlanta Residential General Contracting
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-5 font-mono-tech text-xs font-bold">
            <a href={CONTACT.phoneHref} className="transition hover:text-white">
              {CONTACT.phoneDisplay}
            </a>
            <a href={CONTACT.emailHref} className="transition hover:text-white">
              {CONTACT.email}
            </a>
            <span className="text-[#8EB7E0]">© {new Date().getFullYear()} SiteGoons</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

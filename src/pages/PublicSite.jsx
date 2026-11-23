import { useRef, useState } from 'react'
import {
  ATLANTA_AREAS,
  CONTACT,
  PROCESS_STEPS,
  PROJECT_TYPES,
  SAMPLE_PROJECTS,
  SERVICES,
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

export default function PublicSite({ onNavigate }) {
  const [selectedTrade, setSelectedTrade] = useState('Kitchen')
  const [neighborhood, setNeighborhood] = useState('')
  const [contactInput, setContactInput] = useState('')
  const [projectNotes, setProjectNotes] = useState('')
  const [formError, setFormError] = useState('')
  const [submittedQuote, setSubmittedQuote] = useState(null)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const quoteRef = useRef(null)

  function jumpToQuoteWithTrade(tradeId) {
    setSelectedTrade(tradeId)
    setSubmittedQuote(null)
    setFormError('')
    quoteRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
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
  }

  const mailtoSummaryHref = submittedQuote
    ? `mailto:${CONTACT.email}?subject=${encodeURIComponent(
        `Quote Request — ${submittedQuote.trade} (${submittedQuote.neighborhood})`
      )}&body=${encodeURIComponent(
        `Project Type: ${submittedQuote.trade}\nNeighborhood: ${submittedQuote.neighborhood}\nContact: ${submittedQuote.contact}\nNotes: ${submittedQuote.notes || 'None added'}`
      )}`
    : CONTACT.emailHref

  return (
    <div className="cq-sky-void-3d relative min-h-screen overflow-x-clip text-[#0F2442]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[#0D2E5E] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to main content
      </a>

      {/* Twin-Slab 3D Extruded Top Navigation Bar */}
      <header className="sticky top-0 z-40 w-full px-2 sm:px-3">
        <div className="mx-auto grid max-w-[1440px] grid-cols-[1fr_auto] items-stretch gap-2.5">
          <div className="cq-slab-3d-sm-shell">
            <nav
              aria-label="Primary navigation"
              className="cq-nav-slab-3d flex h-full items-center justify-between gap-4 px-5 py-3.5 sm:px-8"
            >
              <a
                href="#"
                className="font-display text-2xl tracking-wider text-[#0D2E5E] transition hover:text-[#1565C0] sm:text-[1.85rem]"
              >
                SITEGOONS
              </a>

              <div className="hidden items-center gap-8 md:flex">
                <a
                  href="#services"
                  className="font-mono-tech text-xs font-bold uppercase tracking-[0.14em] text-[#0F2442] transition hover:text-[#1565C0]"
                >
                  Services
                </a>
                <a
                  href="#sample-work"
                  className="font-mono-tech text-xs font-bold uppercase tracking-[0.14em] text-[#0F2442] transition hover:text-[#1565C0]"
                >
                  Sample Work
                </a>
                <a
                  href="#process"
                  className="font-mono-tech text-xs font-bold uppercase tracking-[0.14em] text-[#0F2442] transition hover:text-[#1565C0]"
                >
                  Process
                </a>
                <a
                  href="#contact"
                  className="font-mono-tech text-xs font-bold uppercase tracking-[0.14em] text-[#0F2442] transition hover:text-[#1565C0]"
                >
                  Contact
                </a>
              </div>

              <button
                type="button"
                onClick={() => setMobileNavOpen((prev) => !prev)}
                aria-expanded={mobileNavOpen}
                aria-label="Toggle navigation menu"
                className="inline-flex h-9 w-9 items-center justify-center border border-[#0D2E5E]/25 bg-white text-[#0D2E5E] md:hidden"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {mobileNavOpen ? (
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
                  ) : (
                    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
                  )}
                </svg>
              </button>
            </nav>
          </div>

          <div className="cq-slab-3d-sm-shell">
            <a
              href={CONTACT.phoneHref}
              className="cq-nav-slab-3d font-mono-tech flex h-full items-center gap-2 whitespace-nowrap px-4 py-3.5 text-xs font-bold tracking-wider text-[#0D2E5E] transition hover:text-[#1565C0] sm:px-7 sm:text-sm"
            >
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>

        {mobileNavOpen && (
          <div className="mx-auto mt-1 max-w-[1440px] border border-[#B8C9DC] bg-[#F5F7F9] px-5 py-3 shadow-lg md:hidden">
            <div className="flex flex-col gap-2.5">
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
                  className="font-mono-tech py-1 text-sm font-bold uppercase tracking-[0.1em] text-[#0D2E5E]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="main-content">
        {/* FIRST VIEWPORT: 3D Extruded Cut-Blocks + Sky Void + Far-Right Monolith Pillar */}
        <section className="relative mx-auto max-w-[1440px] px-3 pb-10 pt-7 sm:px-5 lg:px-7 lg:pt-10">
          <div
            aria-hidden="true"
            className="cq-slab-3d-shell pointer-events-none absolute -right-10 bottom-10 top-10 hidden w-20 xl:block"
          >
            <div className="cq-slab-3d-depth h-full w-full">
              <div className="cq-slab-3d-face h-full w-full" />
            </div>
          </div>

          <div className="relative grid items-start gap-8 lg:grid-cols-[1.15fr_0.82fr] lg:gap-12 xl:pr-14">
            {/* LEFT 3D EXTRUDED HERO BLOCK */}
            <div className="cq-slab-3d-shell">
              <div className="cq-slab-3d-depth">
                <div className="cq-slab-3d-face relative overflow-hidden px-6 py-9 sm:px-11 sm:py-12 lg:px-14 lg:py-14">
                  <h1 className="font-display max-w-[15ch] text-[clamp(2.45rem,5vw,4.35rem)] leading-[1.01] text-[#0D2E5E]">
                    SITEGOONS — ATLANTA RESIDENTIAL CONTRACTING
                  </h1>

                  <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-[#223852] sm:text-[1.22rem]">
                    Kitchens, Bathrooms, Home Additions &amp; Custom Renovations across Atlanta,
                    GA.
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-3.5 gap-y-1.5 font-mono-tech text-sm font-bold text-[#0D2E5E] sm:text-base">
                    <a href={CONTACT.phoneHref} className="transition hover:text-[#1565C0] hover:underline">
                      {CONTACT.phoneDisplay}
                    </a>
                    <span aria-hidden="true" className="text-[#6B85A3]">
                      ·
                    </span>
                    <a href={CONTACT.emailHref} className="transition hover:text-[#1565C0] hover:underline">
                      {CONTACT.email}
                    </a>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3.5 pb-6 sm:pb-4">
                    <a
                      href="#quote-block"
                      onClick={(e) => {
                        e.preventDefault()
                        quoteRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
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

                  {/* Deep 3D Recessed Diagonal Saw-Cut Channel */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-1 -right-2 h-40 w-48 sm:h-52 sm:w-64"
                  >
                    <svg viewBox="0 0 260 210" fill="none" className="h-full w-full">
                      <polygon points="36,210 260,0 260,36 74,210" fill="#6F89A6" />
                      <polygon points="50,210 260,12 260,26 64,210" fill="#3B5B80" />
                      <polygon points="82,210 260,42 260,210" fill="#EDF2F7" />
                      <line x1="82" y1="210" x2="260" y2="42" stroke="#FFFFFF" strokeWidth="3.5" />
                      <line x1="40" y1="210" x2="260" y2="3" stroke="#DCE6F0" strokeWidth="2.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT 3D HOISTED QUOTE REQUEST MONOLITH */}
            <div id="quote-block" ref={quoteRef} className="cq-slab-3d-shell">
              <div className="cq-slab-3d-depth">
                <div className="cq-slab-3d-face px-6 py-7 sm:px-8 sm:py-8">
                  <div className="flex items-center justify-between gap-2 border-b border-[#C9D2DB] pb-3.5">
                    <h2 className="font-display text-2xl text-[#0D2E5E] sm:text-[1.85rem]">
                      REQUEST A QUOTE
                    </h2>
                    <span className="font-mono-tech text-[11px] font-bold uppercase tracking-wider text-[#3B4F68]">
                      ATLANTA, GA
                    </span>
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
                            placeholder="Virginia-Highland, Decatur, Kirkwood..."
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
                            placeholder="What are you looking to remodel?"
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

                      <button type="submit" className="cq-btn-primary w-full px-5 py-3.5 text-xs sm:text-sm">
                        <span>Get Estimate</span>
                        <ChevronIcon />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3D EXTRUDED SERVICES PLINTH ROW */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="mx-auto max-w-[1440px] px-3 pb-14 pt-4 sm:px-5 lg:px-7"
        >
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4 px-1">
            <h2 id="services-heading" className="font-display text-3xl text-white sm:text-4xl">
              RESIDENTIAL SERVICES
            </h2>
            <p className="max-w-md text-sm text-[#D7E9FA] sm:text-base">
              Built exclusively for Atlanta homeowners — kitchens, bathrooms, additions, and custom
              renovations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <article key={service.id} className="cq-slab-3d-sm-shell flex">
                <div className="cq-slab-3d-sm-depth flex w-full">
                  <div className="cq-slab-3d-sm-face flex w-full flex-col justify-between p-6">
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
                            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-[#1565C0]" />
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
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SAMPLE PROJECT SCOPES (3D Extruded Asymmetric Layout) */}
        <section
          id="sample-work"
          aria-labelledby="sample-work-heading"
          className="mx-auto max-w-[1440px] px-3 py-12 sm:px-5 lg:px-7"
        >
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4 px-1">
            <h2 id="sample-work-heading" className="font-display text-3xl text-white sm:text-4xl">
              SAMPLE PROJECT SCOPES
            </h2>
            <p className="max-w-lg text-sm text-[#D7E9FA] sm:text-base">
              Illustrative Atlanta residential scopes showing how we sequence remodels before
              photography from upcoming builds is added.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">
            <article className="cq-slab-3d-shell lg:col-span-7">
              <div className="cq-slab-3d-depth h-full">
                <div className="cq-slab-3d-face flex h-full flex-col justify-between p-7 sm:p-9">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#C9D2DB] pb-3">
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
                        <li key={item} className="flex items-start gap-2.5 text-sm text-[#0F2442]">
                          <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 bg-[#1565C0]" />
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
              </div>
            </article>

            <div className="flex flex-col gap-6 lg:col-span-5">
              {SAMPLE_PROJECTS.slice(1).map((project) => (
                <article key={project.id} className="cq-slab-3d-sm-shell flex-1">
                  <div className="cq-slab-3d-sm-depth h-full">
                    <div className="cq-slab-3d-sm-face flex h-full flex-col justify-between p-6 sm:p-7">
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
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS + CONTACT 3D SLABS */}
        <section
          id="process"
          aria-labelledby="process-heading"
          className="mx-auto max-w-[1440px] px-3 py-8 sm:px-5 lg:px-7"
        >
          <div className="cq-slab-3d-shell">
            <div className="cq-slab-3d-depth">
              <div className="cq-slab-3d-face px-6 py-9 sm:px-10 sm:py-12">
                <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#C9D2DB] pb-6">
                  <h2 id="process-heading" className="font-display text-3xl text-[#0D2E5E] sm:text-4xl">
                    HOW THE CREW WORKS
                  </h2>
                  <p className="max-w-md text-sm text-[#3B4F68] sm:text-base">
                    Straightforward steps from first site walk to final punch list — no middlemen
                    and no guesswork.
                  </p>
                </div>

                <ol className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                  {PROCESS_STEPS.map((item) => (
                    <li key={item.step}>
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
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="mx-auto max-w-[1440px] px-3 pb-16 pt-8 sm:px-5 lg:px-7"
        >
          <div className="cq-slab-3d-shell">
            <div className="cq-slab-3d-depth">
              <div className="cq-slab-3d-face px-6 py-9 sm:px-10 sm:py-12">
                <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                  <div>
                    <h2 id="contact-heading" className="font-display text-3xl text-[#0D2E5E] sm:text-4xl">
                      READY TO TALK THROUGH YOUR REMODEL?
                    </h2>
                    <p className="mt-3 max-w-[56ch] text-base leading-relaxed text-[#253A54]">
                      Call or email Fields directly, or send your room details through the quote
                      block above. We&apos;ll schedule an Atlanta site walk and put together a clear
                      scope.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3.5">
                      <a href={CONTACT.phoneHref} className="cq-btn-primary px-6 py-3.5 text-xs sm:text-sm">
                        <span>Call {CONTACT.phoneDisplay}</span>
                        <ChevronIcon />
                      </a>
                      <span className="cq-btn-secondary-wrap">
                        <a href={CONTACT.emailHref} className="cq-btn-secondary px-6 py-3.5 text-xs sm:text-sm">
                          Email {CONTACT.email}
                        </a>
                      </span>
                    </div>
                  </div>

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
          </div>
        </section>
      </main>

      <footer className="border-t border-white/15 bg-[#092145] text-[#D7E9FA]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-5 py-7 text-sm sm:flex-row lg:px-7">
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
            <a
              href="/admin"
              onClick={(e) => {
                e.preventDefault()
                onNavigate('/admin')
              }}
              className="text-[#8EB7E0] transition hover:text-white"
            >
              Admin
            </a>
            <span className="text-[#8EB7E0]">© {new Date().getFullYear()} SiteGoons</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

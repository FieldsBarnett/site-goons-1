const services = [
  {
    title: 'Custom Web Platforms',
    detail:
      'Marketing sites, dashboards, and full-stack web apps built around how your team actually works — not the other way around.',
    tag: 'Web',
  },
  {
    title: 'Automation & Integrations',
    detail:
      'Connect your tools, eliminate manual busywork, and build pipelines that keep data flowing without babysitting.',
    tag: 'Ops',
  },
  {
    title: 'Growth-Ready Architecture',
    detail:
      'Foundations that scale with traffic, features, and customers — without a rewrite every six months.',
    tag: 'Scale',
  },
  {
    title: 'AI-Powered Features',
    detail:
      'Practical AI integrations — search, assistants, content tools — wired into your product where they add real value.',
    tag: 'AI',
  },
  {
    title: 'API & Backend Systems',
    detail:
      'Reliable APIs, auth, databases, and background jobs that your frontend (and your partners) can depend on.',
    tag: 'Backend',
  },
  {
    title: 'Ongoing Support & Iteration',
    detail:
      'We stick around after launch — fixes, improvements, and new features shipped on a steady cadence.',
    tag: 'Support',
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery',
    detail: 'We learn your goals, constraints, and what success looks like — no fluff, no 40-page spec.',
  },
  {
    step: '02',
    title: 'Blueprint',
    detail: 'Architecture, timeline, and milestones mapped out so everyone knows what ships when.',
  },
  {
    step: '03',
    title: 'Build',
    detail: 'Iterative development with regular check-ins. You see progress early and often.',
  },
  {
    step: '04',
    title: 'Launch & Beyond',
    detail: 'Deploy, monitor, and keep improving. We treat launch as the starting line, not the finish.',
  },
]

const highlights = [
  { label: 'Direct access', detail: 'Talk to the people writing the code — no account managers in the middle.' },
  { label: 'Fast turnaround', detail: 'MVPs in weeks, not quarters. We move with intent.' },
  { label: 'Clean handoff', detail: 'Documented, tested, and maintainable — your team can own it.' },
]

const CONTACT_EMAIL = 'hello@sitegoons.com'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Ambient background accents */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 39px, #a78bfa 39px, #a78bfa 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #a78bfa 39px, #a78bfa 40px)',
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Nav */}
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
          <a href="/" className="group flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-white transition group-hover:text-violet-300">
              Site<span className="text-violet-400">Goons</span>
            </span>
          </a>
          <div className="flex items-center gap-6">
            <a
              href="#services"
              className="hidden text-sm font-medium text-violet-200/70 transition hover:text-white sm:block"
            >
              Services
            </a>
            <a
              href="#process"
              className="hidden text-sm font-medium text-violet-200/70 transition hover:text-white sm:block"
            >
              Process
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="rounded-lg border border-violet-400/30 bg-violet-500/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500/30"
            >
              Get in Touch
            </a>
          </div>
        </nav>

        {/* Hero */}
        <header className="mx-auto max-w-6xl px-6 pb-16 pt-4 md:px-10 md:pb-24 md:pt-8">
          <div className="relative overflow-hidden rounded-3xl border border-violet-400/25 bg-slate-950/70 p-8 shadow-2xl shadow-violet-950/50 backdrop-blur md:p-14">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-fuchsia-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-56 w-56 rounded-full bg-indigo-500/15 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
                Custom Software Solutions
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
                Your goons build the software.
                <span className="mt-2 block text-violet-300">You run the business.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-violet-100/80 md:text-lg">
                SiteGoons is a development studio that designs and ships custom web platforms,
                automations, and backend systems — fast, clean, and built to last.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Project%20Inquiry`}
                  className="rounded-xl border border-violet-300/40 bg-violet-500/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-500/40"
                >
                  Start a Project
                </a>
                <a
                  href="#services"
                  className="rounded-xl border border-violet-300/25 px-6 py-3 text-sm font-semibold text-violet-200 transition hover:bg-violet-400/10"
                >
                  See What We Build
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Highlights */}
        <section className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-violet-300/15 bg-slate-900/50 px-5 py-4"
              >
                <p className="font-bold text-white">{item.label}</p>
                <p className="mt-1 text-sm text-violet-200/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10">
            <h2 className="text-3xl font-black text-white md:text-4xl">What we build</h2>
            <p className="mt-3 max-w-xl text-violet-200/70">
              End-to-end software — from the landing page to the API layer and everything in between.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-violet-300/15 bg-slate-900/60 p-6 transition hover:border-violet-400/30 hover:bg-slate-900/80"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-violet-400">
                  {service.tag}
                </span>
                <h3 className="mt-2 text-lg font-bold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-violet-100/75">{service.detail}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="process" className="mx-auto max-w-6xl px-6 pb-16 md:px-10 md:pb-20">
          <div className="mb-10">
            <h2 className="text-3xl font-black text-white md:text-4xl">How we work</h2>
            <p className="mt-3 max-w-xl text-violet-200/70">
              A straightforward process — no mystery, no scope creep surprises.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-violet-300/15 bg-slate-900/50 p-6"
              >
                <span className="text-3xl font-black text-violet-500/40">{item.step}</span>
                <h3 className="mt-2 font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-violet-100/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="mx-auto max-w-6xl px-6 pb-20 md:px-10 md:pb-28"
        >
          <div className="relative overflow-hidden rounded-3xl border border-violet-400/25 bg-gradient-to-br from-violet-950/80 to-slate-950/80 p-8 md:p-14">
            <div className="pointer-events-none absolute -right-10 top-0 h-48 w-48 rounded-full bg-fuchsia-500/10 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-black text-white md:text-4xl">
                Ready to build something?
              </h2>
              <p className="mt-4 max-w-lg text-violet-100/80">
                Tell us what you need — a new product, a rebuild, or automation that saves your
                team hours every week. We&apos;ll get back to you within one business day.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Project%20Inquiry`}
                className="mt-8 inline-flex items-center gap-2 rounded-xl border border-violet-300/40 bg-violet-500/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-500/40"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-violet-300/10 py-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-violet-300/50 sm:flex-row md:px-10">
            <p>
              © {new Date().getFullYear()} SiteGoons. All rights reserved.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="transition hover:text-violet-200"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App

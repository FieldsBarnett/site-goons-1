import { useEffect, useRef } from 'react'

/**
 * Animated Cloud Quarry mini-builder (transparent VP9 WebM from fal.ai)
 * standing on a sturdy cel-shaded construction step ladder so his raised hands
 * reach cleanly up to the bottom 3D bevel of the Quote Request slab.
 */
export default function QuoteLevelerGoon({ runId = 0, onNudge, className = '' }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return undefined
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduced || runId === 0) {
      vid.pause()
      return undefined
    }

    // Scrub backwards strictly across the active hand-movement window (0.64s -> 0.0s over 560ms)
    // so his hands move on millisecond 0 with the box, then play forward (0.0s -> 0.66s) in exact sync!
    vid.pause()
    let rafId = null
    let cancelled = false
    const SLIP_MS = 560
    const START_TIME = 0.64
    const startTs = performance.now()

    function stepBackward(now) {
      if (cancelled) return
      const elapsed = now - startTs
      const t = Math.min(1, elapsed / SLIP_MS)
      // Smooth gravity acceleration matching the Quote box's slip curve
      const eased = t * t * (1.2 - 0.2 * t)
      vid.currentTime = Math.max(0, START_TIME * (1 - eased))

      if (t < 1) {
        rafId = window.requestAnimationFrame(stepBackward)
      } else {
        vid.currentTime = 0
        const p = vid.play()
        if (p && typeof p.catch === 'function') p.catch(() => {})
      }
    }

    rafId = window.requestAnimationFrame(stepBackward)

    return () => {
      cancelled = true
      if (rafId != null) window.cancelAnimationFrame(rafId)
    }
  }, [runId])

  return (
    <button
      type="button"
      onClick={onNudge}
      title="Click to nudge the Quote box and watch him level it back"
      aria-label="Replay leveling animation on the Quote Request box"
      className={`group relative flex w-full cursor-pointer flex-col items-center border-0 bg-transparent p-0 focus-visible:outline-2 focus-visible:outline-[#4DA7E6] ${className}`}
    >
      {/* Pristine original transparent VP9 WebM: starts steady (poster), slips to crouch and plays forward smoothly on each cycle */}
      <video
        ref={videoRef}
        src="/videos/goon-leveler.webm"
        poster="/images/goon-leveler-rest.png"
        muted
        playsInline
        preload="auto"
        className="relative z-10 -mb-[14px] block h-auto w-full drop-shadow-[0_4px_6px_rgba(8,28,62,0.24)]"
      />

      {/* Matching bold-ink cel-shaded aluminum & yellow construction step ladder */}
      <svg
        viewBox="0 0 112 78"
        fill="none"
        aria-hidden="true"
        className="relative z-0 block h-auto w-[96%] drop-shadow-[0_6px_8px_rgba(8,28,62,0.28)]"
      >
        {/* Ground contact shadow on the 3D top stone shelf */}
        <ellipse cx="56" cy="73" rx="45" ry="4.5" fill="#092145" opacity="0.28" />

        {/* Back support struts */}
        <path
          d="M28 12 L16 71 L23 71 L34 14 Z"
          fill="#8CA3BC"
          stroke="#1B2432"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <path
          d="M84 12 L96 71 L89 71 L78 14 Z"
          fill="#7B93AE"
          stroke="#1B2432"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />

        {/* Lower horizontal brace */}
        <rect
          x="18"
          y="55"
          width="76"
          height="5.5"
          rx="1.5"
          fill="#CBD5E1"
          stroke="#1B2432"
          strokeWidth="2.4"
        />

        {/* Front A-frame rails (safety yellow) */}
        <path
          d="M22 10 L8 72 L17 72 L30 12 Z"
          fill="#FACC15"
          stroke="#1B2432"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <path
          d="M90 10 L104 72 L95 72 L82 12 Z"
          fill="#EAB308"
          stroke="#1B2432"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />

        {/* Lower-middle aluminum tread step */}
        <rect
          x="15"
          y="41"
          width="82"
          height="7.5"
          rx="2"
          fill="#E2E8F0"
          stroke="#1B2432"
          strokeWidth="2.6"
        />
        <line x1="18" y1="44.5" x2="94" y2="44.5" stroke="#94A3B8" strokeWidth="1.5" />

        {/* Upper-middle aluminum tread step */}
        <rect
          x="18"
          y="24"
          width="76"
          height="7.5"
          rx="2"
          fill="#E2E8F0"
          stroke="#1B2432"
          strokeWidth="2.6"
        />
        <line x1="21" y1="27.5" x2="91" y2="27.5" stroke="#94A3B8" strokeWidth="1.5" />

        {/* Top platform step (where his boots rest!) */}
        <rect
          x="16"
          y="7"
          width="80"
          height="9"
          rx="2.5"
          fill="#F8FAFC"
          stroke="#1B2432"
          strokeWidth="2.6"
        />
        <line x1="19" y1="11.5" x2="93" y2="11.5" stroke="#CBD5E1" strokeWidth="1.8" />

        {/* Rubber non-slip feet */}
        <rect x="6.5" y="69" width="12" height="5" rx="1.5" fill="#273244" stroke="#1B2432" strokeWidth="2" />
        <rect x="93.5" y="69" width="12" height="5" rx="1.5" fill="#273244" stroke="#1B2432" strokeWidth="2" />
      </svg>
    </button>
  )
}

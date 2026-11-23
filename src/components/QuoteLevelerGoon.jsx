import { useEffect, useRef } from 'react'

/**
 * Animated Cloud Quarry mini-builder (transparent VP9 WebM from fal.ai)
 * standing on a sturdy cel-shaded construction step ladder so his raised hands
 * reach cleanly up to the bottom 3D bevel of the Quote Request slab.
 */
export default function QuoteLevelerGoon({ runId = 1, onNudge, className = '' }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      vid.pause()
      return
    }
    try {
      vid.currentTime = 0
      const p = vid.play()
      if (p && typeof p.catch === 'function') p.catch(() => {})
    } catch {
      // ignore autoplay interruptions
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
      {/* Real transparent VP9 WebM video of the mini-builder standing on the top step */}
      <video
        ref={videoRef}
        src="/videos/goon-leveler.webm"
        poster="/images/goon-leveler-rest.png"
        autoPlay
        muted
        playsInline
        preload="auto"
        className="relative z-10 -mb-[14px] block h-auto w-full drop-shadow-[0_4px_6px_rgba(8,28,62,0.24)]"
      />

      {/* Matching bold-ink cel-shaded aluminum & yellow construction step ladder */}
      <svg
        viewBox="0 0 112 58"
        fill="none"
        aria-hidden="true"
        className="relative z-0 block h-auto w-[96%] drop-shadow-[0_6px_8px_rgba(8,28,62,0.28)]"
      >
        {/* Ground contact shadow on the 3D top stone shelf */}
        <ellipse cx="56" cy="53" rx="44" ry="4.5" fill="#092145" opacity="0.28" />

        {/* Back support struts */}
        <path
          d="M27 12 L18 51 L25 51 L33 14 Z"
          fill="#8CA3BC"
          stroke="#1B2432"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <path
          d="M85 12 L94 51 L87 51 L79 14 Z"
          fill="#7B93AE"
          stroke="#1B2432"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />

        {/* Lower horizontal brace */}
        <rect
          x="21"
          y="36"
          width="70"
          height="5.5"
          rx="1.5"
          fill="#CBD5E1"
          stroke="#1B2432"
          strokeWidth="2.4"
        />

        {/* Front A-frame rails (safety yellow) */}
        <path
          d="M22 10 L10 52 L19 52 L30 12 Z"
          fill="#FACC15"
          stroke="#1B2432"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <path
          d="M90 10 L102 52 L93 52 L82 12 Z"
          fill="#EAB308"
          stroke="#1B2432"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />

        {/* Middle aluminum tread step */}
        <rect
          x="18"
          y="25"
          width="76"
          height="7.5"
          rx="2"
          fill="#E2E8F0"
          stroke="#1B2432"
          strokeWidth="2.6"
        />
        <line x1="21" y1="28.5" x2="91" y2="28.5" stroke="#94A3B8" strokeWidth="1.5" />

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
        <rect x="8.5" y="49" width="12" height="5" rx="1.5" fill="#273244" stroke="#1B2432" strokeWidth="2" />
        <rect x="91.5" y="49" width="12" height="5" rx="1.5" fill="#273244" stroke="#1B2432" strokeWidth="2" />
      </svg>
    </button>
  )
}

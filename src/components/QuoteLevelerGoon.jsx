import { useEffect, useRef } from 'react'

/**
 * Animated Cloud Quarry mini-builder rendered as a real transparent VP9 WebM video
 * generated from the user's reference via fal-ai/flux-pro/kontext + Kling I2V.
 * Replays in sync whenever the Quote box leveling animation is triggered.
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
      className={`group relative block w-full cursor-pointer border-0 bg-transparent p-0 focus-visible:outline-2 focus-visible:outline-[#4DA7E6] ${className}`}
    >
      {/* Contact shadow grounding his boots on the 3D top shelf of the slab below */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[3px] left-1/2 h-2.5 w-[70%] -translate-x-1/2 rounded-full bg-[#092145]/30 blur-[2px]"
      />
      <video
        ref={videoRef}
        src="/videos/goon-leveler.webm"
        poster="/images/goon-leveler-rest.png"
        autoPlay
        muted
        playsInline
        preload="auto"
        className="block h-auto w-full drop-shadow-[0_6px_8px_rgba(8,28,62,0.28)]"
      />
    </button>
  )
}

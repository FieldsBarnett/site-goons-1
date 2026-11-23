import { useEffect, useRef } from 'react'

/**
 * Exact measured hardhat/hand elevation (y in px, 24fps) from goon-leveler.webm:
 * - t=0.125s (frame 3): y=84 (deepest crouch -> +3.5deg)
 * - t=0.542s..0.792s (frames 13..19): y=26 (peak push -> -0.75deg overshoot)
 * - t=0.917s+ (frame 22+): y=28 (settled rest -> 0.0deg)
 */
const FRAME_ANGLES = [
  3.25, 3.31, 3.44, 3.5, 3.12, 3.0, 2.75, 2.25,
  1.62, 1.12, 0.88, 0.56, 0.12, -0.55, -0.75, -0.75,
  -0.72, -0.65, -0.52, -0.35, -0.18, -0.06, 0, 0,
]

function angleAtVideoTime(t) {
  const framePos = Math.max(0, Math.min(FRAME_ANGLES.length - 1, t * 24))
  const i0 = Math.floor(framePos)
  const i1 = Math.min(FRAME_ANGLES.length - 1, i0 + 1)
  const frac = framePos - i0
  return FRAME_ANGLES[i0] + (FRAME_ANGLES[i1] - FRAME_ANGLES[i0]) * frac
}

/**
 * Animated Cloud Quarry mini-builder (all-intra transparent VP9 WebM).
 * Drives the Quote Request slab's rotation directly from live video time
 * via requestAnimationFrame so his hands and the block are mathematically locked.
 */
export default function QuoteLevelerGoon({
  runId = 0,
  onTiltChange,
  onCycleDone,
  onNudge,
  className = '',
}) {
  const videoRef = useRef(null)

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return undefined
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduced || runId === 0) {
      vid.pause()
      onTiltChange?.(0)
      return undefined
    }

    vid.pause()
    let rafId = null
    let cancelled = false

    // Phase 1: Smooth gravity slip (backward scrub 0.54s -> 0.125s over 560ms)
    const SLIP_MS = 560
    const SLIP_START_T = 0.54
    const CROUCH_T = 0.125
    const slipStartTs = performance.now()

    function followForward() {
      if (cancelled) return
      const deg = angleAtVideoTime(vid.currentTime)
      onTiltChange?.(deg)
      if (!vid.paused && !vid.ended && vid.currentTime < 1.05) {
        rafId = window.requestAnimationFrame(followForward)
      } else {
        vid.pause()
        onTiltChange?.(0)
        onCycleDone?.()
      }
    }

    function stepBackward(now) {
      if (cancelled) return
      const t = Math.min(1, (now - slipStartTs) / SLIP_MS)
      // Gravity acceleration curve: starts gentle, accelerates into crouch
      const eased = t * t
      const videoT = SLIP_START_T - (SLIP_START_T - CROUCH_T) * eased
      vid.currentTime = videoT
      // Smoothly map 0deg -> +3.5deg directly on the same gravity curve
      onTiltChange?.(3.5 * eased)

      if (t < 1) {
        rafId = window.requestAnimationFrame(stepBackward)
      } else {
        vid.currentTime = CROUCH_T
        vid.playbackRate = 0.72
        const p = vid.play()
        if (p && typeof p.catch === 'function') p.catch(() => {})
        rafId = window.requestAnimationFrame(followForward)
      }
    }

    rafId = window.requestAnimationFrame(stepBackward)

    return () => {
      cancelled = true
      if (rafId != null) window.cancelAnimationFrame(rafId)
    }
  }, [runId, onTiltChange, onCycleDone])

  return (
    <button
      type="button"
      onClick={onNudge}
      title="Click to nudge the Quote box and watch him level it back"
      aria-label="Replay leveling animation on the Quote Request box"
      className={`group relative flex w-full cursor-pointer flex-col items-center overflow-visible border-0 bg-transparent p-0 focus-visible:outline-2 focus-visible:outline-[#4DA7E6] ${className}`}
    >
      <video
        ref={videoRef}
        src="/videos/goon-leveler.webm"
        poster="/images/goon-leveler-rest.png"
        muted
        playsInline
        preload="auto"
        className="relative z-10 -mb-[14px] block h-auto w-full overflow-visible drop-shadow-[0_4px_6px_rgba(8,28,62,0.24)]"
      />

      {/* Matching bold-ink cel-shaded aluminum & yellow construction step ladder */}
      <svg
        viewBox="0 0 112 78"
        fill="none"
        aria-hidden="true"
        className="relative z-0 block h-auto w-[96%] drop-shadow-[0_6px_8px_rgba(8,28,62,0.28)]"
      >
        <ellipse cx="56" cy="73" rx="45" ry="4.5" fill="#092145" opacity="0.28" />
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
        <rect x="6.5" y="69" width="12" height="5" rx="1.5" fill="#273244" stroke="#1B2432" strokeWidth="2" />
        <rect x="93.5" y="69" width="12" height="5" rx="1.5" fill="#273244" stroke="#1B2432" strokeWidth="2" />
      </svg>
    </button>
  )
}

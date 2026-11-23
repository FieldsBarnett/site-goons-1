/**
 * Animated SiteGoons construction crew — illustrated transparent-background
 * raster characters animated with mechanical CSS transforms and geometric overlays.
 */

export function SawCutterGoon({ className = '' }) {
  return (
    <div aria-hidden="true" className={`relative select-none ${className}`}>
      <img
        src="/images/goon-saw-cutter.png"
        alt=""
        width={420}
        height={420}
        loading="eager"
        decoding="async"
        className="goon-saw-motion block h-auto w-full drop-shadow-[0_8px_12px_rgba(13,46,94,0.28)]"
      />
      {/* Crisp geometric metallic sparks at the saw cut edge */}
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="pointer-events-none absolute bottom-[22%] right-[12%] h-6 w-6"
      >
        <polygon className="goon-spark-1" points="16,12 20,4 24,12 20,17" fill="#F4B829" />
        <polygon className="goon-spark-2" points="28,22 33,16 37,23 31,27" fill="#4DA7E6" />
      </svg>
    </div>
  )
}

export function CraneHoistGoon({ isLevel = true, className = '' }) {
  return (
    <div aria-hidden="true" className={`relative select-none ${className}`}>
      <img
        src="/images/goon-crane-level.png"
        alt=""
        width={480}
        height={358}
        loading="eager"
        decoding="async"
        className={`block h-auto w-full drop-shadow-[0_8px_12px_rgba(8,28,62,0.32)] ${
          isLevel ? 'goon-crane-hook' : 'goon-level-adjust'
        }`}
      />
    </div>
  )
}

export function ButtonPainterGoon({ fast = false, className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`relative select-none ${fast ? 'goon-roller-fast' : ''} ${className}`}
    >
      <img
        src="/images/goon-painter.png"
        alt=""
        width={420}
        height={420}
        loading="eager"
        decoding="async"
        className="goon-roller-motion block h-auto w-full drop-shadow-[0_6px_10px_rgba(13,46,94,0.24)]"
      />
    </div>
  )
}

export function BackgroundRollerGoon({ className = '' }) {
  return (
    <div aria-hidden="true" className={`relative select-none ${className}`}>
      <img
        src="/images/goon-painter.png"
        alt=""
        width={420}
        height={420}
        loading="lazy"
        decoding="async"
        className="goon-roller-motion block h-auto w-full drop-shadow-[0_6px_10px_rgba(8,28,62,0.34)]"
      />
    </div>
  )
}

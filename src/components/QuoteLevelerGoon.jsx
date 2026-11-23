/**
 * Articulated minimalist mini-builder modeled directly on the user's Cloud Quarry crop:
 * three-quarter back/side view, blank cool-gray sphere head with tiny side dot eye,
 * glossy yellow hardhat, yellow safety vest, brown leather tool belt with side pouches,
 * steel-blue work pants, chunky dark boots, and bold charcoal-navy ink outlines.
 * Stands on the 3D slab below the Quote box and physically heaves its underside into level.
 */
export default function QuoteLevelerGoon({ leveling = false, onNudge, className = '' }) {
  return (
    <button
      type="button"
      onClick={onNudge}
      title="Click to nudge the Quote box and watch him level it back"
      aria-label="Replay leveling animation on the Quote Request box"
      className={`group relative block cursor-pointer border-0 bg-transparent p-0 focus-visible:outline-2 focus-visible:outline-[#4DA7E6] ${className}`}
    >
      <svg
        viewBox="0 0 118 134"
        fill="none"
        className="block h-auto w-full overflow-visible"
      >
        <defs>
          <linearGradient id="qlHardhat" x1="0.2" y1="0.1" x2="0.85" y2="0.95">
            <stop offset="0%" stopColor="#FFF07C" />
            <stop offset="48%" stopColor="#FACC15" />
            <stop offset="100%" stopColor="#D99B08" />
          </linearGradient>
          <linearGradient id="qlHead" x1="0.15" y1="0.15" x2="0.9" y2="0.95">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="65%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
          <linearGradient id="qlVest" x1="0.15" y1="0.1" x2="0.9" y2="0.95">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="55%" stopColor="#FACC15" />
            <stop offset="100%" stopColor="#CA8A04" />
          </linearGradient>
          <linearGradient id="qlPants" x1="0.2" y1="0" x2="0.9" y2="1">
            <stop offset="0%" stopColor="#7C98B6" />
            <stop offset="100%" stopColor="#4B6684" />
          </linearGradient>
        </defs>

        {/* Ground cast shadow on top of the Services slab */}
        <ellipse
          cx="58"
          cy="126"
          rx="32"
          ry="5.5"
          fill="#0D2E5E"
          opacity="0.24"
        />

        {/* Planted boots — stay glued to the top of the box below */}
        <g>
          {/* Left boot */}
          <path
            d="M34 114 C34 111 37 110 43 110 L50 110 C52 110 53 112 53 115 L53 123 C53 125 51 126 48 126 L36 126 C33 126 32 124 32 121 Z"
            fill="#5C493E"
            stroke="#1B2432"
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          <path d="M33 122 L52 122" stroke="#1B2432" strokeWidth="2.2" />

          {/* Right boot */}
          <path
            d="M62 114 C62 111 65 110 71 110 L80 110 C83 110 85 112 85 116 L85 123 C85 125 83 126 79 126 L65 126 C62 126 61 124 61 121 Z"
            fill="#4F3E34"
            stroke="#1B2432"
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          <path d="M62 122 L84 122" stroke="#1B2432" strokeWidth="2.2" />
        </g>

        {/* Articulated upper body + legs flexing during the physical lift */}
        <g className={leveling ? 'ql-heave-body' : 'ql-idle-body'}>
          {/* Pants / Legs */}
          <path
            d="M37 86 L78 86 L79 113 L64 113 L61 98 L54 98 L51 113 L37 113 Z"
            fill="url(#qlPants)"
            stroke="#1B2432"
            strokeWidth="2.8"
            strokeLinejoin="round"
          />

          {/* Left raised arm pushing upward against underside of Quote box */}
          <g className={leveling ? 'ql-heave-arms' : ''}>
            <path
              d="M39 62 C26 56 23 39 27 21"
              stroke="#1B2432"
              strokeWidth="15"
              strokeLinecap="round"
            />
            <path
              d="M39 62 C26 56 23 39 27 21"
              stroke="#94A3B8"
              strokeWidth="9.5"
              strokeLinecap="round"
            />
            {/* Left glove pressed flat upward */}
            <rect
              x="18"
              y="11"
              width="19"
              height="12"
              rx="5.5"
              fill="#B8C5D4"
              stroke="#1B2432"
              strokeWidth="2.6"
            />

            {/* Right raised arm pushing upward against underside of Quote box */}
            <path
              d="M78 62 C91 56 94 39 90 21"
              stroke="#1B2432"
              strokeWidth="15"
              strokeLinecap="round"
            />
            <path
              d="M78 62 C91 56 94 39 90 21"
              stroke="#8697AB"
              strokeWidth="9.5"
              strokeLinecap="round"
            />
            {/* Right glove pressed flat upward */}
            <rect
              x="80"
              y="11"
              width="19"
              height="12"
              rx="5.5"
              fill="#B8C5D4"
              stroke="#1B2432"
              strokeWidth="2.6"
            />

            {/* Wooden carpenter's shim / level bar held across both hands pressing the slab up */}
            <rect
              x="15"
              y="5"
              width="88"
              height="8.5"
              rx="2"
              fill="#FACC15"
              stroke="#1B2432"
              strokeWidth="2.4"
            />
            {/* Tiny live level bubble window on the bar */}
            <rect
              x="49"
              y="6.8"
              width="20"
              height="5"
              rx="1.5"
              fill={leveling ? '#FEF3C7' : '#DCFCE7'}
              stroke="#1B2432"
              strokeWidth="1.4"
            />
            <circle
              cx={leveling ? 54 : 59}
              cy="9.3"
              r="2"
              fill={leveling ? '#D97706' : '#15803D'}
              style={{ transition: 'cx 320ms ease, fill 240ms ease' }}
            />
          </g>

          {/* Torso — Yellow Safety Vest (three-quarter back view like reference) */}
          <path
            d="M36 56 C36 52 40 50 45 50 L72 50 C77 50 81 52 81 56 L83 84 C83 87 80 89 76 89 L41 89 C37 89 34 87 34 84 Z"
            fill="url(#qlVest)"
            stroke="#1B2432"
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          {/* Subtle reflective vest horizontal stripe */}
          <rect
            x="35.5"
            y="71"
            width="46"
            height="6"
            fill="#FEF9C3"
            opacity="0.85"
          />

          {/* Brown Leather Tool Belt + Side Pouches */}
          <rect
            x="33.5"
            y="80"
            width="50"
            height="7.5"
            rx="2"
            fill="#8C6239"
            stroke="#1B2432"
            strokeWidth="2.4"
          />
          {/* Left pouch */}
          <rect
            x="28"
            y="82"
            width="11"
            height="15"
            rx="3"
            fill="#C08C52"
            stroke="#1B2432"
            strokeWidth="2.4"
          />
          {/* Right chunky pouch */}
          <rect
            x="66"
            y="82"
            width="15"
            height="16"
            rx="3"
            fill="#B58046"
            stroke="#1B2432"
            strokeWidth="2.4"
          />
          <line x1="69" y1="87" x2="78" y2="87" stroke="#1B2432" strokeWidth="1.8" />

          {/* Smooth Blank Cool-Gray Sphere Head (three-quarter back/side with tiny side dot eye) */}
          <circle
            cx="58"
            cy="39"
            r="16.5"
            fill="url(#qlHead)"
            stroke="#1B2432"
            strokeWidth="2.8"
          />
          {/* Tiny side dot eye peeking right, matching the reference crop */}
          <circle cx="70.5" cy="39" r="1.8" fill="#1B2432" />

          {/* Glossy Yellow Hardhat */}
          <path
            d="M39 36 C39 22 47 16 58 16 C69 16 76 22 76 34 Z"
            fill="url(#qlHardhat)"
            stroke="#1B2432"
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          {/* Hardhat center ridge */}
          <path
            d="M54 16.5 C57 16 61 16.5 63 18.5 L62 29 L53 29 Z"
            fill="#FEF08A"
            opacity="0.7"
          />
          {/* Hardhat brim angled slightly up as he looks up at the Quote box */}
          <path
            d="M36 35.5 C46 31 66 30 81 33.5 C83 34 83 36.5 80 37.5 C66 35.5 47 36.5 37 38.5 C35 39 34 36.5 36 35.5 Z"
            fill="#FACC15"
            stroke="#1B2432"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </button>
  )
}

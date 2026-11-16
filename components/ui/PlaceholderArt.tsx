/**
 * A brand-owned line-art visual system standing in for real photography.
 * Grounded in the subject: optical precision — lens curves, a measurement
 * grid, and fine hairlines rather than generic stock imagery or icons.
 * Swap any of these for real store/product photography when it's ready;
 * each is a self-contained SVG so replacing it is a one-line change.
 */

export function HeroVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 640"
      className={className}
      role="img"
      aria-label="Illustration of a pair of glasses over a precision measurement grid"
    >
      <defs>
        <linearGradient id="heroBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EEF1F5" />
          <stop offset="100%" stopColor="#E4E9F1" />
        </linearGradient>
        <linearGradient id="lensTint" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2F6FED" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#2F6FED" stopOpacity="0.04" />
        </linearGradient>
      </defs>

      <rect width="640" height="640" rx="24" fill="url(#heroBg)" />

      {/* measurement grid */}
      <g stroke="#0D1220" strokeOpacity="0.06" strokeWidth="1">
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`v${i}`} x1={60 + i * 52} y1="40" x2={60 + i * 52} y2="600" />
        ))}
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`h${i}`} x1="40" y1={60 + i * 52} x2="600" y2={60 + i * 52} />
        ))}
      </g>

      {/* tick marks along top */}
      <g stroke="#0D1220" strokeOpacity="0.25" strokeWidth="1.5">
        {Array.from({ length: 21 }).map((_, i) => (
          <line key={`t${i}`} x1={60 + i * 26} y1="34" x2={60 + i * 26} y2="44" />
        ))}
      </g>

      {/* glasses */}
      <g transform="translate(70,260)" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="150" cy="90" r="108" fill="url(#lensTint)" stroke="#0D1220" strokeWidth="4" />
        <circle cx="360" cy="90" r="108" fill="url(#lensTint)" stroke="#0D1220" strokeWidth="4" />
        <path d="M258 78c14-22 40-22 54 0" stroke="#0D1220" strokeWidth="4" />
        <path d="M42 60 4 40" stroke="#0D1220" strokeWidth="4" />
        <path d="M468 60l40-20" stroke="#0D1220" strokeWidth="4" />
        <circle cx="150" cy="90" r="60" fill="none" stroke="#2F6FED" strokeOpacity="0.5" strokeWidth="1.5" />
        <circle cx="360" cy="90" r="60" fill="none" stroke="#2F6FED" strokeOpacity="0.5" strokeWidth="1.5" />
      </g>

      {/* corner coordinate labels — decorative, communicates precision */}
      <text x="52" y="30" fontSize="11" fill="#0D1220" opacity="0.35" fontFamily="monospace">
        01
      </text>
      <text x="580" y="620" fontSize="11" fill="#0D1220" opacity="0.35" fontFamily="monospace">
        BX·WF
      </text>
    </svg>
  );
}

export function LensSweep({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="sweep" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#2F6FED" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#2F6FED" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#sweep)" />
      <circle cx="200" cy="150" r="90" fill="none" stroke="#0D1220" strokeOpacity="0.12" strokeWidth="1.5" />
      <circle cx="200" cy="150" r="55" fill="none" stroke="#0D1220" strokeOpacity="0.18" strokeWidth="1.5" />
      <line x1="200" y1="30" x2="200" y2="270" stroke="#0D1220" strokeOpacity="0.08" />
      <line x1="80" y1="150" x2="320" y2="150" stroke="#0D1220" strokeOpacity="0.08" />
    </svg>
  );
}

export function StoreScene({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 480" className={className} role="img" aria-label="Illustration of an optical store display of frames">
      <defs>
        <linearGradient id="storeBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0D1220" />
          <stop offset="100%" stopColor="#1B2A4A" />
        </linearGradient>
      </defs>
      <rect width="640" height="480" rx="20" fill="url(#storeBg)" />
      {/* shelf lines */}
      <g stroke="#FAF7F1" strokeOpacity="0.14">
        <line x1="60" y1="160" x2="580" y2="160" />
        <line x1="60" y1="280" x2="580" y2="280" />
        <line x1="60" y1="400" x2="580" y2="400" />
      </g>
      {/* frame silhouettes on shelves */}
      {[
        [130, 150],
        [270, 150],
        [410, 150],
        [530, 150],
        [190, 270],
        [340, 270],
        [470, 270],
        [140, 390],
        [300, 390],
        [460, 390],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x},${y})`} fill="none" stroke="#FAF7F1" strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round">
          <circle cx="-16" cy="0" r="15" />
          <circle cx="16" cy="0" r="15" />
          <path d="M-1 -3c2-4 2-4 2 0" />
        </g>
      ))}
      <circle cx="320" cy="240" r="3" fill="#2F6FED" />
    </svg>
  );
}

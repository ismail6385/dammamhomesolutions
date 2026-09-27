export default function PropertyHeroVisual() {
  return (
    <svg
      viewBox="0 0 420 460"
      className="h-auto w-full max-w-sm"
      role="img"
      aria-labelledby="property-hero-visual-title"
    >
      <title id="property-hero-visual-title">
        An architectural overview of a Dammam property with small
        inspection-style markers over the AC unit, a water fixture, an
        electrical point, a wall surface and a door — the systems a
        property accumulates wear across
      </title>

      <rect x="0" y="0" width="420" height="460" rx="20" fill="#232821" />

      {/* building outline */}
      <path d="M40 200 L210 90 L380 200 V420 H40 Z" fill="none" stroke="#4a5142" strokeWidth="2" />
      <rect x="80" y="240" width="80" height="90" fill="none" stroke="#4a5142" strokeWidth="1.4" />
      <rect x="200" y="240" width="140" height="60" fill="none" stroke="#4a5142" strokeWidth="1.4" />
      <rect x="200" y="320" width="60" height="60" fill="none" stroke="#4a5142" strokeWidth="1.4" />

      {/* markers */}
      {[
        { x: 300, y: 140, label: "AC" },
        { x: 220, y: 260, label: "Water" },
        { x: 320, y: 260, label: "Electrical" },
        { x: 120, y: 270, label: "Wall" },
        { x: 230, y: 350, label: "Door" },
      ].map((m) => (
        <g key={m.label} transform={`translate(${m.x},${m.y})`}>
          <circle r="4" fill="#8a9a6b" />
          <circle r="10" fill="none" stroke="#8a9a6b" strokeWidth="1.2" strokeDasharray="2 3">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3.2s" repeatCount="indefinite" />
          </circle>
          <text x="16" y="4" fontSize="11" fill="#c9d1bb" fontFamily="var(--font-poppins), sans-serif">
            {m.label}
          </text>
        </g>
      ))}

      <g fontFamily="var(--font-poppins), sans-serif" fontSize="11" fill="#8b9280">
        <text x="40" y="440">property overview — not a completed inspection</text>
      </g>
    </svg>
  );
}

import { projectArtwork } from "@/data/projectArtwork";

export default function ProjectArtwork({ project }) {
  const artwork = projectArtwork[project.id];
  const gradientId = `art-${project.id}`;
  return (
    <div className="project-artwork" aria-hidden="true">
      <div className="artwork-label mono">
        <span />
        {artwork.label}
      </div>
      <svg viewBox="0 0 360 180" fill="none" className="project-illustration">
        <defs>
          <linearGradient
            id={gradientId}
            x1="50"
            y1="10"
            x2="300"
            y2="170"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="currentColor" stopOpacity=".22" />
            <stop offset="1" stopColor="currentColor" stopOpacity=".02" />
          </linearGradient>
        </defs>
        <ellipse
          cx="180"
          cy="100"
          rx="130"
          ry="62"
          stroke="currentColor"
          strokeOpacity=".15"
          strokeDasharray="3 8"
        />
        <path
          d="M35 100h75m140 0h75M180 25v25m0 100v25"
          stroke="currentColor"
          strokeOpacity=".3"
        />
        {[45, 315].map((x) => (
          <g key={x}>
            <rect
              x={x - 15}
              y="85"
              width="30"
              height="30"
              rx="8"
              fill={`url(#${gradientId})`}
              stroke="currentColor"
              strokeOpacity=".4"
            />
            <circle cx={x} cy="100" r="4" fill="currentColor" />
          </g>
        ))}
        <path
          d={artwork.outline}
          fill={`url(#${gradientId})`}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d={artwork.detail}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="artwork-caption mono">
        {project.tags.slice(0, 3).join(" / ")}
        <span>↗︎</span>
      </div>
    </div>
  );
}

// Draws a left-to-right node chain, used when a workflow has no screenshot or video.
export default function FlowPreview({ nodes }: { nodes: string[] }) {
  const gap = 132;
  const size = 56;
  const width = nodes.length * gap;
  const height = 150;
  const y = 44;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-full w-full"
      role="img"
      aria-label={`Workflow: ${nodes.join(" → ")}`}
    >
      <defs>
        <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="var(--line)" />
        </pattern>
      </defs>
      <rect width={width} height={height} fill="url(#dots)" />
      {nodes.map((label, i) => {
        const x = i * gap + (gap - size) / 2;
        const isTrigger = i === 0;
        return (
          <g key={`${label}-${i}`}>
            {i < nodes.length - 1 && (
              <path
                d={`M ${x + size} ${y + size / 2} C ${x + size + 30} ${y + size / 2}, ${x + gap - 30} ${y + size / 2}, ${x + gap} ${y + size / 2}`}
                stroke="var(--muted)"
                strokeWidth="2"
                fill="none"
              />
            )}
            <rect
              x={x}
              y={y}
              width={size}
              height={size}
              rx={isTrigger ? 28 : 10}
              fill="var(--surface)"
              stroke={isTrigger ? "var(--accent)" : "var(--muted)"}
              strokeWidth="2"
            />
            <text
              x={x + size / 2}
              y={y + size / 2 + 6}
              textAnchor="middle"
              fontSize="18"
              fontWeight="700"
              fill={isTrigger ? "var(--accent)" : "var(--ink)"}
            >
              {label.charAt(0)}
            </text>
            <text
              x={x + size / 2}
              y={y + size + 24}
              textAnchor="middle"
              fontSize="13"
              fill="var(--ink-soft)"
            >
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/**
 * Simple SVG icons for the wedding day timeline.
 * Each icon is a minimal line drawing to match the reference theme.
 */

interface TimelineIconProps {
  name: string;
  className?: string;
}

/** Returns an inline SVG matching the given icon name */
export default function TimelineIcon({ name, className = "" }: TimelineIconProps) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "rings":
      return (
        <svg {...props}>
          {/* Two interlocking rings */}
          <circle cx="9" cy="12" r="5" />
          <circle cx="15" cy="12" r="5" />
        </svg>
      );

    case "champagne":
      return (
        <svg {...props}>
          {/* Champagne glass */}
          <path d="M8 2h8l-2 8H10L8 2z" />
          <line x1="12" y1="10" x2="12" y2="18" />
          <line x1="8" y1="18" x2="16" y2="18" />
          {/* Bubbles */}
          <circle cx="14" cy="4" r="0.5" fill="currentColor" />
          <circle cx="11" cy="5" r="0.5" fill="currentColor" />
        </svg>
      );

    case "cake":
      return (
        <svg {...props}>
          {/* Tiered cake */}
          <rect x="6" y="14" width="12" height="6" rx="1" />
          <rect x="8" y="9" width="8" height="5" rx="1" />
          <rect x="10" y="5" width="4" height="4" rx="1" />
          {/* Candle */}
          <line x1="12" y1="3" x2="12" y2="5" />
          <circle cx="12" cy="2.5" r="0.7" fill="currentColor" />
        </svg>
      );

    case "dinner":
      return (
        <svg {...props}>
          {/* Plate and utensils */}
          <circle cx="12" cy="13" r="6" />
          <circle cx="12" cy="13" r="3" />
          <line x1="4" y1="8" x2="4" y2="20" />
          <line x1="20" y1="8" x2="20" y2="20" />
        </svg>
      );

    case "party":
      return (
        <svg {...props}>
          {/* Music notes */}
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      );

    case "hometime":
      return (
        <svg {...props}>
          {/* House */}
          <path d="M3 12l9-8 9 8" />
          <path d="M5 12v7a1 1 0 001 1h12a1 1 0 001-1v-7" />
          <rect x="9" y="14" width="6" height="6" />
        </svg>
      );

    case "brunch":
      return (
        <svg {...props}>
          {/* Coffee cup - placeholder */}
          <path d="M4 8h14v8a4 4 0 01-4 4h-6a4 4 0 01-4-4V8z" />
          <path d="M18 10h2a2 2 0 012 2v1a2 2 0 01-2 2h-2" />
          <line x1="8" y1="4" x2="8" y2="6" />
          <line x1="12" y1="4" x2="12" y2="6" />
          <line x1="16" y1="4" x2="16" y2="6" />
        </svg>
      );

    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="6" />
        </svg>
      );
  }
}

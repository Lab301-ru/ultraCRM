export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* blue accent triangle (peak) */}
      <path d="M20 9 L29 33 L20 33 Z" fill="#5B7CFA" />
      {/* coral left bar */}
      <rect
        x="5.5"
        y="8"
        width="8.6"
        height="27"
        rx="4.3"
        transform="rotate(-22 9.8 21.5)"
        fill="#FB5C4C"
      />
      {/* orange right bar */}
      <rect
        x="22.5"
        y="6.5"
        width="8.6"
        height="22"
        rx="4.3"
        transform="rotate(20 26.8 17.5)"
        fill="#FBB040"
      />
      {/* green dot */}
      <circle cx="27" cy="31.5" r="4.6" fill="#3FC56B" />
    </svg>
  );
}

export function Logo({
  className = "",
  wordmark = true,
  light = false,
}: {
  className?: string;
  wordmark?: boolean;
  light?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark className="h-8 w-8 shrink-0" />
      {wordmark && (
        <span className="text-[1.35rem] font-extrabold tracking-tight font-display">
          <span className={light ? "text-white" : "text-ink"}>Ultra</span>
          <span className="gradient-text">CRM</span>
        </span>
      )}
    </span>
  );
}

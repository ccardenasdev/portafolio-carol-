import type { ReactNode } from "react";

const icons: Record<string, ReactNode> = {
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
      <path d="M8 3v4M16 3v4M3.5 10h17" />
    </>
  ),
  code: <path d="M9 8 4.5 12.5 9 17M15 8l4.5 4.5L15 17" />,
  star: (
    <path d="M12 3.5 14.4 9.6 21 10.2l-5 4.3 1.6 6.5L12 17.5 6.4 21l1.6-6.5-5-4.3 6.6-.6L12 3.5Z" />
  ),
  cross: <path d="M12 3.5v17M6 9h12" />,
  plane: <path d="M21 3 3 10.5l7 2.5m11-10L13.5 21l-2.5-8" />,
  leaf: (
    <path d="M5 19c8-.5 13-5.5 13.5-13.5C9.5 6 5 11 5 19ZM5 19c1-3 3-5.5 6-7.5" />
  ),
  book: (
    <path d="M12 6.5c-1.8-1.4-4.3-2-7-2v13c2.7 0 5.2.6 7 2 1.8-1.4 4.3-2 7-2v-13c-2.7 0-5.2.6-7 2ZM12 6.5v13" />
  ),
  sparkle: (
    <path d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" />
  ),
  chart: <path d="M4 20V10M11 20V4M18 20v-7M3 20h18" />,
  rocket: (
    <path d="M12 15c3.5-2 5-6 4.5-10.5C12 4 8 5.5 6 9c-1 2-1 4 0 6l1.5 1.5c2 1 4 1 6 0L15 15M6 15l-2.5 2.5M9 18l-2.5 2.5M9.5 9.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z" />
  ),
  puzzle: (
    <path d="M9 4.5h4a1.5 1.5 0 0 1 0 3 1.5 1.5 0 0 0 0 3h4v4a1.5 1.5 0 0 1-3 0 1.5 1.5 0 0 0-3 0v4H7a1.5 1.5 0 0 1 0-3H5a1.5 1.5 0 0 1 0-3h2v-4a1.5 1.5 0 0 1 2-1.5Z" />
  ),
  paw: (
    <>
      <circle cx="7" cy="8" r="1.6" />
      <circle cx="12" cy="6" r="1.6" />
      <circle cx="17" cy="8" r="1.6" />
      <path d="M12 12c-3.3 0-5.5 2-5.5 4.3 0 1.6 1.3 2.7 3 2.7.9 0 1.6-.4 2.5-.4s1.6.4 2.5.4c1.7 0 3-1.1 3-2.7C17.5 14 15.3 12 12 12Z" />
    </>
  ),
  check: <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />,
  crown: (
    <path d="M4 18h16l1-9-5 3.5L12 5 8 12.5 3 9l1 9Z" />
  ),
  shield: (
    <path d="M12 3.5 19 6v6c0 4.5-3 7-7 8.5-4-1.5-7-4-7-8.5V6l7-2.5Z" />
  ),
  spark: <path d="M13 2 5 14h6l-1 8 9-13h-6l0-7Z" />,
  heart: (
    <path d="M12 20s-7.5-4.6-9.8-9.4C.6 6.9 2.6 4 5.7 4c1.9 0 3.4 1 4.3 2.5C11 5 12.4 4 14.3 4c3.1 0 5.1 2.9 3.5 6.6C15.5 15.4 12 20 12 20Z" />
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2.5v3M12 18.5v3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M2.5 12h3M18.5 12h3M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1" />
    </>
  ),
  chat: (
    <path d="M4 5.5h16v10H9l-4 3.5v-3.5H4v-10Z" />
  ),
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  download: <path d="M12 3.5v11m0 0 4-4m-4 4-4-4M5 19.5h14" />,
  play: <path d="M7 4.5v15l13-7.5-13-7.5Z" />,
  prev: <path d="M17.5 4.5v15L6 12l11.5-7.5Z" />,
  next: <path d="M6.5 4.5v15L18 12 6.5 4.5Z" />,
  close: <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
};

export function UiIcon({
  name,
  className,
  filled = false,
}: {
  name: keyof typeof icons | string;
  className?: string;
  filled?: boolean;
}) {
  const shape = icons[name];
  if (!shape) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {shape}
    </svg>
  );
}

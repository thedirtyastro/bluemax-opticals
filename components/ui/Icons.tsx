type Props = { className?: string };

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PhoneIcon({ className = "h-5 w-5" }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M4 5c0-.6.4-1 1-1h2.6c.5 0 .9.3 1 .8l.8 3.3c.1.4 0 .8-.3 1.1L7.8 10.5a13 13 0 0 0 5.7 5.7l1.3-1.3c.3-.3.7-.4 1.1-.3l3.3.8c.5.1.8.5.8 1V19c0 .6-.4 1-1 1h-1C10.5 20 4 13.5 4 6V5Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M6.5 17.5 4 20l2.6-.7A8 8 0 1 0 4 12a8 8 0 0 0 2.5 5.5Z" />
      <path d="M9 9.8c0-.4.3-.8.7-.8h.6c.3 0 .6.2.7.5l.5 1.4c.1.3 0 .6-.2.8l-.5.5a5.5 5.5 0 0 0 2.6 2.6l.5-.5c.2-.2.5-.3.8-.2l1.4.5c.3.1.5.4.5.7v.6c0 .4-.4.7-.8.7-3 0-6.8-3.8-6.8-6.8Z" />
    </svg>
  );
}

export function PinIcon({ className = "h-5 w-5" }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 1 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

export function CalendarIcon({ className = "h-5 w-5" }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <rect x="4" y="5.5" width="16" height="15" rx="1.5" />
      <path d="M8 3.5v4M16 3.5v4M4 10h16" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "h-5 w-5" }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "h-4 w-4" }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function GlassesIcon({ className = "h-6 w-6" }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <circle cx="6" cy="14" r="3.2" />
      <circle cx="18" cy="14" r="3.2" />
      <path d="M9.2 13.2c.4-2.4 1.6-3.6 2.8-3.6s2.4 1.2 2.8 3.6M2.8 13.5 4.5 9c.3-.7.9-1 1.6-1M21.2 13.5 19.5 9c-.3-.7-.9-1-1.6-1" />
    </svg>
  );
}

export function SunIcon({ className = "h-6 w-6" }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 3v2.2M12 18.8V21M4.2 12H6.5M17.5 12h2.3M6 6l1.6 1.6M16.4 16.4 18 18M18 6l-1.6 1.6M7.6 16.4 6 18" />
    </svg>
  );
}

export function DropletIcon({ className = "h-6 w-6" }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M12 3.5s6 6.7 6 11a6 6 0 1 1-12 0c0-4.3 6-11 6-11Z" />
    </svg>
  );
}

export function LayersIcon({ className = "h-6 w-6" }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
      <path d="m4 12 8 4.5 8-4.5M4 16.5 12 21l8-4.5" />
    </svg>
  );
}

export function MonitorIcon({ className = "h-6 w-6" }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <rect x="3.5" y="5" width="17" height="11" rx="1.2" />
      <path d="M9 20h6M12 16v4" />
    </svg>
  );
}

export function KidsIcon({ className = "h-6 w-6" }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <circle cx="12" cy="7" r="3" />
      <path d="M6 21v-4a6 6 0 0 1 12 0v4" />
    </svg>
  );
}

export function StarIcon({ className = "h-4 w-4" }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.8L12 3.5Z" />
    </svg>
  );
}

export function CloseIcon({ className = "h-5 w-5" }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function CheckIcon({ className = "h-5 w-5" }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="m5 12 5 5L19 7" />
    </svg>
  );
}

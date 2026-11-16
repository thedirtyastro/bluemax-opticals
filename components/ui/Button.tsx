import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-transform duration-200 ease-out active:scale-[0.97] whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-ivory hover:bg-cobalt",
  secondary:
    "bg-transparent text-ink border border-ink/25 hover:border-cobalt hover:text-cobalt",
  light: "bg-ivory text-ink hover:bg-cobalt hover:text-ivory",
  ghost: "bg-transparent text-ink underline underline-offset-4 decoration-ink/30 hover:decoration-cobalt hover:text-cobalt px-2 py-1",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon,
  external,
  onClick,
  type = "button",
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {icon}
      {children}
    </button>
  );
}

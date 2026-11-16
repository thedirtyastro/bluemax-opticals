"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { business } from "@/lib/constants";
import { PhoneIcon } from "./ui/Icons";

const links = [
  { href: "#find-your-frame", label: "Eyewear" },
  { href: "#eye-care", label: "Eye Care" },
  { href: "#lens-guide", label: "Lens Guide" },
  { href: "#reviews", label: "Reviews" },
  { href: "#location", label: "Visit Us" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-ivory/90 backdrop-blur-md shadow-hairline"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-content items-center justify-between px-6 py-4 md:px-10">
        <Link href="#top" className="font-display text-lg font-bold tracking-tight text-ink">
          Bluemax<span className="text-cobalt">.</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm text-charcoal/80 transition-colors hover:text-cobalt"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={business.phoneHref}
          className="hidden items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-cobalt hover:text-cobalt md:inline-flex"
        >
          <PhoneIcon className="h-4 w-4" />
          {business.phone}
        </Link>

        <Link
          href="#enquiry"
          className="inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-ivory transition-colors hover:bg-cobalt md:hidden"
        >
          Book
        </Link>
      </nav>
    </header>
  );
}

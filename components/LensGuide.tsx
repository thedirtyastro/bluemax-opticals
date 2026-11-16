"use client";

import { useState } from "react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { ChevronDownIcon } from "./ui/Icons";

const lenses = [
  {
    key: "single",
    title: "Single Vision",
    purpose: "Corrects one field of vision — near or distance.",
    considerations: "The most common lens type, suited to a single, consistent prescription need.",
  },
  {
    key: "progressive",
    title: "Progressive",
    purpose: "Combines near, intermediate and distance correction in one lens, without a visible line.",
    considerations: "Suited to presbyopia; usually involves a short adjustment period.",
  },
  {
    key: "bifocal",
    title: "Bifocal",
    purpose: "Two distinct zones for near and distance vision, divided by a visible line.",
    considerations: "A more defined transition between zones than a progressive lens.",
  },
  {
    key: "computer",
    title: "Computer / Digital",
    purpose: "Optimised for intermediate, screen-length distances.",
    considerations: "Worth considering if you spend long hours on a laptop or monitor.",
  },
  {
    key: "antiglare",
    title: "Anti-Glare",
    purpose: "A coating that reduces reflections on the lens surface.",
    considerations: "Can make screens and night driving more comfortable — ask us for specifics.",
  },
  {
    key: "sunglasses",
    title: "Sunglasses",
    purpose: "Tinted lenses for outdoor light and glare.",
    considerations: "Available with or without a prescription — worth discussing your usage.",
  },
];

export default function LensGuide() {
  const [open, setOpen] = useState<string | null>("single");

  return (
    <section id="lens-guide" className="border-t border-ink/8 py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-bold tracking-tightest text-ink md:text-5xl">
              Which lens is right for you?
            </h2>
            <p className="mt-4 text-lg text-charcoal/75">
              A short guide to help you understand your options before you
              visit — we'll help you narrow it down in person.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {lenses.map((lens, i) => {
            const isOpen = open === lens.key;
            return (
              <Reveal key={lens.key} delay={i * 40}>
                <div>
                  <button
                    onClick={() => setOpen(isOpen ? null : lens.key)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-lg font-bold text-ink md:text-xl">
                      {lens.title}
                    </span>
                    <ChevronDownIcon
                      className={`h-5 w-5 shrink-0 text-ink/60 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] pb-7 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 grid gap-3 sm:grid-cols-2 sm:gap-8">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wideish text-optical">
                          Best suited for
                        </p>
                        <p className="mt-2 text-charcoal/75">{lens.purpose}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wideish text-optical">
                          Worth considering
                        </p>
                        <p className="mt-2 text-charcoal/75">{lens.considerations}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

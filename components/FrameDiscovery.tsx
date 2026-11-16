"use client";

import { useState } from "react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { LensSweep } from "./ui/PlaceholderArt";
import { PinIcon } from "./ui/Icons";
import { business } from "@/lib/constants";

const shapes = [
  { key: "round", label: "Round", note: "Soft curves that balance more angular face shapes." },
  { key: "square", label: "Square", note: "Strong, defined lines for a bold, structured look." },
  { key: "rectangle", label: "Rectangle", note: "A clean, classic shape that suits most face shapes." },
  { key: "oval", label: "Oval", note: "A balanced, versatile shape that sits close to your natural brow line." },
  { key: "cat-eye", label: "Cat-Eye", note: "An upswept outer edge for a distinct, fashion-forward look." },
  { key: "rimless", label: "Rimless", note: "A light, minimal frame that lets the lenses stand on their own." },
  { key: "full-rim", label: "Full-Rim", note: "A complete frame edge for durability and a defined look." },
  { key: "half-rim", label: "Half-Rim", note: "Rimmed on top, open below — a lighter take on a full frame." },
];

export default function FrameDiscovery() {
  const [active, setActive] = useState(shapes[0].key);
  const current = shapes.find((s) => s.key === active)!;

  return (
    <section className="border-t border-ink/8 bg-mist/50 py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <div>
              <h2 className="font-display text-4xl font-bold tracking-tightest text-ink md:text-5xl">
                What suits your style?
              </h2>
              <p className="mt-4 max-w-md text-lg text-charcoal/75">
                Explore frame shapes to get a feel for what suits you — then
                try them on in person.
              </p>

              <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-2">
                {shapes.map((s) => (
                  <button
                    key={s.key}
                    onClick={() => setActive(s.key)}
                    className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                      active === s.key
                        ? "border-ink bg-ink text-ivory"
                        : "border-ink/15 text-ink hover:border-ink/40"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              <p key={current.key} className="mt-6 max-w-sm text-charcoal/70">
                {current.note}
              </p>

              <Button
                href={business.mapsDirectionsHref}
                external
                className="mt-7"
                icon={<PinIcon className="h-4 w-4" />}
              >
                Visit store to explore frames
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
              <LensSweep className="w-full" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

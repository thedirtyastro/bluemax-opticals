"use client";

import { useState } from "react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import {
  GlassesIcon,
  SunIcon,
  DropletIcon,
  LayersIcon,
  MonitorIcon,
  KidsIcon,
  ArrowRightIcon,
} from "./ui/Icons";
import { business } from "@/lib/constants";

const categories = [
  {
    key: "everyday",
    label: "Everyday Eyeglasses",
    icon: GlassesIcon,
    who: "Anyone who wears prescription glasses through the day, at work, at home or on the move.",
    consider: "Frame fit, weight and lens coatings that hold up to daily wear.",
    cta: "Ask about everyday eyeglasses",
  },
  {
    key: "sunglasses",
    label: "Sunglasses",
    icon: SunIcon,
    who: "For everyday sun protection, driving, or a finishing touch to your look.",
    consider: "Lens tint, UV protection and whether you need a prescription pair.",
    cta: "Ask about sunglasses",
  },
  {
    key: "contacts",
    label: "Contact Lenses",
    icon: DropletIcon,
    who: "Those who prefer an unobstructed field of view, sports, or an alternative to frames.",
    consider: "Wear schedule, comfort and getting the right fit for your eyes.",
    cta: "Ask about contact lenses",
  },
  {
    key: "progressive",
    label: "Progressive",
    icon: LayersIcon,
    who: "People who need correction for near, intermediate and distance vision in one lens.",
    consider: "Adjustment period and choosing a design suited to your routine.",
    cta: "Ask about progressive lenses",
  },
  {
    key: "computer",
    label: "Computer / Digital",
    icon: MonitorIcon,
    who: "For long hours in front of screens — laptops, monitors and devices.",
    consider: "Lens design for intermediate distance and reducing digital strain.",
    cta: "Ask about computer lenses",
  },
  {
    key: "kids",
    label: "Kids",
    icon: KidsIcon,
    who: "Children who need vision correction for school, reading or play.",
    consider: "Durable frames, comfortable fit and easy-to-manage lenses.",
    cta: "Ask about eyewear for kids",
  },
];

export default function FindYourFrame() {
  const [active, setActive] = useState(categories[0].key);
  const current = categories.find((c) => c.key === active)!;

  return (
    <section id="find-your-frame" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="max-w-xl">
            <h2 className="font-display text-4xl font-bold tracking-tightest text-ink md:text-5xl">
              Find your frame.
            </h2>
            <p className="mt-4 text-lg text-charcoal/75">
              Different faces. Different lifestyles. One frame that feels
              right.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.key === active;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  aria-pressed={isActive}
                  className={`flex items-center gap-4 rounded-xl border px-5 py-5 text-left transition-colors ${
                    isActive
                      ? "border-cobalt bg-cobalt/5"
                      : "border-ink/10 bg-white/40 hover:border-ink/25"
                  }`}
                >
                  <Icon className={`h-6 w-6 shrink-0 ${isActive ? "text-cobalt" : "text-ink"}`} />
                  <span className="font-semibold text-ink">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div key={current.key} className="mt-8 rounded-2xl border border-ink/10 bg-ink p-8 text-ivory md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wideish text-cobalt">
                  {current.label}
                </p>
                <p className="mt-3 max-w-xl text-lg text-ivory/90">{current.who}</p>
                <p className="mt-3 max-w-xl text-sm text-ivory/60">
                  Worth considering: {current.consider}
                </p>
              </div>
              <Button
                href={business.whatsappHref}
                variant="light"
                external
                icon={<ArrowRightIcon />}
              >
                {current.cta}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

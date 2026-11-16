"use client";

import { useState } from "react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { ChevronDownIcon } from "./ui/Icons";
import { faqs } from "@/lib/faqs";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-ink/8 py-20 md:py-28">
      <Container>
        <Reveal>
          <h2 className="font-display text-4xl font-bold tracking-tightest text-ink md:text-5xl">
            Frequently asked questions
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-ink/10 border-t border-ink/10">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-semibold text-ink">{item.question}</span>
                  <ChevronDownIcon
                    className={`h-5 w-5 shrink-0 text-ink/50 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="min-h-0 max-w-2xl text-charcoal/70">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

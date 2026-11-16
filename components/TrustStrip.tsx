import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { StarIcon, PinIcon, GlassesIcon } from "./ui/Icons";
import { business } from "@/lib/constants";

const items = [
  {
    icon: StarIcon,
    value: `${business.rating.value}★`,
    label: `${business.rating.count} public reviews`,
  },
  {
    icon: PinIcon,
    value: "Whitefield",
    label: "Local optical destination",
  },
  {
    icon: GlassesIcon,
    value: "Eye Care",
    label: "Optical & eyewear services",
  },
];

export default function TrustStrip() {
  return (
    <Reveal>
      <div className="border-y border-ink/8 bg-mist/60">
        <Container>
          <div className="grid grid-cols-1 divide-y divide-ink/8 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {items.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex items-center justify-center gap-3 px-4 py-6 text-center sm:justify-start sm:text-left"
              >
                <Icon className="h-5 w-5 shrink-0 text-cobalt" />
                <div>
                  <p className="font-display text-lg font-bold text-ink">{value}</p>
                  <p className="text-xs text-charcoal/60">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </Reveal>
  );
}

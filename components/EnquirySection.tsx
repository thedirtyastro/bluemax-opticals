import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import EnquiryForm from "./EnquiryForm";

export default function EnquirySection() {
  return (
    <section id="enquiry" className="border-t border-ink/8 bg-mist/50 py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div>
              <h2 className="font-display text-4xl font-bold tracking-tightest text-ink md:text-5xl">
                What can we help you with?
              </h2>
              <p className="mt-4 max-w-sm text-lg text-charcoal/75">
                Tell us what you need and we'll follow up on WhatsApp or by
                phone — whichever's easier for you.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <EnquiryForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <main className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-ink">Privacy Policy</h1>
          <p className="mt-3 text-sm text-charcoal/50">
            This is a starting template — please have it reviewed to match how {business.name}{" "}
            actually collects and uses information before publishing.
          </p>

          <div className="mt-10 space-y-8 text-charcoal/80">
            <section>
              <h2 className="font-display text-xl font-bold text-ink">Information we collect</h2>
              <p className="mt-2">
                When you use our enquiry form, call, or message us on WhatsApp, we may receive
                your name, phone number, and any details you choose to share about your enquiry.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-ink">How we use it</h2>
              <p className="mt-2">
                We use this information only to respond to your enquiry, arrange an eye test or
                appointment, and provide after-sales support.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-ink">Contact</h2>
              <p className="mt-2">
                Questions about this policy can be sent to {business.name} at {business.phone}.
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

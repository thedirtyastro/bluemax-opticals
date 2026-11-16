import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms",
};

export default function Terms() {
  return (
    <>
      <Nav />
      <main className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-ink">Terms of Use</h1>
          <p className="mt-3 text-sm text-charcoal/50">
            This is a starting template — please have it reviewed before publishing.
          </p>

          <div className="mt-10 space-y-8 text-charcoal/80">
            <section>
              <h2 className="font-display text-xl font-bold text-ink">Using this website</h2>
              <p className="mt-2">
                This website is provided by {business.name} to share information about our
                products and services in Whitefield, Bengaluru, and to make it easy to get in
                touch with the store.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-ink">Product & service information</h2>
              <p className="mt-2">
                Details on this website are for general guidance. Please confirm current
                availability, pricing and specifics directly with the store before making a
                decision.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-ink">Contact</h2>
              <p className="mt-2">
                Questions about these terms can be sent to {business.name} at {business.phone}.
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

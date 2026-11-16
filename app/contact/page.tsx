import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";
import LocationSection from "@/components/LocationSection";
import EnquirySection from "@/components/EnquirySection";

export const metadata: Metadata = {
  title: "Contact Bluemax Opticals Whitefield",
  description:
    "Call, WhatsApp or visit Bluemax Opticals in Whitefield, Bengaluru. Send an enquiry and we'll get back to you.",
};

export default function Contact() {
  return (
    <>
      <Nav />
      <main className="pt-10">
        <LocationSection />
        <EnquirySection />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}

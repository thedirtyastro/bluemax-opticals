import Nav from "@/components/Nav";
import StickyMobileBar from "@/components/StickyMobileBar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import FindYourFrame from "@/components/FindYourFrame";
import FrameDiscovery from "@/components/FrameDiscovery";
import EyeCare from "@/components/EyeCare";
import LensGuide from "@/components/LensGuide";
import WhyBluemax from "@/components/WhyBluemax";
import StoreExperience from "@/components/StoreExperience";
import Testimonials from "@/components/Testimonials";
import LocationSection from "@/components/LocationSection";
import LocalSeoSection from "@/components/LocalSeoSection";
import EnquirySection from "@/components/EnquirySection";
import FAQ from "@/components/FAQ";
import ConversionSection from "@/components/ConversionSection";
import Footer from "@/components/Footer";
import { faqs } from "@/lib/faqs";
import { faqSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <FindYourFrame />
        <FrameDiscovery />
        <EyeCare />
        <LensGuide />
        <WhyBluemax />
        <StoreExperience />
        <Testimonials />
        <LocationSection />
        <LocalSeoSection />
        <EnquirySection />
        <FAQ />
        <ConversionSection />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}

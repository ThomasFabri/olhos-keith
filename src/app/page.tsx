import ArtistSection from "@/components/artist-section";
import BeforeAfterSection from "@/components/before-after-section";
import ChallengeSection from "@/components/challenge-section";
import FaqSection from "@/components/faq-section";
import FinalSection from "@/components/final-section";
import Footer from "@/components/footer";
import HeroImage from "@/components/hero-image";

export default function Page() {
  return (
    <main>
      <HeroImage />
      <BeforeAfterSection />
      <ArtistSection />
      <ChallengeSection />
      <FaqSection />
      <FinalSection />
      <Footer />
    </main>
  );
}

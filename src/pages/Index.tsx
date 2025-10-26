import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { Web3Section } from "@/components/Web3Section";
import { BenefitsSection } from "@/components/BenefitsSection";
import { NFTSection } from "@/components/NFTSection";
import { DAOSection } from "@/components/DAOSection";
import { BenefitsTable } from "@/components/BenefitsTable";
import { AdditionalBenefitsSection } from "@/components/AdditionalBenefitsSection";
import { AboutDolphinSection } from "@/components/AboutDolphinSection";
import { PresaleSection } from "@/components/PresaleSection";
import { TeamSection } from "@/components/TeamSection";
import { TokenomicsSection } from "@/components/TokenomicsSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { SocialLinks } from "@/components/SocialLinks";

const Index = () => {
  console.log('Index page loaded');
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <Web3Section />
      <BenefitsSection />
      <NFTSection />
      <DAOSection />
      <BenefitsTable />
      <AdditionalBenefitsSection />
      <AboutDolphinSection />
      <PresaleSection />
      <TeamSection />
      <TokenomicsSection />
      <RoadmapSection />
      <FAQSection />
      <ContactSection />
      <SocialLinks />
    </div>
  );
};

export default Index;

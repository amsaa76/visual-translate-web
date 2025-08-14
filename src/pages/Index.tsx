import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { Web3Section } from "@/components/Web3Section";
import { BenefitsSection } from "@/components/BenefitsSection";
import { NFTSection } from "@/components/NFTSection";
import { DAOSection } from "@/components/DAOSection";
import { BenefitsTable } from "@/components/BenefitsTable";
import { AdditionalBenefitsSection } from "@/components/AdditionalBenefitsSection";
import { AboutDolphinSection } from "@/components/AboutDolphinSection";
import { TeamSection } from "@/components/TeamSection";
import { PresaleSection } from "@/components/PresaleSection";
import { WalletSection } from "@/components/WalletSection";
import { TokenomicsSection } from "@/components/TokenomicsSection";
import { SocialLinks } from "@/components/SocialLinks";
import dolphinLogo from "@/assets/dolphin-logo.png";

const Index = () => {
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
      <TeamSection />
      <PresaleSection />
      <WalletSection />
      <TokenomicsSection />
      <SocialLinks />
    </div>
  );
};

export default Index;

import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { Web3Section } from "@/components/Web3Section";
import { BenefitsSection } from "@/components/BenefitsSection";
import { NFTSection } from "@/components/NFTSection";
import { DAOSection } from "@/components/DAOSection";
import { BenefitsTable } from "@/components/BenefitsTable";
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
      <SocialLinks />
      
      {/* Dolphin Image Section */}
      <div className="bg-gradient-primary p-6 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <img 
              src={dolphinLogo} 
              alt="Dolphin Splashing" 
              className="w-80 h-80 mx-auto animate-float drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

import { GradientCard } from "@/components/ui/gradient-card";
import { Target } from "lucide-react";

export const BenefitsSection = () => {
  return (
    <div className="bg-gradient-primary p-6 space-y-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-4">
            <Target className="w-10 h-10" />
            In Dolphin Solana, token holders can use Web3 to get:
          </h2>
        </div>
        
        <div className="space-y-6">
          <GradientCard variant="secondary" className="text-center">
            <h3 className="text-3xl font-bold mb-4">1. Exclusive Content</h3>
          </GradientCard>
          
          <GradientCard variant="secondary" className="text-center">
            <h3 className="text-3xl font-bold mb-4">2. NFT Privileges</h3>
          </GradientCard>
          
          <GradientCard variant="secondary" className="text-center">
            <h3 className="text-3xl font-bold mb-4">3. Voting Rights (DAO)</h3>
          </GradientCard>
        </div>
        
        <GradientCard variant="secondary" className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">As VIP Access Cards</h3>
          <p className="text-lg mb-6">Granting you access to:</p>
          
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Exclusive Competitions 🎯</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Private Chats 🎤</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Tokens and Rewards 🎁</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Market Analysis Tools 🧠</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Satirical Entertainment Content 🎬</span>
            </div>
          </div>
        </GradientCard>
        
        <GradientCard variant="accent" className="text-center">
          <p className="text-xl font-bold">
            ✅ Token holders can easily buy or earn these NFTs.
          </p>
        </GradientCard>
      </div>
    </div>
  );
};
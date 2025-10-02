import { GradientCard } from "@/components/ui/gradient-card";
import { Image } from "lucide-react";

export const NFTSection = () => {
  return (
    <div className="bg-gradient-primary p-6 space-y-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-4">
            <Image className="w-10 h-10" />
            What are NFTs and why does Dolphin use them?
          </h2>
          
          <p className="text-2xl text-white mb-8">
            NFT = Unique Digital Ownership.
          </p>
          
          <p className="text-xl text-white mb-6">
            In Dolphin Solana, NFTs will be:
          </p>
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 text-white text-left text-lg">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span>AI-generated and exclusive to holders</span>
            </div>
            <div className="flex items-center gap-3 text-white text-left text-lg">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span>Connected with our PlayStation-style game ecosystem to unlock extra benefits and rewards</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
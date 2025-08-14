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
          
          <p className="text-xl text-white mb-8">
            NFT = Unique Digital Ownership.
          </p>
          
          <p className="text-xl text-white mb-8">
            In Dolphin Solana, NFTs will be:
          </p>
        </div>
      </div>
    </div>
  );
};
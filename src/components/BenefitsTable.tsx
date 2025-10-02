import { GradientCard } from "@/components/ui/gradient-card";
import { Target } from "lucide-react";

export const BenefitsTable = () => {
  return (
    <div className="bg-gradient-primary p-6 space-y-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-4">
            <Target className="w-10 h-10" />
            How does the token holder actually benefit?
          </h2>
        </div>
        
        <div className="overflow-hidden rounded-3xl">
          <div className="bg-blue-500 text-white p-6">
            <div className="grid grid-cols-2 gap-4">
              <h3 className="text-xl font-bold">Feature</h3>
              <h3 className="text-xl font-bold">What do you get?</h3>
            </div>
          </div>
          
          <div className="bg-white">
            <div className="grid grid-cols-2 gap-4 p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <span className="font-semibold text-gray-800">Owning the token</span>
              </div>
              <div className="text-gray-700">
                Special NFTs, access to Web3 + AI features.
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🗳️</span>
                <span className="font-semibold text-gray-800">Participating in DAO</span>
              </div>
              <div className="text-gray-700">
                Voting on project decisions.
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎁</span>
                <span className="font-semibold text-gray-800">Airdrops and Giveaways</span>
              </div>
              <div className="text-gray-700">
                Rewards for participation and activity.
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📚</span>
                <span className="font-semibold text-gray-800">Educational & Entertainment Content</span>
              </div>
              <div className="text-gray-700">
                Through the NFT or the project's dedicated Web3 platform.
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 p-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                <span className="font-semibold text-gray-800">Project Future</span>
              </div>
              <div className="text-gray-700">
                If Dolphin succeeds and expands (PlayStation game + AI Bot + NFT marketplace), the token's value can rise significantly.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
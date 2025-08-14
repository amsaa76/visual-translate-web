import { GradientCard } from "@/components/ui/gradient-card";
import { Gift, Brain, TrendingUp } from "lucide-react";

export const AdditionalBenefitsSection = () => {
  return (
    <div className="bg-gradient-primary p-6 space-y-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 shadow-card">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-gray-200 pb-8">
              <div className="flex items-center gap-4">
                <Gift className="w-8 h-8 text-orange-500" />
                <h3 className="text-xl font-bold text-gray-800">
                  Airdrops and Giveaways
                </h3>
              </div>
              <p className="text-gray-700">
                You get rewards for participation and activity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-gray-200 pb-8">
              <div className="flex items-center gap-4">
                <Brain className="w-8 h-8 text-pink-500" />
                <h3 className="text-xl font-bold text-gray-800">
                  Educational and Entertainment Content
                </h3>
              </div>
              <p className="text-gray-700">
                Through the NFT or the project's dedicated Web3 platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex items-center gap-4">
                <TrendingUp className="w-8 h-8 text-red-500" />
                <h3 className="text-xl font-bold text-gray-800">
                  Project Future
                </h3>
              </div>
              <p className="text-gray-700">
                If Dolphin succeeds and expands, the token's value will rise significantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
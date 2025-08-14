import { GradientCard } from "@/components/ui/gradient-card";
import { Globe } from "lucide-react";

export const Web3Section = () => {
  return (
    <div className="bg-gradient-primary p-6 space-y-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <p className="text-lg text-white/80 mb-8">
            from Web3, NFT, and DAO technologies,
            <br />
            even if they're not experts.
          </p>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 flex items-center justify-center gap-4">
            <Globe className="w-12 h-12" />
            What is Web3, simply put?
          </h2>
          
          <p className="text-2xl text-white mb-8">
            Web3 is the new generation of the internet, where:
          </p>
        </div>
        
        <div className="space-y-6">
          <GradientCard variant="accent" className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Web2 (Old)</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>You are just a user</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>The company owns your data</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>No income from your usage</span>
              </div>
            </div>
          </GradientCard>
          
          <GradientCard variant="secondary" className="max-w-2xl mx-auto">
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>You own your data and wallet</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>You can earn by participating and interacting</span>
              </div>
            </div>
          </GradientCard>
        </div>
      </div>
    </div>
  );
};
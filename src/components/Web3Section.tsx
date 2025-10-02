import { GradientCard } from "@/components/ui/gradient-card";
import { Globe } from "lucide-react";

export const Web3Section = () => {
  return (
    <div className="bg-gradient-primary p-6 space-y-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 flex items-center justify-center gap-4">
            <Globe className="w-12 h-12" />
            What's Web3 + AI + Game, simply put?
          </h2>
          
          <p className="text-2xl text-white mb-8">
            Web3 is the new generation of the internet where:
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
            <h3 className="text-2xl font-bold mb-4">Web3 + AI + Game (New)</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>You own your data and your wallet</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>You can earn by participating, interacting, and playing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>AI tools like our Dolphin AI Bot help you create, vote, and even generate NFT art automatically</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>PlayStation-style game integration creates a real revenue stream for the project and its holders</span>
              </div>
            </div>
          </GradientCard>
        </div>
        
        <div className="text-center space-y-6">
          <p className="text-2xl font-bold text-white">
            In Dolphin Solana, token holders can use Web3, AI & Game features to get:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <GradientCard variant="primary">
              <h3 className="text-xl font-bold mb-3">Exclusive Content</h3>
              <p>VIP access to competitions, private chats, and market analysis tools</p>
            </GradientCard>
            
            <GradientCard variant="accent">
              <h3 className="text-xl font-bold mb-3">NFT Privileges</h3>
              <p>Unique digital ownership + AI-generated NFT images</p>
            </GradientCard>
            
            <GradientCard variant="secondary">
              <h3 className="text-xl font-bold mb-3">Voting Rights (DAO)</h3>
              <p>Participate in decision making and treasury allocations</p>
            </GradientCard>
          </div>
          
          <div className="mt-8">
            <h3 className="text-3xl font-bold text-white mb-6">As VIP Access Cards Granting you access to:</h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="flex items-center gap-3 text-white text-left">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span>Exclusive Competitions</span>
              </div>
              <div className="flex items-center gap-3 text-white text-left">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span>Private Chats</span>
              </div>
              <div className="flex items-center gap-3 text-white text-left">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span>Tokens and Rewards</span>
              </div>
              <div className="flex items-center gap-3 text-white text-left">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span>Market Analysis Tools</span>
              </div>
              <div className="flex items-center gap-3 text-white text-left">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span>Satirical Entertainment Content</span>
              </div>
              <div className="flex items-center gap-3 text-white text-left">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span>AI-powered NFT Generation</span>
              </div>
            </div>
            <p className="text-lg text-white mt-6">
              Token holders can easily buy or earn these NFTs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
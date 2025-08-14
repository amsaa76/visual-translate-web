import { GradientCard } from "@/components/ui/gradient-card";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

export const WalletSection = () => {
  return (
    <div className="bg-gradient-primary p-6 space-y-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-6">
          <p className="text-lg text-white leading-relaxed">
            For now, ensure you have set up a cryptocurrency wallet that supports Solana-based tokens, such as:
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4"
            >
              SOLFLARE WALLET
            </Button>
            
            <Button 
              variant="default" 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4"
            >
              PHANTOM WALLET
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
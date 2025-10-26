import dolphinLogo from "@/assets/dolphin-logo.png";
import { WhitepaperViewer } from "./WhitepaperViewer";

export const PresaleSection = () => {
  console.log('PresaleSection loaded');
  
  return (
    <div className="bg-gradient-primary p-6 space-y-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-8">
          <div className="relative">
            <img 
              src={dolphinLogo} 
              alt="Dolphin Professional" 
              className="w-80 h-80 mx-auto animate-float drop-shadow-2xl"
            />
          </div>
          
          <div className="space-y-8">
            <div className="space-y-6 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                🚀 Presale Coming Soon
              </h2>
              
              <div className="space-y-4 text-lg text-white/90 max-w-3xl mx-auto">
                <p className="text-xl font-semibold">
                  Get ready, Dolphins! 🐬<br />
                  The $DOLPHIN Presale is almost here.
                </p>
                
                <p>
                  Prepare your wallets and stay alert - only verified participants will have access once the gates open.
                  You'll need a Solana-compatible wallet such as Phantom, Solflare, or Backpack to join the presale and buy $DOLPHIN safely.
                </p>
                
                <p className="font-semibold">
                  Early supporters will gain exclusive entry before the public sale begins. 🌊
                </p>
                
                <p>
                  This is your chance to join the wave early and become part of the movement that connects Web3, AI, and gaming. 💎🐬
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <WhitepaperViewer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
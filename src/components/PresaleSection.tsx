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
                🚀 Presale Starts May 10
              </h2>
              
              <div className="space-y-4 text-lg text-white/90 max-w-3xl mx-auto">
                <p className="text-xl font-semibold">
                  Get ready, Dolphins! 🐬<br />
                  The official $DOLPHIN Presale launches on May 10.
                </p>
                
                <p>
                  Prepare your Solana wallet and be ready before launch day.
                </p>

                <p className="font-semibold">Supported wallets include:</p>
                <ul className="list-none space-y-1">
                  <li>• Phantom</li>
                  <li>• Solflare</li>
                  <li>• Backpack</li>
                </ul>

                <p>
                  Early participants will gain access to the presale before public market trading begins.
                </p>
                
                <p>
                  $DOLPHIN is building a community-driven ecosystem connecting Web3, AI, gaming, NFTs, and the Solana future. 🌊
                </p>

                <p className="font-semibold">
                  Don't wait for the wave after it starts — position yourself early. 💎🐬
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
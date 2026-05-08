import dolphinLogo from "@/assets/dolphin-logo.png";
import { WhitepaperViewer } from "./WhitepaperViewer";
import { Button } from "@/components/ui/button";
import { FileText, ShieldCheck, Video, Rocket } from "lucide-react";

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
                🚀 Presale Is Now Live
              </h2>
              
              <div className="space-y-4 text-lg text-white/90 max-w-3xl mx-auto">
                <p className="text-xl font-semibold">
                  Get ready, Dolphins! 🐬<br />
                  The official $DOLPHIN Presale is now live on Solana.
                </p>
                
                <p>
                  Prepare your Solana wallet and participate before public market trading begins.
                </p>

                <p className="font-semibold">Supported wallets include:</p>
                <ul className="list-none space-y-1">
                  <li>• Phantom</li>
                  <li>• Solflare</li>
                  <li>• Backpack</li>
                </ul>

                <p>
                  Early participants gain access before public market exposure.
                </p>
              </div>
            </div>
            
            <div className="mt-8 space-y-6">
              <WhitepaperViewer />
              <p className="text-white/90 text-center max-w-2xl mx-auto">
                Explore the official Dolphin Solana ecosystem vision, tokenomics and roadmap.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 space-y-3">
                  <div className="flex items-center gap-2 text-white">
                    <ShieldCheck className="w-6 h-6" />
                    <h3 className="text-xl font-bold">Smart Contract Review</h3>
                  </div>
                  <p className="text-white/90">
                    View the preliminary smart contract security review and transparency report.
                  </p>
                  <Button asChild variant="secondary" size="sm">
                    <a
                      href="https://drive.google.com/file/d/1oI67mZH7uCzz2OuexJ-lJdD9l78eeKvt/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="w-4 h-4" />
                      View Report
                    </a>
                  </Button>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 space-y-3">
                  <div className="flex items-center gap-2 text-white">
                    <Video className="w-6 h-6" />
                    <h3 className="text-xl font-bold">AMA Recording</h3>
                  </div>
                  <p className="text-white/90">
                    Watch the official founder AMA presentation and future roadmap discussion.
                  </p>
                  <Button variant="secondary" size="sm" disabled>
                    <Video className="w-4 h-4" />
                    Coming Soon
                  </Button>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-10 py-6">
                  <a
                    href="https://www.pinksale.finance/solana/launchpad/Youo4gzxbZPbpkDqr5JJTvagrkMLkcNF5xepsaSUn5X"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Rocket className="w-5 h-5" />
                    Join Presale
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
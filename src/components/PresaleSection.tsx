import { GradientCard } from "@/components/ui/gradient-card";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import dolphinLogo from "@/assets/dolphin-logo.png";

export const PresaleSection = () => {
  return (
    <div className="bg-gradient-primary p-6 space-y-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Presale Announcement */}
        <div className="text-center space-y-8">
          <div className="relative">
            <img 
              src={dolphinLogo} 
              alt="Dolphin Professional" 
              className="w-80 h-80 mx-auto animate-float drop-shadow-2xl"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-6xl font-bold text-white leading-tight">
              PRESALE & PUBLIC SALE
            </h2>
            
            <h3 className="text-3xl font-bold text-white">
              PRESALE ON SMITH TOOLS
            </h3>
            
            <h4 className="text-2xl font-bold text-yellow-300">
              Presale Starts: October 15, 2025
            </h4>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4"
                onClick={() => window.open('https://tools.smithii.io/launches-list/solana', '_blank')}
              >
                Join Presale on Smith Tools
              </Button>
              
              <div className="mt-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                  onClick={() => window.open('./Dolphin-Solana-Whitepaper-2025.pdf', '_blank')}
                >
                  📄 Download Whitepaper
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* About Smith Tools */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-white text-center flex items-center justify-center gap-4">
            <Settings className="w-10 h-10" />
            About Smith Tools
          </h3>
          
          <div className="text-lg text-white/90 leading-relaxed space-y-6">
            <p>
              Smith Tools is a premier platform for secure and transparent presale operations in the 
              cryptocurrency space. It provides investors with:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-white">Trust & Security:</span>
                  <span className="text-white/90"> Advanced security protocols to protect your investments</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-white">Transparency:</span>
                  <span className="text-white/90"> Complete visibility into presale processes and fund allocation</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-white">Safety:</span>
                  <span className="text-white/90"> Verified smart contracts and audited presale mechanisms</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-white">User-Friendly:</span>
                  <span className="text-white/90"> Simple and intuitive interface for seamless participation</span>
                </div>
              </div>
            </div>
            
            <p className="text-center text-lg">
              Smith Tools is the trusted choice for presale operations, ensuring a safe and reliable 
              experience for all participants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
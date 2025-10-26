import dolphinLogo from "@/assets/dolphin-logo.png";
import { WhitepaperViewer } from "./WhitepaperViewer";

export const PresaleSection = () => {
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
          
          <div className="space-y-6">
            <div className="mt-4">
              <WhitepaperViewer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
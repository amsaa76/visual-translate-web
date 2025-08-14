import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import dolphinLogo from "@/assets/dolphin-logo.png";

export const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-gradient-primary">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-white p-2 flex items-center justify-center">
          <img src={dolphinLogo} alt="Dolphin Logo" className="w-12 h-12 animate-float" />
        </div>
        <h1 className="text-2xl font-bold text-white">Dolphin</h1>
      </div>
      
      <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
        <Menu className="h-6 w-6" />
      </Button>
    </nav>
  );
};
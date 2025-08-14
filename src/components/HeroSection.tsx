import { GradientCard } from "@/components/ui/gradient-card";

export const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-primary p-6 space-y-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-6 pt-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Dolphin Solana:
            <br />
            More than just a
            <br />
            "Meme Coin" for laughs...
          </h1>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            It's a meme coin with purpose, a smile, and real utility 😊 🐬
          </p>
          
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Its idea is to empower token holders to:
          </p>
          
          <div className="space-y-4 text-left max-w-md mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-white text-lg">Participate</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-white text-lg">Enjoy</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-white text-lg">And Benefit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
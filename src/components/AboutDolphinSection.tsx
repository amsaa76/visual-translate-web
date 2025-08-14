import dolphinLogo from "@/assets/dolphin-logo.png";

export const AboutDolphinSection = () => {
  return (
    <div className="bg-gradient-primary p-6 space-y-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <img 
            src={dolphinLogo} 
            alt="Dolphin Solana" 
            className="w-80 h-80 mx-auto animate-float drop-shadow-2xl mb-8"
          />
          
          <h2 className="text-5xl font-bold text-white mb-8">
            About Dolphin Solana
          </h2>
          
          <div className="text-lg text-white/90 leading-relaxed space-y-6 max-w-3xl mx-auto">
            <p>
              At Dolphin Solana, we believe that cryptocurrencies can be more than just an 
              investment; they can be a fun and rewarding experience. Inspired by the playful and intelligent 
              spirit of the dolphin, we strive to build a community where everyone can participate, 
              enjoy, and benefit from the exciting world of Web3.
            </p>
            
            <p>
              We combine the appeal of a meme coin with real utility, offering DOL token holders a unique 
              opportunity for digital ownership, participation in decision-making, and access to exclusive 
              content and valuable rewards. Join us on this journey to redefine what a meme coin can be.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
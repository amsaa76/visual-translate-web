import pinksaleLogo from "@/assets/pinksale-logo.png";
import dexviewLogo from "@/assets/dexview-logo.png";

export const PartnersSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-primary bg-clip-text text-transparent">
          Our Partners
        </h2>

        <div className="space-y-4 text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          <p>We are proud to collaborate with trusted platforms in the Web3 ecosystem.</p>
          <p>
            <span className="font-semibold text-foreground">PinkSale</span> is a leading launchpad platform that helps projects raise funds and connect with investors globally.
          </p>
          <p>
            <span className="font-semibold text-foreground">DexView</span> provides advanced analytics and real-time tracking tools for tokens and decentralized markets.
          </p>
          <p>Through these partnerships, we aim to deliver transparency, accessibility, and long-term value to our community.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          <a
            href="https://www.pinksale.finance"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-110"
            aria-label="Visit PinkSale"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-card shadow-card flex items-center justify-center p-4 group-hover:shadow-glow transition-shadow">
              <img src={pinksaleLogo} alt="PinkSale logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-foreground font-semibold">PinkSale</span>
          </a>

          <a
            href="https://www.dexview.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-110"
            aria-label="Visit DexView"
          >
            <div className="w-32 h-auto md:w-48 rounded-2xl bg-card shadow-card flex items-center justify-center p-6 group-hover:shadow-glow transition-shadow">
              <img src={dexviewLogo} alt="DexView logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-foreground font-semibold">DexView</span>
          </a>
        </div>
      </div>
    </section>
  );
};

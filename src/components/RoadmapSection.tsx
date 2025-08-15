import { Calendar } from "lucide-react";

export const RoadmapSection = () => {
  const roadmapData = [
    {
      quarter: "Q3 2025:",
      items: [
        "Launch of Dolphin NFT Marketplace with exclusive collections",
        "Implementation of DAO governance platform with voting mechanisms",
        "Strategic partnerships with major DeFi protocols and Web3 platforms",
        "Launch of Dolphin Staking Program with attractive APY rewards"
      ]
    },
    {
      quarter: "Q4 2025:",
      items: [
        "Integration with major metaverse platforms for virtual experiences",
        "Launch of Dolphin Academy - Educational platform for crypto newcomers",
        "Cross-chain bridge development for multi-blockchain compatibility",
        "Tier 1 exchange listings (Binance, Coinbase, Kraken)",
        "Launch of Dolphin Mobile App with wallet integration"
      ]
    },
    {
      quarter: "Q1 2026:",
      items: [
        "Dolphin DeFi Suite launch (Lending, Borrowing, Yield Farming)",
        "AI-powered trading bot integration for DOL holders",
        "Launch of Dolphin Launchpad for incubating new projects",
        "Real-world utility partnerships (Payments, E-commerce integration)",
        "Community-driven venture capital fund establishment"
      ]
    },
    {
      quarter: "Q2 2026:",
      items: [
        "Global expansion with regional community hubs worldwide",
        "Dolphin Gaming Ecosystem with Play-to-Earn mechanics",
        "Enterprise blockchain solutions powered by DOL token",
        "Carbon-neutral blockchain initiative and environmental partnerships",
        "IPO preparation and traditional finance market entry strategy"
      ]
    }
  ];

  return (
    <div className="bg-gradient-primary p-6 space-y-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white mb-8 flex items-center justify-center gap-4">
            <Calendar className="w-12 h-12" />
            Roadmap
          </h2>
          
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Our roadmap outlines our strategic milestones and objectives for the Dolphin project. 
            Here's what you can expect in the coming months:
          </p>
        </div>
        
        <div className="space-y-8">
          {roadmapData.map((phase, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-card">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                {phase.quarter}
              </h3>
              
              <div className="space-y-4">
                {phase.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-4">
                    <span className="text-blue-500 text-xl font-bold">•</span>
                    <p className="text-gray-700 text-lg leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
import { Calendar } from "lucide-react";

export const RoadmapSection = () => {
  const roadmapData = [
    {
      quarter: "2025 — Foundation & Setup",
      items: [
        "Token Creation & Smart Contract Deployment",
        "Launch of Official Social Media Channels (Telegram, X, Discord)",
        "Initial Marketing Campaigns through Influencers & Promoters",
        "Community Building & Brand Awareness"
      ]
    },
    {
      quarter: "Q1 2026 — Community & Tools",
      items: [
        "Airdrop & Giveaway Campaigns to expand user base",
        "Launch of AI Community Bot (Telegram Support & Moderation)",
        "Strengthening Community Engagement & Activity"
      ]
    },
    {
      quarter: "Q2 2026 — Presale Phase",
      items: [
        "Official Presale Launch",
        "Marketing Push & Investor Outreach",
        "Strategic Partnerships & Promotions",
        "Preparation for DEX Listing"
      ]
    },
    {
      quarter: "Q3 2026 — Development Phase",
      items: [
        "Start Development of Dolphin PlayStation Game",
        "DAO Platform Development (Community Governance)",
        "NFT Collection Launch",
        "Web3 Ecosystem Integration",
        "Preparation for Major Exchange Listings"
      ]
    },
    {
      quarter: "Q4 2026 — Expansion Phase",
      items: [
        "Beta Release of Dolphin Game",
        "Expansion of Partnerships (Gaming & Web3 Projects)",
        "Community Growth & Global Marketing Campaigns"
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
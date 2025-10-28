import React from 'react';
import dolphinHeader from '@/assets/whitepaper-dolphin-header.png';
import dolphinTokenomics from '@/assets/dolphin-tokenomics.png';
import dolphinAI from '@/assets/dolphin-ai-section.png';

export const WhitepaperDocument = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Cover Page */}
      <div className="h-screen flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-blue-600 to-cyan-400">
        <img 
          src={dolphinHeader} 
          alt="Dolphin Solana" 
          className="w-96 h-auto mb-8"
        />
        <h1 className="text-6xl font-bold text-white mb-4">
          Dolphin Solana (DOLPHIN)
        </h1>
        <h2 className="text-3xl text-white/90 mb-8">
          Whitepaper — 2025 Edition
        </h2>
        <div className="text-white/80 text-lg">
          Next-Generation Meme Coin Powered by AI
        </div>
      </div>

      {/* Content Pages */}
      <div className="max-w-4xl mx-auto p-8 space-y-12">
        
        {/* Introduction */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-blue-600 border-b-2 border-blue-200 pb-4">
            Introduction
          </h2>
          <div className="text-lg leading-relaxed space-y-4">
            <p className="font-semibold text-xl text-gray-800">
              Something big is on the horizon!
            </p>
            <p>
              We've been quietly working behind the scenes on a next-gen Meme Coin powered by AI. 
              This isn't just another token — it's a movement that brings creativity, innovation, 
              and true community power together.
            </p>
            <p>
              The project is designed to reward engagement, spark viral energy, and unlock new 
              possibilities in the world of Web3. The future of meme coins is about to change.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-blue-600 border-b-2 border-blue-200 pb-4">
            Vision & Mission
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Vision</h3>
              <p className="text-gray-700">
                To reinvent meme coins by combining humor, culture, and blockchain utility with 
                the limitless creativity of artificial intelligence.
              </p>
            </div>
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-800 mb-2">Mission</h3>
              <p className="text-gray-700">
                Build a fun, community-first ecosystem where memes evolve into NFTs, AI bots 
                engage and educate, and DAO governance empowers holders to shape the project.
              </p>
            </div>
          </div>
        </section>

        {/* Core Utilities */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-blue-600 border-b-2 border-blue-200 pb-4 flex items-center gap-4">
            <img src={dolphinAI} alt="AI Features" className="w-12 h-12" />
            Core Utilities
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">1. AI Meme Engine</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Dolphin AI automatically generates memes, images, and stories</li>
                <li>• Community-submitted memes can be enhanced and transformed into NFTs</li>
                <li>• Continuous flow of viral content → organic growth & engagement</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">2. NFT Collection</h3>
              <div className="space-y-2 text-gray-700">
                <p>• AI-generated Dolphin NFTs with unique traits</p>
                <p className="font-semibold">Utility beyond art:</p>
                <ul className="ml-4 space-y-1">
                  <li>• Special community roles on Discord/Telegram</li>
                  <li>• Boosts in airdrops & whitelist privileges</li>
                  <li>• Access to exclusive AI-driven tools</li>
                </ul>
                <p>• NFTs listed on Solana marketplaces after presale</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-4">3. Dynamic Rewards System</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Community activity (chatting, memes, invites) tracked via AI</li>
                <li>• Earn virtual DOLPHIN that can be exchanged for real tokens</li>
                <li>• Play-to-Earn meets Social-to-Earn → community stays active daily</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">4. Creative DAO</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Holders of DOLPHIN + NFTs gain voting rights</li>
                <li>• Proposals for features, contests, or treasury allocations</li>
                <li>• Monthly transparent DAO reports ensure trust</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-indigo-800 mb-4">5. aID Dolphin AI Bot (NEW)</h3>
              <p className="text-gray-700 mb-4">
                At the heart of our community is Dolphin AI, a built-in smart bot that welcomes members in their own language, 
                helps manage and verify airdrop participation, and can even create NFT-style images for our holders.
              </p>
              <p className="text-gray-700">
                It's designed to keep the community real, active and rewarded — making Dolphin Solana far more than just another token.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Overview */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-blue-600 border-b-2 border-blue-200 pb-4">
            Technical Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Blockchain</h3>
              <p className="text-gray-700">Solana (Mainnet) for fast, cheap, eco-friendly transactions</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Smart Contracts</h3>
              <p className="text-gray-700">Manage presale, airdrops, and DAO governance</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Storage</h3>
              <p className="text-gray-700">IPFS/Arweave for decentralized storage of NFTs & memes</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">AI Models</h3>
              <p className="text-gray-700">GPT (for text/memes) + Stable Diffusion (for images)</p>
            </div>
          </div>
        </section>

        {/* Tokenomics */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-blue-600 border-b-2 border-blue-200 pb-4 flex items-center gap-4">
            <img src={dolphinTokenomics} alt="Tokenomics" className="w-12 h-12" />
            Tokenomics
          </h2>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Total Supply: 77,777,777.7 DOLPHIN
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-600">Pre-Sale: 50%</h4>
                <p className="text-sm text-gray-600">starting 20 Nov, 2025</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-bold text-green-600">Liquidity Pool (DEX): 20%</h4>
                <p className="text-sm text-gray-600">Locked for trading stability</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-bold text-purple-600">Team & Development: 10%</h4>
                <p className="text-sm text-gray-600">Vesting to ensure long-term commitment</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-bold text-orange-600">Marketing: 10%</h4>
                <p className="text-sm text-gray-600">Global awareness & community campaigns</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-cyan-500">
                <h4 className="font-bold text-cyan-600">Airdrop: 10%</h4>
                <p className="text-sm text-gray-600">Incentivize early adopters and loyal members</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gaming Revenue */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-blue-600 border-b-2 border-blue-200 pb-4">
            Gaming Revenue (NEW)
          </h2>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
            <p className="text-lg text-gray-800 leading-relaxed">
              The Dolphin Solana token will have a direct revenue stream from our PlayStation-integrated game. 
              NFT holders will enjoy free or discounted access to the game, while <span className="font-bold text-purple-800">60% of the game's revenue will be burned</span> and 
              <span className="font-bold text-purple-800"> 40% reserved</span>, directly supporting the token's long-term value. 
              This model ties real gaming income to our tokenomics, giving Dolphin Solana sustainable utility and growth beyond speculation.
            </p>
          </div>
        </section>

        {/* Funding & Revenue Streams */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-blue-600 border-b-2 border-blue-200 pb-4">
            Funding & Revenue
          </h2>
          <div className="space-y-4">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-2">1. ICO/Presale</h3>
              <p className="text-gray-700">Raises initial treasury for AI development & liquidity</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-800 mb-2">2. NFT Sales</h3>
              <p className="text-gray-700">Revenue from AI-generated Dolphin NFTs</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-2">3. Transaction Fees</h3>
              <p className="text-gray-700">Micro-fees funnel into the development treasury</p>
            </div>
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-800 mb-2">4. Partnerships</h3>
              <p className="text-gray-700">Cross-project collaborations in Solana & Web3 ecosystems</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-pink-800 mb-2">5. Game Revenue Burn + Reserve Model</h3>
              <p className="text-gray-700">Sustainable income from PlayStation-integrated gaming ecosystem</p>
            </div>
          </div>
        </section>

        {/* Marketing Strategy */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-blue-600 border-b-2 border-blue-200 pb-4">
            Marketing Strategy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-pink-50 p-4 rounded-lg">
                <h3 className="font-bold text-pink-800">Giveaways & Airdrops</h3>
                <p className="text-gray-700 text-sm">Encourage growth across Telegram/Discord/X</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-bold text-yellow-800">Utility + Hype Combo</h3>
                <p className="text-gray-700 text-sm">Crisp one-liners + meme culture content</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="font-bold text-indigo-800">Countdown Campaigns</h3>
                <p className="text-gray-700 text-sm">Daily hype posts leading to presale launch</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg">
                <h3 className="font-bold text-teal-800">AMA/Q&A Sessions</h3>
                <p className="text-gray-700 text-sm">Build trust & answer community questions live</p>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-blue-600 border-b-2 border-blue-200 pb-4">
            Roadmap (2025–2026)
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Q3 2025</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Launch Dolphin AI Bot (Telegram/Discord)</li>
                <li>• Build community base on Telegram, Discord, and X</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-green-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Q4 2025</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Presale launch (20 Nov 2025)</li>
                <li>• First batch of AI-generated NFTs released</li>
                <li>• Airdrop program live</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-purple-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Q1 2026</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• DAO governance launch</li>
                <li>• Dynamic rewards system fully operational</li>
                <li>• Partnerships with meme/NFT projects</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">Q2–Q4 2026</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Dedicated NFT marketplace for Dolphin memes</li>
                <li>• Advanced AI integration (multi-language meme generation)</li>
                <li>• Expansion of Play-to-Earn ecosystem</li>
                <li>• Launch of Dolphin Game full version</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Security & Safety */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-red-600 border-b-2 border-red-200 pb-4">
            Security & Safety
          </h2>
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">⚠️</span>
                Contract address will only be published after presale (to avoid scams)
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">⚠️</span>
                Only trust pinned messages & official channels
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">⚠️</span>
                Never share private keys/seed phrases
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">⚠️</span>
                Manual anti-bot checks for airdrops & invites
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-blue-600 border-b-2 border-blue-200 pb-4">
            FAQ
          </h2>
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Q: What is Dolphin Solana?</h3>
              <p className="text-gray-700">A next-gen meme coin with AI, NFTs, DAO, and real community power.</p>
            </div>
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-800 mb-2">Q: What makes it different?</h3>
              <p className="text-gray-700">Utility + Meme culture + AI + DAO governance + Real game revenue burn model.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-800 mb-2">Q: Is liquidity locked?</h3>
              <p className="text-gray-700">Yes, DEX liquidity is locked for stability.</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-blue-600 border-b-2 border-blue-200 pb-4">
            Contact
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg space-y-6">
            <div className="text-center space-y-2">
              <p className="text-lg text-gray-700">📧 dolphinmemetoken@gmail.com</p>
              <p className="text-lg text-gray-700">⛓️ Solana Blockchain</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Join the community:</h3>
              <div className="space-y-2">
                <p><a href="https://x.com/DolphinSolana24?s=09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">Twitter</a></p>
                <p><a href="https://t.me/DolphineSolana2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">Telegram</a></p>
                <p><a href="https://t.me/DolphinSolana1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">Announcements</a></p>
                <p><a href="https://discord.gg/JyupxNjPDH" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">Discord</a></p>
                <p><a href="https://www.tiktok.com/@dolphinsolana" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">TikTok</a></p>
                <p><a href="https://www.instagram.com/dolphinsolana" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">Instagram</a></p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-2xl font-bold text-blue-600">
                Dolphin Solana is more than just a meme coin — it's the wave of the future!
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t-2 border-gray-200">
          <p className="text-gray-600">© 2025 Dolphin Solana. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};
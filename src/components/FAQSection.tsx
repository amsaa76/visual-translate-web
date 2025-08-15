import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqData = [
    {
      question: "What is Dolphin Solana?",
      answer: "Dolphin Solana is a meme-based cryptocurrency project built on the Solana blockchain that combines humor, community power, and Web3 innovations such as NFTs and DAO governance."
    },
    {
      question: "What makes Dolphin Solana different from other meme coins?",
      answer: "Dolphin Solana isn't just a meme — it's a Web3-powered ecosystem with real use cases, DAO integration, and a fun approach to digital ownership using NFTs and community voting mechanisms."
    },
    {
      question: "What is the utility of the $DOLPHIN token?",
      answer: "Access to exclusive NFTs, Participation in community governance (DAO), Staking rewards and giveaways, Voting on key project decisions."
    },
    {
      question: "What is a DAO and how is it used in Dolphin Solana?",
      answer: "A DAO (Decentralized Autonomous Organization) is a community-led entity with no central authority. In Dolphin Solana, holders of the token can vote on project proposals, roadmap changes, and treasury decisions."
    },
    {
      question: "What are NFTs in this project?",
      answer: "Dolphin NFTs are collectible cartoon-style dolphins with varying rarity. They grant access to exclusive features, giveaways, and may be used in future Web3 gaming and metaverse experiences."
    },
    {
      question: "How is the token supply distributed?",
      answer: "Please refer to the Tokenomics section for detailed distribution."
    },
    {
      question: "Where can I buy $DOLPHIN tokens?",
      answer: "Soon, $DOLPHIN will be available for presale on Smith Tool, followed by listings on DEX platforms like Raydium and Jupiter."
    },
    {
      question: "Is the liquidity locked?",
      answer: "Yes, a portion of the liquidity pool will be locked to protect investors and ensure long-term trust not less than 4 months."
    }
  ];

  return (
    <div className="bg-gradient-primary p-6 space-y-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <div className="bg-blue-400 rounded-2xl p-8 mb-8">
            <img 
              src="/lovable-uploads/38519632-f920-447a-802a-31377e04af94.png" 
              alt="FAQ Dolphin" 
              className="w-48 h-32 mx-auto object-cover rounded-xl mb-4"
            />
          </div>
          
          <h2 className="text-5xl font-bold text-white mb-8 flex items-center justify-center gap-4">
            <HelpCircle className="w-12 h-12" />
            Frequently Asked Questions (FAQ)
          </h2>
        </div>
        
        <div className="bg-white rounded-3xl p-8 shadow-card">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 px-6 py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 px-6 pb-4 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
import { GradientCard } from "@/components/ui/gradient-card";

export const TokenomicsSection = () => {
  return (
    <div className="bg-gradient-primary p-6 space-y-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white mb-8">
            Tokenomics
          </h2>
          
          <p className="text-xl text-white mb-12">
            Dolphin (DOL) token distribution is as follows:
          </p>
        </div>
        
        <div className="bg-white rounded-3xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Dolphin Tokenomics Distribution
          </h3>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-secondary rounded-2xl p-6 text-white">
                <h4 className="text-xl font-bold mb-2">Pre-sales on Smith Tool</h4>
                <p className="text-3xl font-bold">40%</p>
              </div>
              
              <div className="bg-gradient-accent rounded-2xl p-6 text-white">
                <h4 className="text-xl font-bold mb-2">Burned on old smart contract</h4>
                <p className="text-3xl font-bold">12%</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-500 rounded-2xl p-6 text-white">
                <h4 className="text-lg font-bold mb-2">Liquidity Pool</h4>
                <p className="text-2xl font-bold">20%</p>
              </div>
              
              <div className="bg-purple-500 rounded-2xl p-6 text-white">
                <h4 className="text-lg font-bold mb-2">Team & Development</h4>
                <p className="text-2xl font-bold">15%</p>
              </div>
              
              <div className="bg-green-500 rounded-2xl p-6 text-white">
                <h4 className="text-lg font-bold mb-2">Marketing & Partnerships</h4>
                <p className="text-2xl font-bold">13%</p>
              </div>
            </div>
            
            <div className="text-center text-gray-600 text-sm">
              <p>* Token distribution designed for long-term sustainability and community growth</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
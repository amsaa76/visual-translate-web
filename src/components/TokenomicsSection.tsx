import { GradientCard } from "@/components/ui/gradient-card";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const tokenomicsData = [
  { name: 'Pre-sales on Smith Tool', value: 30, color: '#FF6B9D' },
  { name: 'Liquidity pool DEX', value: 20, color: '#4ECDC4' },
  { name: 'Team & Development', value: 15, color: '#45B7D1' },
  { name: 'Marketing', value: 13, color: '#F9CA24' },
  { name: 'Airdrop', value: 10, color: '#A8A8FF' },
  { name: 'Burned on old smart contract', value: 12, color: '#95A5A6' }
];

export const TokenomicsSection = () => {
  return (
    <div className="bg-gradient-primary p-6 space-y-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white mb-8">
            Tokenomics
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pie Chart */}
          <div className="bg-white rounded-3xl p-8 shadow-card">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tokenomicsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {tokenomicsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Distribution List */}
          <div className="space-y-4">
            {tokenomicsData.map((item, index) => (
              <div key={index} className="flex items-center gap-4 text-white">
                <span className="text-2xl">⭐</span>
                <span className="text-xl font-bold">{item.value}%</span>
                <span className="text-lg">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Token Details */}
        <div className="bg-white rounded-3xl p-8 shadow-card mt-12">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Token Details
          </h3>
          
          <div className="space-y-4 text-gray-700">
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="font-semibold">Name:</span>
              <span>Dolphin</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="font-semibold">Symbol:</span>
              <span>DOL</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="font-semibold">Network:</span>
              <span>Solana</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="font-semibold">Total Supply:</span>
              <span>77,777,777.7</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-semibold">Contract Address:</span>
              <span className="text-xs break-all">GPfzbTska6x6KyZH8FVimjcH3YxgN5kvVwDc8f8dsaZN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
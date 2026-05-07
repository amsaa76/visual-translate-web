import tokenomicsImage from "@/assets/tokenomics-distribution.jpg";

const tokenomicsData = [
  { name: 'Pre-sales', value: 30, color: '#FF6B9D' },
  { name: 'Liquidity pool DEX (Locked for 4 months — extension may apply depending on market conditions)', value: 20, color: '#A8A8FF' },
  { name: 'PlayStation Development', value: 15, color: '#F9CA24' },
  { name: 'Team & Development', value: 10, color: '#45B7D1' },
  { name: 'Marketing', value: 15, color: '#4ECDC4' },
  { name: 'Airdrop', value: 10, color: '#3BA9E0' }
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
          {/* Distribution Image */}
          <div className="bg-white rounded-3xl p-8 shadow-card flex items-center justify-center">
            <img
              src={tokenomicsImage}
              alt="Dolphin token distribution"
              className="w-full h-auto max-w-md rounded-2xl"
              loading="lazy"
            />
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
              <span className="text-xs break-all">6mMYWqnAok6mSt2ef842z2yJxQUrGnNRbDagRbF36Zxn</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
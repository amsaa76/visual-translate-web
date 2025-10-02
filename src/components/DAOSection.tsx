import { GradientCard } from "@/components/ui/gradient-card";
import { Users, Building, Target } from "lucide-react";

export const DAOSection = () => {
  return (
    <div className="bg-gradient-primary p-6 space-y-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-4">
            <Building className="w-10 h-10" />
            What is DAO and why is it important?
          </h2>
          
          <p className="text-xl text-white mb-8">
            DAO = Self-governing Community.
          </p>
          
          <p className="text-lg text-white mb-8">
            Instead of the "project team" deciding everything, the community (token holders) votes on:
          </p>
        </div>
        
        <div className="space-y-6">
          <GradientCard className="bg-white text-gray-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <h3 className="text-xl font-bold">What features to prioritize</h3>
            </div>
          </GradientCard>
          
          <GradientCard className="bg-white text-gray-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <h3 className="text-xl font-bold">How to spend the treasury</h3>
            </div>
          </GradientCard>
          
          <GradientCard className="bg-white text-gray-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <h3 className="text-xl font-bold">Which partnerships to form</h3>
            </div>
          </GradientCard>
          
          <GradientCard className="bg-white text-gray-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <h3 className="text-xl font-bold">When to launch new phases or burns</h3>
            </div>
          </GradientCard>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Target className="w-8 h-8" />
            This means you're not just an "investor" — you're a partner and decision maker.
          </h3>
        </div>
      </div>
    </div>
  );
};
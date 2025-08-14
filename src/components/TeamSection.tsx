import { GradientCard } from "@/components/ui/gradient-card";
import itSpecialist from "@/assets/dolphin-it-specialist.png";
import cryptoAdvisor from "@/assets/dolphin-crypto-advisor.png";
import marketingSpecialist from "@/assets/dolphin-marketing.png";
import cpaAccountant from "@/assets/dolphin-cpa.png";

export const TeamSection = () => {
  return (
    <div className="bg-gradient-primary p-6 space-y-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white mb-8">
            Meet our team
          </h2>
          
          <p className="text-lg text-white/90 leading-relaxed max-w-4xl mx-auto mb-12">
            At Dolphin, we are proud to introduce a diverse team of professionals dedicated to driving 
            innovation and success in the blockchain and e-commerce spaces. Each team member brings 
            unique expertise and a passion for excellence, ensuring that Dolphin remains at the forefront of 
            industry advancements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* IT Specialist */}
          <div className="bg-white rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-secondary p-2">
                <img 
                  src={itSpecialist} 
                  alt="IT Specialist" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800">IT Specialist</h3>
              
              <p className="text-gray-600 leading-relaxed">
                Our IT Specialist ensures that all our technological operations run smoothly and 
                efficiently. With a keen eye for detail and a deep understanding of complex systems, they 
                are the backbone of our digital infrastructure, ensuring robust security and seamless 
                functionality.
              </p>
            </div>
          </div>
          
          {/* Crypto Advisor */}
          <div className="bg-white rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-secondary p-2">
                <img 
                  src={cryptoAdvisor} 
                  alt="Crypto Advisor" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800">Crypto Advisor</h3>
              
              <p className="text-gray-600 leading-relaxed">
                Our Crypto Advisor provides invaluable insights into the cryptocurrency landscape, helping us 
                navigate the complexities of the blockchain world. Their expertise in crypto economics and 
                market trends ensures that Dolphin remains a leader in the token economy.
              </p>
            </div>
          </div>
          
          {/* Digital Marketing Specialist */}
          <div className="bg-white rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-secondary p-2">
                <img 
                  src={marketingSpecialist} 
                  alt="Digital Marketing Specialist" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800">Digital Marketing Specialist</h3>
              
              <p className="text-gray-600 leading-relaxed">
                The Digital Marketing Specialist crafts and executes effective marketing strategies to 
                enhance our online presence and engage with our audience. Their innovative approach and 
                deep understanding of digital trends help us connect with the right audience and drive our 
                growth.
              </p>
            </div>
          </div>
          
          {/* CPA Certified Public Accountant */}
          <div className="bg-white rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-secondary p-2">
                <img 
                  src={cpaAccountant} 
                  alt="CPA Certified Public Accountant" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800">CPA Certified Public Accountant</h3>
              
              <p className="text-gray-600 leading-relaxed">
                Our Certified Public Accountant brings professional financial expertise and regulatory 
                compliance knowledge to the Dolphin project. With extensive experience in financial auditing, 
                tax planning, and corporate finance, they ensure our financial operations meet the 
                highest standards of transparency and accountability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
import { GradientCard } from "@/components/ui/gradient-card";
import itSpecialist from "@/assets/dolphin-it-specialist.png";
import cryptoAdvisor from "@/assets/dolphin-crypto-advisor.png";
import marketingSpecialist from "@/assets/dolphin-marketing.png";
import cpaAccountant from "@/assets/dolphin-cpa.png";
import blockchainDev from "@/assets/dolphin-blockchain-dev.png";
import designer from "@/assets/dolphin-designer.png";
import communityManager from "@/assets/dolphin-community-manager.png";
import legalAdvisor from "@/assets/dolphin-legal-advisor.png";
import businessDev from "@/assets/dolphin-business-dev.png";
import productManager from "@/assets/dolphin-product-manager.png";

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
          
          {/* Blockchain Developer */}
          <div className="bg-white rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-secondary p-2">
                <img 
                  src={blockchainDev} 
                  alt="Blockchain Developer" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800">Blockchain Developer</h3>
              
              <p className="text-gray-600 leading-relaxed">
                Our Blockchain Developer is the architect behind Dolphin's innovative smart contracts and 
                decentralized solutions. With expertise in Solana programming and DeFi protocols, they 
                ensure our blockchain infrastructure is secure, scalable, and cutting-edge.
              </p>
            </div>
          </div>
          
          {/* UI/UX Designer */}
          <div className="bg-white rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-secondary p-2">
                <img 
                  src={designer} 
                  alt="UI/UX Designer" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800">UI/UX Designer</h3>
              
              <p className="text-gray-600 leading-relaxed">
                Our UI/UX Designer creates intuitive and beautiful user experiences that make blockchain 
                technology accessible to everyone. Their design philosophy focuses on simplicity, 
                elegance, and user-centered design principles.
              </p>
            </div>
          </div>
          
          {/* Community Manager */}
          <div className="bg-white rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-secondary p-2">
                <img 
                  src={communityManager} 
                  alt="Community Manager" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800">Community Manager</h3>
              
              <p className="text-gray-600 leading-relaxed">
                Our Community Manager builds and nurtures the Dolphin ecosystem, engaging with our 
                global community across all platforms. They foster meaningful connections and ensure 
                every community member feels valued and heard.
              </p>
            </div>
          </div>
          
          {/* Legal Advisor */}
          <div className="bg-white rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-secondary p-2">
                <img 
                  src={legalAdvisor} 
                  alt="Legal Advisor" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800">Legal Advisor</h3>
              
              <p className="text-gray-600 leading-relaxed">
                Our Legal Advisor ensures Dolphin operates within all regulatory frameworks while 
                pioneering innovative blockchain solutions. With expertise in crypto law and compliance, 
                they guide us through the evolving legal landscape of digital assets.
              </p>
            </div>
          </div>
          
          {/* Business Development Manager */}
          <div className="bg-white rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-secondary p-2">
                <img 
                  src={businessDev} 
                  alt="Business Development Manager" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800">Business Development Manager</h3>
              
              <p className="text-gray-600 leading-relaxed">
                Our Business Development Manager identifies strategic partnerships and growth 
                opportunities that expand Dolphin's reach and impact. They build relationships with key 
                stakeholders and drive initiatives that accelerate our mission.
              </p>
            </div>
          </div>
          
          {/* Product Manager */}
          <div className="bg-white rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-secondary p-2">
                <img 
                  src={productManager} 
                  alt="Product Manager" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800">Product Manager</h3>
              
              <p className="text-gray-600 leading-relaxed">
                Our Product Manager orchestrates the development roadmap and ensures every feature 
                aligns with user needs and business objectives. They bridge the gap between vision 
                and execution, delivering products that truly make a difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
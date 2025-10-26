import { GradientCard } from "@/components/ui/gradient-card";
import { Users, Briefcase, Code, Megaphone, Scale } from "lucide-react";

export const TeamSection = () => {
  console.log('TeamSection loaded');
  
  const teamMembers = [
    {
      icon: Briefcase,
      title: "Founder & CEO",
      description: "A certified public accountant (CPA) and the owner of a licensed auditing firm, with strong experience in finance, compliance, and corporate management. Leads the overall vision, planning, and development of the project, ensuring transparency and long-term growth."
    },
    {
      icon: Code,
      title: "Developer",
      description: "A skilled developer with solid experience in software and blockchain-related projects. Responsible for building, maintaining, and improving the project's technical infrastructure and ensuring smooth operation across all platforms."
    },
    {
      icon: Megaphone,
      title: "Marketing Manager",
      description: "An experienced marketing professional with a background in community engagement, creative campaigns, and online promotion. Focused on expanding brand awareness and maintaining a strong connection with the global community."
    },
    {
      icon: Scale,
      title: "Legal Advisor",
      description: "A professional legal consultant with expertise in fintech and digital-asset compliance. Provides guidance on legal structure, partnership agreements, and ensures that all operations follow international standards."
    }
  ];

  return (
    <div className="bg-gradient-secondary py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Users className="w-12 h-12 text-primary" />
            <h2 className="text-5xl font-bold text-foreground">Our Team</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated professionals behind Dolphin Solana, committed to building a transparent and innovative future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <GradientCard key={index} className="p-8 hover-lift">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{member.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </GradientCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

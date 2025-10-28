import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  console.log('ContactSection rendering');
  return (
    <div className="bg-gradient-primary p-6 space-y-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white mb-8">
            Contact Us
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            Have questions or feedback? We'd love to hear from you!
          </p>
          
          <p className="text-lg text-white/80 leading-relaxed mb-12">
            Have questions or feedback? We'd love to hear from you! Reach out to us at{" "}
            <span className="text-yellow-300 font-semibold">dolphinmemetoken@gmail.com</span>{" "}
            to connect with the team!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur-sm">
            <Mail className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
            <p className="text-white/80">dolphinmemetoken@gmail.com</p>
          </div>
          
          <div className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur-sm">
            <MapPin className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
            <p className="text-white/80">Solana Blockchain</p>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  );
};
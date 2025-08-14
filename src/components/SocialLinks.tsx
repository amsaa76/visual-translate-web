import { Twitter, MessageCircle, Youtube, Instagram, Link } from "lucide-react";

export const SocialLinks = () => {
  return (
    <div className="bg-gradient-primary p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">Follow Us:</h3>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
              <Twitter className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-blue-400 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
              <Link className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
              <Youtube className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
              <Instagram className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
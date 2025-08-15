import { Twitter, MessageCircle, Link, Youtube, Instagram } from "lucide-react";

export const SocialLinks = () => {
  return (
    <div className="bg-gradient-to-b from-purple-600 to-blue-600 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-8 mb-8">
          <a 
            href="#" 
            className="bg-white/20 p-4 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
            aria-label="Twitter"
          >
            <Twitter className="w-8 h-8 text-white" />
          </a>
          
          <a 
            href="#" 
            className="bg-white/20 p-4 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </a>
          
          <a 
            href="#" 
            className="bg-white/20 p-4 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
            aria-label="Telegram"
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </a>
          
          <a 
            href="#" 
            className="bg-white/20 p-4 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
            aria-label="Website"
          >
            <Link className="w-8 h-8 text-white" />
          </a>
          
          <a 
            href="#" 
            className="bg-white/20 p-4 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
            aria-label="YouTube"
          >
            <Youtube className="w-8 h-8 text-white" />
          </a>
          
          <a 
            href="#" 
            className="bg-white/20 p-4 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
            aria-label="Instagram"
          >
            <Instagram className="w-8 h-8 text-white" />
          </a>
        </div>
        
        <p className="text-white text-lg font-medium">
          © 2024 Dolphin Meme Token. All rights reserved.
        </p>
      </div>
    </div>
  );
};
import { Twitter, MessageCircle, Users, Video, Instagram } from "lucide-react";

export const SocialLinks = () => {
  return (
    <div className="bg-gradient-to-b from-purple-600 to-blue-600 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          <a 
            href="https://x.com/DolphinSolana24?s=09"
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-white/20 p-4 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
            aria-label="Twitter/X"
          >
            <Twitter className="w-8 h-8 text-white" />
          </a>
          
          <a 
            href="https://t.me/DolphineSolana2"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 p-4 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
            aria-label="Telegram Chat"
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </a>
          
          <a 
            href="https://t.me/DolphinSolana1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 p-4 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
            aria-label="Telegram Announcements"
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </a>
          
          <a 
            href="https://discord.gg/JyupxNjPDH"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 p-4 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
            aria-label="Discord Server"
          >
            <Users className="w-8 h-8 text-white" />
          </a>
          
          <a 
            href="https://www.tiktok.com/@dolphinsolana?_t=ZS-8yP30gpTyVD"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 p-4 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
            aria-label="TikTok"
          >
            <Video className="w-8 h-8 text-white" />
          </a>
          
          <a 
            href="https://www.instagram.com/dolphinsolana?igsh=b3ZtYXB1dHY3OWxk"
            target="_blank"
            rel="noopener noreferrer"
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
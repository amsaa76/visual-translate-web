import { Twitter, MessageCircle, Users, Video, Instagram } from "lucide-react";

export const SocialLinks = () => {
  return (
    <section className="bg-gradient-primary p-8 min-h-[200px]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary-foreground mb-6">
          تابعنا على وسائل التواصل الاجتماعي
        </h2>
        
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          <a 
            href="https://x.com/DolphinSolana24?s=09"
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-primary-foreground/20 p-4 rounded-full hover:bg-primary-foreground/30 transition-all duration-300 backdrop-blur-sm hover:scale-110 hover:shadow-glow"
            aria-label="Twitter/X"
          >
            <Twitter className="w-8 h-8 text-primary-foreground" />
          </a>
          
          <a 
            href="https://t.me/DolphineSolana2"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground/20 p-4 rounded-full hover:bg-primary-foreground/30 transition-all duration-300 backdrop-blur-sm hover:scale-110 hover:shadow-glow"
            aria-label="Telegram Chat"
          >
            <MessageCircle className="w-8 h-8 text-primary-foreground" />
          </a>
          
          <a 
            href="https://t.me/DolphinSolana1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground/20 p-4 rounded-full hover:bg-primary-foreground/30 transition-all duration-300 backdrop-blur-sm hover:scale-110 hover:shadow-glow"
            aria-label="Telegram Announcements"
          >
            <MessageCircle className="w-8 h-8 text-primary-foreground" />
          </a>
          
          <a 
            href="https://discord.gg/JyupxNjPDH"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground/20 p-4 rounded-full hover:bg-primary-foreground/30 transition-all duration-300 backdrop-blur-sm hover:scale-110 hover:shadow-glow"
            aria-label="Discord Server"
          >
            <Users className="w-8 h-8 text-primary-foreground" />
          </a>
          
          <a 
            href="https://www.tiktok.com/@dolphinsolana?_t=ZS-8yP30gpTyVD"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground/20 p-4 rounded-full hover:bg-primary-foreground/30 transition-all duration-300 backdrop-blur-sm hover:scale-110 hover:shadow-glow"
            aria-label="TikTok"
          >
            <Video className="w-8 h-8 text-primary-foreground" />
          </a>
          
          <a 
            href="https://www.instagram.com/dolphinsolana?igsh=b3ZtYXB1dHY3OWxk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground/20 p-4 rounded-full hover:bg-primary-foreground/30 transition-all duration-300 backdrop-blur-sm hover:scale-110 hover:shadow-glow"
            aria-label="Instagram"
          >
            <Instagram className="w-8 h-8 text-primary-foreground" />
          </a>
        </div>
        
        <p className="text-primary-foreground/80 text-lg font-medium">
          © 2024 Dolphin Meme Token. All rights reserved.
        </p>
      </div>
    </section>
  );
};
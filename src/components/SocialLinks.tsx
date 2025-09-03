import { Twitter, MessageCircle, Users, Video, Instagram } from "lucide-react";

export const SocialLinks = () => {
  return (
    <section className="bg-gradient-primary p-12 min-h-[400px]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary-foreground mb-4">
          Follow Us on Social Media
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-10">
          Join the Dolphin Solana community on all platforms
        </p>
        
        <div className="flex justify-center gap-8 mb-12 flex-wrap">
          <a 
            href="https://x.com/DolphinSolana24?s=09"
            target="_blank"
            rel="noopener noreferrer" 
            className="group bg-card/10 border border-primary-foreground/20 p-6 rounded-2xl hover:bg-card/20 transition-all duration-300 backdrop-blur-md hover:scale-110 hover:shadow-glow"
            aria-label="Twitter/X"
          >
            <Twitter className="w-10 h-10 text-primary-foreground group-hover:scale-110 transition-transform" />
            <p className="text-primary-foreground text-sm mt-2 font-medium">Twitter</p>
          </a>
          
          <a 
            href="https://t.me/DolphineSolana2"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card/10 border border-primary-foreground/20 p-6 rounded-2xl hover:bg-card/20 transition-all duration-300 backdrop-blur-md hover:scale-110 hover:shadow-glow"
            aria-label="Telegram Chat"
          >
            <MessageCircle className="w-10 h-10 text-primary-foreground group-hover:scale-110 transition-transform" />
            <p className="text-primary-foreground text-sm mt-2 font-medium">Telegram</p>
          </a>
          
          <a 
            href="https://t.me/DolphinSolana1"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card/10 border border-primary-foreground/20 p-6 rounded-2xl hover:bg-card/20 transition-all duration-300 backdrop-blur-md hover:scale-110 hover:shadow-glow"
            aria-label="Telegram Announcements"
          >
            <MessageCircle className="w-10 h-10 text-primary-foreground group-hover:scale-110 transition-transform" />
            <p className="text-primary-foreground text-sm mt-2 font-medium">Announcements</p>
          </a>
          
          <a 
            href="https://discord.gg/JyupxNjPDH"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card/10 border border-primary-foreground/20 p-6 rounded-2xl hover:bg-card/20 transition-all duration-300 backdrop-blur-md hover:scale-110 hover:shadow-glow"
            aria-label="Discord Server"
          >
            <Users className="w-10 h-10 text-primary-foreground group-hover:scale-110 transition-transform" />
            <p className="text-primary-foreground text-sm mt-2 font-medium">Discord</p>
          </a>
          
          <a 
            href="https://www.tiktok.com/@dolphinsolana?_t=ZS-8yP30gpTyVD"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card/10 border border-primary-foreground/20 p-6 rounded-2xl hover:bg-card/20 transition-all duration-300 backdrop-blur-md hover:scale-110 hover:shadow-glow"
            aria-label="TikTok"
          >
            <Video className="w-10 h-10 text-primary-foreground group-hover:scale-110 transition-transform" />
            <p className="text-primary-foreground text-sm mt-2 font-medium">TikTok</p>
          </a>
          
          <a 
            href="https://www.instagram.com/dolphinsolana?igsh=b3ZtYXB1dHY3OWxk"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card/10 border border-primary-foreground/20 p-6 rounded-2xl hover:bg-card/20 transition-all duration-300 backdrop-blur-md hover:scale-110 hover:shadow-glow"
            aria-label="Instagram"
          >
            <Instagram className="w-10 h-10 text-primary-foreground group-hover:scale-110 transition-transform" />
            <p className="text-primary-foreground text-sm mt-2 font-medium">Instagram</p>
          </a>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-primary-foreground/70 text-lg font-medium">
            © 2025 Dolphin Solana Token. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
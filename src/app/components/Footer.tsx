import { Terminal, Instagram, Github, Linkedin, MessageCircle, Heart } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/terminal_4.0.4/",
    icon: Instagram,
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/5532991547944",
    icon: MessageCircle,
  },
  {
    name: "GitHub",
    url: "https://github.com/Terminllocal404",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/posts/terminal-404_terminal404-linkedin-activity-7419888008151261184-qFpP",
    icon: Linkedin,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#02040A] border-t border-[#00E5FF]/10 py-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px max-w-7xl bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/" className="flex items-center gap-3 group">
              <ImageWithFallback 
                src="https://available-aquamarine-lziqbpkvhg.edgeone.app/Untitled_design_1.png"
                alt="Terminal 404 Logo"
                className="w-[20%] h-auto object-contain drop-shadow-[0_0_8px_rgba(0,229,255,0.4)] group-hover:drop-shadow-[0_0_15px_rgba(0,229,255,0.8)] transition-all duration-300 transform group-hover:scale-105"
              />
              <span className="text-2xl font-black tracking-tight text-white group-hover:text-[#00E5FF] transition-colors duration-300">
                Terminal 404
              </span>
            </Link>
            <p className="text-[#8B949E] text-sm text-center md:text-left max-w-sm leading-relaxed">
              Construindo o futuro digital através de engenharia de software de alta performance, arquitetura escalável e inovação tecnológica colaborativa.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end gap-5">
            <span className="text-[#6E7681] font-mono font-semibold text-xs uppercase tracking-widest flex items-center gap-3">
              <span className="w-8 h-px bg-[#00E5FF]/30" />
              Nossas Redes
            </span>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-[#0B0F1A] border border-[#00E5FF]/20 flex items-center justify-center text-[#8B949E] hover:text-[#02040A] hover:border-[#00E5FF] hover:bg-[#00E5FF] hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:-translate-y-1 transition-all duration-300 group"
                    title={social.name}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[#8B949E] text-center md:text-left flex items-center gap-1.5 justify-center md:justify-start">
            © {currentYear} Terminal 404. Construído com <Heart className="w-3.5 h-3.5 text-[#00E5FF]" /> pela equipe fundadora.
          </p>
          
          <div className="flex items-center gap-6">
            <Link to="/termos" className="text-sm font-medium text-[#8B949E] hover:text-[#00E5FF] transition-colors">
              Termos de Uso
            </Link>
            <div className="w-1 h-1 rounded-full bg-[#00E5FF]/30" />
            <Link to="/privacidade" className="text-sm font-medium text-[#8B949E] hover:text-[#00E5FF] transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

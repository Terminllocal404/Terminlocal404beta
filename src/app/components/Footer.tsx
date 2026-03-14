import { Instagram, Github, Linkedin, MessageCircle } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/terminal_4.0.4/", icon: Instagram },
  { name: "WhatsApp", url: "https://wa.me/553291547944?text=Seja%20bem-vindo!%20Faça%20o%20seu%20projeto%20conosco.", icon: MessageCircle },
  { name: "GitHub", url: "https://github.com/Terminllocal404", icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/posts/terminal-404_terminal404-linkedin-activity-7419888008151261184-qFpP", icon: Linkedin },
];

const footerLinks = [
  { name: "Sobre", href: "/sobre" },
  { name: "Soluções", href: "/servicos" },
  { name: "Projetos", href: "/projetos" },
  { name: "Comunidade", href: "/comunidade" },
  { name: "FAQ", href: "/faq" },
  { name: "Contato", href: "/contato" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020408] border-t border-white/[0.04] pt-14 md:pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-[#00E5FF]/15 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-10 md:mb-12">
          {/* Brand with Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex flex-col items-center gap-2 group mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-[#00E5FF]/10 blur-[10px] rounded-full group-hover:bg-[#00E5FF]/30 transition-all duration-300" />
                <ImageWithFallback
                  src="https://available-aquamarine-lziqbpkvhg.edgeone.app/Untitled_design_1.png"
                  alt="Terminal 404"
                  className="relative z-10 h-10 w-auto object-contain drop-shadow-[0_0_12px_rgba(0,229,255,0.4)]"
                />
              </div>
              <span
                className="text-[13px] font-bold tracking-[0.2em] text-[#00E5FF] uppercase drop-shadow-[0_0_8px_rgba(0,229,255,0.3)] transition-colors duration-300"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Terminal 404
              </span>
            </Link>
            <p className="text-white text-[12px] text-center md:text-left max-w-[260px] leading-[1.65]">
              Engenharia de software de alta performance e arquitetura escalável para o futuro digital.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start" />

          {/* Social */}
          <div className="flex flex-col items-center md:items-end">
            <span
              className="text-white text-[10px] uppercase tracking-wider mb-3"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Conectar
            </span>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/[0.025] border border-white/[0.05] flex items-center justify-center text-white hover:text-[#00E5FF] hover:border-[#00E5FF]/15 hover:bg-[#00E5FF]/[0.04] active:scale-95 transition-all duration-300"
                    title={social.name}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-5" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <p className="text-[11px] text-white/12 text-center sm:text-left">
            &copy; {currentYear} Terminal 404. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/termos" className="text-[11px] text-white/12 hover:text-[#00E5FF]/40 transition-colors">
              Termos
            </Link>
            <div className="w-0.5 h-0.5 rounded-full bg-white/8" />
            <Link to="/privacidade" className="text-[11px] text-white/12 hover:text-[#00E5FF]/40 transition-colors">
              Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
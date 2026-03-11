import { useState, useEffect } from "react";
import { Terminal, Menu, X, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Soluções", href: "/servicos" },
    { name: "Comunidade", href: "/comunidade" },
    { name: "Contato", href: "/contato" },
  ];

  const isCurrentPage = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#02040A]/80 backdrop-blur-xl border-b border-[#00E5FF]/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <ImageWithFallback 
            src="https://available-aquamarine-lziqbpkvhg.edgeone.app/Untitled_design_1.png"
            alt="Terminal 404 Logo"
            className="h-12 w-auto object-contain drop-shadow-[0_0_8px_rgba(0,229,255,0.4)] group-hover:drop-shadow-[0_0_15px_rgba(0,229,255,0.8)] transition-all duration-300 transform group-hover:scale-105 mx-[9px]"
          />
          <span className="text-xl font-black tracking-tight text-white group-hover:text-[#00E5FF] transition-colors duration-300 hidden sm:block">
            Terminal 404
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-semibold tracking-wide transition-all duration-300 relative group ${
                isCurrentPage(link.href)
                  ? "text-[#00E5FF]"
                  : "text-[#8B949E] hover:text-white"
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-[#00E5FF] transition-all duration-300 ${
                isCurrentPage(link.href) ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>
          ))}
          <div className="w-px h-6 bg-white/10" />
          <Link
            to="/solicitacao"
            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#00E5FF]/10 to-transparent text-[#00E5FF] border border-[#00E5FF]/30 hover:bg-[#00E5FF] hover:text-[#02040A] hover:border-[#00E5FF] hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-300 text-sm font-bold uppercase tracking-widest flex items-center gap-2 group"
          >
            Iniciar Projeto
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg bg-[#00E5FF]/5 border border-[#00E5FF]/20 text-[#00E5FF] hover:bg-[#00E5FF]/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#02040A]/95 backdrop-blur-xl border-b border-[#00E5FF]/20 flex flex-col px-6 py-8 gap-6 shadow-2xl h-[calc(100vh-80px)]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-lg font-bold tracking-wide transition-colors flex items-center gap-4 ${
                isCurrentPage(link.href)
                  ? "text-[#00E5FF]"
                  : "text-[#8B949E] hover:text-white"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className={`w-2 h-2 rounded-full ${isCurrentPage(link.href) ? 'bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]' : 'bg-transparent'}`} />
              {link.name}
            </Link>
          ))}
          <div className="w-full h-px bg-white/5 my-4" />
          <Link
            to="/solicitacao"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full px-6 py-4 rounded-xl bg-[#00E5FF] text-[#02040A] transition-all text-sm font-black uppercase tracking-widest text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.2)]"
          >
            Iniciar Projeto
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      )}
    </header>
  );
}

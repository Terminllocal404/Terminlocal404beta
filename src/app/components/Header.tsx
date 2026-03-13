import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Soluções", href: "/servicos" },
    { name: "Comunidade", href: "/comunidade" },
    { name: "Contato", href: "/contato" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "bg-[#020408]/80 backdrop-blur-2xl border-b border-[#00E5FF]/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "h-16" : "h-20 md:h-24"}`}>
            {/* Mobile hamburger */}
            <button
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] text-white/50 active:scale-95 transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Desktop Nav Left */}
            <nav className="hidden lg:flex items-center gap-1 flex-1">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-4 py-2 rounded-lg text-[13px] font-medium tracking-wide transition-all duration-300 ${
                    isActive(link.href)
                      ? "text-[#00E5FF]"
                      : "text-white/40 hover:text-white/80"
                  }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-[2px] rounded-full bg-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.6)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Center Brand — Logo empilhado */}
            <Link to="/" className="flex flex-col items-center group shrink-0">
              <ImageWithFallback
                src="https://available-aquamarine-lziqbpkvhg.edgeone.app/Untitled_design_1.png"
                alt="Terminal 404 Logo"
                className={`w-auto object-contain transition-all duration-500 drop-shadow-[0_0_8px_rgba(0,229,255,0.35)] group-hover:drop-shadow-[0_0_16px_rgba(0,229,255,0.6)] ${
                  scrolled ? "h-8" : "h-9 md:h-11"
                }`}
              />
              <span
                className={`font-semibold tracking-[0.22em] text-white/90 group-hover:text-[#00E5FF] transition-all duration-300 uppercase ${
                  scrolled ? "text-[9px] mt-0.5" : "text-[10px] md:text-[11px] mt-1"
                }`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Terminal 404
              </span>
            </Link>

            {/* Desktop Nav Right */}
            <div className="hidden lg:flex items-center gap-1 flex-1 justify-end">
              {navLinks.slice(3).map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-4 py-2 rounded-lg text-[13px] font-medium tracking-wide transition-all duration-300 ${
                    isActive(link.href)
                      ? "text-[#00E5FF]"
                      : "text-white/40 hover:text-white/80"
                  }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-[2px] rounded-full bg-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.6)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              <div className="w-px h-5 bg-white/[0.06] mx-2" />
              <Link
                to="/solicitacao"
                className="group px-5 py-2.5 rounded-xl text-[12px] font-semibold uppercase tracking-[0.12em] bg-[#00E5FF] text-[#020408] hover:shadow-[0_0_24px_rgba(0,229,255,0.35)] active:scale-[0.97] transition-all duration-300 flex items-center gap-2"
              >
                Iniciar Projeto
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>

            {/* Mobile CTA */}
            <Link
              to="/solicitacao"
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-[#00E5FF] active:scale-95 transition-all"
            >
              <ArrowUpRight className="w-4.5 h-4.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#020408]/[0.97] backdrop-blur-3xl"
          >
            <div className="flex flex-col h-full pt-28 pb-8 px-6 safe-area-inset-bottom">
              <div className="flex-1 flex flex-col justify-center -mt-10">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + i * 0.06, duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                  >
                    <Link
                      to={link.href}
                      className={`flex items-center justify-between py-4 px-3 rounded-2xl transition-all duration-300 group active:scale-[0.98] ${
                        isActive(link.href) ? "bg-[#00E5FF]/[0.05]" : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-2 h-2 rounded-full transition-all duration-400 ${
                          isActive(link.href)
                            ? "bg-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.8)]"
                            : "bg-white/[0.08]"
                        }`} />
                        <span
                          className={`text-[22px] font-semibold tracking-tight transition-colors ${
                            isActive(link.href) ? "text-[#00E5FF]" : "text-white/60"
                          }`}
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {link.name}
                        </span>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-colors ${
                        isActive(link.href) ? "text-[#00E5FF]/40" : "text-white/[0.06]"
                      }`} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.35 }}
              >
                <Link
                  to="/solicitacao"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full h-14 rounded-2xl bg-[#00E5FF] text-[#020408] text-sm font-bold uppercase tracking-[0.12em] flex items-center justify-center gap-2.5 active:scale-[0.97] transition-transform shadow-[0_0_30px_rgba(0,229,255,0.15)]"
                >
                  Iniciar Projeto
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

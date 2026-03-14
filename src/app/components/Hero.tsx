import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[#020408]">
      {/* Animated background layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary radial glow */}
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] md:w-[100vw] h-[70vh] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.12),transparent_60%)] blur-[80px]" />
        
        {/* Secondary glow - blue accent */}
        <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vh] bg-[radial-gradient(ellipse_at_center,rgba(0,100,255,0.06),transparent_70%)] blur-[80px]" />
        
        {/* Purple accent glow */}
        <div className="absolute top-[60%] left-[5%] w-[30vw] h-[30vh] bg-[radial-gradient(ellipse_at_center,rgba(100,0,255,0.04),transparent_70%)] blur-[60px]" />

        {/* Grid pattern with mask */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(0,229,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.6)_1px,transparent_1px)] bg-[size:48px_48px] md:bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_20%,transparent_100%)]" />

        {/* Floating particles effect */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[15%] w-1 h-1 rounded-full bg-[#00E5FF]/30"
        />
        <motion.div
          animate={{ y: [15, -15, 15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[35%] right-[20%] w-1.5 h-1.5 rounded-full bg-[#00E5FF]/20"
        />
        <motion.div
          animate={{ y: [-10, 25, -10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[65%] left-[70%] w-1 h-1 rounded-full bg-[#0080FF]/25"
        />
        <motion.div
          animate={{ y: [10, -20, 10] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[50%] left-[25%] w-0.5 h-0.5 rounded-full bg-[#00E5FF]/40"
        />

        {/* Corner accents - tech frame */}
        <div className="absolute top-0 left-0 w-24 md:w-40 h-24 md:h-40 border-l border-t border-[#00E5FF]/[0.06]" />
        <div className="absolute top-0 right-0 w-24 md:w-40 h-24 md:h-40 border-r border-t border-[#00E5FF]/[0.06]" />
        <div className="absolute bottom-0 left-0 w-24 md:w-40 h-24 md:h-40 border-l border-b border-[#00E5FF]/[0.04]" />
        <div className="absolute bottom-0 right-0 w-24 md:w-40 h-24 md:h-40 border-r border-b border-[#00E5FF]/[0.04]" />

        {/* Horizontal scan lines */}
        <div className="absolute top-[15%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00E5FF]/[0.04] to-transparent" />
        <div className="absolute top-[85%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00E5FF]/[0.04] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10 w-full flex flex-col items-center text-center pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Logo + Company Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center mb-8 md:mb-12"
        >
          {/* Official Logo with animated glow */}
          <div className="relative flex justify-center items-center mb-6 md:mb-8 w-full z-20">
            <div className="absolute w-32 h-32 md:w-44 md:h-44 rounded-full bg-[#00E5FF]/[0.06] blur-[60px] animate-[pulse-glow_4s_ease-in-out_infinite]" />
            <ImageWithFallback
              src="https://available-aquamarine-lziqbpkvhg.edgeone.app/Untitled_design_1.png"
              alt="Terminal 404 Official Logo"
              className="w-auto h-32 md:h-40 lg:h-48 object-contain drop-shadow-[0_0_30px_rgba(0,229,255,0.25)] relative z-10"
            />
          </div>

          {/* Company Name with layered glow */}
          <h1
            className="text-[2.5rem] leading-[1.1] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold tracking-[0.04em] text-white mb-3 md:mb-4 relative"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="relative inline-block">
              TERMINAL
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#0080FF]"> 404</span>
              {/* Text glow */}
              <span className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-r from-[#00E5FF] to-[#0080FF] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] pointer-events-none" aria-hidden>
                TERMINAL 404
              </span>
            </span>
          </h1>

          {/* Tagline with decorative lines */}
          <div
            className="text-[#00E5FF]/80 text-[10px] md:text-[12px] font-medium tracking-[0.3em] uppercase flex items-center gap-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent to-[#00E5FF]/50" />
            <span>Engenharia de Software</span>
            <div className="w-8 md:w-12 h-px bg-gradient-to-l from-transparent to-[#00E5FF]/50" />
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[15px] sm:text-lg md:text-xl text-white/40 max-w-2xl md:max-w-3xl mb-10 md:mb-14 leading-[1.7]"
        >
          Transformamos ideias em solucoes digitais de alto impacto com arquitetura escalavel, 
          codigo limpo e tecnologias de ponta para impulsionar o seu negocio.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-16 md:mb-20"
        >
          <a
            href="https://wa.me/553291547944?text=Seja%20bem-vindo!%20Faça%20o%20seu%20projeto%20conosco."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-14 px-8 bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#020408] font-semibold text-[14px] tracking-wide flex items-center justify-center gap-2.5 hover:shadow-[0_4px_35px_rgba(0,229,255,0.4)] active:scale-[0.97] transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Iniciar Projeto</span>
          </a>

          <Link
            to="/servicos"
            className="group w-full sm:w-auto h-13 px-8 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/55 font-medium text-[14px] tracking-wide flex items-center justify-center gap-2.5 hover:text-white hover:bg-white/[0.06] hover:border-[#00E5FF]/[0.15] active:scale-[0.97] transition-all duration-300"
          >
            Nossas Solucoes
            <ArrowRight className="w-4 h-4 text-[#00E5FF]/50 group-hover:text-[#00E5FF] group-hover:translate-x-0.5 transition-all duration-300" />
          </Link>
        </motion.div>

        {/* Trust Stats - Glassmorphism cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center justify-center gap-4 md:gap-6 flex-wrap"
        >
          {[
            { value: "50+", label: "Projetos" },
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "Suporte" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center px-5 py-3 rounded-xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm"
            >
              <span
                className="text-[#00E5FF] font-bold text-xl md:text-2xl tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {stat.value}
              </span>
              <span className="text-white/25 text-[10px] md:text-[11px] uppercase tracking-[0.15em] mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/15 text-[10px] uppercase tracking-[0.15em]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border border-white/[0.08] rounded-full flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-1.5 bg-[#00E5FF] rounded-full shadow-[0_0_6px_rgba(0,229,255,0.5)]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#020408] via-[#020408]/80 to-transparent pointer-events-none" />
    </section>
  );
}
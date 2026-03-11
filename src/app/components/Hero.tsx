import { motion } from "motion/react";
import { Link } from "react-router";
import { TerminalSquare, ChevronRight, Code2 } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex items-center justify-center pt-24 overflow-hidden bg-[#02040A]"
    >
      {/* Background Gradients & Tech effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00E5FF]/10 via-[#02040A]/0 to-transparent blur-[100px]" />
        
        {/* Modern Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#00E5FF 1px, transparent 1px), linear-gradient(90deg, #00E5FF 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            backgroundPosition: "center center",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center mt-12 md:mt-24">
        {/* Animated Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/5 text-[#00E5FF] text-xs font-mono font-semibold mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,229,255,0.1)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]"></span>
          </span>
          STATUS: SERVIDORES ONLINE
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white max-w-5xl mb-6 leading-[1.1]"
        >
          Terminal <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500 drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]">404</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-[#8B949E] font-medium max-w-4xl mb-4 leading-relaxed tracking-tight"
        >
          Construindo o futuro através de código, colaboração e inovação tecnológica.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-base md:text-lg text-[#6E7681] max-w-2xl mb-12 leading-relaxed"
        >
          Somos um hub de engenharia de software focado em arquitetura escalável, desenvolvimento colaborativo e soluções digitais de alto impacto.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
        >
          <Link
            to="/comunidade"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00E5FF] text-[#02040A] font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-all duration-300 transform hover:-translate-y-1"
          >
            <TerminalSquare className="w-5 h-5" />
            Ingressar na Comunidade
          </Link>
          <Link
            to="/servicos"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0B0F1A]/80 backdrop-blur-sm border border-[#00E5FF]/30 text-white font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:border-[#00E5FF] hover:bg-[#00E5FF]/10 transition-all duration-300 group transform hover:-translate-y-1 shadow-[0_0_0_rgba(0,229,255,0)] hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]"
          >
            <Code2 className="w-5 h-5 text-[#00E5FF]" />
            Nossas Soluções
            <ChevronRight className="w-5 h-5 text-[#00E5FF] group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Fade out at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#05070D] to-transparent pointer-events-none" />
    </section>
  );
}

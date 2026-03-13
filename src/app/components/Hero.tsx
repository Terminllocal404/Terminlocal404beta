import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[#020408]">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main glow — stronger for impact */}
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] md:w-[80vw] h-[50vh] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.12),transparent_65%)] blur-[80px]" />
        
        {/* Subtle secondary glow */}
        <div className="absolute bottom-[20%] left-[20%] w-[40vw] h-[30vh] bg-[radial-gradient(ellipse_at_center,rgba(0,100,255,0.06),transparent_70%)] blur-[60px]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(0,229,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.5)_1px,transparent_1px)] bg-[size:48px_48px] md:bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_45%,#000_25%,transparent_100%)]" />

        {/* Top line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00E5FF]/15 to-transparent" />

        {/* Side decorative lines */}
        <div className="hidden lg:block absolute top-[30%] left-0 w-px h-48 bg-gradient-to-b from-transparent via-[#00E5FF]/10 to-transparent" />
        <div className="hidden lg:block absolute top-[30%] right-0 w-px h-48 bg-gradient-to-b from-transparent via-[#00E5FF]/10 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-6 relative z-10 w-full flex flex-col items-center text-center pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00E5FF]/15 bg-[#00E5FF]/[0.04] backdrop-blur-lg text-[#00E5FF] text-[10px] md:text-[11px] font-medium tracking-[0.18em] mb-7 md:mb-9 uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF] shadow-[0_0_6px_#00E5FF]" />
          </span>
          Engenharia de Software
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-[2.5rem] leading-[1.08] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-bold tracking-[-0.025em] text-white max-w-[90vw] md:max-w-4xl mb-5 md:mb-7"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Transformamos ideias
          <br className="hidden sm:block" />
          {" "}em{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#00D0FF] to-[#0090FF]">
              tecnologia
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00E5FF]/80 via-[#00E5FF]/30 to-transparent rounded-full"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="text-[15px] sm:text-lg md:text-xl text-white/40 max-w-xl md:max-w-2xl mb-9 md:mb-12 leading-[1.7]"
        >
          Soluções digitais de alto impacto com arquitetura escalável e desenvolvimento de excelência para impulsionar o seu negócio.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <Link
            to="/solicitacao"
            className="group w-full sm:w-auto h-13 px-8 rounded-xl bg-[#00E5FF] text-[#020408] font-semibold text-[14px] tracking-wide flex items-center justify-center gap-2.5 hover:bg-[#2AECFF] hover:shadow-[0_4px_30px_rgba(0,229,255,0.35)] active:scale-[0.97] transition-all duration-300"
          >
            <Sparkles className="w-4 h-4" />
            Solicitar Projeto
          </Link>

          <Link
            to="/servicos"
            className="group w-full sm:w-auto h-13 px-8 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/55 font-medium text-[14px] tracking-wide flex items-center justify-center gap-2.5 hover:text-white hover:bg-white/[0.06] hover:border-white/[0.12] active:scale-[0.97] transition-all duration-300"
          >
            Ver Soluções
            <ArrowRight className="w-4 h-4 text-[#00E5FF]/50 group-hover:text-[#00E5FF] group-hover:translate-x-0.5 transition-all duration-300" />
          </Link>
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-14 md:mt-20 flex items-center justify-center gap-5 md:gap-8"
        >
          {[
            { value: "50+", label: "Projetos" },
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "Suporte" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-5 md:gap-8">
              {i > 0 && <div className="w-px h-5 bg-white/[0.06]" />}
              <div className="flex flex-col items-center">
                <span
                  className="text-white font-semibold text-lg md:text-xl tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {stat.value}
                </span>
                <span className="text-white/20 text-[10px] md:text-[11px] uppercase tracking-[0.15em] mt-0.5">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#020408] via-[#020408]/70 to-transparent pointer-events-none" />
    </section>
  );
}

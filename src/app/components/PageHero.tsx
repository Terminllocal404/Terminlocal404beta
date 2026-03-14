import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PageHeroProps {
  badge: string;
  title: string;
  highlight: string;
  titleSuffix?: string;
  description: string;
  children?: React.ReactNode;
}

export function PageHero({ badge, title, highlight, titleSuffix = "", description, children }: PageHeroProps) {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-[#020408]">
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] md:w-[80vw] h-[60vh] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.08),transparent_65%)] blur-[60px]" />
        <div className="absolute bottom-0 right-[5%] w-[40vw] h-[40vh] bg-[radial-gradient(ellipse_at_center,rgba(0,100,255,0.04),transparent_70%)] blur-[60px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,229,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.5)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_20%,transparent_100%)]" />
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-20 md:w-32 h-20 md:h-32 border-l border-t border-[#00E5FF]/[0.05]" />
        <div className="absolute top-0 right-0 w-20 md:w-32 h-20 md:h-32 border-r border-t border-[#00E5FF]/[0.05]" />
        {/* Scan lines */}
        <div className="absolute top-[30%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00E5FF]/[0.04] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10 flex flex-col items-center text-center">
        {/* Brand watermark - Centralized Logo + Name */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-3 mb-10 md:mb-12"
        >
          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-[#00E5FF]/20 blur-[25px] rounded-full animate-pulse" />
            <ImageWithFallback
              src="https://available-aquamarine-lziqbpkvhg.edgeone.app/Untitled_design_1.png"
              alt="Terminal 404"
              className="h-16 md:h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,229,255,0.7)] relative z-10"
            />
          </div>
          <span
            className="text-[12px] md:text-[14px] font-bold text-[#00E5FF] uppercase tracking-[0.3em] drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Terminal 404
          </span>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-6 flex justify-center"
        >
          <span
            className="inline-flex items-center gap-2 text-[#00E5FF] text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] bg-[#00E5FF]/[0.05] px-4 py-1.5 rounded-full border border-[#00E5FF]/[0.1]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_6px_rgba(0,229,255,0.6)]" />
            {badge}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-5 tracking-tight leading-[1.1] max-w-4xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#0080FF]">
            {highlight}
          </span>
          {titleSuffix}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[15px] md:text-lg text-white/35 max-w-2xl leading-[1.7] mb-8"
        >
          {description}
        </motion.p>

        {/* Optional children (breadcrumbs, CTAs, etc.) */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#00E5FF]/12 to-transparent" />
    </section>
  );
}

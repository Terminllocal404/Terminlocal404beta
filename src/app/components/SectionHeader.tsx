import { motion } from "motion/react";

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlight: string;
  titleSuffix?: string;
  description: string;
  align?: "center" | "left";
  number?: string;
}

export function SectionHeader({ badge, title, highlight, titleSuffix = "", description, align = "center", number }: SectionHeaderProps) {
  return (
    <div className={`${align === "center" ? "text-center max-w-3xl mx-auto" : ""} mb-14 md:mb-20`}>
      <div className={`flex items-center gap-3 mb-5 ${align === "center" ? "justify-center" : ""}`}>
        {number && (
          <span
            className="text-[#00E5FF]/15 text-[11px] font-bold tracking-[0.2em] uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {number}
          </span>
        )}
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-[#00E5FF] text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] bg-[#00E5FF]/[0.05] px-4 py-1.5 rounded-full border border-[#00E5FF]/[0.1]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_6px_rgba(0,229,255,0.6)]" />
          {badge}
        </motion.span>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[1.75rem] sm:text-4xl md:text-[2.75rem] font-bold text-white mb-4 tracking-tight leading-[1.15]"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {title}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#0080FF]">
          {highlight}
        </span>
        {titleSuffix}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[15px] md:text-base text-white/35 leading-relaxed"
      >
        {description}
      </motion.p>
    </div>
  );
}

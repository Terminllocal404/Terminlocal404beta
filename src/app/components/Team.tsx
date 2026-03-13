import { motion } from "motion/react";
import { Link } from "react-router";
import { founders } from "../data/founders";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Team() {
  return (
    <section id="equipe" className="py-20 md:py-32 relative bg-[#020408] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00E5FF]/[0.02] rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[#00E5FF] text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] bg-[#00E5FF]/[0.05] px-4 py-1.5 rounded-full border border-[#00E5FF]/12 mb-5"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Board of Directors
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[1.75rem] sm:text-4xl md:text-[2.75rem] font-bold text-white mb-3.5 tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Nossa{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#0080FF]">
              Liderança
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[15px] md:text-base text-white/30 max-w-xl mx-auto leading-relaxed"
          >
            Expertise em engenharia de software, arquitetura cloud e liderança técnica.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {founders.map((founder, idx) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.45 }}
            >
              <Link
                to={`/equipe/${founder.id}`}
                className="group block rounded-2xl border border-white/[0.05] bg-white/[0.015] overflow-hidden hover:border-[#00E5FF]/[0.12] transition-all duration-400 active:scale-[0.99]"
              >
                {/* Image */}
                <div className="relative h-52 sm:h-60 md:h-72 overflow-hidden bg-[#060A14]">
                  <ImageWithFallback
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-600 opacity-55 group-hover:opacity-85 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-5">
                    <span
                      className="text-white font-semibold text-xl tracking-tight"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {founder.name}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <span
                    className="inline-block px-2.5 py-1 rounded-md border border-[#00E5FF]/[0.1] bg-[#00E5FF]/[0.04] text-[#00E5FF] text-[10px] font-medium uppercase tracking-wider mb-3"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {founder.shortRole}
                  </span>
                  <p className="text-white/28 text-[13px] leading-[1.6] line-clamp-2 mb-4">
                    {founder.bio}
                  </p>

                  <div className="flex items-center justify-between pt-3.5 border-t border-white/[0.04]">
                    <span className="text-white/25 text-[10px] uppercase tracking-wider font-medium group-hover:text-[#00E5FF]/50 transition-colors">
                      Ver Perfil
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center group-hover:bg-[#00E5FF] group-hover:border-[#00E5FF] group-hover:shadow-[0_0_14px_rgba(0,229,255,0.2)] transition-all duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/25 group-hover:text-[#020408] transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

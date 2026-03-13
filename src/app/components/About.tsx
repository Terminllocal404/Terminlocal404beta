import { motion } from "motion/react";
import { ShieldCheck, Cpu, Code, Zap, Server } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 relative bg-[#020408] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00E5FF]/[0.025] rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[#00E5FF] text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] bg-[#00E5FF]/[0.05] px-4 py-1.5 rounded-full border border-[#00E5FF]/12 mb-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Sobre a Empresa
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[1.75rem] sm:text-4xl md:text-[2.75rem] font-bold text-white mb-5 md:mb-7 leading-[1.15] tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Conectando{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#0080FF]">
                engenharia
              </span>{" "}
              e negócios.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-3.5 text-white/35 text-[15px] md:text-base leading-[1.7] mb-8"
            >
              <p>
                A Terminal 404 é um{" "}
                <span className="text-white/65 font-medium">hub de inovação e engenharia de software</span>{" "}
                criado para conectar excelência técnica aos desafios reais do mercado.
              </p>
              <p>
                Atuamos no ciclo completo de projetos digitais, construindo infraestruturas seguras e escaláveis com as melhores práticas da engenharia moderna.
              </p>
            </motion.div>

            {/* Feature cards */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {[
                { icon: Cpu, title: "Alta Performance", desc: "Sistemas otimizados para alto tráfego." },
                { icon: ShieldCheck, title: "Padrão Enterprise", desc: "Arquitetura segura e código limpo." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group flex items-start gap-3.5 p-4 rounded-xl bg-white/[0.015] border border-white/[0.05] hover:border-[#00E5FF]/[0.12] hover:bg-[#00E5FF]/[0.025] transition-all duration-300"
                >
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-[#00E5FF]/[0.07] border border-[#00E5FF]/[0.12] flex items-center justify-center text-[#00E5FF] group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(0,229,255,0.12)] transition-all duration-300">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white/75 font-semibold text-[14px] mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.title}</h4>
                    <p className="text-white/22 text-[12px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[320px] md:h-[440px] w-full rounded-2xl border border-white/[0.05] overflow-hidden bg-[#060A14] flex items-center justify-center mt-4 lg:mt-0"
          >
            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.02)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_100%)]" />

            {/* Center element */}
            <div className="relative z-10 flex items-center justify-center">
              {/* Rings */}
              <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border border-[#00E5FF]/[0.08]" />
              <div className="absolute w-36 h-36 md:w-48 md:h-48 rounded-full border border-dashed border-[#00E5FF]/[0.12] animate-[spin_30s_linear_infinite]" />
              <div className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full border border-[#00E5FF]/[0.16] animate-[spin_20s_linear_reverse_infinite]" />
              
              {/* Center icon */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#00E5FF]/[0.08] border border-[#00E5FF]/[0.15] flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(0,229,255,0.08)]">
                <Code className="w-7 h-7 md:w-8 md:h-8 text-[#00E5FF]" />
              </div>
            </div>

            {/* Floating card — top right */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-[#0A0E18]/95 backdrop-blur-xl p-3 rounded-xl border border-white/[0.06] flex items-center gap-2.5 shadow-lg">
              <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/[0.08] flex items-center justify-center">
                <Server className="w-3.5 h-3.5 text-[#00E5FF]" />
              </div>
              <div>
                <span className="text-[8px] text-white/20 font-mono uppercase tracking-wider block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Cloud</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_rgba(52,211,153,0.7)] animate-pulse" />
                  <span className="text-[11px] text-white/65 font-semibold">Online</span>
                </div>
              </div>
            </div>

            {/* Floating card — bottom left */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-[#0A0E18]/95 backdrop-blur-xl p-3 rounded-xl border border-white/[0.06] flex items-center gap-2.5 shadow-lg">
              <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/[0.08] flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-[#00E5FF]" />
              </div>
              <div>
                <span className="text-[8px] text-white/20 font-mono uppercase tracking-wider block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Latência</span>
                <span className="text-[11px] text-white/65 font-semibold">&lt;50ms</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

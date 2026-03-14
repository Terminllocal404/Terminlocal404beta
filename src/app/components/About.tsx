import { motion } from "motion/react";
import { ShieldCheck, Cpu, Code, Zap, Server, Target } from "lucide-react";

const features = [
  { icon: Cpu, title: "Alta Performance", desc: "Sistemas otimizados para alto trafego e baixa latencia." },
  { icon: ShieldCheck, title: "Padrao Enterprise", desc: "Arquitetura segura, codigo limpo e escalavel." },
  { icon: Target, title: "Foco em Resultados", desc: "Solucoes alinhadas aos objetivos do negocio." },
  { icon: Zap, title: "Entrega Agil", desc: "Sprints semanais com feedback continuo." },
];

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-36 relative bg-[#020408] overflow-hidden section-divider">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00E5FF]/[0.02] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0080FF]/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-5"
            >
              <span
                className="text-[#00E5FF]/15 text-[11px] font-bold tracking-[0.2em]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                01
              </span>
              <span
                className="inline-flex items-center gap-2 text-[#00E5FF] text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] bg-[#00E5FF]/[0.05] px-4 py-1.5 rounded-full border border-[#00E5FF]/[0.1]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_6px_rgba(0,229,255,0.6)]" />
                Sobre a Empresa
              </span>
            </motion.div>

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
              e negocios.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-3.5 text-white/35 text-[15px] md:text-base leading-[1.7] mb-10"
            >
              <p>
                A Terminal 404 e um{" "}
                <span className="text-white/65 font-medium">hub de inovacao e engenharia de software</span>{" "}
                criado para conectar excelencia tecnica aos desafios reais do mercado.
              </p>
              <p>
                Atuamos no ciclo completo de projetos digitais, construindo infraestruturas seguras e escalaveis com as melhores praticas da engenharia moderna.
              </p>
            </motion.div>

            {/* Feature cards - 2x2 grid */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {features.map((item) => (
                <div
                  key={item.title}
                  className="group flex items-start gap-3.5 p-4 rounded-xl bg-white/[0.015] border border-white/[0.05] hover:border-[#00E5FF]/[0.12] hover:bg-[#00E5FF]/[0.02] transition-all duration-300"
                >
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-[#00E5FF]/[0.1] to-[#0080FF]/[0.05] border border-[#00E5FF]/[0.12] flex items-center justify-center text-[#00E5FF] group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(0,229,255,0.12)] transition-all duration-300">
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

          {/* Right Visual - Tech Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[380px] md:h-[500px] w-full rounded-2xl border border-white/[0.05] overflow-hidden bg-[#060A14] flex items-center justify-center mt-4 lg:mt-0"
          >
            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.02)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_100%)]" />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/[0.03] via-transparent to-[#0080FF]/[0.02]" />

            {/* Center element */}
            <div className="relative z-10 flex items-center justify-center">
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border border-[#00E5FF]/[0.06]"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#00E5FF]/30" />
              </motion.div>
              
              {/* Middle ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-40 h-40 md:w-52 md:h-52 rounded-full border border-dashed border-[#00E5FF]/[0.1]"
              >
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full bg-[#0080FF]/40" />
              </motion.div>
              
              {/* Inner ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full border border-[#00E5FF]/[0.14]"
              >
                <div className="absolute top-1/2 right-0 w-1.5 h-1.5 rounded-full bg-[#00E5FF]/50" />
              </motion.div>
              
              {/* Center icon */}
              <div className="w-18 h-18 md:w-22 md:h-22 rounded-2xl bg-gradient-to-br from-[#00E5FF]/[0.12] to-[#0080FF]/[0.06] border border-[#00E5FF]/[0.15] flex items-center justify-center backdrop-blur-md shadow-[0_0_40px_rgba(0,229,255,0.1)]">
                <Code className="w-8 h-8 md:w-9 md:h-9 text-[#00E5FF]" />
              </div>
            </div>

            {/* Floating card - top right */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-4 md:top-6 md:right-6 bg-[#0A0E18]/95 backdrop-blur-xl p-3 rounded-xl border border-white/[0.06] flex items-center gap-2.5 shadow-lg"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00E5FF]/[0.12] to-[#0080FF]/[0.06] flex items-center justify-center">
                <Server className="w-3.5 h-3.5 text-[#00E5FF]" />
              </div>
              <div>
                <span className="text-[8px] text-white/20 font-mono uppercase tracking-wider block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Cloud</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_rgba(52,211,153,0.7)] animate-pulse" />
                  <span className="text-[11px] text-white/65 font-semibold">Online</span>
                </div>
              </div>
            </motion.div>

            {/* Floating card - bottom left */}
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-[#0A0E18]/95 backdrop-blur-xl p-3 rounded-xl border border-white/[0.06] flex items-center gap-2.5 shadow-lg"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00E5FF]/[0.12] to-[#0080FF]/[0.06] flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-[#00E5FF]" />
              </div>
              <div>
                <span className="text-[8px] text-white/20 font-mono uppercase tracking-wider block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Latencia</span>
                <span className="text-[11px] text-white/65 font-semibold">&lt;50ms</span>
              </div>
            </motion.div>

            {/* Floating card - top left */}
            <motion.div
              animate={{ y: [-3, 7, -3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-4 left-4 md:top-6 md:left-6 bg-[#0A0E18]/95 backdrop-blur-xl p-3 rounded-xl border border-white/[0.06] flex items-center gap-2.5 shadow-lg"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500/[0.12] to-emerald-700/[0.06] flex items-center justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div>
                <span className="text-[8px] text-white/20 font-mono uppercase tracking-wider block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Security</span>
                <span className="text-[11px] text-white/65 font-semibold">A+ Rating</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

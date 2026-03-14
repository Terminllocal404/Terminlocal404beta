import { motion } from "motion/react";
import { MessageSquare, Lightbulb, Code, Rocket, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Analise & Briefing",
    description: "Entendemos profundamente suas necessidades, objetivos e desafios para criar a solucao ideal.",
    duration: "1-2 dias",
    accent: "from-cyan-500/15 to-blue-500/5",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Planejamento & Arquitetura",
    description: "Definimos a stack tecnologica, arquitetura do sistema e roadmap de desenvolvimento.",
    duration: "3-5 dias",
    accent: "from-blue-500/15 to-indigo-500/5",
  },
  {
    number: "03",
    icon: Code,
    title: "Desenvolvimento Agil",
    description: "Codificacao com metodologia agil, entregas incrementais e feedback continuo.",
    duration: "Conforme escopo",
    accent: "from-indigo-500/15 to-purple-500/5",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deploy & Suporte",
    description: "Publicacao em ambiente de producao com monitoramento e suporte tecnico dedicado.",
    duration: "Continuo",
    accent: "from-emerald-500/15 to-teal-500/5",
  },
];

export function Process() {
  return (
    <section id="processo" className="py-24 md:py-36 bg-[#020408] relative overflow-hidden section-divider">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.015),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <SectionHeader
          number="04"
          badge="Nosso Processo"
          title="Metodologia"
          highlight="Comprovada"
          description="Um processo estruturado e transparente, do planejamento ao deploy, garantindo qualidade e alinhamento com seus objetivos de negocio."
        />

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[3.5rem] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-gradient-to-r from-[#00E5FF]/10 via-[#00E5FF]/20 to-[#00E5FF]/10 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative p-6 md:p-7 rounded-2xl border border-white/[0.05] bg-white/[0.015] hover:bg-[#00E5FF]/[0.02] hover:border-[#00E5FF]/[0.1] transition-all duration-500 h-full flex flex-col">
                  {/* Top accent */}
                  <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${step.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.04),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    {/* Number + Icon row */}
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className="text-[#00E5FF]/20 text-[2rem] md:text-[2.5rem] font-bold leading-none group-hover:text-[#00E5FF]/40 transition-colors"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {step.number}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00E5FF]/[0.1] to-[#0080FF]/[0.05] border border-[#00E5FF]/[0.12] flex items-center justify-center text-[#00E5FF] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-400 relative z-10">
                        <step.icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-white/85 font-semibold text-[17px] md:text-lg mb-3 group-hover:text-white transition-colors tracking-tight"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/30 text-[13px] md:text-sm leading-[1.65] mb-4 group-hover:text-white/40 transition-colors flex-grow">
                      {step.description}
                    </p>

                    {/* Duration */}
                    <div className="flex items-center gap-2 pt-3 border-t border-white/[0.04]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]/50" />
                      <span
                        className="text-white/20 text-[11px] uppercase tracking-wider"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 md:mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_5px_rgba(52,211,153,0.6)]" />
            </span>
            <p className="text-white/25 text-[13px]">
              Comunicacao transparente via Slack/WhatsApp com entregas incrementais
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

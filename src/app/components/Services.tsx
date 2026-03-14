import { motion } from "motion/react";
import { Globe, AppWindow, RefreshCw, Rocket, Sliders, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";
import { SectionHeader } from "./SectionHeader";

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    description: "Sites institucionais, portfolios e landing pages de alta conversao com SEO otimizado e performance excepcional.",
    tag: "WEB",
    features: ["SEO Otimizado", "Performance 100%", "Design Responsivo"],
    accentColor: "from-cyan-500/20 to-blue-500/10",
  },
  {
    icon: AppWindow,
    title: "Aplicacoes SaaS",
    description: "Plataformas completas com dashboards interativos, gestao de usuarios e integracoes de APIs robustas.",
    tag: "APPS",
    features: ["Multi-tenant", "APIs RESTful", "Real-time"],
    accentColor: "from-blue-500/20 to-indigo-500/10",
  },
  {
    icon: RefreshCw,
    title: "Modernizacao Digital",
    description: "Refatoracao de sistemas legados com migracao para tecnologias modernas e arquitetura escalavel.",
    tag: "LEGACY",
    features: ["Code Refactoring", "Cloud Migration", "Zero Downtime"],
    accentColor: "from-purple-500/20 to-pink-500/10",
  },
  {
    icon: Rocket,
    title: "MVPs & Startups",
    description: "Desenvolvimento agil de produtos minimos viaveis com foco em validacao de mercado e crescimento rapido.",
    tag: "STARTUP",
    features: ["Entrega Rapida", "Metodologia Agil", "Escalabilidade"],
    accentColor: "from-emerald-500/20 to-teal-500/10",
  },
  {
    icon: Sliders,
    title: "Sistemas Corporativos",
    description: "ERPs, CRMs e sistemas de gestao personalizados com arquitetura enterprise e seguranca avancada.",
    tag: "ENTERPRISE",
    features: ["Alta Seguranca", "Automacao", "Integracoes"],
    accentColor: "from-orange-500/20 to-amber-500/10",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 md:py-36 bg-[#020408] relative overflow-hidden section-divider">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.03),transparent_70%)] blur-[50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <SectionHeader
          number="02"
          badge="Nossas Solucoes"
          title="Engenharia de Software"
          highlight="de Excelencia"
          description="Desenvolvemos solucoes digitais completas com arquitetura moderna, codigo limpo e foco em performance, seguranca e escalabilidade."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-14 md:mb-20">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="group relative p-6 md:p-7 rounded-2xl border border-white/[0.05] bg-white/[0.015] hover:bg-[#00E5FF]/[0.02] hover:border-[#00E5FF]/[0.12] transition-all duration-500 cursor-default flex flex-col"
            >
              {/* Top accent gradient */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${service.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00E5FF]/[0.1] to-[#0080FF]/[0.05] border border-[#00E5FF]/[0.12] flex items-center justify-center text-[#00E5FF] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-400">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <span
                    className="text-white/[0.06] text-[9px] font-semibold tracking-[0.15em] group-hover:text-[#00E5FF]/20 transition-colors duration-400"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {service.tag}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-white/85 font-semibold text-[17px] md:text-lg mb-3 group-hover:text-white transition-colors tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/30 text-[13px] md:text-sm leading-[1.65] mb-5 group-hover:text-white/40 transition-colors flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 pt-4 border-t border-white/[0.04]">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]/60 shrink-0" />
                      <span
                        className="text-white/25 text-[11px] md:text-xs group-hover:text-white/35 transition-colors"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-2xl p-8 md:p-10 bg-white/[0.015] border border-white/[0.05] text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.05),transparent_55%)] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent" />

            <h3
              className="text-xl sm:text-2xl font-semibold text-white mb-3 tracking-tight relative z-10"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Precisa de uma solucao personalizada?
            </h3>
            <p className="text-white/30 text-[13px] md:text-sm mb-6 max-w-lg mx-auto relative z-10 leading-relaxed">
              Cada projeto e unico. Vamos analisar suas necessidades e criar a solucao ideal 
              com tecnologias adequadas ao seu contexto de negocio.
            </p>
            <Link
              to="/servicos"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/[0.07] text-white/55 text-[13px] font-medium hover:text-[#00E5FF] hover:border-[#00E5FF]/20 hover:bg-[#00E5FF]/[0.04] transition-all duration-300 relative z-10"
            >
              Ver Todas as Solucoes
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
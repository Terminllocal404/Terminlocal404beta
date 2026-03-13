import { motion } from "motion/react";
import { Globe, AppWindow, RefreshCw, Rocket, Sliders, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento de Sites",
    description: "Sites profissionais focados em performance, segurança e design moderno e responsivo.",
    tag: "WEB",
  },
  {
    icon: AppWindow,
    title: "Aplicações e Sistemas",
    description: "Aplicações web sob medida com funcionalidade, escalabilidade e eficiência operacional.",
    tag: "APPS",
  },
  {
    icon: RefreshCw,
    title: "Modernização Digital",
    description: "Recuperação e modernização de sistemas legados com tecnologias de ponta.",
    tag: "LEGACY",
  },
  {
    icon: Rocket,
    title: "Projetos Inovadores",
    description: "Transformamos ideias em plataformas digitais com arquitetura robusta e escalável.",
    tag: "STARTUP",
  },
  {
    icon: Sliders,
    title: "Soluções Sob Medida",
    description: "Cada projeto é analisado para criar soluções exclusivas e alinhadas ao seu negócio.",
    tag: "CUSTOM",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-[#020408] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.04),transparent_70%)] blur-[40px]" />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20 max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[#00E5FF] text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] bg-[#00E5FF]/[0.05] px-4 py-1.5 rounded-full border border-[#00E5FF]/12 mb-5"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Nossas Soluções
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[1.75rem] sm:text-4xl md:text-[2.75rem] font-bold text-white mb-4 tracking-tight leading-[1.15]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Engenharia de Software{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#0080FF]">
              de Alto Nível
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[15px] md:text-base text-white/35 leading-relaxed"
          >
            Arquitetura moderna e código limpo para transformar desafios complexos em produtos digitais excepcionais.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-14 md:mb-20">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.45 }}
              className={`group relative p-6 md:p-7 rounded-2xl border border-white/[0.05] bg-white/[0.015] hover:bg-[#00E5FF]/[0.03] hover:border-[#00E5FF]/[0.12] transition-all duration-400 cursor-default ${
                idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#00E5FF]/[0.07] border border-[#00E5FF]/[0.12] flex items-center justify-center text-[#00E5FF] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-400">
                    <service.icon className="w-[18px] h-[18px]" />
                  </div>
                  <span
                    className="text-white/[0.08] text-[9px] font-semibold tracking-[0.15em] group-hover:text-[#00E5FF]/25 transition-colors duration-400"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {service.tag}
                  </span>
                </div>

                <h3
                  className="text-white/85 font-semibold text-[16px] md:text-[17px] mb-2.5 group-hover:text-white transition-colors tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-white/28 text-[13px] md:text-sm leading-[1.65] group-hover:text-white/40 transition-colors flex-grow">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative rounded-2xl p-7 md:p-10 bg-white/[0.015] border border-white/[0.05] text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.05),transparent_55%)] pointer-events-none" />

            <h3
              className="text-xl sm:text-2xl font-semibold text-white mb-3 tracking-tight relative z-10"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Pronto para elevar sua tecnologia?
            </h3>
            <p className="text-white/30 text-[13px] md:text-sm mb-6 max-w-md mx-auto relative z-10">
              Nossa equipe está pronta para construir a solução ideal para o seu crescimento.
            </p>
            <Link
              to="/servicos"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.07] text-white/55 text-[13px] font-medium hover:text-[#00E5FF] hover:border-[#00E5FF]/20 hover:bg-[#00E5FF]/[0.04] transition-all duration-300 relative z-10"
            >
              Explorar Serviços
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

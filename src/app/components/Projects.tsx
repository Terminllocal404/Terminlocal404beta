import { motion } from "motion/react";
import { ExternalLink, Sparkles, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    title: "Sistema de Gestao Empresarial",
    category: "ERP & Dashboard",
    description: "Plataforma completa de gestao com modulos financeiros, controle de estoque e analytics em tempo real.",
    tags: ["React", "Node.js", "PostgreSQL"],
    gradient: "from-cyan-500/15 via-cyan-500/5 to-transparent",
    borderGlow: "group-hover:shadow-[inset_0_1px_0_0_rgba(0,229,255,0.15)]",
  },
  {
    title: "Plataforma E-commerce",
    category: "E-commerce & Pagamentos",
    description: "Marketplace escalavel com integracao completa de pagamentos, gestao de produtos e painel administrativo.",
    tags: ["Next.js", "Stripe", "MongoDB"],
    gradient: "from-purple-500/15 via-purple-500/5 to-transparent",
    borderGlow: "group-hover:shadow-[inset_0_1px_0_0_rgba(168,85,247,0.15)]",
  },
  {
    title: "Sistema de Automacao",
    category: "Automacao & Integracoes",
    description: "Solucao de automacao de processos empresariais com integracoes de APIs e workflows personalizados.",
    tags: ["Python", "Redis", "Docker"],
    gradient: "from-green-500/15 via-green-500/5 to-transparent",
    borderGlow: "group-hover:shadow-[inset_0_1px_0_0_rgba(34,197,94,0.15)]",
  },
  {
    title: "Portal Institucional",
    category: "Sites & Landing Pages",
    description: "Site institucional de alta performance com SEO otimizado, CMS headless e design responsivo.",
    tags: ["TypeScript", "Tailwind", "Vercel"],
    gradient: "from-orange-500/15 via-orange-500/5 to-transparent",
    borderGlow: "group-hover:shadow-[inset_0_1px_0_0_rgba(249,115,22,0.15)]",
  },
  {
    title: "App de Gestao de Projetos",
    category: "SaaS & Produtividade",
    description: "Aplicacao SaaS para gestao agil de projetos com colaboracao em tempo real e integracoes.",
    tags: ["Vue.js", "WebSockets", "AWS"],
    gradient: "from-blue-500/15 via-blue-500/5 to-transparent",
    borderGlow: "group-hover:shadow-[inset_0_1px_0_0_rgba(59,130,246,0.15)]",
  },
  {
    title: "API Gateway & Microservices",
    category: "Backend & Infraestrutura",
    description: "Arquitetura de microservicos com API Gateway, autenticacao JWT e monitoramento em tempo real.",
    tags: ["Node.js", "Docker", "Kubernetes"],
    gradient: "from-teal-500/15 via-teal-500/5 to-transparent",
    borderGlow: "group-hover:shadow-[inset_0_1px_0_0_rgba(20,184,166,0.15)]",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="py-24 md:py-36 bg-[#020408] relative overflow-hidden section-divider">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(0,100,255,0.03),transparent_70%)] blur-[60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <SectionHeader
          number="05"
          badge="Portfolio"
          title="Projetos"
          highlight="de Impacto"
          description="Exemplos de solucoes desenvolvidas com excelencia tecnica, arquitetura escalavel e foco em resultados mensuraveis."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-14 md:mb-20">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className={`group relative rounded-2xl border border-white/[0.05] bg-white/[0.015] hover:border-[#00E5FF]/[0.1] transition-all duration-500 overflow-hidden ${project.borderGlow}`}
            >
              {/* Gradient overlay */}
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${project.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative z-10 p-6 md:p-7 flex flex-col h-full">
                {/* Category badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-white/20 text-[10px] font-medium uppercase tracking-[0.15em] group-hover:text-[#00E5FF]/50 transition-colors"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white/15 group-hover:text-[#00E5FF]/60 group-hover:border-[#00E5FF]/20 group-hover:bg-[#00E5FF]/[0.05] transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-white/85 font-semibold text-[17px] md:text-lg mb-3 tracking-tight group-hover:text-white transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/30 text-[13px] md:text-sm leading-[1.65] mb-5 group-hover:text-white/40 transition-colors flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.04]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.05] text-white/25 text-[11px] font-medium group-hover:border-[#00E5FF]/10 group-hover:text-white/35 transition-all"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl p-8 md:p-12 bg-gradient-to-br from-[#00E5FF]/[0.04] to-transparent border border-[#00E5FF]/10 text-center overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.08),transparent_60%)] pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00E5FF]/25 to-transparent" />

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00E5FF]/15 to-[#0080FF]/10 border border-[#00E5FF]/20 mb-6">
              <Sparkles className="w-6 h-6 text-[#00E5FF]" />
            </div>

            <h3
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Transforme sua ideia em realidade
            </h3>

            <p className="text-white/30 text-[14px] md:text-base mb-8 max-w-xl mx-auto leading-relaxed">
              Cada projeto e unico. Vamos construir juntos a solucao perfeita para o seu negocio 
              com tecnologia de ponta e arquitetura profissional.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/553291547944?text=Seja%20bem-vindo!%20Faça%20o%20seu%20projeto%20conosco."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#020408] text-sm font-semibold hover:shadow-[0_4px_30px_rgba(0,229,255,0.35)] active:scale-[0.97] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="relative z-10">Iniciar Meu Projeto</span>
                <ExternalLink className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <Link
                to="/projetos"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/[0.07] text-white/55 text-[13px] font-medium hover:text-[#00E5FF] hover:border-[#00E5FF]/20 transition-all duration-300"
              >
                Ver Portfolio Completo
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
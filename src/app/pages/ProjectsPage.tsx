import { motion } from "motion/react";
import { Link } from "react-router";
import { PageHero } from "../components/PageHero";
import {
  ArrowUpRight, Sparkles, ExternalLink, Code2,
  Globe, AppWindow, Server, Zap, Shield, Layers
} from "lucide-react";

const projects = [
  {
    title: "Sistema de Gestão Empresarial",
    category: "ERP & Dashboard",
    description: "Plataforma completa de gestão com módulos financeiros, controle de estoque, gestão de funcionários e analytics em tempo real com dashboards interativos.",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    gradient: "from-cyan-500/15 via-cyan-500/5 to-transparent",
    icon: Layers,
  },
  {
    title: "Plataforma E-commerce",
    category: "E-commerce & Pagamentos",
    description: "Marketplace escalável com integração completa de pagamentos, gestão de produtos, carrinho inteligente e painel administrativo avançado.",
    tags: ["Next.js", "Stripe", "MongoDB", "Redis"],
    gradient: "from-purple-500/15 via-purple-500/5 to-transparent",
    icon: Globe,
  },
  {
    title: "Sistema de Automação",
    category: "Automação & Integrações",
    description: "Solução de automação de processos empresariais com integrações de APIs externas, workflows personalizados e monitoramento em tempo real.",
    tags: ["Python", "Redis", "Docker", "Celery"],
    gradient: "from-green-500/15 via-green-500/5 to-transparent",
    icon: Zap,
  },
  {
    title: "Portal Institucional",
    category: "Sites & Landing Pages",
    description: "Site institucional de alta performance com SEO otimizado, CMS headless, design responsivo e score 100 no Lighthouse.",
    tags: ["TypeScript", "Tailwind", "Vercel", "Sanity"],
    gradient: "from-orange-500/15 via-orange-500/5 to-transparent",
    icon: Globe,
  },
  {
    title: "App de Gestão de Projetos",
    category: "SaaS & Produtividade",
    description: "Aplicação SaaS para gestão ágil de projetos com colaboração em tempo real, kanban boards e integrações com GitHub e Slack.",
    tags: ["Vue.js", "WebSockets", "AWS", "GraphQL"],
    gradient: "from-blue-500/15 via-blue-500/5 to-transparent",
    icon: AppWindow,
  },
  {
    title: "API Gateway & Microservices",
    category: "Backend & Infraestrutura",
    description: "Arquitetura de microsserviços com API Gateway, autenticação JWT, rate limiting e monitoramento em tempo real com alertas.",
    tags: ["Node.js", "Docker", "Kubernetes", "Prometheus"],
    gradient: "from-teal-500/15 via-teal-500/5 to-transparent",
    icon: Server,
  },
  {
    title: "Sistema de Segurança",
    category: "Cybersecurity",
    description: "Plataforma de monitoramento de segurança com detecção de intrusão, análise de vulnerabilidades e dashboards de compliance.",
    tags: ["Python", "ElasticSearch", "Kafka", "React"],
    gradient: "from-red-500/15 via-red-500/5 to-transparent",
    icon: Shield,
  },
  {
    title: "Plataforma de Analytics",
    category: "Data & Business Intelligence",
    description: "Sistema de analytics com ingestão de dados em tempo real, visualizações interativas e relatórios automatizados para tomada de decisão.",
    tags: ["React", "D3.js", "ClickHouse", "Apache Airflow"],
    gradient: "from-indigo-500/15 via-indigo-500/5 to-transparent",
    icon: Code2,
  },
];

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#020408]">
      <PageHero
        badge="Portfólio"
        title="Projetos"
        highlight="de Impacto"
        description="Exemplos de soluções desenvolvidas com excelência técnica, arquitetura escalável e foco em resultados mensuráveis para nossos clientes."
      >
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="https://wa.me/553291547944?text=Seja%20bem-vindo!%20Faça%20o%20seu%20projeto%20conosco."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#020408] text-[13px] font-semibold hover:shadow-[0_4px_24px_rgba(0,229,255,0.3)] active:scale-[0.97] transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <Sparkles className="w-3.5 h-3.5 relative z-10" />
            <span className="relative z-10">Iniciar Meu Projeto</span>
          </a>
          <Link
            to="/servicos"
            className="inline-flex items-center gap-2 text-white/35 text-[13px] hover:text-[#00E5FF] transition-colors"
          >
            Ver Soluções
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </PageHero>

      {/* Projects Grid */}
      <section className="py-20 md:py-28 bg-[#020408] relative overflow-hidden section-divider">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(0,100,255,0.025),transparent_70%)] blur-[60px]" />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.5 }}
                className="group relative rounded-2xl border border-white/[0.05] bg-white/[0.015] hover:border-[#00E5FF]/[0.1] transition-all duration-500 overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${project.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-white/20 text-[10px] font-medium uppercase tracking-[0.15em] group-hover:text-[#00E5FF]/50 transition-colors"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {project.category}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white/15 group-hover:text-[#00E5FF]/60 group-hover:border-[#00E5FF]/20 transition-all">
                      <project.icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3
                    className="text-white font-semibold text-[16px] mb-2.5 tracking-tight transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-white text-[13px] leading-[1.6] mb-5 transition-colors flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-white/[0.04]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.05] text-white/22 text-[10px] font-medium group-hover:border-[#00E5FF]/10 group-hover:text-white/32 transition-all"
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#020408] relative overflow-hidden section-divider">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl p-8 md:p-12 bg-gradient-to-br from-[#00E5FF]/[0.04] to-transparent border border-[#00E5FF]/10 text-center overflow-hidden"
          >
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
                Transforme sua ideia em{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#0080FF]">
                  realidade
                </span>
              </h3>

              <p className="text-white text-[14px] md:text-base mb-8 max-w-xl mx-auto leading-relaxed">
                Cada projeto é único. Vamos construir juntos a solução perfeita para o seu negócio com tecnologia de ponta.
              </p>

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
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
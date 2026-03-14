import { motion } from "motion/react";
import { Link } from "react-router";
import { PageHero } from "../components/PageHero";
import { Technologies } from "../components/Technologies";
import { Process } from "../components/Process";
import {
  Globe, AppWindow, RefreshCw, Rocket, Sliders,
  CheckCircle2, ArrowRight, Sparkles, MessageCircle,
  Smartphone, Database, Shield
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    description: "Sites institucionais, portfólios e landing pages de alta conversão com SEO otimizado e performance excepcional.",
    tag: "WEB",
    features: ["SEO Otimizado", "Performance 100%", "Design Responsivo", "CMS Headless"],
    accentColor: "from-cyan-500/20 to-blue-500/10",
  },
  {
    icon: AppWindow,
    title: "Aplicações SaaS",
    description: "Plataformas completas com dashboards interativos, gestão de usuários e integrações de APIs robustas.",
    tag: "APPS",
    features: ["Multi-tenant", "APIs RESTful", "Real-time", "Dashboard Analytics"],
    accentColor: "from-blue-500/20 to-indigo-500/10",
  },
  {
    icon: RefreshCw,
    title: "Modernização Digital",
    description: "Refatoração de sistemas legados com migração para tecnologias modernas e arquitetura escalável.",
    tag: "LEGACY",
    features: ["Code Refactoring", "Cloud Migration", "Zero Downtime", "Tech Audit"],
    accentColor: "from-purple-500/20 to-pink-500/10",
  },
  {
    icon: Rocket,
    title: "MVPs & Startups",
    description: "Desenvolvimento ágil de produtos mínimos viáveis com foco em validação de mercado e crescimento rápido.",
    tag: "STARTUP",
    features: ["Entrega Rápida", "Metodologia Ágil", "Escalabilidade", "Product-Market Fit"],
    accentColor: "from-emerald-500/20 to-teal-500/10",
  },
  {
    icon: Sliders,
    title: "Sistemas Corporativos",
    description: "ERPs, CRMs e sistemas de gestão personalizados com arquitetura enterprise e segurança avançada.",
    tag: "ENTERPRISE",
    features: ["Alta Segurança", "Automação", "Integrações", "Business Intelligence"],
    accentColor: "from-orange-500/20 to-amber-500/10",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Apps nativos e cross-platform com React Native para iOS e Android com experiência nativa.",
    tag: "MOBILE",
    features: ["Cross-platform", "Push Notifications", "Offline Mode", "App Store Ready"],
    accentColor: "from-pink-500/20 to-rose-500/10",
  },
  {
    icon: Database,
    title: "APIs & Backend",
    description: "Desenvolvimento de APIs RESTful e GraphQL robustas com documentação completa e alta performance.",
    tag: "API",
    features: ["GraphQL/REST", "Documentação", "Rate Limiting", "Webhooks"],
    accentColor: "from-teal-500/20 to-cyan-500/10",
  },
  {
    icon: Shield,
    title: "Consultoria Técnica",
    description: "Análise de arquitetura, auditoria de código, otimização de performance e planejamento estratégico.",
    tag: "CONSULTING",
    features: ["Code Review", "Architecture Audit", "Performance Tuning", "Tech Strategy"],
    accentColor: "from-indigo-500/20 to-violet-500/10",
  },
];

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#020408]">
      <PageHero
        badge="Nossas Soluções"
        title="Engenharia de Software"
        highlight="de Excelência"
        description="Desenvolvemos soluções digitais completas com arquitetura moderna, código limpo e foco em performance, segurança e escalabilidade para o seu negócio."
      >
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://wa.me/553291547944?text=Seja%20bem-vindo!%20Faça%20o%20seu%20projeto%20conosco."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#020408] text-[13px] font-semibold hover:shadow-[0_4px_24px_rgba(0,229,255,0.3)] active:scale-[0.97] transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <Sparkles className="w-3.5 h-3.5 relative z-10" />
            <span className="relative z-10">Solicitar Orçamento</span>
          </a>
          <Link
            to="/solicitacao"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.07] text-white/50 text-[13px] font-medium hover:text-[#00E5FF] hover:border-[#00E5FF]/20 transition-all duration-300"
          >
            Iniciar Projeto
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </PageHero>

      {/* All Services Grid */}
      <section className="py-20 md:py-28 bg-[#020408] relative overflow-hidden section-divider">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.025),transparent_70%)] blur-[50px]" />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-[#00E5FF] text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] bg-[#00E5FF]/[0.05] px-4 py-1.5 rounded-full border border-[#00E5FF]/[0.1] mb-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_6px_rgba(0,229,255,0.6)]" />
              Catálogo Completo
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[1.75rem] sm:text-4xl md:text-[2.75rem] font-bold text-white mb-4 tracking-tight leading-[1.15]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Soluções para cada{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#0080FF]">
                necessidade
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[15px] md:text-base text-white leading-relaxed"
            >
              Do desenvolvimento web ao mobile, de MVPs a sistemas enterprise. Encontre a solução ideal para o seu projeto.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.5 }}
                className="group relative p-6 rounded-2xl border border-white/[0.05] bg-white/[0.015] hover:bg-[#00E5FF]/[0.02] hover:border-[#00E5FF]/[0.12] transition-all duration-500 cursor-default flex flex-col"
              >
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${service.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.04),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00E5FF]/[0.1] to-[#0080FF]/[0.05] border border-[#00E5FF]/[0.12] flex items-center justify-center text-[#00E5FF] group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(0,229,255,0.12)] transition-all duration-300">
                      <service.icon className="w-5 h-5" />
                    </div>
                    <span
                      className="text-white/[0.06] text-[8px] font-bold tracking-[0.15em] group-hover:text-[#00E5FF]/20 transition-colors"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {service.tag}
                    </span>
                  </div>

                  <h3
                    className="text-white font-semibold text-[16px] mb-2.5 transition-colors tracking-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-white text-[13px] leading-[1.6] mb-4 transition-colors flex-grow">
                    {service.description}
                  </p>

                  <div className="space-y-1.5 pt-3.5 border-t border-white/[0.04]">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-[#00E5FF]/50 shrink-0" />
                        <span
                          className="text-white text-[11px] transition-colors"
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
        </div>
      </section>

      {/* Technologies */}
      <Technologies />

      {/* Process */}
      <Process />

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 bg-[#020408] relative overflow-hidden section-divider">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl p-8 md:p-12 bg-gradient-to-br from-[#00E5FF]/[0.04] to-transparent border border-[#00E5FF]/[0.1] text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.08),transparent_60%)] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00E5FF]/15 to-[#0080FF]/10 border border-[#00E5FF]/20 mb-6">
                <MessageCircle className="w-6 h-6 text-[#00E5FF]" />
              </div>

              <h3
                className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Precisa de uma solução{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#0080FF]">
                  personalizada?
                </span>
              </h3>
              <p className="text-white text-[14px] md:text-base mb-7 max-w-xl mx-auto leading-relaxed">
                Cada projeto é único. Vamos analisar suas necessidades e criar a solução ideal com as melhores tecnologias do mercado.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://wa.me/553291547944?text=Seja%20bem-vindo!%20Faça%20o%20seu%20projeto%20conosco."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full sm:w-auto h-12 px-7 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#020408] font-semibold text-[14px] flex items-center justify-center gap-2 hover:shadow-[0_4px_30px_rgba(0,229,255,0.3)] active:scale-[0.97] transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  <MessageCircle className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Falar com Especialista</span>
                </a>
                <Link
                  to="/solicitacao"
                  className="w-full sm:w-auto h-12 px-7 rounded-xl bg-white/[0.04] border border-white/[0.07] text-white/55 font-medium text-[14px] flex items-center justify-center gap-2 hover:text-[#00E5FF] hover:border-[#00E5FF]/20 transition-all duration-300"
                >
                  Iniciar Projeto
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
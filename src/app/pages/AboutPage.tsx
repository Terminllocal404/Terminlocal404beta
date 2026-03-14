import { motion } from "motion/react";
import { Link } from "react-router";
import { PageHero } from "../components/PageHero";
import { Values } from "../components/Values";
import { Team } from "../components/Team";
import {
  ShieldCheck, Cpu, Target, Zap, Code, Server,
  ArrowRight, TrendingUp, Award, Users, Code2,
  Clock, Globe, Layers
} from "lucide-react";

const features = [
  { icon: Cpu, title: "Alta Performance", desc: "Sistemas otimizados para alto trafego e baixa latencia com arquitetura distribuida." },
  { icon: ShieldCheck, title: "Padrao Enterprise", desc: "Arquitetura segura, codigo limpo, escalavel e com cobertura completa de testes." },
  { icon: Target, title: "Foco em Resultados", desc: "Solucoes 100% alinhadas aos objetivos estrategicos do seu negocio." },
  { icon: Zap, title: "Entrega Agil", desc: "Sprints semanais com feedback continuo e entregas incrementais." },
  { icon: Globe, title: "Alcance Global", desc: "Infraestrutura cloud com deploy multi-regiao e CDN otimizada." },
  { icon: Layers, title: "Arquitetura Modular", desc: "Componentes reutilizaveis e microservicos para maxima flexibilidade." },
];

const timeline = [
  { year: "2024", title: "Fundacao", desc: "Criacao da Terminal 404 como hub de inovacao e engenharia de software." },
  { year: "2024", title: "Primeiros Projetos", desc: "Entrega dos primeiros sistemas corporativos e aplicacoes web." },
  { year: "2025", title: "Comunidade Dev", desc: "Lancamento da comunidade de desenvolvedores no Discord." },
  { year: "2025", title: "Expansao", desc: "Ampliacao da equipe e portfolio de servicos oferecidos." },
];

const stats = [
  { icon: Code2, value: "50+", label: "Projetos Entregues" },
  { icon: Users, value: "40+", label: "Clientes Atendidos" },
  { icon: TrendingUp, value: "99.9%", label: "Uptime Garantido" },
  { icon: Award, value: "100%", label: "Satisfacao" },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#020408]">
      <PageHero
        badge="Sobre a Empresa"
        title="Conectando"
        highlight="engenharia"
        titleSuffix=" e negocios."
        description="A Terminal 404 e um hub de inovacao e engenharia de software criado para conectar excelencia tecnica aos desafios reais do mercado digital."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/servicos"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#020408] text-[13px] font-semibold hover:shadow-[0_4px_24px_rgba(0,229,255,0.3)] active:scale-[0.97] transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="relative z-10">Ver Solucoes</span>
            <ArrowRight className="w-3.5 h-3.5 relative z-10" />
          </Link>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.07] text-white/50 text-[13px] font-medium hover:text-[#00E5FF] hover:border-[#00E5FF]/20 transition-all duration-300"
          >
            Fale Conosco
          </Link>
        </div>
      </PageHero>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-[#020408] relative overflow-hidden section-divider">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#00E5FF]/[0.015] rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {[
              {
                tag: "MISSAO",
                title: "Nossa Missao",
                desc: "Transformar ideias em solucoes digitais de alto impacto, entregando software de qualidade com arquitetura escalavel, codigo limpo e foco total no resultado do cliente."
              },
              {
                tag: "VISAO",
                title: "Nossa Visao",
                desc: "Ser referencia em engenharia de software e inovacao tecnologica, construindo um ecossistema de excelencia tecnica que impulsione negocios e forme profissionais de alto nivel."
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative p-7 md:p-9 rounded-2xl border border-white/[0.05] bg-white/[0.015] hover:border-[#00E5FF]/[0.1] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#00E5FF]/20 via-[#00E5FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.04),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <span
                    className="text-white/[0.06] text-[9px] font-bold tracking-[0.2em] group-hover:text-[#00E5FF]/15 transition-colors block mb-4"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {item.tag}
                  </span>
                  <h3
                    className="text-white/90 font-semibold text-xl md:text-2xl mb-4 tracking-tight group-hover:text-white transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-white/30 text-[14px] md:text-[15px] leading-[1.7] group-hover:text-white/40 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-20 md:py-28 bg-[#020408] relative overflow-hidden section-divider">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-[#0080FF]/[0.015] rounded-full blur-[120px]" />
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
              Diferenciais
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[1.75rem] sm:text-4xl md:text-[2.75rem] font-bold text-white mb-4 tracking-tight leading-[1.15]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Por que escolher a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#0080FF]">
                Terminal 404?
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[15px] md:text-base text-white/35 leading-relaxed"
            >
              Combinamos excelencia tecnica, processos ageis e foco total em resultados para entregar solucoes que realmente fazem diferenca.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {features.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.45 }}
                className="group flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-white/[0.015] border border-white/[0.05] hover:border-[#00E5FF]/[0.12] hover:bg-[#00E5FF]/[0.02] transition-all duration-400"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-[#00E5FF]/[0.1] to-[#0080FF]/[0.05] border border-[#00E5FF]/[0.12] flex items-center justify-center text-[#00E5FF] group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(0,229,255,0.12)] transition-all duration-300">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white/80 font-semibold text-[15px] mb-1 group-hover:text-white transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {item.title}
                  </h4>
                  <p className="text-white/25 text-[13px] leading-[1.6]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-[#020408] relative overflow-hidden section-divider">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.45 }}
                className="group relative p-6 md:p-8 rounded-2xl border border-white/[0.05] bg-white/[0.015] hover:bg-[#00E5FF]/[0.02] hover:border-[#00E5FF]/[0.1] transition-all duration-500 overflow-hidden text-center"
              >
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.04),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#00E5FF]/[0.1] to-[#0080FF]/[0.05] border border-[#00E5FF]/[0.12] mb-4 group-hover:scale-110 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <div className="text-[2rem] md:text-[2.5rem] font-bold text-white mb-1 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-[13px] font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-[#020408] relative overflow-hidden section-divider">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.02),transparent_70%)] blur-[50px]" />
        </div>
        <div className="max-w-4xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="text-center mb-14 md:mb-20">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-[#00E5FF] text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] bg-[#00E5FF]/[0.05] px-4 py-1.5 rounded-full border border-[#00E5FF]/[0.1] mb-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_6px_rgba(0,229,255,0.6)]" />
              Trajetoria
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[1.75rem] sm:text-4xl md:text-[2.75rem] font-bold text-white mb-4 tracking-tight leading-[1.15]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Nossa{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#0080FF]">
                Historia
              </span>
            </motion.h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-[#00E5FF]/20 via-[#00E5FF]/10 to-transparent" />

            <div className="space-y-6 md:space-y-8">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#020408] border-2 border-[#00E5FF]/40 z-10 mt-6">
                    <div className="absolute inset-0 rounded-full bg-[#00E5FF]/20 animate-ping" />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pl-10 md:pl-0 ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="p-5 md:p-6 rounded-2xl bg-white/[0.015] border border-white/[0.05] hover:border-[#00E5FF]/[0.1] transition-all duration-300">
                      <span
                        className="text-[#00E5FF]/40 text-[11px] font-bold tracking-wider block mb-2"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {item.year}
                      </span>
                      <h3
                        className="text-white/85 font-semibold text-[16px] mb-2 tracking-tight"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-white/28 text-[13px] leading-[1.6]">{item.desc}</p>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <Values />

      {/* Team */}
      <Team />

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 bg-[#020408] relative overflow-hidden section-divider">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl p-8 md:p-12 bg-gradient-to-br from-[#00E5FF]/[0.04] to-transparent border border-[#00E5FF]/[0.1] overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.08),transparent_60%)] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent" />

            <div className="relative z-10">
              <h3
                className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Quer fazer parte dessa{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#0080FF]">
                  historia?
                </span>
              </h3>
              <p className="text-white/30 text-[14px] md:text-base mb-7 max-w-xl mx-auto leading-relaxed">
                Entre em contato para discutir seu projeto ou conheca nossa comunidade de desenvolvedores.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://wa.me/553291547944?text=Seja%20bem-vindo!%20Faça%20o%20seu%20projeto%20conosco."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full sm:w-auto h-12 px-7 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#020408] font-semibold text-[14px] flex items-center justify-center gap-2 hover:shadow-[0_4px_30px_rgba(0,229,255,0.3)] active:scale-[0.97] transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  <span className="relative z-10">Iniciar Projeto</span>
                </a>
                <Link
                  to="/comunidade"
                  className="w-full sm:w-auto h-12 px-7 rounded-xl bg-white/[0.04] border border-white/[0.07] text-white/55 font-medium text-[14px] flex items-center justify-center gap-2 hover:text-[#00E5FF] hover:border-[#00E5FF]/20 transition-all duration-300"
                >
                  Comunidade Dev
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
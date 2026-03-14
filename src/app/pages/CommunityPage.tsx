import { motion } from "motion/react";
import { PageHero } from "../components/PageHero";
import {
  Users, Briefcase, BookOpen, MessageSquare, Network, Code2,
  ExternalLink, CheckCircle2, ArrowRight, Zap, Trophy,
  GraduationCap, Handshake, GitBranch
} from "lucide-react";

const benefits = [
  { name: "Projetos Colaborativos", icon: Code2, desc: "Construa solucoes reais em equipe com devs de todos os niveis, adquirindo experiencia pratica." },
  { name: "Networking", icon: Network, desc: "Conecte-se com desenvolvedores, engenheiros e profissionais de tecnologia de todo o Brasil." },
  { name: "Aprendizado Continuo", icon: BookOpen, desc: "Evolua compartilhando conhecimento, participando de workshops e sessoes tecnicas." },
  { name: "Experiencia Real", icon: Briefcase, desc: "Projetos que fazem diferenca no portfolio e preparam voce para desafios do mercado." },
  { name: "Mentoria Tecnica", icon: GraduationCap, desc: "Receba orientacao de desenvolvedores seniors e lideres tecnicos experientes." },
  { name: "Open Source", icon: GitBranch, desc: "Contribua para projetos open source e construa sua reputacao na comunidade dev." },
];

const levels = [
  {
    title: "Iniciante",
    tag: "JUNIOR",
    desc: "Ideal para quem esta comecando na programacao e quer participar de projetos reais com suporte.",
    features: ["Mentoria dedicada", "Projetos guiados", "Code reviews"],
    color: "from-emerald-500/15 to-teal-500/5",
  },
  {
    title: "Intermediario",
    tag: "MID-LEVEL",
    desc: "Para devs que ja possuem base solida e querem evoluir com projetos desafiadores.",
    features: ["Projetos complexos", "Autonomia tecnica", "Tech talks"],
    color: "from-blue-500/15 to-indigo-500/5",
  },
  {
    title: "Avancado",
    tag: "SENIOR",
    desc: "Desenvolvedores experientes que querem liderar, mentorar e contribuir com a comunidade.",
    features: ["Lideranca de projetos", "Mentoria de juniors", "Arquitetura"],
    color: "from-purple-500/15 to-pink-500/5",
  },
];

const interviewQuestions = [
  "O que voce faz atualmente na area de tecnologia",
  "Quais sao suas habilidades ou linguagens de programacao",
  "Em quais areas ou projetos gostaria de contribuir",
  "Qual seu nivel de experiencia atual",
];

const communityStats = [
  { icon: Users, value: "100+", label: "Membros Ativos" },
  { icon: Code2, value: "15+", label: "Projetos em Andamento" },
  { icon: Trophy, value: "30+", label: "Projetos Concluidos" },
  { icon: Zap, value: "24/7", label: "Comunidade Ativa" },
];

export function CommunityPage() {
  return (
    <div className="min-h-screen bg-[#020408]">
      <PageHero
        badge="Comunidade"
        title="Comunidade de"
        highlight="Desenvolvedores"
        description="Aberta para programadores de todos os niveis que desejam participar de projetos reais, evoluir em conjunto e construir networking na area de tecnologia."
      >
        <a
          href="https://discord.gg/NxjyjR9Z"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#020408] text-[13px] font-semibold hover:shadow-[0_4px_24px_rgba(0,229,255,0.3)] active:scale-[0.97] transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          <Users className="w-3.5 h-3.5 relative z-10" />
          <span className="relative z-10">Entrar no Discord</span>
          <ExternalLink className="w-3 h-3 opacity-50 relative z-10" />
        </a>
      </PageHero>

      {/* Community Stats */}
      <section className="py-16 md:py-20 bg-[#020408] relative overflow-hidden section-divider">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {communityStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.45 }}
                className="group p-5 md:p-6 rounded-2xl border border-white/[0.05] bg-white/[0.015] hover:bg-[#00E5FF]/[0.02] hover:border-[#00E5FF]/[0.1] transition-all duration-500 text-center"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E5FF]/[0.1] to-[#0080FF]/[0.05] border border-[#00E5FF]/[0.12] mb-3 group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-5 h-5 text-[#00E5FF]" />
                </div>
                <div className="text-[1.5rem] md:text-[1.75rem] font-bold text-white mb-0.5 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {stat.value}
                </div>
                <div className="text-white/35 text-[12px] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-[#020408] relative overflow-hidden section-divider">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00E5FF]/[0.015] rounded-full blur-[140px]" />
        </div>

        <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-[#00E5FF] text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] bg-[#00E5FF]/[0.05] px-4 py-1.5 rounded-full border border-[#00E5FF]/[0.1] mb-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_6px_rgba(0,229,255,0.6)]" />
              Beneficios
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[1.75rem] sm:text-4xl md:text-[2.75rem] font-bold text-white mb-4 tracking-tight leading-[1.15]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Por que participar da{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#0080FF]">
                comunidade?
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[15px] md:text-base text-white/35 leading-relaxed"
            >
              Um ecossistema completo para voce evoluir como desenvolvedor e construir projetos que fazem diferenca.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {benefits.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.45 }}
                className="group p-5 md:p-6 rounded-2xl bg-white/[0.015] border border-white/[0.05] hover:border-[#00E5FF]/[0.12] hover:bg-[#00E5FF]/[0.02] transition-all duration-400 cursor-default relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#00E5FF]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00E5FF]/[0.1] to-[#0080FF]/[0.05] border border-[#00E5FF]/[0.12] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(0,229,255,0.1)] transition-all duration-300">
                    <card.icon className="w-4.5 h-4.5 text-[#00E5FF]" />
                  </div>
                  <h3
                    className="text-white/80 font-semibold text-[15px] mb-2 group-hover:text-white transition-colors tracking-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {card.name}
                  </h3>
                  <p className="text-white/25 text-[13px] leading-[1.6]">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="py-20 md:py-28 bg-[#020408] relative overflow-hidden section-divider">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-[#0080FF]/[0.015] rounded-full blur-[120px]" />
        </div>
        <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-[#00E5FF] text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] bg-[#00E5FF]/[0.05] px-4 py-1.5 rounded-full border border-[#00E5FF]/[0.1] mb-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_6px_rgba(0,229,255,0.6)]" />
              Niveis de Participacao
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[1.75rem] sm:text-4xl md:text-[2.75rem] font-bold text-white mb-4 tracking-tight leading-[1.15]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Para todos os{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#0080FF]">
                niveis
              </span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {levels.map((level, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.45 }}
                className="group relative p-6 md:p-7 rounded-2xl border border-white/[0.05] bg-white/[0.015] hover:border-[#00E5FF]/[0.12] hover:bg-[#00E5FF]/[0.02] transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${level.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.04),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <h3
                      className="text-white/85 font-semibold text-lg group-hover:text-white transition-colors tracking-tight"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {level.title}
                    </h3>
                    <span
                      className="text-white/[0.06] text-[9px] font-bold tracking-[0.15em] group-hover:text-[#00E5FF]/20 transition-colors"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {level.tag}
                    </span>
                  </div>

                  <p className="text-white/28 text-[13px] leading-[1.6] mb-5">{level.desc}</p>

                  <div className="space-y-2 pt-4 border-t border-white/[0.04]">
                    {level.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]/50 shrink-0" />
                        <span className="text-white/30 text-[12px]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
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

      {/* How to Join */}
      <section className="py-20 md:py-28 bg-[#020408] relative overflow-hidden section-divider">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-[#00E5FF] text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] bg-[#00E5FF]/[0.05] px-4 py-1.5 rounded-full border border-[#00E5FF]/[0.1] mb-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_6px_rgba(0,229,255,0.6)]" />
              Como Participar
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[1.75rem] sm:text-4xl md:text-[2.75rem] font-bold text-white mb-4 tracking-tight leading-[1.15]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Processo de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#0080FF]">
                Ingresso
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-5 md:gap-6 rounded-2xl bg-white/[0.015] border border-white/[0.05] p-6 md:p-8 mb-10 md:mb-14 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/10 to-transparent" />

            <div className="relative z-10">
              <h3
                className="text-xl md:text-2xl font-semibold text-white mb-4 tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Passo a passo para{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#0080FF]">
                  ingressar
                </span>
              </h3>

              <div className="space-y-4">
                {[
                  { num: "01", title: "Entre no Discord", desc: "Acesse nosso servidor oficial pelo link de convite." },
                  { num: "02", title: "Apresentacao", desc: "Participe de uma breve call para nos conhecermos melhor." },
                  { num: "03", title: "Direcionamento", desc: "Voce sera encaminhado para projetos adequados ao seu nivel." },
                  { num: "04", title: "Comece a contribuir", desc: "Inicie sua jornada colaborando em projetos reais." },
                ].map((step) => (
                  <div key={step.num} className="flex items-start gap-3.5">
                    <span
                      className="text-[#00E5FF]/30 text-[13px] font-bold tracking-wider mt-0.5 shrink-0"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {step.num}
                    </span>
                    <div>
                      <h4 className="text-white/70 font-semibold text-[14px] mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {step.title}
                      </h4>
                      <p className="text-white/25 text-[13px] leading-[1.55]">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#060A14] rounded-xl p-5 md:p-6 border border-white/[0.05] relative z-10">
              <h4
                className="text-white/70 font-semibold text-[15px] mb-4 flex items-center gap-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <MessageSquare className="text-[#00E5FF] w-4 h-4" /> Na apresentacao:
              </h4>
              <ul className="space-y-2.5 mb-5">
                {interviewQuestions.map((q, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[13px] text-white/35 bg-white/[0.02] p-3 rounded-lg border border-white/[0.03]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-1.5 shrink-0 shadow-[0_0_4px_rgba(0,229,255,0.4)]" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
              <div className="p-3 rounded-lg bg-[#00E5FF]/[0.03] border border-[#00E5FF]/[0.08] text-white/25 text-[12px] leading-[1.55]">
                <span className="text-[#00E5FF] font-medium">Objetivo:</span> Entender seu perfil para direciona-lo aos projetos mais adequados ao seu momento.
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="https://discord.gg/NxjyjR9Z"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 h-13 px-8 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#020408] font-semibold text-[14px] hover:shadow-[0_4px_30px_rgba(0,229,255,0.3)] active:scale-[0.97] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <Users className="w-[18px] h-[18px] relative z-10" />
              <span className="relative z-10">Entrar no Discord</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-40 relative z-10" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion } from "motion/react";
import {
  Users,
  Briefcase,
  BookOpen,
  MessageSquare,
  Network,
  Code2,
  ExternalLink,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const cards = [
  { name: "Projetos Colaborativos", icon: Code2, desc: "Construa solucoes reais em equipe." },
  { name: "Networking", icon: Network, desc: "Conecte-se com devs de todos os niveis." },
  { name: "Aprendizado Continuo", icon: BookOpen, desc: "Evolua compartilhando conhecimento." },
  { name: "Experiencia Real", icon: Briefcase, desc: "Projetos que fazem diferenca no portfolio." },
];

const interviewQuestions = [
  "O que voce faz atualmente na area de tecnologia",
  "Quais sao suas habilidades ou linguagens de programacao",
  "Em quais areas ou projetos gostaria de contribuir",
];

export function Community() {
  return (
    <section id="comunidade" className="py-24 md:py-36 relative bg-[#020408] overflow-hidden section-divider">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(0,229,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.3)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_75%)]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00E5FF]/[0.02] rounded-full blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-6 relative z-10">
        <SectionHeader
          number="06"
          badge="Comunidade"
          title="Comunidade de"
          highlight="Desenvolvedores"
          description="Aberta para programadores de todos os niveis que desejam participar de projetos reais e evoluir em conjunto."
        />

        {/* Benefit cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10 md:mb-14"
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group p-4 md:p-5 rounded-xl bg-white/[0.015] border border-white/[0.05] hover:border-[#00E5FF]/[0.12] hover:bg-[#00E5FF]/[0.02] transition-all duration-300 cursor-default relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#00E5FF]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-[#00E5FF]/[0.1] to-[#0080FF]/[0.05] border border-[#00E5FF]/[0.12] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(0,229,255,0.1)] transition-all duration-300">
                  <card.icon className="w-4 h-4 text-[#00E5FF]" />
                </div>
                <h3
                  className="text-white/75 font-semibold text-[14px] mb-1.5 group-hover:text-white transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {card.name}
                </h3>
                <p className="text-white/22 text-[12px] leading-[1.55]">{card.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* How to join */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-5 md:gap-6 rounded-2xl bg-white/[0.015] border border-white/[0.05] p-5 md:p-8 mb-10 md:mb-14 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/10 to-transparent" />
          
          <div className="relative z-10">
            <h3
              className="text-xl md:text-2xl font-semibold text-white mb-3.5 tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Como ingressar na <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#0080FF]">comunidade?</span>
            </h3>
            <div className="space-y-3 text-white/35 text-[14px] leading-[1.65]">
              <p>A entrada e feita pelo nosso servidor oficial no Discord.</p>
              <p>
                Apos entrar, voce passara por uma{" "}
                <span className="text-white/55 font-medium">breve entrevista de apresentacao</span>{" "}
                em call para conhecermos seu momento atual.
              </p>
            </div>
          </div>

          <div className="bg-[#060A14] rounded-xl p-4 md:p-5 border border-white/[0.05] relative z-10">
            <h4
              className="text-white/70 font-semibold text-[14px] mb-3.5 flex items-center gap-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <MessageSquare className="text-[#00E5FF] w-4 h-4" /> Na apresentacao:
            </h4>
            <ul className="space-y-2 mb-4">
              {interviewQuestions.map((q, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-[13px] text-white/35 bg-white/[0.02] p-2.5 rounded-lg border border-white/[0.03]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-1.5 shrink-0 shadow-[0_0_4px_rgba(0,229,255,0.4)]" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
            <div className="p-2.5 rounded-lg bg-[#00E5FF]/[0.03] border border-[#00E5FF]/[0.08] text-white/25 text-[11px] leading-[1.55]">
              <span className="text-[#00E5FF] font-medium">Objetivo:</span> Entender seu perfil para direciona-lo aos projetos adequados.
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
  );
}

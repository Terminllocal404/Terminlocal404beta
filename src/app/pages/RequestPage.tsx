import { motion } from "motion/react";
import { MessageCircle, Briefcase, Code, ArrowUpRight, Search, CheckCircle2 } from "lucide-react";
import { PageHero } from "../components/PageHero";

const steps = [
  { icon: Search, num: "01", title: "Analise", desc: "Compreensao tecnica do escopo, regras de negocio e requisitos do projeto." },
  { icon: Code, num: "02", title: "Arquitetura", desc: "Definicao das tecnologias, arquitetura escalavel e roadmap de desenvolvimento." },
  { icon: Briefcase, num: "03", title: "Proposta", desc: "Alinhamento de orcamento, cronograma, entregas e expectativas do cliente." },
];

const guarantees = [
  "Analise gratuita e sem compromisso",
  "Resposta em ate 24h",
  "Proposta tecnica detalhada",
  "Suporte pos-lancamento incluso",
];

export function RequestPage() {
  return (
    <div className="min-h-screen bg-[#020408]">
      <PageHero
        badge="Processo de Onboarding"
        title="Inicie seu"
        highlight="Projeto"
        description="Nossa equipe de arquitetos esta pronta para analisar e construir um plano de acao estrategico e tecnico para o seu negocio."
      />

      {/* Steps */}
      <section className="py-16 md:py-24 bg-[#020408] relative overflow-hidden section-divider">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00E5FF]/[0.02] rounded-full blur-[140px]" />
        </div>

        <div className="max-w-5xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-[#00E5FF] text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] bg-[#00E5FF]/[0.05] px-4 py-1.5 rounded-full border border-[#00E5FF]/[0.1] mb-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_6px_rgba(0,229,255,0.6)]" />
              Como Funciona
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[1.75rem] sm:text-4xl md:text-[2.75rem] font-bold text-white mb-4 tracking-tight leading-[1.15]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Processo{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#0080FF]">
                simplificado
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-14 md:mb-20">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.45 }}
                className="group relative p-6 md:p-7 rounded-2xl bg-white/[0.015] border border-white/[0.05] hover:border-[#00E5FF]/[0.12] hover:bg-[#00E5FF]/[0.025] transition-all duration-300 text-center overflow-hidden"
              >
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.04),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00E5FF]/[0.1] to-[#0080FF]/[0.05] border border-[#00E5FF]/[0.12] rounded-xl flex items-center justify-center text-[#00E5FF] mx-auto mb-4 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.12)] transition-all duration-300">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span
                    className="text-white/[0.07] text-[10px] tracking-wider block mb-2"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {step.num}
                  </span>
                  <h3
                    className="text-white/80 font-semibold text-[17px] mb-2 group-hover:text-white transition-colors tracking-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-white/25 text-[13px] leading-[1.6]">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl p-8 md:p-12 bg-gradient-to-br from-[#00E5FF]/[0.04] to-transparent border border-[#00E5FF]/10 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.08),transparent_60%)] pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 md:w-36 h-[2px] bg-gradient-to-r from-transparent via-[#00E5FF]/50 to-transparent shadow-[0_0_10px_rgba(0,229,255,0.3)]" />

            <div className="relative z-10">
              <h2
                className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Pronto para o proximo passo?
              </h2>
              <p className="text-white/28 text-[13px] md:text-sm mb-8 max-w-md mx-auto">
                Clique abaixo para ser redirecionado ao nosso WhatsApp e iniciar o atendimento com a equipe.
              </p>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-lg mx-auto mb-8">
                {guarantees.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5FF]/60 shrink-0" />
                    <span className="text-white/40 text-[12px]">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/553291547944?text=Seja%20bem-vindo!%20Faça%20o%20seu%20projeto%20conosco."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 h-13 px-8 bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#020408] font-semibold text-[14px] rounded-xl hover:shadow-[0_4px_30px_rgba(0,229,255,0.3)] active:scale-[0.97] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <MessageCircle className="w-[18px] h-[18px] relative z-10" />
                <span className="relative z-10">Solicitar Projeto</span>
                <ArrowUpRight className="w-4 h-4 opacity-50 relative z-10" />
              </a>

              <div className="mt-5 flex items-center justify-center gap-2 text-[10px] text-white/18" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_5px_rgba(52,211,153,0.6)]" />
                </span>
                Resposta em ate 24h
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
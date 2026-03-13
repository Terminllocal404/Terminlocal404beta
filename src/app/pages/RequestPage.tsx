import { motion } from "motion/react";
import { MessageCircle, Briefcase, Code, ArrowUpRight, Search } from "lucide-react";

const steps = [
  { icon: Search, num: "01", title: "Análise", desc: "Compreensão técnica do escopo e regras de negócio." },
  { icon: Code, num: "02", title: "Arquitetura", desc: "Definição das tecnologias e estrutura escalável ideal." },
  { icon: Briefcase, num: "03", title: "Proposta", desc: "Alinhamento de orçamento, cronograma e entregas." },
];

export function RequestPage() {
  return (
    <section className="pt-28 md:pt-36 pb-20 md:pb-28 min-h-[100svh] relative bg-[#020408] overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-[#00E5FF]/12 to-transparent" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00E5FF]/[0.025] rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-5 sm:px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <span
            className="inline-block text-[#00E5FF] text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] bg-[#00E5FF]/[0.05] px-4 py-1.5 rounded-full border border-[#00E5FF]/12 mb-5"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Processo de Onboarding
          </span>

          <h1
            className="text-[1.75rem] sm:text-4xl md:text-[2.75rem] font-bold text-white mb-3.5 tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Inicie seu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#0080FF]">
              Projeto
            </span>
          </h1>

          <p className="text-[15px] md:text-base text-white/35 mb-10 md:mb-14 max-w-lg mx-auto leading-[1.7]">
            Nossa equipe de arquitetos está pronta para analisar e construir um plano de ação para o seu negócio.
          </p>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-10 md:mb-14">
            {steps.map((step) => (
              <div
                key={step.num}
                className="group p-5 md:p-6 rounded-xl bg-white/[0.015] border border-white/[0.05] hover:border-[#00E5FF]/[0.12] hover:bg-[#00E5FF]/[0.025] transition-all duration-300 text-center"
              >
                <div className="w-11 h-11 bg-[#00E5FF]/[0.07] border border-[#00E5FF]/[0.12] rounded-xl flex items-center justify-center text-[#00E5FF] mx-auto mb-3 group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(0,229,255,0.12)] transition-all duration-300">
                  <step.icon className="w-[18px] h-[18px]" />
                </div>
                <span
                  className="text-white/[0.07] text-[10px] tracking-wider block mb-1.5"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {step.num}
                </span>
                <h3
                  className="text-white/75 font-semibold text-[16px] mb-1.5 group-hover:text-white transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-white/22 text-[13px] leading-[1.55]">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="relative rounded-2xl p-7 md:p-10 bg-white/[0.015] border border-white/[0.05] text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.06),transparent_55%)] pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-28 h-[2px] bg-gradient-to-r from-transparent via-[#00E5FF]/50 to-transparent shadow-[0_0_10px_rgba(0,229,255,0.3)]" />

            <h2
              className="text-xl md:text-2xl font-semibold text-white mb-2.5 tracking-tight relative z-10"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Pronto para o próximo passo?
            </h2>
            <p className="text-white/28 text-[13px] md:text-sm mb-6 max-w-md mx-auto relative z-10">
              Clique abaixo para ser redirecionado ao nosso WhatsApp e iniciar o atendimento com a equipe.
            </p>

            <a
              href="https://wa.me/553291547944"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 h-13 px-8 bg-[#00E5FF] text-[#020408] font-semibold text-[14px] rounded-xl hover:bg-[#2AECFF] hover:shadow-[0_4px_30px_rgba(0,229,255,0.3)] active:scale-[0.97] transition-all duration-300 relative z-10"
            >
              <MessageCircle className="w-[18px] h-[18px]" />
              Solicitar Projeto
              <ArrowUpRight className="w-4 h-4 opacity-50" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

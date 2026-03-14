import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";

const faqs = [
  {
    question: "Qual o prazo medio de entrega de um projeto?",
    answer: "O prazo varia conforme a complexidade e escopo do projeto. Sites institucionais simples podem ficar prontos em 1-2 semanas, enquanto sistemas complexos podem levar de 1 a 3 meses. Trabalhamos com metodologia agil e entregas incrementais para voce acompanhar o progresso.",
  },
  {
    question: "Quais tecnologias voces utilizam?",
    answer: "Utilizamos tecnologias modernas e consolidadas no mercado: React, TypeScript, Node.js, Python, PostgreSQL, MongoDB, AWS, Docker, entre outras. A escolha da stack e feita estrategicamente conforme as necessidades especificas de cada projeto.",
  },
  {
    question: "Voces oferecem suporte apos o lancamento?",
    answer: "Sim! Oferecemos suporte tecnico continuo, manutencoes corretivas e evolutivas. Nossos planos de suporte incluem monitoramento 24/7, backups automaticos, atualizacoes de seguranca e atendimento prioritario via WhatsApp.",
  },
  {
    question: "Como funciona o processo de orcamento?",
    answer: "Apos o contato inicial, agendamos uma reuniao para entender suas necessidades. Em 24-48h enviamos uma proposta tecnica detalhada com escopo, tecnologias, prazo e investimento. Sem custos ou compromissos nesta etapa de analise.",
  },
  {
    question: "Voces desenvolvem aplicativos mobile?",
    answer: "Sim, desenvolvemos aplicativos mobile utilizando React Native para entregar solucoes cross-platform (iOS e Android) com codigo compartilhado, reduzindo custos e tempo de desenvolvimento sem perder qualidade.",
  },
  {
    question: "E possivel modernizar um sistema legado?",
    answer: "Absolutamente! Somos especializados em refatoracao e modernizacao de sistemas legados. Migramos gradualmente para tecnologias modernas, garantindo zero downtime e preservando as regras de negocio existentes.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-36 bg-[#020408] relative overflow-hidden section-divider">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.025),transparent_70%)] blur-[60px]" />
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-6 relative z-10">
        <SectionHeader
          number="08"
          badge="Duvidas Frequentes"
          title="Perguntas"
          highlight="Frequentes"
          description="Respostas diretas para as principais duvidas sobre nossos servicos, processos e tecnologias."
        />

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="group"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className={`w-full text-left p-5 md:p-6 rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "bg-[#00E5FF]/[0.02] border-[#00E5FF]/[0.1] shadow-[0_0_20px_rgba(0,229,255,0.03)]"
                      : "bg-white/[0.015] border-white/[0.05] hover:bg-[#00E5FF]/[0.015] hover:border-[#00E5FF]/[0.08]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <span
                        className={`text-[11px] font-bold mt-0.5 tracking-wider shrink-0 transition-colors ${
                          isOpen ? "text-[#00E5FF]/50" : "text-white/10"
                        }`}
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3
                        className={`font-semibold text-[15px] md:text-base transition-colors pr-4 flex-1 ${
                          isOpen ? "text-white" : "text-white/85 group-hover:text-white"
                        }`}
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#00E5FF]/[0.1] border-[#00E5FF]/20 text-[#00E5FF]"
                          : "bg-[#00E5FF]/[0.05] border-[#00E5FF]/[0.1] text-[#00E5FF]/60"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </div>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/35 text-[13px] md:text-sm leading-[1.7] pt-4 pl-8 pr-12">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-white/20 text-sm mb-4">Nao encontrou sua resposta?</p>
          <a
            href="https://wa.me/553291547944?text=Seja%20bem-vindo!%20Faça%20o%20seu%20projeto%20conosco."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/[0.07] text-white/55 text-[13px] font-medium hover:text-[#00E5FF] hover:border-[#00E5FF]/20 hover:bg-[#00E5FF]/[0.04] transition-all duration-300"
          >
            Fale com nossa equipe
          </a>
        </motion.div>
      </div>
    </section>
  );
}
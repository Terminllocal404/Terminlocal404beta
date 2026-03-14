import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, MessageCircle, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { PageHero } from "../components/PageHero";

const faqs = [
  {
    question: "Qual o prazo médio de entrega de um projeto?",
    answer: "O prazo varia conforme a complexidade e escopo do projeto. Sites institucionais simples podem ficar prontos em 1-2 semanas, enquanto sistemas complexos podem levar de 1 a 3 meses. Trabalhamos com metodologia ágil e entregas incrementais para você acompanhar o progresso.",
  },
  {
    question: "Quais tecnologias vocês utilizam?",
    answer: "Utilizamos tecnologias modernas e consolidadas no mercado: React, TypeScript, Node.js, Python, PostgreSQL, MongoDB, AWS, Docker, entre outras. A escolha da stack é feita estrategicamente conforme as necessidades específicas de cada projeto.",
  },
  {
    question: "Vocês oferecem suporte após o lançamento?",
    answer: "Sim! Oferecemos suporte técnico contínuo, manutenções corretivas e evolutivas. Nossos planos de suporte incluem monitoramento 24/7, backups automáticos, atualizações de segurança e atendimento prioritário via WhatsApp.",
  },
  {
    question: "Como funciona o processo de orçamento?",
    answer: "Após o contato inicial, agendamos uma reunião para entender suas necessidades. Em 24-48h enviamos uma proposta técnica detalhada com escopo, tecnologias, prazo e investimento. Sem custos ou compromissos nesta etapa de análise.",
  },
  {
    question: "Vocês desenvolvem aplicativos mobile?",
    answer: "Sim, desenvolvemos aplicativos mobile utilizando React Native para entregar soluções cross-platform (iOS e Android) com código compartilhado, reduzindo custos e tempo de desenvolvimento sem perder qualidade.",
  },
  {
    question: "É possível modernizar um sistema legado?",
    answer: "Absolutamente! Somos especializados em refatoração e modernização de sistemas legados. Migramos gradualmente para tecnologias modernas, garantindo zero downtime e preservando as regras de negócio existentes.",
  },
  {
    question: "Qual é o investimento mínimo para um projeto?",
    answer: "Cada projeto é único e o investimento depende do escopo, complexidade e funcionalidades desejadas. Entre em contato para receber uma proposta personalizada sem compromisso. Trabalhamos com diferentes faixas de orçamento.",
  },
  {
    question: "Como funciona a comunicação durante o projeto?",
    answer: "Mantemos comunicação transparente e constante via WhatsApp, reuniões semanais de alinhamento, e acesso a um painel onde você acompanha o progresso em tempo real. Você participa de cada etapa do desenvolvimento.",
  },
];

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#020408]">
      <PageHero
        badge="Suporte"
        title="Perguntas"
        highlight="Frequentes"
        description="Respostas diretas para as principais dúvidas sobre nossos serviços, processos e tecnologias."
      >
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="https://wa.me/553291547944?text=Seja%20bem-vindo!%20Faça%20o%20seu%20projeto%20conosco."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#020408] text-[13px] font-semibold hover:shadow-[0_4px_24px_rgba(0,229,255,0.3)] active:scale-[0.97] transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <MessageCircle className="w-3.5 h-3.5 relative z-10" />
            <span className="relative z-10">Falar com a Equipe</span>
          </a>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 text-white/35 text-[13px] hover:text-[#00E5FF] transition-colors"
          >
            Outros Canais
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </PageHero>

      {/* FAQ Items */}
      <section className="py-20 md:py-28 bg-[#020408] relative overflow-hidden section-divider">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.025),transparent_70%)] blur-[60px]" />
        </div>

        <div className="max-w-4xl mx-auto px-5 sm:px-6 relative z-10">
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
                            isOpen ? "text-white" : "text-white group-hover:text-white"
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

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-white text-[13px] md:text-sm leading-[1.7] pt-4 pl-8 pr-12">
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
            <p className="text-white/50 text-sm mb-4">Não encontrou sua resposta?</p>
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
    </div>
  );
}

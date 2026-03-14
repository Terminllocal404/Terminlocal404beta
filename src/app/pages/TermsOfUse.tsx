import { motion } from "motion/react";
import { CheckCircle, AlertTriangle, RefreshCw } from "lucide-react";
import { PageHero } from "../components/PageHero";

export function TermsOfUse() {
  return (
    <div className="min-h-screen bg-[#020408]">
      <PageHero
        badge="Documento Legal"
        title="Termos de"
        highlight="Uso"
        description="Ao acessar e utilizar o site da Terminal 404, o usuario declara que leu, compreendeu e concorda com os termos e condicoes descritos neste documento."
      />

      <section className="py-16 md:py-20 bg-[#020408] relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-white/35 leading-relaxed space-y-4 mb-10">
              <p>
                A Terminal 404 atua como uma empresa de tecnologia e comunidade tecnica, oferecendo conteudos, projetos e canais de comunicacao voltados ao desenvolvimento de software e inovacao tecnologica.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: CheckCircle,
                  title: "Responsabilidades do Usuario",
                  intro: "Ao utilizar o site, o usuario compromete-se a:",
                  items: [
                    "Utilizar a plataforma de forma etica, responsavel e legal",
                    "Nao realizar atividades ilicitas, ofensivas ou prejudiciais",
                    "Nao comprometer a seguranca ou funcionamento do sistema",
                    "Respeitar outros usuarios, colaboradores e a empresa",
                  ],
                },
                {
                  icon: AlertTriangle,
                  title: "Limitacao de Responsabilidade",
                  intro: "A Terminal 404 nao se responsabiliza por:",
                  items: [
                    "Uso indevido das informacoes disponibilizadas no site",
                    "Interrupcoes temporarias do servico por manutencao ou problemas tecnicos",
                    "Danos causados por terceiros ou por uso inadequado da plataforma",
                  ],
                },
                {
                  icon: RefreshCw,
                  title: "Atualizacoes e Modificacoes",
                  intro: "A empresa reserva-se o direito de:",
                  items: [
                    "Atualizar conteudos da plataforma",
                    "Modificar funcionalidades ou servicos oferecidos",
                    "Alterar estes Termos de Uso a qualquer momento, sem aviso previo",
                  ],
                  footer: "O uso continuo da plataforma apos eventuais alteracoes implica na aceitacao automatica dos novos termos.",
                },
              ].map((section, idx) => (
                <div key={idx} className="rounded-xl bg-white/[0.01] border border-white/[0.04] p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-[#00E5FF]/[0.06] border border-[#00E5FF]/10 flex items-center justify-center shrink-0">
                      <section.icon className="w-4 h-4 text-[#00E5FF]" />
                    </div>
                    <h2 className="text-lg font-semibold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-white/30 text-sm mb-4">{section.intro}</p>
                  <ul className="space-y-2.5">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/35">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]/40 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {section.footer && (
                    <div className="border-t border-white/[0.04] mt-5 pt-4">
                      <p className="text-xs italic text-white/20">{section.footer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

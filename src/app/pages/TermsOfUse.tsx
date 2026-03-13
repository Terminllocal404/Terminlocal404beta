import { motion } from "motion/react";
import { CheckCircle, AlertTriangle, RefreshCw } from "lucide-react";

export function TermsOfUse() {
  return (
    <section className="pt-28 md:pt-36 pb-20 md:pb-24 min-h-screen relative bg-[#020408]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 w-full h-64 bg-gradient-to-b from-[#00E5FF]/[0.015] to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block text-[#00E5FF] text-[10px] font-medium uppercase tracking-[0.2em] bg-[#00E5FF]/[0.04] px-4 py-1.5 rounded-full border border-[#00E5FF]/10 mb-6"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Documento Legal
          </span>

          <h1
            className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Termos de Uso
          </h1>

          <div className="text-white/35 leading-relaxed space-y-4 mb-10">
            <p>
              Ao acessar e utilizar o site da Terminal 404, o usuário declara que leu, compreendeu e concorda com os termos e condições descritos neste documento.
            </p>
            <p>
              A Terminal 404 atua como uma empresa de tecnologia e comunidade técnica, oferecendo conteúdos, projetos e canais de comunicação voltados ao desenvolvimento de software e inovação tecnológica.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: CheckCircle,
                title: "Responsabilidades do Usuário",
                intro: "Ao utilizar o site, o usuário compromete-se a:",
                items: [
                  "Utilizar a plataforma de forma ética, responsável e legal",
                  "Não realizar atividades ilícitas, ofensivas ou prejudiciais",
                  "Não comprometer a segurança ou funcionamento do sistema",
                  "Respeitar outros usuários, colaboradores e a empresa",
                ],
              },
              {
                icon: AlertTriangle,
                title: "Limitação de Responsabilidade",
                intro: "A Terminal 404 não se responsabiliza por:",
                items: [
                  "Uso indevido das informações disponibilizadas no site",
                  "Interrupções temporárias do serviço por manutenção ou problemas técnicos",
                  "Danos causados por terceiros ou por uso inadequado da plataforma",
                ],
              },
              {
                icon: RefreshCw,
                title: "Atualizações e Modificações",
                intro: "A empresa reserva-se o direito de:",
                items: [
                  "Atualizar conteúdos da plataforma",
                  "Modificar funcionalidades ou serviços oferecidos",
                  "Alterar estes Termos de Uso a qualquer momento, sem aviso prévio",
                ],
                footer: "O uso contínuo da plataforma após eventuais alterações implica na aceitação automática dos novos termos.",
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
  );
}
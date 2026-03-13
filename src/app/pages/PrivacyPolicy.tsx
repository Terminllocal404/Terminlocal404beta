import { motion } from "motion/react";
import { Shield, Database, Lock, UserCheck, Share2 } from "lucide-react";

export function PrivacyPolicy() {
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
            Conformidade LGPD
          </span>

          <h1
            className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Política de Privacidade
          </h1>

          {/* Intro */}
          <div className="rounded-xl bg-[#00E5FF]/[0.02] border border-[#00E5FF]/10 p-6 md:p-8 mb-8 flex flex-col md:flex-row items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/[0.06] border border-[#00E5FF]/15 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-[#00E5FF]" />
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-white mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Introdução
              </h3>
              <p className="text-white/35 leading-relaxed">
                A Terminal 404 respeita a privacidade de seus usuários e está comprometida com a proteção dos dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-4">
            {[
              {
                icon: Database,
                title: "Coleta de Dados",
                intro: "Podemos coletar as seguintes informações:",
                items: ["Nome", "Endereço de e-mail", "Número de telefone", "Informações fornecidas em formulários de contato"],
              },
              {
                icon: Share2,
                title: "Uso dos Dados",
                intro: "Os dados coletados podem ser utilizados para:",
                items: ["Comunicação com usuários", "Atendimento de solicitações", "Melhoria dos serviços oferecidos", "Contato para parcerias e oportunidades"],
              },
              {
                icon: Share2,
                title: "Compartilhamento de Dados",
                intro: "Não compartilhamos dados pessoais com terceiros, exceto:",
                items: ["Quando exigido por lei", "Quando necessário para cumprimento de obrigações legais"],
              },
              {
                icon: Lock,
                title: "Armazenamento e Segurança",
                intro: "Adotamos medidas de segurança para proteger contra:",
                items: ["Acesso não autorizado", "Vazamentos de informações", "Uso indevido dos dados"],
              },
              {
                icon: UserCheck,
                title: "Direitos do Usuário",
                intro: "Nos termos da LGPD, o usuário pode:",
                items: ["Solicitar acesso aos seus dados pessoais", "Solicitar correção de dados incorretos", "Solicitar exclusão de seus dados", "Revogar o consentimento para tratamento"],
                footer: "As solicitações podem ser realizadas através do contato oficial da empresa.",
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

          {/* Contact */}
          <div className="mt-8 rounded-xl bg-white/[0.01] border border-[#00E5FF]/10 p-6 md:p-8">
            <h2 className="text-lg font-semibold text-white mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Contato Oficial
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-[10px] text-[#00E5FF] uppercase tracking-wider font-mono mb-1.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>E-mail</p>
                <a href="mailto:terminallocal404@gmail.com" className="text-white/60 hover:text-[#00E5FF] transition-colors text-sm font-medium">
                  terminallocal404@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[10px] text-[#00E5FF] uppercase tracking-wider font-mono mb-1.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Telefone / WhatsApp</p>
                <a href="tel:+553291547944" className="text-white/60 hover:text-[#00E5FF] transition-colors text-sm font-medium">
                  (32) 9154-7944
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
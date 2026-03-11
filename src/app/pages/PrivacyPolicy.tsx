import { motion } from "motion/react";
import { Shield, Database, Lock, UserCheck, Share2 } from "lucide-react";

export function PrivacyPolicy() {
  return (
    <section className="pt-32 pb-24 min-h-screen relative z-10 bg-[#05070D]">
      <div className="absolute top-0 w-full h-96 bg-gradient-to-b from-[#00E5FF]/[0.02] to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-[#00E5FF]" />
            <span className="text-[#00E5FF] font-semibold text-sm uppercase tracking-widest">
              Conformidade LGPD
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Política de Privacidade
          </h1>

          <div className="text-[#B0B3B8] leading-relaxed">
            <div className="bg-[#00E5FF]/5 border border-[#00E5FF]/20 rounded-2xl p-8 mb-12 flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center border border-[#00E5FF]/30 shrink-0">
                <Shield className="w-8 h-8 text-[#00E5FF]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Introdução</h3>
                <p className="text-lg">
                  A Terminal 404 respeita a privacidade de seus usuários e está comprometida com a proteção dos dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).
                  Esta política descreve como os dados pessoais são coletados, utilizados, armazenados e protegidos.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-[#0B0F1A] border border-[#00E5FF]/10 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center border border-[#00E5FF]/20 shrink-0">
                    <Database className="w-5 h-5 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-xl font-bold text-white m-0">Coleta de Dados</h2>
                </div>
                <p className="mb-4">Podemos coletar as seguintes informações:</p>
                <ul className="space-y-3 list-none p-0 m-0">
                  {[
                    "Nome", 
                    "Endereço de e-mail", 
                    "Número de telefone", 
                    "Informações fornecidas voluntariamente em formulários de contato"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0B0F1A] border border-[#00E5FF]/10 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center border border-[#00E5FF]/20 shrink-0">
                    <Share2 className="w-5 h-5 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-xl font-bold text-white m-0">Uso dos Dados</h2>
                </div>
                <p className="mb-4">Os dados coletados podem ser utilizados para:</p>
                <ul className="space-y-3 list-none p-0 m-0">
                  {[
                    "Comunicação com usuários", 
                    "Atendimento de solicitações enviadas pelo site", 
                    "Melhoria dos serviços e conteúdos oferecidos", 
                    "Contato para parcerias, projetos ou oportunidades profissionais"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-[#0B0F1A] border border-[#00E5FF]/10 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center border border-[#00E5FF]/20 shrink-0">
                    <Share2 className="w-5 h-5 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-xl font-bold text-white m-0">Compartilhamento de Dados</h2>
                </div>
                <p className="mb-6">
                  A Terminal 404 não compartilha dados pessoais com terceiros, exceto nas seguintes situações:
                </p>
                <ul className="space-y-3 list-none p-0 m-0">
                  {[
                    "Quando exigido por lei", 
                    "Quando necessário para cumprimento de obrigações legais"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0B0F1A] border border-[#00E5FF]/10 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center border border-[#00E5FF]/20 shrink-0">
                    <Lock className="w-5 h-5 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-xl font-bold text-white m-0">Armazenamento e Segurança</h2>
                </div>
                <p className="mb-6">
                  A empresa adota medidas técnicas e organizacionais de segurança para proteger os dados pessoais contra:
                </p>
                <ul className="space-y-3 list-none p-0 m-0">
                  {[
                    "Acesso não autorizado", 
                    "Vazamentos de informações", 
                    "Uso indevido dos dados"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0B0F1A] border border-[#00E5FF]/10 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center border border-[#00E5FF]/20 shrink-0">
                    <UserCheck className="w-5 h-5 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-xl font-bold text-white m-0">Direitos do Usuário</h2>
                </div>
                <p className="mb-6">
                  Nos termos da LGPD, o usuário possui o direito de:
                </p>
                <ul className="space-y-3 list-none p-0 mb-8">
                  {[
                    "Solicitar acesso aos seus dados pessoais", 
                    "Solicitar correção de dados incorretos", 
                    "Solicitar exclusão de seus dados", 
                    "Revogar o consentimento para tratamento de dados"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-[#00E5FF]/10 pt-6">
                  <p className="text-sm italic text-[#B0B3B8]/80">
                    As solicitações podem ser realizadas através do contato oficial da empresa.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-[#0B0F1A] to-[#05070D] p-8 rounded-2xl border border-[#00E5FF]/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E5FF]/5 blur-[60px] rounded-full pointer-events-none" />
              <h2 className="text-2xl font-bold mb-6 text-white relative z-10">Contato Oficial</h2>
              <div className="grid sm:grid-cols-2 gap-8 relative z-10">
                <div>
                  <p className="text-sm font-medium text-[#00E5FF] uppercase tracking-wider mb-2">E-mail</p>
                  <a href="mailto:terminallocal404@gmail.com" className="text-lg text-white hover:text-[#00E5FF] transition-colors font-medium">
                    terminallocal404@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#00E5FF] uppercase tracking-wider mb-2">Telefone / WhatsApp</p>
                  <a href="tel:+5532991547944" className="text-lg text-white hover:text-[#00E5FF] transition-colors font-medium">
                    (32) 99154-7944
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { CheckCircle, AlertTriangle, RefreshCw } from "lucide-react";

export function TermsOfUse() {
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
              Documento Legal
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Termos de Uso
          </h1>

          <div className="text-[#B0B3B8] leading-relaxed">
            <p className="text-lg mb-6">
              Ao acessar e utilizar o site da Terminal 404, o usuário declara que leu, compreendeu e concorda com os termos e condições descritos neste documento. Caso não concorde com qualquer parte destes termos, recomenda-se não utilizar os serviços disponibilizados pela plataforma.
            </p>
            <p className="text-lg mb-12">
              A Terminal 404 atua como uma empresa de tecnologia e comunidade técnica, oferecendo conteúdos, projetos, informações e canais de comunicação voltados ao desenvolvimento de software, inovação tecnológica e colaboração profissional.
            </p>

            <div className="space-y-8">
              <div className="bg-[#0B0F1A] border border-[#00E5FF]/10 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center border border-[#00E5FF]/20 shrink-0">
                    <CheckCircle className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-2xl font-bold text-white m-0">Responsabilidades do Usuário</h2>
                </div>
                <p className="mb-6">Ao utilizar o site, o usuário compromete-se a:</p>
                <ul className="space-y-4 list-none p-0 m-0">
                  {[
                    "Utilizar a plataforma de forma ética, responsável e legal", 
                    "Não realizar atividades ilícitas, ofensivas ou prejudiciais", 
                    "Não comprometer a segurança ou funcionamento do sistema", 
                    "Respeitar outros usuários, colaboradores e a empresa"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#00E5FF] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0B0F1A] border border-[#00E5FF]/10 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center border border-[#00E5FF]/20 shrink-0">
                    <AlertTriangle className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-2xl font-bold text-white m-0">Limitação de Responsabilidade</h2>
                </div>
                <p className="mb-6">A Terminal 404 não se responsabiliza por:</p>
                <ul className="space-y-4 list-none p-0 m-0">
                  {[
                    "Uso indevido das informações disponibilizadas no site", 
                    "Interrupções temporárias do serviço por manutenção ou problemas técnicos", 
                    "Danos causados por terceiros ou por uso inadequado da plataforma"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#00E5FF] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0B0F1A] border border-[#00E5FF]/10 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center border border-[#00E5FF]/20 shrink-0">
                    <RefreshCw className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-2xl font-bold text-white m-0">Atualizações e Modificações</h2>
                </div>
                <p className="mb-6">A empresa reserva-se o direito de:</p>
                <ul className="space-y-4 list-none p-0 mb-8">
                  {[
                    "Atualizar conteúdos da plataforma", 
                    "Modificar funcionalidades ou serviços oferecidos", 
                    "Alterar estes Termos de Uso a qualquer momento, sem aviso prévio"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#00E5FF] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-[#00E5FF]/10 pt-6">
                  <p className="text-sm italic text-[#B0B3B8]/80">
                    O uso contínuo da plataforma após eventuais alterações implica na aceitação automática dos novos termos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

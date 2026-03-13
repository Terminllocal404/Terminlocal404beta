import { motion } from "motion/react";
import { MessageCircle, TerminalSquare, Briefcase, Code, ArrowRight } from "lucide-react";

export function RequestPage() {
  return (
    <section className="pt-32 pb-24 min-h-[100svh] relative z-10 bg-[#02040A] overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00E5FF]/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px max-w-7xl bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#00E5FF]" />
            <span className="text-[#00E5FF] font-mono font-semibold text-sm uppercase tracking-widest bg-[#00E5FF]/10 px-3 py-1 rounded-full border border-[#00E5FF]/20">
              Processo de Inboarding
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-r from-[#00E5FF] to-transparent" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Inicie seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">Projeto</span>
          </h1>
          <p className="text-lg md:text-xl text-[#8B949E] mb-16 max-w-2xl mx-auto leading-relaxed">
            Nossa equipe de arquitetos de software está pronta para analisar a viabilidade e construir um plano de ação estruturado para o seu negócio.
          </p>

          <div className="bg-[#0B0F1A]/80 backdrop-blur-xl border border-[#00E5FF]/20 rounded-3xl p-8 md:p-16 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] relative group text-left">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E5FF]/5 blur-[60px] rounded-full pointer-events-none" />
            
            <div className="grid md:grid-cols-3 gap-8 mb-16 relative z-10">
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#02040A]/50 border border-[#00E5FF]/10">
                <div className="w-12 h-12 bg-[#00E5FF]/10 rounded-xl flex items-center justify-center text-[#00E5FF] mb-4">
                  <TerminalSquare className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold mb-2">1. Análise</h3>
                <p className="text-[#8B949E] text-sm">Compreensão técnica do seu escopo e regras de negócio.</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#02040A]/50 border border-[#00E5FF]/10">
                <div className="w-12 h-12 bg-[#00E5FF]/10 rounded-xl flex items-center justify-center text-[#00E5FF] mb-4">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold mb-2">2. Arquitetura</h3>
                <p className="text-[#8B949E] text-sm">Definição das tecnologias e estrutura escalável ideal.</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#02040A]/50 border border-[#00E5FF]/10">
                <div className="w-12 h-12 bg-[#00E5FF]/10 rounded-xl flex items-center justify-center text-[#00E5FF] mb-4">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold mb-2">3. Proposta</h3>
                <p className="text-[#8B949E] text-sm">Alinhamento de orçamento e cronograma de entregas.</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center bg-gradient-to-b from-[#02040A]/80 to-[#05070D] border border-[#00E5FF]/30 rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#00E5FF] shadow-[0_0_20px_#00E5FF]" />
              
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                Pronto para dar o próximo passo?
              </h2>
              <p className="text-[#8B949E] mb-10 max-w-lg mx-auto">
                Ao clicar no botão abaixo, você será redirecionado para o nosso WhatsApp oficial, onde nossa equipe de engenharia iniciará seu atendimento de forma rápida e direta.
              </p>

              <a
                href="https://wa.me/5532991547944"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-[#00E5FF] to-blue-500 hover:from-white hover:to-white text-[#02040A] font-black uppercase tracking-widest rounded-xl transition-all duration-500 flex items-center justify-center gap-4 hover:shadow-[0_0_40px_rgba(0,229,255,0.4)] transform hover:-translate-y-1"
              >
                <MessageCircle className="w-6 h-6" />
                Solicitar Projeto
                <ArrowRight className="w-5 h-5 ml-2 opacity-70" />
              </a>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
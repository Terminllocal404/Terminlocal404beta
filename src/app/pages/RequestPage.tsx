import { motion } from "motion/react";
import { Send, TerminalSquare, Briefcase, Code, ChevronRight } from "lucide-react";
import { useState } from "react";

export function RequestPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setErrorMessage("");

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8000";
      const response = await fetch(`${apiUrl}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Falha na comunicação com o servidor SMTP.");
      
      setFormStatus("success");
      setFormData({ name: "", email: "", service: "", budget: "", message: "" });
    } catch (error) {
      console.error(error);
      setFormStatus("error");
      setErrorMessage("Erro ao enviar sua requisição. Verifique a conexão do servidor de backend.");
    }
  };

  return (
    <section className="pt-32 pb-24 min-h-[100svh] relative z-10 bg-[#02040A] overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00E5FF]/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px max-w-7xl bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#00E5FF]" />
            <span className="text-[#00E5FF] font-mono font-semibold text-sm uppercase tracking-widest bg-[#00E5FF]/10 px-3 py-1 rounded-full border border-[#00E5FF]/20">
              Processo de Inboarding
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Inicie seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">Projeto</span>
          </h1>
          <p className="text-lg md:text-xl text-[#8B949E] mb-12 max-w-2xl leading-relaxed">
            Forneça os dados iniciais do seu escopo. Nossa equipe de arquitetos de software analisará a viabilidade e retornará com um plano de ação estruturado.
          </p>

          <div className="bg-[#0B0F1A]/80 backdrop-blur-xl border border-[#00E5FF]/20 rounded-3xl p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E5FF]/5 blur-[60px] rounded-full pointer-events-none" />
            
            {formStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#0B0F1A] to-[#05070D] rounded-2xl flex items-center justify-center mb-8 border border-[#00E5FF]/30 shadow-[0_0_30px_rgba(0,229,255,0.2)] transform scale-110">
                  <TerminalSquare className="w-10 h-10 text-[#00E5FF]" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight">
                  Payload Recebido com Sucesso
                </h3>
                <p className="text-[#8B949E] max-w-md text-lg leading-relaxed">
                  Os dados do seu projeto foram registrados no nosso sistema. Nossos engenheiros analisarão os requisitos e entraremos em contato corporativo em breve.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-8 text-[#00E5FF] hover:text-white font-mono text-sm uppercase tracking-widest transition-colors flex items-center gap-2 group/btn"
                >
                  Submeter nova requisição
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-mono font-semibold uppercase tracking-widest text-[#8B949E] flex items-center gap-2">
                      <span className="text-[#00E5FF]">&gt;</span> Identificação
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#02040A]/50 border border-[#00E5FF]/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00E5FF]/80 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all duration-300 focus:bg-[#02040A]"
                      placeholder="Nome completo ou Razão Social"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-mono font-semibold uppercase tracking-widest text-[#8B949E] flex items-center gap-2">
                      <span className="text-[#00E5FF]">&gt;</span> Endereço Corporativo
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#02040A]/50 border border-[#00E5FF]/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00E5FF]/80 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all duration-300 focus:bg-[#02040A]"
                      placeholder="contato@empresa.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-xs font-mono font-semibold uppercase tracking-widest text-[#8B949E] flex items-center gap-2">
                    <span className="text-[#00E5FF]">&gt;</span> Escopo da Solução
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#02040A]/50 border border-[#00E5FF]/20 rounded-xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-[#00E5FF]/80 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all duration-300 focus:bg-[#02040A]"
                    >
                      <option value="" disabled>Selecione a categoria técnica...</option>
                      <option value="system">Desenvolvimento de Software / SaaS</option>
                      <option value="web">Engenharia Web (Plataformas / Portais)</option>
                      <option value="automation">Automação de Processos e Bots</option>
                      <option value="consulting">Consultoria e Arquitetura Cloud</option>
                      <option value="other">Outros / Não classificado</option>
                    </select>
                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                      <Code className="w-5 h-5 text-[#8B949E]" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="budget" className="text-xs font-mono font-semibold uppercase tracking-widest text-[#8B949E] flex items-center gap-2">
                    <span className="text-[#00E5FF]">&gt;</span> Resource Allocation (Orçamento)
                  </label>
                  <div className="relative">
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#02040A]/50 border border-[#00E5FF]/20 rounded-xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-[#00E5FF]/80 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all duration-300 focus:bg-[#02040A]"
                    >
                      <option value="" disabled>Selecione a faixa de investimento...</option>
                      <option value="small">Até R$ 5.000</option>
                      <option value="medium">R$ 5.000 a R$ 15.000</option>
                      <option value="large">R$ 15.000 a R$ 50.000</option>
                      <option value="enterprise">Acima de R$ 50.000 (Enterprise)</option>
                      <option value="notsure">Sujeito a análise</option>
                    </select>
                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                      <Briefcase className="w-5 h-5 text-[#8B949E]" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="text-xs font-mono font-semibold uppercase tracking-widest text-[#8B949E] flex items-center gap-2">
                    <span className="text-[#00E5FF]">&gt;</span> Especificação Técnica
                  </label>
                  <textarea
                    id="description"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#02040A]/50 border border-[#00E5FF]/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00E5FF]/80 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all duration-300 resize-none focus:bg-[#02040A]"
                    placeholder="Descreva as regras de negócio, objetivos primários e funcionalidades essenciais..."
                  ></textarea>
                </div>

                {formStatus === "error" && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-gradient-to-r from-[#00E5FF] to-blue-500 hover:from-white hover:to-white text-[#02040A] font-black uppercase tracking-widest py-4 rounded-xl transition-all duration-500 flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transform hover:-translate-y-1 mt-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {formStatus === "submitting" ? (
                    <span className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-[#02040A]/30 border-t-[#02040A] rounded-full animate-spin" />
                      Processando Requisição...
                    </span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Transmitir Solicitação
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

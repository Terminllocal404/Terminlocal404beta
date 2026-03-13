import { motion } from "motion/react";
import { Mail, Phone, Instagram, Github, Linkedin, MessageCircle, Terminal, ArrowRight } from "lucide-react";

export function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const socialLinks = [
    { name: "Instagram", url: "https://www.instagram.com/terminal_4.0.4/", icon: Instagram },
    { name: "WhatsApp", url: "https://wa.me/553291547944", icon: MessageCircle },
    { name: "GitHub", url: "https://github.com/Terminllocal404", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/posts/terminal-404_terminal404-linkedin-activity-7419888008151261184-qFpP", icon: Linkedin },
  ];

  return (
    <section id="contato" className="py-24 md:py-32 relative z-10 bg-[#02040A] overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-[#00E5FF]/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16"
        >
          {/* Informações */}
          <div className="flex flex-col justify-center">
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#00E5FF]" />
              <span className="text-[#00E5FF] font-mono font-semibold text-sm uppercase tracking-widest bg-[#00E5FF]/10 px-3 py-1 rounded-full border border-[#00E5FF]/20 flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Comunicação Direta
              </span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              Inicie um <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">projeto</span> conosco.
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-lg text-[#8B949E] mb-12 leading-relaxed">
              Conecte-se com a Terminal 404 para discutir soluções arquiteturais de software, terceirização de desenvolvimento, ou para ingressar em nosso ecossistema técnico.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4 mb-12">
              <div className="group flex items-center gap-5 p-5 rounded-2xl bg-[#0B0F1A] border border-[#00E5FF]/10 hover:border-[#00E5FF]/40 hover:bg-[#00E5FF]/[0.02] transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0B0F1A] to-[#05070D] flex items-center justify-center border border-[#00E5FF]/20 text-[#00E5FF] shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all duration-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 tracking-wide">E-mail Corporativo</h4>
                  <a href="mailto:terminallocal404@gmail.com" className="text-[#8B949E] hover:text-[#00E5FF] transition-colors font-mono text-sm">
                    terminallocal404@gmail.com
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-5 p-5 rounded-2xl bg-[#0B0F1A] border border-[#00E5FF]/10 hover:border-[#00E5FF]/40 hover:bg-[#00E5FF]/[0.02] transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0B0F1A] to-[#05070D] flex items-center justify-center border border-[#00E5FF]/20 text-[#00E5FF] shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all duration-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 tracking-wide">Telefone Oficial</h4>
                  <a href="tel:+553291547944" className="text-[#8B949E] hover:text-[#00E5FF] transition-colors font-mono text-sm">
                    (32) 9154-7944
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Redes Sociais */}
            <motion.div variants={itemVariants}>
              <h4 className="text-[#6E7681] font-mono font-semibold text-sm mb-6 uppercase tracking-widest flex items-center gap-4">
                Redes Sociais
                <div className="flex-1 h-[1px] bg-gradient-to-r from-[#00E5FF]/20 to-transparent" />
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-[#05070D] border border-[#00E5FF]/10 hover:bg-[#0B0F1A] hover:border-[#00E5FF]/40 hover:-translate-y-2 hover:shadow-[0_15px_30px_-10px_rgba(0,229,255,0.15)] transition-all duration-500 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B0F1A] to-transparent flex items-center justify-center text-[#8B949E] border border-[#00E5FF]/10 group-hover:text-[#02040A] group-hover:bg-[#00E5FF] group-hover:border-[#00E5FF] transition-all duration-500">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-[#8B949E] uppercase tracking-wide group-hover:text-white transition-colors">
                        {social.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Call to Action - WhatsApp */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="bg-[#0B0F1A]/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-[#00E5FF]/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group h-full flex flex-col items-center text-center justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E5FF]/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-[#00E5FF]/20 transition-colors duration-700" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00E5FF]/50 to-transparent" />
              
              <div className="w-24 h-24 rounded-full bg-[#00E5FF]/10 flex items-center justify-center mb-8 border border-[#00E5FF]/30 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all duration-500">
                <MessageCircle className="w-12 h-12 text-[#00E5FF]" />
              </div>

              <h3 className="text-3xl font-black text-white mb-4 relative tracking-tight">
                Atendimento <span className="text-[#00E5FF]">Imediato</span>
              </h3>
              
              <p className="text-[#8B949E] mb-10 leading-relaxed max-w-md mx-auto">
                Nossa equipe está pronta para conversar. Clique abaixo para ser redirecionado diretamente ao nosso WhatsApp oficial e falar com um de nossos arquitetos.
              </p>
              
              <a
                href="https://wa.me/553291547944"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-[#00E5FF] to-blue-500 hover:from-white hover:to-white text-[#02040A] font-black uppercase tracking-widest rounded-xl transition-all duration-500 flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transform hover:-translate-y-1"
              >
                <MessageCircle className="w-6 h-6" />
                Falar com a equipe
                <ArrowRight className="w-5 h-5 ml-2 opacity-70" />
              </a>

              <div className="mt-8 flex items-center gap-2 text-xs font-mono text-[#6E7681]">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Atendimento em horário comercial
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
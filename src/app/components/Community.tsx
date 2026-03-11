import { motion } from "motion/react";
import { 
  TerminalSquare, 
  Users, 
  Briefcase, 
  BookOpen, 
  MessageSquare,
  Network,
  Code2,
  Cpu
} from "lucide-react";

export function Community() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cards = [
    { name: "Projetos Colaborativos", icon: Code2, desc: "Trabalhe em equipe construindo soluções do zero." },
    { name: "Networking", icon: Network, desc: "Conecte-se com desenvolvedores de todos os níveis." },
    { name: "Aprendizado Contínuo", icon: BookOpen, desc: "Evolua tecnicamente compartilhando conhecimento." },
    { name: "Experiência Real", icon: Briefcase, desc: "Participe de projetos que farão a diferença no seu portfólio." },
  ];

  const interviewQuestions = [
    "O que você faz atualmente na área de tecnologia",
    "Quais são suas habilidades ou linguagens de programação",
    "Em quais áreas ou projetos você gostaria de contribuir",
  ];

  return (
    <section id="comunidade" className="py-24 md:py-32 relative z-10 bg-[#05070D] min-h-screen overflow-hidden">
      {/* Background futurista */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMjI5LCAyNTUsIDAuMSkiLz48L3N2Zz4=')] opacity-20" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00E5FF]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00E5FF]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col gap-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#00E5FF]" />
              <div className="flex items-center gap-2 text-[#00E5FF] font-mono text-sm tracking-widest uppercase bg-[#00E5FF]/10 px-4 py-1.5 rounded-full border border-[#00E5FF]/20">
                <TerminalSquare className="w-4 h-4" /> Terminal 404
              </div>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#00E5FF]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#00E5FF] mb-6 tracking-tight">
              Comunidade de Desenvolvedores
            </h1>
            <p className="text-xl md:text-2xl text-[#00E5FF] font-medium mb-8">
              Participe dos nossos projetos e evolua junto com outros programadores.
            </p>
            <div className="space-y-6 text-[#B0B3B8] text-lg leading-relaxed text-left md:text-center">
              <p>
                Nossa comunidade é aberta para programadores iniciantes, intermediários e avançados que desejam participar de projetos colaborativos, aprender novas tecnologias e contribuir com soluções reais.
              </p>
              <p>
                Dentro da comunidade, desenvolvemos projetos, compartilhamos conhecimento e trabalhamos juntos para evoluir como profissionais da área de tecnologia.
              </p>
            </div>
          </motion.div>

          {/* Cards de Benefícios */}
          <motion.div variants={itemVariants} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, idx) => (
              <div key={idx} className="bg-[#0B0F1A]/80 backdrop-blur-sm p-6 rounded-2xl border border-[#00E5FF]/10 hover:border-[#00E5FF]/50 hover:bg-[#00E5FF]/5 transition-all duration-300 group hover:-translate-y-2 shadow-[0_0_0_rgba(0,229,255,0)] hover:shadow-[0_10px_30px_-10px_rgba(0,229,255,0.3)]">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00E5FF]/20 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-[#00E5FF]/20">
                  <card.icon className="w-7 h-7 text-[#00E5FF]" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{card.name}</h3>
                <p className="text-[#8B949E] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Processo de Entrada */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 items-center bg-[#0B0F1A]/50 border border-[#00E5FF]/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 text-[#00E5FF]/5">
              <Cpu className="w-96 h-96" />
            </div>
            
            <div className="relative">
              <h3 className="text-3xl font-bold text-white mb-6">
                Como ingressar na comunidade?
              </h3>
              <div className="space-y-6 text-[#B0B3B8] text-lg leading-relaxed">
                <p>
                  Se você deseja fazer parte da comunidade, poderá entrar através do nosso Discord oficial.
                </p>
                <p>
                  Após entrar no Discord, será necessário passar por uma <span className="text-[#00E5FF] font-semibold">breve entrevista de apresentação</span> para que possamos conhecer melhor você.
                </p>
              </div>
            </div>

            <div className="relative bg-[#05070D] p-8 rounded-2xl border border-[#00E5FF]/20 shadow-[0_0_40px_rgba(0,229,255,0.05)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent opacity-50" />
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <MessageSquare className="text-[#00E5FF]" /> Durante a apresentação iremos perguntar:
              </h4>
              <ul className="space-y-4 mb-8">
                {interviewQuestions.map((q, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#E2E8F0] bg-[#0B0F1A] p-4 rounded-xl border border-[#00E5FF]/10">
                    <div className="w-2 h-2 rounded-full bg-[#00E5FF] mt-2 shrink-0 shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#00E5FF]/10 to-transparent border-l-2 border-[#00E5FF] text-[#B0B3B8] text-sm">
                O objetivo dessa conversa é entender seu perfil e direcionar você para os projetos mais adequados dentro da comunidade.
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-8">
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00E5FF] to-blue-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500 group-hover:duration-200" />
              <a 
                href="https://discord.gg/NxjyjR9Z" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#05070D] text-[#00E5FF] font-bold text-xl hover:bg-[#00E5FF] hover:text-[#05070D] transition-all duration-300 border border-[#00E5FF]/50 uppercase tracking-wide"
              >
                <Users className="w-6 h-6" />
                Entrar na Comunidade
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

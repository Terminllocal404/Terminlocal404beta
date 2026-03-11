import { motion } from "motion/react";
import { ShieldCheck, Users, Server, Zap, Cpu, Code } from "lucide-react";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="sobre" className="py-24 md:py-32 relative z-10 bg-[#05070D] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00E5FF]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Side: Title & Text */}
          <div>
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#00E5FF]" />
              <span className="text-[#00E5FF] font-mono font-semibold text-sm uppercase tracking-widest bg-[#00E5FF]/10 px-3 py-1 rounded-full border border-[#00E5FF]/20">
                Sobre a Empresa
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight"
            >
              Conectando <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">engenharia</span>
              <br /> e soluções digitais.
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6 text-lg text-[#8B949E] leading-relaxed mb-10">
              <p>
                A Terminal 404 é um <strong className="text-white font-semibold">hub de inovação e engenharia de software</strong> criado para conectar desenvolvedores, arquitetos de sistemas e entusiastas da tecnologia em um ecossistema corporativo de alto desempenho.
              </p>
              <p>
                Atuamos no ciclo completo de desenvolvimento de projetos escaláveis, na troca contínua de conhecimento técnico e na construção de infraestruturas seguras, priorizando sempre a excelência e as melhores práticas do mercado.
              </p>
            </motion.div>

            {/* Quick stats or key points */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-3 group p-4 rounded-2xl bg-[#0B0F1A] border border-[#00E5FF]/10 hover:border-[#00E5FF]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00E5FF]/20 to-transparent flex items-center justify-center border border-[#00E5FF]/20 text-[#00E5FF] group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Ecossistema Ativo</h4>
                  <p className="text-sm text-[#6E7681]">
                    Profissionais qualificados de todos os níveis.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col gap-3 group p-4 rounded-2xl bg-[#0B0F1A] border border-[#00E5FF]/10 hover:border-[#00E5FF]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00E5FF]/20 to-transparent flex items-center justify-center border border-[#00E5FF]/20 text-[#00E5FF] group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Padrão Enterprise</h4>
                  <p className="text-sm text-[#6E7681]">
                    Arquitetura segura e código limpo.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Visual Graphic */}
          <motion.div
            variants={itemVariants}
            className="relative h-full min-h-[450px] w-full bg-[#02040A] rounded-3xl border border-[#00E5FF]/20 overflow-hidden flex items-center justify-center group shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            {/* Inner glowing elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00E5FF]/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMjI5LCAyNTUsIDAuMSkiLz48L3N2Zz4=')] opacity-30" />

            <div className="relative z-10 w-72 h-72 border border-[#00E5FF]/20 rounded-full flex items-center justify-center bg-[#05070D]/80 backdrop-blur-md shadow-[0_0_50px_rgba(0,229,255,0.1)]">
              <div className="w-56 h-56 border-t border-l border-[#00E5FF]/40 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                <div className="w-40 h-40 border-b border-r border-[#00E5FF]/60 rounded-full flex items-center justify-center bg-[#0B0F1A] animate-[spin_15s_linear_reverse_infinite] shadow-[inset_0_0_20px_rgba(0,229,255,0.2)]">
                  <Code className="w-12 h-12 text-[#00E5FF] animate-pulse" />
                </div>
              </div>
            </div>
            
            {/* Floating UI Elements */}
            <div className="absolute top-10 right-10 bg-[#0B0F1A]/90 backdrop-blur-sm p-4 rounded-xl border border-[#00E5FF]/30 flex items-center gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center">
                <Server className="w-5 h-5 text-[#00E5FF]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#6E7681] font-mono uppercase tracking-widest mb-0.5">Status de Rede</span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                  <span className="text-sm text-white font-bold tracking-wide">OPERACIONAL</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { Link } from "react-router";
import { founders } from "../data/founders";
import { ArrowRight, TerminalSquare, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Team() {
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

  return (
    <section id="equipe" className="py-24 md:py-32 relative z-10 bg-[#05070D] border-y border-[#00E5FF]/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#00E5FF]/[0.03] via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#00E5FF]" />
            <span className="text-[#00E5FF] font-mono font-semibold text-sm uppercase tracking-widest flex items-center gap-2">
              <Shield className="w-4 h-4" /> Board of Directors
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#00E5FF]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">Liderança</span>
          </h2>
          <p className="text-lg md:text-xl text-[#8B949E] max-w-3xl mx-auto leading-relaxed">
            A equipe executiva da Terminal 404 une alta expertise em engenharia de software, arquitetura cloud e liderança técnica para construir as soluções do futuro.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {founders.map((founder) => (
            <motion.div
              key={founder.id}
              variants={itemVariants}
              className="bg-[#0B0F1A] border border-[#00E5FF]/10 rounded-3xl overflow-hidden hover:border-[#00E5FF]/50 transition-all duration-500 group flex flex-col hover:shadow-[0_20px_40px_-15px_rgba(0,229,255,0.2)] transform hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden bg-[#02040A]">
                <ImageWithFallback
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-70 group-hover:opacity-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-[#0B0F1A]/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-1">
                    <TerminalSquare className="w-5 h-5 text-[#00E5FF] opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500" />
                    <span className="text-white font-black text-2xl tracking-tight drop-shadow-lg">
                      {founder.name}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 relative bg-[#0B0F1A]">
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-[#00E5FF]/30 to-transparent" />
                
                <div className="mb-6 mt-2">
                  <span className="inline-block px-4 py-1.5 rounded-md border border-[#00E5FF]/20 bg-[#00E5FF]/5 text-[#00E5FF] text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-[0_0_10px_rgba(0,229,255,0.1)]">
                    {founder.shortRole}
                  </span>
                  <p className="text-[#8B949E] leading-relaxed line-clamp-3 group-hover:text-[#B0B3B8] transition-colors">
                    {founder.bio}
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-[#00E5FF]/10">
                  <Link
                    to={`/equipe/${founder.id}`}
                    className="flex items-center justify-between w-full text-white hover:text-[#00E5FF] transition-colors group/btn"
                  >
                    <span className="font-bold text-sm uppercase tracking-widest">
                      Acessar Perfil
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/5 border border-[#00E5FF]/20 flex items-center justify-center group-hover/btn:bg-[#00E5FF] group-hover/btn:border-[#00E5FF] group-hover/btn:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all duration-300">
                      <ArrowRight className="w-5 h-5 text-[#00E5FF] group-hover/btn:text-[#02040A] group-hover/btn:-rotate-45 transition-all duration-300" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

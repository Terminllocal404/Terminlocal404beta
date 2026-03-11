import { motion } from "motion/react";
import { Briefcase, Layers, Users, Shield, TrendingUp, Handshake } from "lucide-react";

export function Values() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  const values = [
    { name: "Profissionalismo", icon: Briefcase },
    { name: "Organização", icon: Layers },
    { name: "Colaboração", icon: Users },
    { name: "Segurança", icon: Shield },
    { name: "Crescimento técnico", icon: TrendingUp },
    { name: "Ética e respeito", icon: Handshake },
  ];

  return (
    <section id="valores" className="py-24 md:py-32 bg-[#0B0F1A] border-t border-[#00E5FF]/10 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#05070D] to-[#0B0F1A] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#00E5FF]" />
            <span className="text-[#00E5FF] font-semibold text-sm uppercase tracking-widest">
              Nossos Pilares
            </span>
            <div className="w-8 h-[1px] bg-[#00E5FF]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Valores Institucionais
          </h2>
          <p className="text-lg text-[#B0B3B8] max-w-2xl">
            Tudo o que construímos e a forma como operamos baseiam-se em
            princípios sólidos, garantindo qualidade e credibilidade no mercado.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col items-center justify-center p-8 rounded-xl bg-[#05070D] border border-[#00E5FF]/10 hover:border-[#00E5FF]/40 group hover:shadow-[0_0_20px_rgba(0,229,255,0.05)] transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-[#00E5FF]/5 flex items-center justify-center mb-4 border border-[#00E5FF]/20 group-hover:bg-[#00E5FF]/10 group-hover:scale-110 transition-all duration-300">
                <value.icon className="w-8 h-8 text-[#00E5FF]" />
              </div>
              <h4 className="text-white font-semibold text-center mt-2 group-hover:text-[#00E5FF] transition-colors">
                {value.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

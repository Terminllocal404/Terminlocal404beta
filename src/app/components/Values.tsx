import { motion } from "motion/react";
import { Briefcase, Layers, Users, Shield, TrendingUp, Handshake } from "lucide-react";

const values = [
  { name: "Profissionalismo", icon: Briefcase, desc: "Excelência em cada entrega." },
  { name: "Organização", icon: Layers, desc: "Processos estruturados e claros." },
  { name: "Colaboração", icon: Users, desc: "Trabalho em equipe eficiente." },
  { name: "Segurança", icon: Shield, desc: "Proteção em todas as camadas." },
  { name: "Crescimento", icon: TrendingUp, desc: "Evolução técnica constante." },
  { name: "Ética", icon: Handshake, desc: "Transparência e respeito." },
];

export function Values() {
  return (
    <section id="valores" className="py-20 md:py-32 bg-[#020408] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.03),transparent_65%)] blur-[40px]" />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[#00E5FF] text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] bg-[#00E5FF]/[0.05] px-4 py-1.5 rounded-full border border-[#00E5FF]/12 mb-5"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Nossos Pilares
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[1.75rem] sm:text-4xl md:text-[2.75rem] font-bold text-white mb-3.5 tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Valores Institucionais
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[15px] md:text-base text-white/30 max-w-xl mx-auto leading-relaxed"
          >
            Princípios que garantem qualidade, escalabilidade e credibilidade em cada projeto.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="group flex flex-col items-center justify-center p-5 md:p-8 rounded-2xl bg-white/[0.015] border border-white/[0.05] hover:border-[#00E5FF]/[0.12] hover:bg-[#00E5FF]/[0.025] transition-all duration-400 cursor-default"
            >
              <div className="w-11 h-11 md:w-13 md:h-13 rounded-xl bg-[#00E5FF]/[0.07] border border-[#00E5FF]/[0.12] flex items-center justify-center mb-3.5 group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(0,229,255,0.12)] transition-all duration-400">
                <value.icon className="w-5 h-5 md:w-[22px] md:h-[22px] text-[#00E5FF]" />
              </div>
              <h4
                className="text-white/75 font-semibold text-[14px] md:text-[15px] text-center mb-1 group-hover:text-white transition-colors tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {value.name}
              </h4>
              <p className="text-white/18 text-[11px] md:text-[12px] text-center leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

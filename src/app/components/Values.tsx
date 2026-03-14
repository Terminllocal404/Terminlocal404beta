import { motion } from "motion/react";
import { Briefcase, Layers, Users, Shield, TrendingUp, Handshake } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const values = [
  { name: "Profissionalismo", icon: Briefcase, desc: "Excelencia em cada entrega." },
  { name: "Organizacao", icon: Layers, desc: "Processos estruturados e claros." },
  { name: "Colaboracao", icon: Users, desc: "Trabalho em equipe eficiente." },
  { name: "Seguranca", icon: Shield, desc: "Protecao em todas as camadas." },
  { name: "Crescimento", icon: TrendingUp, desc: "Evolucao tecnica constante." },
  { name: "Etica", icon: Handshake, desc: "Transparencia e respeito." },
];

export function Values() {
  return (
    <section id="valores" className="py-24 md:py-36 bg-[#020408] relative overflow-hidden section-divider">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.025),transparent_65%)] blur-[40px]" />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        <SectionHeader
          number="07"
          badge="Nossos Pilares"
          title="Valores"
          highlight="Institucionais"
          description="Principios que garantem qualidade, escalabilidade e credibilidade em cada projeto."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="group flex flex-col items-center justify-center p-5 md:p-8 rounded-2xl bg-white/[0.015] border border-white/[0.05] hover:border-[#00E5FF]/[0.12] hover:bg-[#00E5FF]/[0.02] transition-all duration-400 cursor-default relative overflow-hidden"
            >
              {/* Subtle top gradient on hover */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#00E5FF]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-11 h-11 md:w-13 md:h-13 rounded-xl bg-gradient-to-br from-[#00E5FF]/[0.1] to-[#0080FF]/[0.05] border border-[#00E5FF]/[0.12] flex items-center justify-center mb-3.5 group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(0,229,255,0.12)] transition-all duration-400">
                  <value.icon className="w-5 h-5 md:w-[22px] md:h-[22px] text-[#00E5FF]" />
                </div>
                <h4
                  className="text-white/75 font-semibold text-[14px] md:text-[15px] text-center mb-1 group-hover:text-white transition-colors tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {value.name}
                </h4>
                <p className="text-white/18 text-[11px] md:text-[12px] text-center leading-relaxed">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

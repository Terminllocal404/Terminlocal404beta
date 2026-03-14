import { motion } from "motion/react";
import { TrendingUp, Award, Users, Code2 } from "lucide-react";

const stats = [
  {
    icon: Code2,
    value: "5+",
    label: "Projetos Entregues",
    description: "Solucoes completas desenvolvidas",
    color: "from-cyan-500/15 to-blue-500/5",
  },
  {
    icon: Users,
    value: "10+",
    label: "Clientes Atendidos",
    description: "Empresas de diversos setores",
    color: "from-blue-500/15 to-indigo-500/5",
  },
  {
    icon: TrendingUp,
    value: "99.9%",
    label: "Uptime Garantido",
    description: "Infraestrutura confiavel e estavel",
    color: "from-emerald-500/15 to-teal-500/5",
  },
  {
    icon: Award,
    value: "100%",
    label: "Satisfacao",
    description: "Compromisso com a excelencia",
    color: "from-purple-500/15 to-pink-500/5",
  },
];

export function Stats() {
  return (
    <section className="py-20 md:py-28 bg-[#020408] relative overflow-hidden section-divider">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.02),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative p-6 md:p-8 rounded-2xl border border-white/[0.05] bg-white/[0.015] hover:bg-[#00E5FF]/[0.02] hover:border-[#00E5FF]/[0.1] transition-all duration-500 overflow-hidden"
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-b ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.04),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#00E5FF]/[0.1] to-[#0080FF]/[0.05] border border-[#00E5FF]/[0.12] mb-4 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-400">
                  <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-[#00E5FF]" />
                </div>

                {/* Value */}
                <div
                  className="text-[2rem] md:text-[2.5rem] font-bold text-white mb-1 tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {stat.value}
                </div>

                {/* Label */}
                <div
                  className="text-white/65 text-[13px] md:text-sm font-semibold mb-1.5 group-hover:text-white transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-white/20 text-[11px] md:text-xs leading-relaxed group-hover:text-white/30 transition-colors">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

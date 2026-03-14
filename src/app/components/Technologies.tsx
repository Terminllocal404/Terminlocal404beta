import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";

const technologies = [
  {
    category: "Frontend",
    tag: "UI/UX",
    stack: [
      { name: "React", color: "#61DAFB" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Next.js", color: "#00E5FF" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "Vue.js", color: "#4FC08D" },
    ],
  },
  {
    category: "Backend",
    tag: "SERVER",
    stack: [
      { name: "Node.js", color: "#339933" },
      { name: "Python", color: "#3776AB" },
      { name: "PostgreSQL", color: "#4169E1" },
      { name: "MongoDB", color: "#47A248" },
      { name: "Redis", color: "#DC382D" },
    ],
  },
  {
    category: "DevOps & Cloud",
    tag: "INFRA",
    stack: [
      { name: "Docker", color: "#2496ED" },
      { name: "AWS", color: "#FF9900" },
      { name: "Vercel", color: "#00E5FF" },
      { name: "GitHub Actions", color: "#2088FF" },
      { name: "Nginx", color: "#009639" },
    ],
  },
  {
    category: "Tools & Frameworks",
    tag: "TOOLS",
    stack: [
      { name: "Git", color: "#F05032" },
      { name: "VS Code", color: "#007ACC" },
      { name: "Figma", color: "#F24E1E" },
      { name: "Postman", color: "#FF6C37" },
      { name: "Webpack", color: "#8DD6F9" },
    ],
  },
];

export function Technologies() {
  return (
    <section id="tecnologias" className="py-24 md:py-36 bg-[#020408] relative overflow-hidden section-divider">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.025),transparent_70%)] blur-[60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <SectionHeader
          number="03"
          badge="Stack Tecnologico"
          title="Tecnologias"
          highlight="de Ponta"
          description="Utilizamos as ferramentas e frameworks mais modernos do mercado para garantir performance, escalabilidade e manutenibilidade em cada projeto."
        />

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {technologies.map((tech, idx) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="group relative p-6 md:p-7 rounded-2xl border border-white/[0.05] bg-white/[0.015] hover:bg-[#00E5FF]/[0.02] hover:border-[#00E5FF]/[0.1] transition-all duration-500"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.04),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Category header */}
                <div className="flex items-center justify-between mb-5">
                  <h3
                    className="text-white/85 font-semibold text-[15px] md:text-base tracking-tight group-hover:text-white transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {tech.category}
                  </h3>
                  <span
                    className="text-white/[0.06] text-[8px] font-bold tracking-[0.15em] group-hover:text-[#00E5FF]/15 transition-colors"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {tech.tag}
                  </span>
                </div>

                {/* Stack */}
                <div className="flex flex-col gap-3">
                  {tech.stack.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 + i * 0.05, duration: 0.4 }}
                      className="flex items-center gap-3 group/item"
                    >
                      {/* Tech dot with pulse */}
                      <div className="relative">
                        <div
                          className="w-2 h-2 rounded-full transition-all duration-300 group-hover/item:scale-125"
                          style={{ backgroundColor: item.color }}
                        />
                        <div
                          className="absolute inset-0 rounded-full opacity-0 group-hover/item:opacity-40 transition-opacity duration-300 blur-[3px]"
                          style={{ backgroundColor: item.color }}
                        />
                      </div>
                      {/* Tech name */}
                      <span
                        className="text-white/30 text-[13px] font-medium tracking-wide group-hover/item:text-white/60 transition-colors"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom extras */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 md:mt-20 text-center"
        >
          <p className="text-white/20 text-sm mb-4">
            E muitas outras tecnologias conforme a necessidade do projeto
          </p>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {["GraphQL", "Supabase", "Prisma", "Stripe", "Socket.io"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.04] text-white/20 text-[11px] font-medium hover:border-[#00E5FF]/10 hover:text-white/30 transition-all duration-300"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

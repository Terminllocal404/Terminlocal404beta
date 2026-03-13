import { motion } from "motion/react";
import { useParams, Navigate, Link } from "react-router";
import { founders } from "../data/founders";
import { ChevronLeft, Terminal, Layers, Briefcase, Code, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function FounderProfile() {
  const { id } = useParams<{ id: string }>();
  const founder = founders.find((f) => f.id === id);

  if (!founder) return <Navigate to="/sobre" replace />;

  return (
    <div className="pt-24 min-h-[100svh] bg-[#020408] overflow-hidden">
      {/* Banner */}
      <section className="relative w-full border-b border-white/[0.04]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,229,255,0.05),transparent_55%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-8 md:py-12 relative z-10">
          <Link
            to="/sobre"
            className="inline-flex items-center gap-1.5 text-white/28 hover:text-[#00E5FF] transition-colors mb-5 md:mb-7 group text-[13px]"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Voltar
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1
              className="text-3xl md:text-5xl font-bold text-white mb-3.5 tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {founder.name}
            </h1>
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className="px-3 py-1.5 rounded-md bg-[#00E5FF]/[0.06] border border-[#00E5FF]/[0.12] text-[#00E5FF] text-[10px] font-medium uppercase tracking-wider"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {founder.role}
              </span>
              <span className="text-white/18 text-[12px] flex items-center gap-1.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <Terminal className="w-3.5 h-3.5" />
                {founder.area}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-10 md:py-14 grid lg:grid-cols-12 gap-6 md:gap-10">
        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-4 flex flex-col gap-5"
        >
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/[0.05] group">
            <ImageWithFallback
              src={founder.image}
              alt={founder.name}
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-600 opacity-55 group-hover:opacity-85 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020408] z-10 pointer-events-none" />
            <div className="absolute bottom-3.5 left-3.5 z-20 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_rgba(52,211,153,0.7)] animate-pulse" />
              <span
                className="text-[9px] text-white/45 uppercase tracking-wider bg-[#020408]/80 px-2 py-0.5 rounded border border-white/[0.05]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Online
              </span>
            </div>
          </div>

          <div className="rounded-xl bg-white/[0.015] border border-white/[0.05] p-4 md:p-5">
            <h3
              className="text-white/65 font-semibold text-[14px] mb-3.5 flex items-center gap-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <Code className="w-4 h-4 text-[#00E5FF]" />
              Stack Tecnológico
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {founder.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/[0.05] text-white/28 text-[11px] hover:border-[#00E5FF]/15 hover:text-[#00E5FF]/55 transition-all duration-300 cursor-default"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="lg:col-span-8 flex flex-col gap-6"
        >
          <div className="rounded-xl bg-white/[0.015] border border-white/[0.05] p-5 md:p-7">
            <h2
              className="text-lg md:text-xl font-semibold text-white mb-3.5 tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Trajetória Profissional
            </h2>
            <p className="text-white/30 text-[14px] leading-[1.7]">{founder.history}</p>
          </div>

          <div>
            <h2
              className="text-lg md:text-xl font-semibold text-white mb-4 flex items-center gap-2 tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <ShieldCheck className="w-5 h-5 text-[#00E5FF]" />
              Responsabilidades
            </h2>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {founder.responsibilities.map((resp, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/[0.015] border border-white/[0.05] hover:border-[#00E5FF]/[0.1] transition-colors duration-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]/35 mt-1.5 shrink-0" />
                  <span className="text-white/32 text-[13px]">{resp}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2
              className="text-lg md:text-xl font-semibold text-white mb-4 flex items-center gap-2 tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <Layers className="w-5 h-5 text-[#00E5FF]" />
              Projetos
            </h2>
            <div className="flex flex-col gap-2.5">
              {founder.projects.map((project, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.015] border border-white/[0.05] border-l-2 border-l-[#00E5FF]/25"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/[0.07] flex items-center justify-center shrink-0">
                    <Briefcase className="w-3.5 h-3.5 text-[#00E5FF]" />
                  </div>
                  <span className="text-white/55 font-medium text-[13px]">{project}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

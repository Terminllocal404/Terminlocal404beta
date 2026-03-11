import { motion } from "motion/react";
import { useParams, Navigate, Link } from "react-router";
import { founders } from "../data/founders";
import { 
  ChevronLeft, 
  Terminal, 
  Layers, 
  Briefcase, 
  Code, 
  ShieldCheck, 
  Database 
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function FounderProfile() {
  const { id } = useParams<{ id: string }>();
  const founder = founders.find((f) => f.id === id);

  if (!founder) {
    return <Navigate to="/sobre" replace />;
  }

  return (
    <div className="pt-24 min-h-[100svh] bg-[#02040A] overflow-hidden">
      {/* Top Banner / Hero */}
      <section className="relative w-full overflow-hidden border-b border-[#00E5FF]/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00E5FF]/10 via-[#02040A] to-[#02040A] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
          <Link
            to="/sobre#equipe"
            className="inline-flex items-center gap-2 text-sm font-mono text-[#8B949E] hover:text-[#00E5FF] transition-colors mb-8 group uppercase tracking-widest"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retornar
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              {founder.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <span className="px-4 py-2 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] font-bold text-sm uppercase tracking-widest shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                {founder.role}
              </span>
              <span className="text-[#8B949E] font-mono text-sm flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span className="text-white">Domínio:</span> {founder.area}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-12 relative z-10">
        {/* Left Sidebar: Photo & Stats */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-4 flex flex-col gap-8"
        >
          <div className="relative w-full aspect-square rounded-3xl overflow-hidden border border-[#00E5FF]/20 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] group">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#02040A] z-10 pointer-events-none opacity-90" />
            <ImageWithFallback
              src={founder.image}
              alt={founder.name}
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-pulse shadow-[0_0_10px_#00E5FF]" />
              <span className="text-xs text-white uppercase font-mono font-bold tracking-widest bg-[#02040A]/80 border border-[#00E5FF]/20 px-3 py-1.5 rounded-md backdrop-blur-md">
                Status: Online
              </span>
            </div>
          </div>

          <div className="bg-[#0B0F1A]/80 backdrop-blur-md border border-[#00E5FF]/10 rounded-2xl p-8 hover:border-[#00E5FF]/30 transition-colors duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
            <h3 className="text-white font-black text-xl mb-6 flex items-center gap-3 tracking-tight">
              <Code className="w-6 h-6 text-[#00E5FF]" />
              Stack Tecnológico
            </h3>
            <div className="flex flex-wrap gap-2">
              {founder.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-[#02040A] border border-[#00E5FF]/10 text-[#8B949E] text-sm font-mono hover:border-[#00E5FF]/50 hover:text-[#00E5FF] hover:bg-[#00E5FF]/5 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Content: Bio, History, Roles */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="lg:col-span-8 flex flex-col gap-12"
        >
          {/* History */}
          <div className="bg-[#0B0F1A]/40 border border-white/5 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-[#00E5FF]/20 transition-colors duration-500">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00E5FF] to-transparent opacity-50" />
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6 tracking-tight">
              Trajetória Profissional
            </h2>
            <p className="text-[#8B949E] text-lg leading-relaxed group-hover:text-[#B0B3B8] transition-colors">
              {founder.history}
            </p>
          </div>

          {/* Responsibilities */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8 flex items-center gap-3 tracking-tight">
              <ShieldCheck className="w-8 h-8 text-[#00E5FF]" />
              Responsabilidades Nucleares
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {founder.responsibilities.map((resp, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-[#0B0F1A] p-5 rounded-2xl border border-white/5 hover:border-[#00E5FF]/30 hover:bg-[#00E5FF]/[0.02] transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0B0F1A] to-[#05070D] border border-[#00E5FF]/20 flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(0,229,255,0.1)]">
                    <Database className="w-4 h-4 text-[#00E5FF]" />
                  </div>
                  <span className="text-[#8B949E] font-medium pt-1 group-hover:text-white transition-colors">{resp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8 flex items-center gap-3 tracking-tight">
              <Layers className="w-8 h-8 text-[#00E5FF]" />
              Projetos & Contribuições
            </h2>
            <div className="flex flex-col gap-4">
              {founder.projects.map((project, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-r from-[#0B0F1A] to-[#02040A] p-6 rounded-2xl border border-white/5 border-l-4 border-l-[#00E5FF] flex items-center gap-5 hover:bg-[#00E5FF]/[0.02] hover:border-r-[#00E5FF]/20 transition-colors duration-300"
                >
                  <div className="p-2 rounded-lg bg-[#00E5FF]/10 text-[#00E5FF]">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="text-white font-bold tracking-wide">{project}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

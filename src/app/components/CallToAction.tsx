import { motion } from "motion/react";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";

const benefits = [
  "Arquitetura escalavel e moderna",
  "Codigo limpo e documentado",
  "Suporte tecnico dedicado",
  "Entrega dentro do prazo",
];

export function CallToAction() {
  return (
    <section className="py-24 md:py-32 bg-[#020408] relative overflow-hidden section-divider">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.06),transparent_70%)] blur-3xl" />
        
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(rgba(0,229,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.5)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_30%,transparent_100%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-8 md:p-12 lg:p-16 border border-[#00E5FF]/[0.12] bg-gradient-to-br from-[#00E5FF]/[0.04] via-[#0080FF]/[0.02] to-transparent overflow-hidden"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.1),transparent_60%)] pointer-events-none" />
          
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/40 to-transparent" />

          {/* Corner decorations */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-[#00E5FF]/10" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-[#00E5FF]/10" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b border-[#00E5FF]/10" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-[#00E5FF]/10" />

          <div className="relative z-10 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00E5FF]/20 bg-[#00E5FF]/[0.08] backdrop-blur-sm text-[#00E5FF] text-[11px] font-medium tracking-[0.15em] mb-6 uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Transforme Sua Ideia
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-5 md:mb-6 tracking-tight leading-[1.1]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Pronto para construir{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#00D0FF] to-[#0090FF]">
                o futuro?
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[15px] md:text-lg text-white/40 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed"
            >
              Desenvolva sua solucao digital com uma equipe especializada em entregar 
              projetos de alta qualidade, dentro do prazo e com tecnologias modernas.
            </motion.p>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-10 md:mb-12"
            >
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="text-white/55 text-sm text-left">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            >
              <a
                href="https://wa.me/553291547944?text=Seja%20bem-vindo!%20Faça%20o%20seu%20projeto%20conosco."
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto h-14 px-10 bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#020408] font-bold text-[15px] tracking-wide flex items-center justify-center gap-2.5 hover:shadow-[0_8px_40px_rgba(0,229,255,0.4)] active:scale-[0.97] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <Sparkles className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Falar com Especialista</span>
              </a>

              <Link
                to="/servicos"
                className="group w-full sm:w-auto h-14 px-8 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white/65 font-semibold text-[15px] tracking-wide flex items-center justify-center gap-2.5 hover:text-white hover:bg-white/[0.06] hover:border-[#00E5FF]/[0.15] active:scale-[0.97] transition-all duration-300"
              >
                Ver Solucoes
                <ArrowRight className="w-4 h-4 text-[#00E5FF]/60 group-hover:text-[#00E5FF] group-hover:translate-x-0.5 transition-all duration-300" />
              </Link>
            </motion.div>

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex items-center justify-center gap-2 text-[11px] text-white/20"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
                </span>
                Resposta em ate 24h
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
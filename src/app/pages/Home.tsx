import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowRight,
  Sparkles,
  Users,
  Code2,
  FolderKanban,
  MessageCircle,
  HelpCircle,
  Globe,
} from "lucide-react";
import { Hero } from "../components/Hero";

const pages = [
  {
    title: "Sobre Nos",
    description: "Conhega a Terminal 404, nossa historia, valores e a equipe por tras das solugoes.",
    href: "/sobre",
    icon: Users,
    gradient: "from-cyan-500/15 via-cyan-500/5 to-transparent",
    iconColor: "text-[#00E5FF]",
    borderHover: "hover:border-[#00E5FF]/20",
  },
  {
    title: "Solucoes",
    description: "Servigos completos de desenvolvimento web, mobile, automacao e consultoria tecnica.",
    href: "/servicos",
    icon: Code2,
    gradient: "from-blue-500/15 via-blue-500/5 to-transparent",
    iconColor: "text-[#0080FF]",
    borderHover: "hover:border-[#0080FF]/20",
  },
  {
    title: "Projetos",
    description: "Portfolio com exemplos de solugoes desenvolvidas com excelencia tecnica.",
    href: "/projetos",
    icon: FolderKanban,
    gradient: "from-purple-500/15 via-purple-500/5 to-transparent",
    iconColor: "text-purple-400",
    borderHover: "hover:border-purple-400/20",
  },
  {
    title: "Comunidade",
    description: "Faga parte da nossa comunidade de desenvolvedores e entusiastas de tecnologia.",
    href: "/comunidade",
    icon: Globe,
    gradient: "from-green-500/15 via-green-500/5 to-transparent",
    iconColor: "text-emerald-400",
    borderHover: "hover:border-emerald-400/20",
  },
  {
    title: "FAQ",
    description: "Respostas para as duvidas mais frequentes sobre nossos servigos e processos.",
    href: "/faq",
    icon: HelpCircle,
    gradient: "from-orange-500/15 via-orange-500/5 to-transparent",
    iconColor: "text-orange-400",
    borderHover: "hover:border-orange-400/20",
  },
  {
    title: "Contato",
    description: "Entre em contato conosco pelo WhatsApp, e-mail ou redes sociais.",
    href: "/contato",
    icon: MessageCircle,
    gradient: "from-teal-500/15 via-teal-500/5 to-transparent",
    iconColor: "text-teal-400",
    borderHover: "hover:border-teal-400/20",
  },
];

export function Home() {
  return (
    <div className="min-h-screen bg-[#020408]">
      <Hero />

      {/* Navigation Cards */}
      <section className="py-20 md:py-28 bg-[#020408] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.03),transparent_70%)] blur-[80px]" />
        </div>

        <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 md:mb-20"
          >
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] text-[10px] font-medium uppercase tracking-[0.2em] text-white/30 mb-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <Sparkles className="w-3 h-3 text-[#00E5FF]/50" />
              Explore
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Navegue pelo{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#0080FF]">
                nosso universo
              </span>
            </h2>
            <p className="text-white/30 text-[14px] md:text-base max-w-xl mx-auto leading-relaxed">
              Cada area do nosso site foi pensada para voce encontrar exatamente o que precisa.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {pages.map((page, idx) => (
              <motion.div
                key={page.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07, duration: 0.5 }}
              >
                <Link
                  to={page.href}
                  className={`group relative block p-6 md:p-7 rounded-2xl border border-white/[0.05] bg-white/[0.015] ${page.borderHover} hover:bg-white/[0.025] transition-all duration-500 overflow-hidden h-full`}
                >
                  {/* Gradient overlay */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-28 bg-gradient-to-b ${page.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-5 group-hover:border-white/[0.1] transition-all duration-300 ${page.iconColor}`}
                    >
                      <page.icon className="w-5 h-5" />
                    </div>

                    {/* Title + Arrow */}
                    <div className="flex items-center justify-between mb-2.5">
                      <h3
                        className="font-semibold text-[16px] text-white/85 group-hover:text-white transition-colors"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {page.title}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-[#00E5FF] group-hover:translate-x-1 transition-all duration-300" />
                    </div>

                    {/* Description */}
                    <p className="text-white/28 text-[13px] leading-[1.6] group-hover:text-white/40 transition-colors">
                      {page.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

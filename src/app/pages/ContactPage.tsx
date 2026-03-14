import { motion } from "motion/react";
import { Link } from "react-router";
import { PageHero } from "../components/PageHero";
import { FAQ } from "../components/FAQ";
import {
  Mail, Phone, Instagram, Github, Linkedin, MessageCircle,
  ArrowUpRight, MapPin, Clock, ExternalLink
} from "lucide-react";

const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/terminal_4.0.4/", icon: Instagram, handle: "@terminal_4.0.4" },
  { name: "WhatsApp", url: "https://wa.me/553291547944?text=Seja%20bem-vindo!%20Faça%20o%20seu%20projeto%20conosco.", icon: MessageCircle, handle: "(32) 9154-7944" },
  { name: "GitHub", url: "https://github.com/Terminllocal404", icon: Github, handle: "Terminllocal404" },
  { name: "LinkedIn", url: "https://www.linkedin.com/posts/terminal-404_terminal404-linkedin-activity-7419888008151261184-qFpP", icon: Linkedin, handle: "terminal-404" },
];

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    subtitle: "Atendimento imediato",
    value: "(32) 9154-7944",
    href: "https://wa.me/553291547944?text=Seja%20bem-vindo!%20Faça%20o%20seu%20projeto%20conosco.",
    external: true,
    badge: "Recomendado",
  },
  {
    icon: Mail,
    title: "E-mail Corporativo",
    subtitle: "Para propostas e documentos",
    value: "terminallocal404@gmail.com",
    href: "mailto:terminallocal404@gmail.com",
    external: false,
    badge: null,
  },
  {
    icon: Phone,
    title: "Telefone",
    subtitle: "Horario comercial",
    value: "(32) 9154-7944",
    href: "tel:+553291547944",
    external: false,
    badge: null,
  },
];

export function ContactPage() {
  return (
    <div className="min-h-screen bg-[#020408]">
      <PageHero
        badge="Contato"
        title="Inicie um"
        highlight="projeto"
        titleSuffix=" conosco."
        description="Discuta solucoes de software, terceirizacao de desenvolvimento ou ingresse no nosso hub de inovacao. Estamos prontos para atender voce."
      >
        <div className="flex items-center gap-3 text-[11px] text-white/25" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_5px_rgba(52,211,153,0.6)]" />
            </span>
            Online agora
          </div>
          <div className="w-px h-3 bg-white/[0.08]" />
          <div className="flex items-center gap-1.5">
            <Clock className="w-3 h-3" />
            Resposta em ate 24h
          </div>
        </div>
      </PageHero>

      {/* Contact Methods */}
      <section className="py-20 md:py-28 bg-[#020408] relative overflow-hidden section-divider">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00E5FF]/[0.015] rounded-full blur-[120px]" />
        </div>

        <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-4 md:gap-5 mb-14 md:mb-20">
            {contactMethods.map((method, idx) => (
              <motion.a
                key={idx}
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.45 }}
                className="group relative p-6 md:p-7 rounded-2xl border border-white/[0.05] bg-white/[0.015] hover:border-[#00E5FF]/[0.12] hover:bg-[#00E5FF]/[0.02] transition-all duration-400 active:scale-[0.99] overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#00E5FF]/15 via-[#00E5FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.04),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00E5FF]/[0.1] to-[#0080FF]/[0.05] border border-[#00E5FF]/[0.12] flex items-center justify-center text-[#00E5FF] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.12)] transition-all duration-300">
                      <method.icon className="w-5 h-5" />
                    </div>
                    {method.badge && (
                      <span
                        className="px-2.5 py-1 rounded-md bg-[#00E5FF]/[0.06] border border-[#00E5FF]/[0.12] text-[#00E5FF] text-[9px] font-medium uppercase tracking-wider"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {method.badge}
                      </span>
                    )}
                  </div>

                  <h3
                    className="text-white/85 font-semibold text-[17px] mb-1 group-hover:text-white transition-colors tracking-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {method.title}
                  </h3>
                  <p className="text-white/22 text-[12px] mb-3">{method.subtitle}</p>

                  <div className="flex items-center gap-2 pt-3 border-t border-white/[0.04]">
                    <span
                      className="text-white/35 text-[12px] group-hover:text-[#00E5FF]/60 transition-colors truncate"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {method.value}
                    </span>
                    {method.external && <ExternalLink className="w-3 h-3 text-white/15 shrink-0" />}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links & Location */}
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {/* Social Networks */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 md:p-7 rounded-2xl bg-white/[0.015] border border-white/[0.05]"
            >
              <h3
                className="text-white/80 font-semibold text-[17px] mb-5 tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Redes Sociais
              </h3>
              <div className="space-y-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.01] border border-white/[0.04] hover:border-[#00E5FF]/[0.1] hover:bg-[#00E5FF]/[0.02] transition-all duration-300 active:scale-[0.99]"
                    >
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00E5FF]/[0.08] to-[#0080FF]/[0.04] border border-[#00E5FF]/[0.1] flex items-center justify-center text-[#00E5FF]/60 group-hover:text-[#00E5FF] shrink-0 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-white/60 text-[13px] font-medium block group-hover:text-white transition-colors">{social.name}</span>
                        <span
                          className="text-white/20 text-[11px] block truncate"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {social.handle}
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/10 group-hover:text-[#00E5FF]/50 transition-colors shrink-0" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* WhatsApp CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-2xl p-7 md:p-8 bg-white/[0.015] border border-white/[0.05] text-center flex flex-col items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.06),transparent_55%)] pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent" />

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00E5FF]/[0.12] to-[#0080FF]/[0.06] border border-[#00E5FF]/[0.12] flex items-center justify-center mb-6 relative z-10">
                <MessageCircle className="w-8 h-8 text-[#00E5FF]" />
              </div>

              <h3
                className="text-[22px] font-semibold text-white mb-2.5 tracking-tight relative z-10"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Atendimento{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#0080FF]">Imediato</span>
              </h3>

              <p className="text-[13px] text-white/28 mb-6 leading-[1.65] max-w-sm relative z-10">
                Clique abaixo para ser redirecionado ao nosso WhatsApp oficial e conversar diretamente com a equipe tecnica.
              </p>

              <a
                href="https://wa.me/553291547944?text=Seja%20bem-vindo!%20Faça%20o%20seu%20projeto%20conosco."
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto h-12 px-7 bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#020408] font-semibold text-[14px] rounded-xl flex items-center justify-center gap-2.5 hover:shadow-[0_4px_30px_rgba(0,229,255,0.3)] active:scale-[0.97] transition-all duration-300 relative z-10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <MessageCircle className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Falar com a equipe</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50 relative z-10" />
              </a>

              <div className="mt-4 flex items-center gap-2 text-[10px] text-white/18 relative z-10" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_5px_rgba(52,211,153,0.6)]" />
                </span>
                ONLINE AGORA
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Request Project CTA */}
      <section className="py-20 md:py-28 bg-[#020408] relative overflow-hidden section-divider">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-white/25 text-[14px] mb-4">Pronto para dar o proximo passo?</p>
            <Link
              to="/solicitacao"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#020408] font-semibold text-[14px] hover:shadow-[0_4px_30px_rgba(0,229,255,0.35)] active:scale-[0.97] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <span className="relative z-10">Iniciar Projeto</span>
              <ArrowUpRight className="w-4 h-4 relative z-10" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
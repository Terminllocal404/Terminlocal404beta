import { motion } from "motion/react";
import { Mail, Phone, Instagram, Github, Linkedin, MessageCircle, ArrowUpRight } from "lucide-react";

const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/terminal_4.0.4/", icon: Instagram },
  { name: "WhatsApp", url: "https://wa.me/553291547944", icon: MessageCircle },
  { name: "GitHub", url: "https://github.com/Terminllocal404", icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/posts/terminal-404_terminal404-linkedin-activity-7419888008151261184-qFpP", icon: Linkedin },
];

export function Contact() {
  return (
    <section id="contato" className="py-20 md:py-32 relative bg-[#020408] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00E5FF]/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[#00E5FF] text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] bg-[#00E5FF]/[0.05] px-4 py-1.5 rounded-full border border-[#00E5FF]/12 mb-5 w-fit"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Contato
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[1.75rem] sm:text-4xl md:text-[2.75rem] font-bold text-white mb-4 leading-[1.15] tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Inicie um{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#0080FF]">
                projeto
              </span>{" "}
              conosco.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[15px] md:text-base text-white/35 mb-8 leading-[1.7]"
            >
              Discuta soluções de software, terceirização de desenvolvimento ou ingresse no nosso hub de inovação.
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-2.5 mb-8"
            >
              {[
                { icon: Mail, title: "E-mail Corporativo", value: "terminallocal404@gmail.com", href: "mailto:terminallocal404@gmail.com" },
                { icon: Phone, title: "Telefone Oficial", value: "(32) 9154-7944", href: "tel:+553291547944" },
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group flex items-center gap-3.5 p-4 rounded-xl bg-white/[0.015] border border-white/[0.05] hover:border-[#00E5FF]/[0.12] hover:bg-[#00E5FF]/[0.02] transition-all duration-300 active:scale-[0.99]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/[0.07] border border-[#00E5FF]/[0.12] flex items-center justify-center text-[#00E5FF] shrink-0 group-hover:shadow-[0_0_14px_rgba(0,229,255,0.1)] transition-shadow duration-300">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white/65 font-medium text-[13px] mb-0.5">{item.title}</h4>
                    <span
                      className="text-white/28 group-hover:text-[#00E5FF]/60 transition-colors text-[12px] block truncate"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {item.value}
                    </span>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3.5">
                <span className="text-white/12 text-[10px] uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Redes
                </span>
                <div className="flex-1 h-px bg-white/[0.04]" />
              </div>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-white/[0.025] border border-white/[0.05] flex items-center justify-center text-white/22 hover:text-[#00E5FF] hover:border-[#00E5FF]/[0.15] hover:bg-[#00E5FF]/[0.04] active:scale-95 transition-all duration-300"
                      title={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="relative rounded-2xl p-7 md:p-10 bg-white/[0.015] border border-white/[0.05] text-center flex flex-col items-center overflow-hidden">
              {/* Top glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.06),transparent_55%)] pointer-events-none" />

              <div className="w-16 h-16 md:w-18 md:h-18 rounded-2xl bg-[#00E5FF]/[0.07] border border-[#00E5FF]/[0.12] flex items-center justify-center mb-6 relative z-10">
                <MessageCircle className="w-8 h-8 text-[#00E5FF]" />
              </div>

              <h3
                className="text-[22px] md:text-2xl font-semibold text-white mb-2.5 tracking-tight relative z-10"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Atendimento <span className="text-[#00E5FF]">Imediato</span>
              </h3>

              <p className="text-[13px] md:text-sm text-white/28 mb-7 leading-[1.65] max-w-sm relative z-10">
                Clique abaixo para ser redirecionado ao nosso WhatsApp oficial e conversar com a equipe.
              </p>

              <a
                href="https://wa.me/553291547944"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto h-13 px-8 bg-[#00E5FF] text-[#020408] font-semibold text-[14px] rounded-xl flex items-center justify-center gap-2.5 hover:bg-[#2AECFF] hover:shadow-[0_4px_30px_rgba(0,229,255,0.3)] active:scale-[0.97] transition-all duration-300 relative z-10"
              >
                <MessageCircle className="w-[18px] h-[18px]" />
                Falar com a equipe
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>

              <div className="mt-5 flex items-center gap-2 text-[10px] text-white/18 relative z-10" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_5px_rgba(52,211,153,0.6)]" />
                </span>
                ONLINE AGORA
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

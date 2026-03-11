import { motion } from "motion/react";
import { Globe, AppWindow, RefreshCw, Rocket, Sliders, ChevronRight } from "lucide-react";
import { Link } from "react-router";

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento de Sites",
    description: "Criamos sites profissionais para empresas pequenas, médias e grandes. Desenvolvemos desde sites institucionais até plataformas mais complexas, sempre focando em: desempenho, segurança, experiência do usuário e design moderno e responsivo.",
  },
  {
    icon: AppWindow,
    title: "Criação de Aplicações e Sistemas",
    description: "Desenvolvemos aplicações, sistemas web e soluções digitais personalizadas. Os projetos são criados de acordo com as necessidades de cada empresa, garantindo funcionalidade, escalabilidade e eficiência.",
  },
  {
    icon: RefreshCw,
    title: "Modernização de Sites Antigos",
    description: "Muitas empresas possuem sites antigos ou abandonados. Nossa empresa realiza a recuperação, atualização e modernização desses projetos, tornando os sites: atualizados, seguros, compatíveis com tecnologias modernas e otimizados para desempenho.",
  },
  {
    icon: Rocket,
    title: "Desenvolvimento de Projetos Digitais",
    description: "Ajudamos empresas a tirar ideias do papel e transformar em projetos digitais reais. Seja um site, sistema ou plataforma, trabalhamos para desenvolver a solução ideal para cada projeto.",
  },
  {
    icon: Sliders,
    title: "Soluções Tecnológicas Personalizadas",
    description: "Também desenvolvemos soluções tecnológicas sob medida, de acordo com as necessidades específicas de cada empresa. Cada projeto é analisado individualmente para criar uma solução eficiente, moderna e escalável.",
  },
];

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="servicos" className="py-24 md:py-32 bg-[#02040A] relative z-10 overflow-hidden border-t border-[#00E5FF]/5">
      {/* Tech background elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#00E5FF]/[0.03] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-[#00E5FF]/[0.02] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#00E5FF]" />
            <span className="text-[#00E5FF] font-mono font-semibold text-sm uppercase tracking-widest bg-[#00E5FF]/10 px-4 py-1.5 rounded-full border border-[#00E5FF]/20">
              Serviços
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#00E5FF]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">
            Soluções Tecnológicas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">Completas</span>
          </h2>
          <p className="text-lg md:text-xl text-[#8B949E] leading-relaxed">
            A empresa trabalha com soluções tecnológicas completas para empresas de todos os tamanhos. 
            O principal objetivo é transformar ideias em soluções digitais reais, utilizando tecnologia, desenvolvimento e inovação.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`group relative bg-[#05070D] rounded-2xl p-8 border border-[#00E5FF]/10 hover:border-[#00E5FF]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,229,255,0.2)] overflow-hidden ${
                idx === 3 || idx === 4 ? "lg:col-span-1" : ""
              } ${
                idx === 4 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#00E5FF]/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#00E5FF]/20 to-transparent opacity-0 group-hover:opacity-100 rounded-bl-full transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0B0F1A] to-[#05070D] flex items-center justify-center text-[#00E5FF] mb-6 border border-[#00E5FF]/20 group-hover:scale-110 group-hover:bg-[#00E5FF] group-hover:text-[#05070D] transition-all duration-500 shadow-[0_0_15px_rgba(0,229,255,0.1)]">
                  <service.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00E5FF] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#6E7681] text-sm leading-relaxed group-hover:text-[#8B949E] transition-colors flex-grow">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mensagem Institucional */}
        <div className="relative bg-gradient-to-r from-[#00E5FF]/10 via-[#05070D] to-[#00E5FF]/10 p-1 rounded-3xl mb-16 overflow-hidden max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-[#00E5FF]/20 blur-xl opacity-50 pointer-events-none" />
          <div className="relative bg-[#02040A] rounded-[22px] p-8 md:p-12 text-center border border-[#00E5FF]/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Mais do que apenas desenvolver sites, ajudamos empresas a construir seus sonhos no mundo digital.</h3>
            <p className="text-[#8B949E] text-lg max-w-3xl mx-auto">
              Seja uma pequena empresa que precisa do primeiro site ou uma empresa maior que busca evoluir sua presença digital, nossa missão é criar a solução ideal para cada cliente.
            </p>
          </div>
        </div>

        {/* Botão de CTA */}
        <div className="flex justify-center">
          <Link
            to="/servicos"
            className="group flex items-center gap-3 px-8 py-4 rounded-xl border border-[#00E5FF] bg-transparent hover:bg-[#00E5FF]/5 transition-all duration-300 shadow-[0_0_15px_rgba(0,229,255,0.1)] hover:shadow-[0_0_25px_rgba(0,229,255,0.2)]"
          >
            <span className="text-[#00E5FF] font-semibold text-[15px] tracking-wide">
              VER TODOS OS SERVIÇOS
            </span>
            <ChevronRight className="w-5 h-5 text-[#00E5FF] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
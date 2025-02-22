import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { ArrowRight, ChevronRight } from "lucide-react"
import type React from "react"

const features = [
  {
    id: 1,
    title: "Logística",
    description:
      "Gerenciamento de logística das vendas de produtos físicos, acompanhamento e geração de código de rastreio.",
    image: "https://cdn.hoopay.com.br/images/tools/hoopay_logistica.png",
    benefits: [
      "Rastreamento em tempo real",
      "Integração com transportadoras",
      "Gestão de estoque automatizada"
    ],
    gradient: "from-purple-500/20 via-violet-500/20 to-fuchsia-500/20",
  },
  {
    id: 2,
    title: "Marketing",
    description: "Fluxo de envio de email, SMS e WhatsApp definindo data e hora de recebimento.",
    image: "https://cdn.hoopay.com.br/images/tools/hoopay_marketing.png",
    benefits: [
      "Automação de campanhas",
      "Segmentação avançada",
      "Análise de performance"
    ],
    gradient: "from-purple-500/20 via-violet-500/20 to-fuchsia-500/20",
  },
  {
    id: 3,
    title: "Nota Fiscal",
    description: "Emissão, cancelamento, etc. de nota fiscal de venda de produto físico e digital.",
    image: "https://cdn.hoopay.com.br/images/tools/hoopay_notafiscal.png",
    benefits: [
      "Emissão automática",
      "Conformidade fiscal",
      "Histórico completo"
    ],
    gradient: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
  },
  {
    id: 4,
    title: "Conversão de Vendas",
    description:
      "Ferramenta completa para vendedores converterem vendas não finalizadas, com fluxo automático de distribuição de contatos.",
    image: "https://cdn.hoopay.com.br/images/tools/hoopay_conversao.jpg",
    benefits: [
      "Recuperação de carrinho",
      "Distribuição inteligente",
      "Métricas em tempo real"
    ],
    gradient: "from-fuchsia-500/20 via-purple-500/20 to-violet-500/20",
  },
  {
    id: 5,
    title: "Bot Express",
    description:
      "O Bot Express automatiza a gestão de vendas e assinaturas de grupos no Telegram, garantindo controle total sobre a entrada e saída de membros com base nos pagamentos.",
    image: "https://cdn.hoopay.com.br/images/tools/bot_express.jpeg",
    benefits: [
      "Geração de pix",
      "Cadastro de planos",
      "Mensagens personalizáveis"
    ],
    icon: 'https://botexpress.hoopay.com.br/img/bot_express_white.d136aebb.png',
    gradient: "from-fuchsia-500/20 via-purple-500/20 to-violet-500/20",
  },
]

function FeatureSection({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseMove={handleMouseMove}
      className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16 first:pt-0 last:pb-0"
    >
      {/* Vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/20 via-purple-500/5 to-transparent">
        <div className="sticky top-1/2">
          {/* <div className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-purple-500/20" /> */}
        </div>
      </div>

      {/* Content Side */}
      <div className="lg:pr-8 pl-8">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="inline-flex items-center rounded-full px-4 py-1 bg-purple-500/10 border border-purple-500/20"
          >
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Ferramenta {index + 1}
            </span>
          </motion.div>

          <div className="space-y-4">
            <div>
              
              {feature.icon ? (
                <img src={feature.icon} alt={feature.title} className="max-w-[200px] h-auto" />
              ) : (
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  {feature.title}
                </h3>
              )}
            </div>
            <p className="text-lg text-gray-400 leading-relaxed">{feature.description}</p>
          </div>

          <div className="space-y-4">
            {feature.benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-300">
                <div className="w-5 h-5 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                </div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <a href="https://dashboard.hoopay.com.br/login.html" className="inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 text-white font-medium group/button hover:shadow-lg hover:shadow-purple-500/20 transition-shadow">
            Saiba mais
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/button:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Image Side */}
      <div className="relative">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-violet-500/10 p-1"
        >
          <div className="relative rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full aspect-[16/10] object-contain object-start opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/20 to-transparent" />
            
            {/* Spotlight effect */}
            <motion.div
              className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    450px circle at ${mouseX}px ${mouseY}px,
                    rgba(139,92,246,0.15),
                    transparent 80%
                  )
                `,
              }}
            />
          </div>
        </motion.div>

        {/* Background glow */}
        <div className={`absolute -inset-4 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
      </div>
    </motion.div>
  )
}

export function ToolsShowcase() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full px-6 py-2 border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm"
          >
            <span className="text-sm text-purple-300">Revolucione seus pagamentos</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400"
          >
            Nossas Ferramentas Inovadoras
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-gray-400"
          >
            Soluções completas para impulsionar seu negócio digital com foco em automação e eficiência.
          </motion.p>
        </div>

        {/* Features list */}
        <div className="relative pl-8">
          {features.map((feature, index) => (
            <FeatureSection key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
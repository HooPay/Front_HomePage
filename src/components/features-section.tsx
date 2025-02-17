"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Users, FileText, Truck, CreditCard, RefreshCw, Users2, Split, Link, Code, Check } from "lucide-react"
import { useRef } from "react"

const solutions = [
  {
    icon: Users,
    title: "Área de Membros",
    description: "Crie uma área exclusiva para seus membros, oferecendo conteúdo digital restrito e interativo.",
    features: ["Conteúdo exclusivo", "Interação em tempo real", "Análise de engajamento"],
  },
  {
    icon: FileText,
    title: "Emissão de Nota Fiscal",
    description: "Emita notas fiscais automaticamente, com integração direta com o sistema de gestão fiscal.",
    features: ["Automação completa", "Conformidade fiscal", "Histórico detalhado"],
  },
  {
    icon: Truck,
    title: "Gerenciamento de Logística",
    description: "Controle toda a logística de envio e recebimento dos seus produtos, otimizando a entrega.",
    features: ["Rastreamento em tempo real", "Otimização de rotas", "Gestão de estoque"],
  },
  {
    icon: CreditCard,
    title: "Conversão de Vendas",
    description: "Acompanhe vendas pendentes como boletos ou cartões recusados e otimize a conversão.",
    features: ["Recuperação automática", "Análise de abandono", "Remarketing inteligente"],
  },
  {
    icon: RefreshCw,
    title: "Recorrência de Pagamentos",
    description: "Ofereça pagamentos recorrentes aos seus clientes, com cobranças automáticas e personalizadas.",
    features: ["Cobranças automáticas", "Gestão de assinaturas", "Relatórios detalhados"],
  },
  {
    icon: Users2,
    title: "Afiliados e Co-Produção",
    description: "Implemente estratégias de upsell/downsell, gerencie afiliados e co-produza com outros negócios.",
    features: ["Comissões automáticas", "Dashboard de afiliados", "Análise de performance"],
  },
  {
    icon: Split,
    title: "Split de Pagamentos",
    description: "Divida os pagamentos automaticamente entre múltiplos recebedores de forma transparente.",
    features: ["Divisão automática", "Regras personalizadas", "Relatórios financeiros"],
  },
  {
    icon: Link,
    title: "Link de Pagamento",
    description: "Crie links de pagamento rápidos e personalizados para seus produtos e serviços.",
    features: ["Links personalizados", "QR Code integrado", "Análise de conversão"],
  },
  {
    icon: Code,
    title: "API Completa",
    description: "Integre nossa plataforma facilmente ao seu sistema com nossa documentação completa.",
    features: ["Documentação detalhada", "Suporte técnico", "Ambiente de testes"],
  },
]

function ParticleEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            y: [null, Math.random() * -500],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: Math.random() * 2,
          }}
          style={{
            filter: "blur(0.5px)",
          }}
        />
      ))}
    </div>
  )
}

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8])

  return (
    <div className="relative overflow-hidden bg-gray-950 py-32">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-gray-950 to-gray-950" />
        <ParticleEffect />
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" /> */}
      </div>

      <div ref={containerRef} className="container relative mx-auto px-4">
        <motion.div style={{ y, opacity }} className="relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-pink-500/10 text-pink-400 ring-1 ring-inset ring-pink-500/20">
                <Code className="w-4 h-4 mr-2" />
                Recursos
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-bold pb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white"
            >
              Sua organização no controle
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg max-w-2xl mx-auto"
            >
              Estruture sua organização em setores, gerencie seus usuários e padronize o estilo dos seus documentos
              importantes.
            </motion.p>
          </div>

          {/* Enhanced Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Glowing Border Effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-b from-pink-500/30 to-violet-500/30 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-500" />

                {/* Card Content */}
                <div className="relative h-full p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 transition-all duration-500 group-hover:border-pink-500/30">
                  {/* Icon */}
                  <div className="mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-violet-600 p-0.5"
                    >
                      <div className="w-full h-full rounded-2xl bg-gray-950 flex items-center justify-center">
                        <solution.icon className="w-7 h-7 text-pink-400" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-400 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-6">{solution.description}</p>

                  {/* Feature List */}
                  <ul className="space-y-3">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1">
                          <div className="w-5 h-5 rounded-full bg-pink-500/10 flex items-center justify-center">
                            <Check className="w-3 h-3 text-pink-400" />
                          </div>
                        </div>
                        <span className="text-white/50">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-8 right-8 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center"
                    >
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                      >
                        <Link className="w-4 h-4 text-pink-400" />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}


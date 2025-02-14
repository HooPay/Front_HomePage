"use client"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { ArrowRight } from "lucide-react"
import type React from "react" // Import React

const features = [
  {
    id: 1,
    title: "Logística",
    description:
      "Gerenciamento de logística das vendas de produtos físicos, acompanhamento e geração de código de rastreio.",
    image: "https://cdn.hoopay.com.br/images/tools/hoopay_logistica.png",
    gradient: "group-hover:opacity-100 bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-fuchsia-500/20",
  },
  {
    id: 2,
    title: "Marketing",
    description: "Fluxo de envio de email, SMS e WhatsApp definindo data e hora de recebimento.",
    image: "https://cdn.hoopay.com.br/images/tools/hoopay_marketing.png",
    gradient: "group-hover:opacity-100 bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-fuchsia-500/20",
  },
  {
    id: 3,
    title: "Nota Fiscal",
    description: "Emissão, cancelamento, etc. de nota fiscal de venda de produto físico e digital.",
    image: "https://cdn.hoopay.com.br/images/tools/hoopay_notafiscal.png",
    gradient: "group-hover:opacity-100 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
  },
  {
    id: 4,
    title: "Conversão de Vendas",
    description:
      "Ferramenta completa para vendedores converterem vendas não finalizadas, com fluxo automático de distribuição de contatos.",
    image: "https://cdn.hoopay.com.br/images/tools/hoopay_conversao.jpg",
    gradient: "group-hover:opacity-100 bg-gradient-to-r from-fuchsia-500/20 via-purple-500/20 to-violet-500/20",
  },
]

function FeatureCard({ feature }: { feature: (typeof features)[0] }) {
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
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col justify-between h-full rounded-3xl border border-white/10 bg-black/40 p-8 overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${feature.gradient}`} />

      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative space-y-6">
        <div className="flex justify-between items-start">
          <div className="w-full aspect-[4/2.5] relative rounded-2xl overflow-hidden bg-black/50">
            <img
              src={feature.image || "/placeholder.svg"}
              alt={feature.title}
              className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400">
            {feature.title}
          </h3>
          <p className="mt-2 text-sm text-gray-400 leading-relaxed">{feature.description}</p>
        </div>
      </div>

      {/* <button className="relative mt-8 inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors group/button">
        Saiba mais
        <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/button:translate-x-1" />
      </button> */}
    </motion.div>
  )
}

export function ToolsShowcase() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
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

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}


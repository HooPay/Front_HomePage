"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
const tools = [
  {
    name: "Logística",
    description:
      "Gerenciamento de logística das vendas de produtos físicos, acompanhamento e geração de código de rastreio.",
    image: "https://cdn.hoopay.com.br/images/tools/hoopay_logistica.png",
  },
  {
    name: "Marketing",
    description: "Fluxo de envio de email, SMS e WhatsApp definindo data e hora de recebimento.",
    image: "https://cdn.hoopay.com.br/images/tools/hoopay_marketing.png",
  },
  
]
const features = [
  {
    id: 1,
    title: "Logística",
    description:
      "Gerenciamento de logística das vendas de produtos físicos, acompanhamento e geração de código de rastreio.",
    image: "https://cdn.hoopay.com.br/images/tools/hoopay_logistica.png",
  },
  {
    id: 2,
    title: "Marketing",
    description: "Fluxo de envio de email, SMS e WhatsApp definindo data e hora de recebimento.",
    image: "https://cdn.hoopay.com.br/images/tools/hoopay_marketing.png",
  },
  {
    id: 3,
    title: "Nota Fiscal",
    description: "Emissão, cancelamento, etc. de nota fiscal de venda de produto físico e digital.",
    image: "https://cdn.hoopay.com.br/images/tools/hoopay_notafiscal.png",
  },
  {
    id: 4,
    title: "Conversão de Vendas",
    description:
      "Ferramenta completa para vendedores converterem vendas não finalizadas, com fluxo automático de distribuição de contatos.",
    image: "https://cdn.hoopay.com.br/images/tools/hoopay_conversao.jpg",
  },
]

export function ToolsShowcase() {
  const [currentFeature, setCurrentFeature] = useState(0)

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % features.length)
  }

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length)
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400 mb-6">
            Nossas Ferramentas Inovadoras
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluções completas para impulsionar seu negócio digital com foco em automação e eficiência.
          </p>
        </motion.div>

        {/* Feature Showcase */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
            <button
              onClick={prevFeature}
              className="rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
            <button
              onClick={nextFeature}
              className="rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Feature Content */}
          <motion.div
            key={currentFeature}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-white/10">
              <img
                src={features[currentFeature].image || "/placeholder.svg"}
                alt={features[currentFeature].title}
                className="w-full h-full object-cover"
              />

              {/* Feature Info Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{features[currentFeature].title}</h3>
                <p className="text-gray-300">{features[currentFeature].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setCurrentFeature(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentFeature ? "bg-purple-500" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


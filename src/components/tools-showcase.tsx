"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
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
  {
    name: "Nota Fiscal",
    description: "Emissão, cancelamento, etc. de nota fiscal de venda de produto físico e digital.",
    image: "https://cdn.hoopay.com.br/images/tools/hoopay_notafiscal.png",
  },
  {
    name: "Conversão de Vendas",
    description:
      "Ferramenta completa para vendedores converterem vendas não finalizadas, com fluxo automático de distribuição de contatos.",
    image: "https://cdn.hoopay.com.br/images/tools/hoopay_conversao.jpg",
  },
]

export const ToolsShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const controls = useAnimation()

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % tools.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + tools.length) % tools.length)
  }

  useEffect(() => {
    const animateCards = async () => {
      await controls.start((i) => ({
        rotateY: [0, 10, 0, -10, 0],
        rotateX: [0, 5, 0, -5, 0],
        transition: {
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: i * 0.2,
        },
      }))
    }
    animateCards()
  }, [controls])

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nossas Ferramentas Inovadoras</h2>
          <p className="text-white/60"></p>
        </div>
        <div className="relative perspective-1000">
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <img src={tool.image || "/placeholder.svg"} alt={tool.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{tool.name}</h3>
                  <p className="text-gray-400">{tool.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="hidden md:flex flex gap-8 transform-style-3d">
            {[0, 1].map((offset, i) => {
              const index = (currentIndex + offset) % tools.length
              return (
                <motion.div
                  key={index}
                  custom={i}
                  animate={controls}
                  className="w-1/2 flex flex-col transform-style-3d"
                >
                  <div className="relative aspect-video mb-4 perspective-1000">
                    <motion.div
                      className="w-full h-full transform-style-3d"
                      initial={{ rotateY: 0, rotateX: 0 }}
                      animate={{
                        rotateY: [0, 10, 0, -10, 0],
                        rotateX: [0, 5, 0, -5, 0],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    >
                      <img
                        src={tools[index].image || "/placeholder.svg"}
                        alt={tools[index].name}
                        className="rounded-xl shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30" />
                    </motion.div>
                  </div>
                  <motion.div
                    className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 flex-grow transform-style-3d"
                    initial={{ rotateX: 0 }}
                    animate={{
                      rotateX: [0, 3, 0, -3, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    <h2 className="text-2xl font-bold mb-4">{tools[index].name}</h2>
                    <p className="text-lg">{tools[index].description}</p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="hidden md:block flex justify-center mt-8">
          {Array.from({ length: tools.length / 2 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 2)}
              className={`w-4 h-4 rounded-full mx-2 transition-all duration-200 ${index * 2 === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-400"
                }`}
              aria-label={`Ir para ferramentas ${index * 2 + 1} e ${index * 2 + 2}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


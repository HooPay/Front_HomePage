"use client"

import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import type React from "react" // Import React

const achievements = [
  {
    revenue: "R$ 10.000",
    title: "Primeiro Marco",
    description: "Celebrando o começo de grandes conquistas com brindes personalizados!",
    icon: "https://cdn.hoopay.com.br/images/achievements/gift.png",
    color: "#00FFFF",
  },
  {
    revenue: "R$ 50.000",
    title: "Coruja",
    description: "Sabedoria e visão aguçada, alcançando o primeiro marco importante com estratégia e inteligência.",
    icon: "https://cdn.hoopay.com.br/images/achievements/owl_thumb.png",
    color: "#FF00FF",
  },
  {
    revenue: "R$ 100.000",
    title: "Urso",
    description: "Força e resiliência, conquistando grandes resultados com dedicação e esforço constante.",
    icon: "https://cdn.hoopay.com.br/images/achievements/bear_thumb.png",
    color: "#FFA500",
  },
  {
    revenue: "R$ 250.000",
    title: "Lobo",
    description: "Trabalho em equipe e liderança, avançando com espírito coletivo e metas bem definidas.",
    icon: "https://cdn.hoopay.com.br/images/achievements/wolf_thumb.png",
    color: "#00FF00",
  },
  {
    revenue: "R$ 500.000",
    title: "Águia",
    description: "Visão elevada e foco, dominando com ousadia e alcançando altos voos de sucesso.",
    icon: "https://cdn.hoopay.com.br/images/achievements/eagle_thumb.png",
    color: "#FF4500",
  },
  {
    revenue: "R$ 1.000.000",
    title: "Tubarão",
    description: "Poder e agilidade, navegando com precisão e conquistando o topo do mercado.",
    icon: "https://cdn.hoopay.com.br/images/achievements/shark_thumb.png",
    color: "#1E90FF",
  },
]

const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={
            {
              "--size": `${Math.random() * 2 + 1}px`,
              "--x": `${Math.random() * 100}%`,
              "--y": `${Math.random() * 100}%`,
              "--duration": `${Math.random() * 20 + 10}s`,
              "--delay": `${Math.random() * -20}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}

export function AchievementShowcase() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section
      ref={containerRef}
      className="py-20 bg-gradient-to-b from-gray-900 via-purple-900 to-black overflow-hidden relative"
    >
      <Particles />
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Jornada de Conquistas HooPay</h2>
          <p className="text-white/60">
            Acompanhe sua evolução e celebre cada marco alcançado. Na HooPay, seu crescimento é nossa prioridade!
          </p>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div
                    className="w-16 h-16 rounded-full mr-4 flex items-center justify-center"
                    style={{ backgroundColor: `${achievement.color}22` }}
                  >
                    <img
                      src={achievement.icon || "/placeholder.svg"}
                      alt={achievement.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                    <p className="text-sm text-purple-300">
                      Faturamento: <span className="font-bold text-white">{achievement.revenue}</span>
                    </p>
                  </div>
                </div>
                <p className="text-white/80">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-8 bottom-8 w-1 transform -translate-x-1/2 overflow-hidden z-1">
            <div className="h-full w-full bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 animate-pulse-slow" />
          </div>

          {achievements.map((achievement, index) => {
            const isEven = index % 2 === 0
            const xInitial = isEven ? -100 : 100
            const yRotate = isEven ? -5 : 5

            return (
              <motion.div
                key={index}
                className={`flex items-center mb-24 ${isEven ? "flex-row-reverse" : "flex-row"}`}
                initial={{ opacity: 0, x: xInitial }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className={`w-1/2 z-9 ${isEven ? "text-right pr-14" : "text-left pl-12"}`}>
                  <div className={`p-4`}>
                    <motion.div
                      className="glassmorphism p-8 rounded-2xl relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${achievement.color}22, ${achievement.color}11)`,
                        boxShadow: `0 8px 32px 0 ${achievement.color}22`,
                      }}
                      whileHover={{ scale: 1.05, rotate: yRotate }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0" />
                      <h3 className="text-3xl font-bold mb-4 text-white relative z-10">{achievement.title}</h3>
                      <p className="text-xl text-purple-300 mb-2 relative z-10">
                        Faturamento: <span className="font-bold text-white">{achievement.revenue}</span>
                      </p>
                      <p className="text-purple-200 relative z-10">{achievement.description}</p>
                    </motion.div>
                  </div>
                </div>

                <div className="relative w-32 h-32 flex items-center justify-center z-10">
                  <motion.div
                    className="absolute w-full h-full"
                    style={{
                      background: `radial-gradient(circle, ${achievement.color}66, ${achievement.color}00 70%)`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 0.9, 0.7],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      y: {
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      },
                      scale: { type: "spring", stiffness: 300 },
                    }}
                    className="relative z-20"
                  >
                    <img
                      src={achievement.icon || "/placeholder.svg"}
                      alt={achievement.title}
                      width={100}
                      height={100}
                      className="rounded-full shadow-lg"
                      style={{ filter: `drop-shadow(0 0 10px ${achievement.color})` }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-3xl font-semibold text-white mb-8">Pronto para iniciar sua jornada de sucesso?</p>
          <a
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:shadow-purple-500/50 transition duration-300"
            href="https://dashboard.hoopay.com.br/"
          >
            Comece Agora
          </a>
        </motion.div>
      </div>
    </section>
  )
}


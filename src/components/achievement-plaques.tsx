import { motion, useScroll, useTransform } from 'framer-motion'
import { Trophy } from 'lucide-react'
import { useRef } from 'react'

const achievements = [
  {
    level: "1K",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tubar%C3%A3o-placa-I14F088AaeSy5bOEDIVyl0YQXYMnEu.png",
    mascot: "Shark",
    title: "Primeiro Marco",
    description:
      "Alcançamos nosso primeiro milhar, provando que nossa visão tem potencial real no mercado.",
    unlocked: true,
    color: "bg-emerald-500",
  },
  {
    level: "50K",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coruja-placa-spVisS85t2VsLhiuMwFjnPTZ1qSwh4.png",
    mascot: "Owl",
    title: "Crescimento Consistente",
    description: "Nossa base de clientes cresceu exponencialmente, validando nossa estratégia e qualidade de serviço.",
    unlocked: true,
    color: "bg-violet-500",
  },
  {
    level: "100K",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/urso-placa-kJG4PaCN85KGTbflZACTKNQ8ixgR25.png",
    mascot: "Bear",
    title: "Domínio do Mercado",
    description: "Atingimos uma posição de liderança, sendo reconhecidos como referência em nossa indústria.",
    unlocked: true,
    color: "bg-indigo-500",
  },
  {
    level: "250K",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lobo-placa-plrjzVKgIBahzCFb79QH04yjXJN5LO.png",
    mascot: "Wolf",
    title: "Liderança Absoluta",
    description: "Consolidamos nossa posição como líderes incontestáveis, redefinindo os padrões do setor.",
    unlocked: true,
    color: "bg-rose-500",
  },
]

export function AchievementPlaques() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8])

  return (
    <section ref={containerRef} className="relative overflow-hidden py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
      </div>

      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent animate-pulse" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-400/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iMSIgZmlsbD0icmdiYSgxMjksIDE0MCwgMjQ4LCAwLjEpIi8+PC9zdmc+')] opacity-20" />
        </motion.div>
      </div> */}

      <div className="container relative mx-auto px-4">
        <motion.div style={{ y, opacity }} className="relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-violet-500/10 text-violet-400 ring-1 ring-inset ring-violet-500/20">
                <Trophy className="w-4 h-4 mr-2" />
                Conquistas
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
            >
              Nossa Jornada de Sucesso
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Cada conquista representa um marco importante em nossa história de crescimento e inovação
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative mt-20">
            {/* Progress Line */}
            {/* <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-800/50">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full w-full origin-left bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"
              />
            </div> */}

            {/* Achievement Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.level}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative pt-8 pb-12"
                >
                  {/* Card Background with Gradient Border */}
                  {/* <div className="absolute -inset-[1px] bg-gradient-to-b from-violet-500/30 to-transparent rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500" /> */}
                  
                  {/* Card Content */}
                  <div className="relative h-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 group-hover:border-violet-500/30 group-hover:bg-white/10 p-6">
                    {/* Level Badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className={`px-4 py-1 rounded-full ${achievement.color} text-white text-sm font-semibold shadow-lg`}>
                        Nível {achievement.level}
                      </div>
                    </div>

                    {/* Plaque Image */}
                    <motion.div
                      whileHover={{ scale: 1.05, rotateZ: 2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative z-10 mb-6"
                    >
                      <img
                        src={achievement.image}
                        alt={`${achievement.mascot} Achievement Plaque`}
                        className="w-full h-auto rounded-lg"
                      />
                      
                      {/* Hover Glow Effect */}
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-violet-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" /> */}
                    </motion.div>

                    {/* Achievement Info */}
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">{achievement.mascot}</p>
                      <p className="text-gray-400 text-sm">{achievement.description}</p>
                    </div>

                    {/* Connection Line */}
                    {/* <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-1 h-12">
                      <div className="h-full w-full bg-gradient-to-b from-violet-500/50 to-transparent" />
                    </div> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
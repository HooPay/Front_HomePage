import { motion, useScroll, useTransform } from 'framer-motion'
import { Check, Trophy } from 'lucide-react'
import { useRef } from 'react'

export function AchievementPlaques() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8])

  // Updated achievements with better descriptions
  const achievements = [
    {
      level: "50K",
      image: "https://cdn.hoopay.com.br/images/achievements/coruja-placa.png",
      mascot: "Owl",
      title: "Primeiro Marco",
      subtitle: "R$ 50 mil em vendas",
      description: "Seu primeiro grande marco! Este é apenas o começo de uma jornada extraordinária. Continue com a mesma dedicação e sabedoria.",
      unlocked: true,
      color: "bg-violet-500",
      features: [
        "Insígnia de Conquista no Perfil",
        "Certificado Digital de Reconhecimento",
        "Acesso a Dicas Exclusivas de Crescimento"
      ]
    },
    {
      level: "100K",
      image: "https://cdn.hoopay.com.br/images/achievements/urso-placa.png",
      mascot: "Bear",
      title: "Força Crescente",
      subtitle: "R$ 100 mil em vendas",
      description: "Como um urso, sua força no mercado cresce a cada dia. Sua persistência está gerando resultados impressionantes.",
      unlocked: true,
      color: "bg-indigo-500",
      features: [
        "Destaque em Comunidade de Vendedores",
        "Consultoria Rápida com Especialistas",
        "Acesso a Estratégias Avançadas de Venda"
      ]
    },
    {
      level: "250K",
      image: "https://cdn.hoopay.com.br/images/achievements/lobo-placa.png",
      mascot: "Wolf",
      title: "Caçador de Sucesso",
      subtitle: "R$ 250 mil em vendas",
      description: "Com a estratégia de um lobo, você alcançou um patamar que poucos conseguem. Sua determinação é inspiradora.",
      unlocked: true,
      color: "bg-rose-500",
      features: [
        "Placa Digital de Reconhecimento",
        "Acesso a Ferramentas Exclusivas",
        "Convite para Eventos Privados"
      ]
    },
    {
      level: "500K",
      image: "https://cdn.hoopay.com.br/images/achievements/aguia-placa.png",
      mascot: "Eagle",
      title: "Visão de Águia",
      subtitle: "R$ 500 mil em vendas",
      description: "Do alto, você enxerga oportunidades que outros não veem. Sua perspectiva única te levou a novos patamares.",
      unlocked: true,
      color: "bg-amber-500",
      features: [
        "Mentoria Exclusiva com Experts",
        "Destaque em Materiais Promocionais",
        "Acesso Antecipado a Novas Funcionalidades"
      ]
    },
    {
      level: "1KK",
      image: "https://cdn.hoopay.com.br/images/achievements/tubarao-placa.png",
      mascot: "Shark",
      title: "Domínio Total",
      subtitle: "R$ 1 milhão em vendas",
      description: "Como um tubarão, você domina seu território com maestria. O topo é seu lugar por direito. Uma conquista verdadeiramente extraordinária!",
      unlocked: true,
      color: "bg-emerald-500",
      features: [
        "Placa Física de Comemoração",
        "Convite VIP para Conferências",
        "Acesso a Recursos Premium e Exclusivos"
      ]
    }
  ]  

  return (
    <section ref={containerRef} className="relative overflow-hidden py-32 border-t border-white/10">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
      </div>

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
            {/* Vertical Progress Line */}
            <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-0.5">
              <div className="h-full w-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            </div>

            {/* Achievement Items */}
            <div className="relative space-y-24">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.level}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                >
                  {/* Left Content */}
                  <div className="md:pr-16 space-y-4">
                    <div className={`inline-flex items-center py-1 rounded-full text-lg font-medium bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent`}>
                      Nível {achievement.level}
                    </div>
                    <h3 className="text-5xl font-bold text-white">
                      {achievement.title}
                    </h3>
                    <p className="text-violet-400 font-medium">
                      {achievement.subtitle}
                    </p>
                    <p className="text-white leading-relaxed">
                      {achievement.description}
                    </p>
                    {/* <div className="space-y-3 pt-4">
                      {achievement.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="rounded-full p-1 bg-emerald-500/10">
                            <Check className="w-4 h-4 text-emerald-400" />
                          </div>
                          <span className="text-sm text-violet-200/70">{feature}</span>
                        </div>
                      ))}
                    </div> */}
                  </div>

                  {/* Right Image */}
                  <div className="relative">
                    {/* Connection Point */}
                    {/* <div className="absolute left-0 top-1/2 -translate-x-[1.65rem] w-3 h-3 rounded-full bg-violet-500">
                      <div className="absolute inset-0 rounded-full bg-violet-400 animate-ping opacity-75" />
                    </div> */}

                    <motion.div
                      whileHover={{ scale: 1.02, rotateZ: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative max-w-sm mx-auto"
                    >
                      <div className="relative rounded-xl overflow-hidden p-6 transition-colors duration-300">
                        <img
                          src={achievement.image || "/placeholder.svg"}
                          alt={`${achievement.mascot} Achievement Plaque`}
                          className="w-full h-auto rounded-lg relative z-10"
                        />
                      </div>
                    </motion.div>
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
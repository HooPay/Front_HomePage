"use client"

import { motion } from "framer-motion"

export function MembersAreaSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-black">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Área Exclusiva para Membros
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Uma plataforma completa para impulsionar seu aprendizado
          </motion.p>
        </div>

        {/* MacBook Pro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative">
            {/* Screen Bezel */}
            <div className="relative z-10 bg-[#1C1C1E] rounded-t-2xl pt-4 pb-2 px-4">
              {/* Camera */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gray-800">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-gray-900" />
              </div>
            </div>

            {/* Screen */}
            <div className="relative z-10 bg-[#1C1C1E] px-4 pb-4 rounded-b-2xl">
              <div className="relative rounded-lg overflow-hidden bg-black aspect-[16/10] shadow-2xl">
                {/* Screen Content */}
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ACFeJsZpC2nJRTeoAPXY7DedoybC9N.png"
                  alt="Members Area Interface"
                  className="w-full h-full object-cover"
                />

                {/* Screen Glare */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Base */}
            <div className="relative z-0 -mt-2">
              {/* Top */}
              <div className="h-2 bg-[#1C1C1E] rounded-b-sm mx-16" />

              {/* Bottom */}
              <div className="relative h-2 bg-gradient-to-b from-[#1C1C1E] to-[#2C2C2E] mx-20 rounded-b-xl">
                {/* Reflection */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-violet-500/20 blur-lg" />
              </div>
            </div>
          </div>

          {/* Floating Effect Shadows */}
          <div className="absolute -inset-x-20 -inset-y-10 z-0">
            <div className="absolute inset-0 bg-violet-500/20 blur-3xl opacity-50 rounded-full" />
          </div>
        </motion.div>

        {/* Feature Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20"
        >
          {[
            {
              title: "Conteúdo Exclusivo",
              description: "Acesse materiais e cursos desenvolvidos por especialistas",
            },
            {
              title: "Aprenda no seu Ritmo",
              description: "Estude quando e onde quiser, com total flexibilidade",
            },
            {
              title: "Suporte Dedicado",
              description: "Conte com nossa equipe para auxiliar sua jornada",
            },
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


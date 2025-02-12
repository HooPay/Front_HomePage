"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import Link from "next/link"
import { FloatingCards } from "./floating-cards"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">HooPay torna tudo mais rápido e fácil</h1>
            <p className="text-xl text-white/80">CONTE COM OS RECURSOS QUE IRÃO IMPULSIONAR O SEU NEGÓCIO</p>
            <p className="text-lg text-white/60">
              Diversas ferramentas gratuitas para você operar da maneira mais simples possível.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <Button
                size="lg"
                className="bg-[rgb(136,114,250)] text-white hover:bg-[rgb(136,114,250)]/90 rounded-full"
                asChild
              >
                <Link href="https://dashboard.hoopay.com.br/">Comece agora</Link>
              </Button>
            </motion.div>
            {/*<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20" />
                ))}
              </div>
              <p className="text-sm text-white/60">+10.2k clientes satisfeitos</p>
            </motion.div>*/}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative h-[500px]"
          >
            <FloatingCards />
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[rgb(136,114,250)]/10 rounded-full blur-3xl"
        />
      </div>
    </section>
  )
}


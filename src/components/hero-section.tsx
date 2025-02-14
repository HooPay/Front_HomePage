import { motion } from "framer-motion"
import { Button } from "./ui/button"
import Link from "next/link"
import { FloatingCards } from "./floating-cards"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iMSIgZmlsbD0icmdiYSgxMzYsMTE0LDI1MCwwLjEpIi8+PC9zdmc+')] opacity-20" />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(136,114,250)]/10 border border-[rgb(136,114,250)]/20"
            >
              <Sparkles className="w-4 h-4 text-[rgb(136,114,250)]" />
              <span className="text-sm font-medium text-[rgb(136,114,250)]">
                Revolucione seus pagamentos
              </span>
            </motion.div>

            {/* Main Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 pb-4">
                Faça parte da revolução dos pagamentos digitais
              </h1>
              <p className="text-xl text-white/80 font-medium">
                TAXA BAIXA PARA PAGAMENTOS VIA PIX
              </p>
              <p className="text-lg text-white/60">
                Simplifique suas operações financeiras e economize com nossas ferramentas gratuitas e intuitivas.
              </p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-[rgb(136,114,250)] text-white hover:bg-[rgb(136,114,250)]/90 rounded-full group relative overflow-hidden"
                asChild
              >
                <Link href="https://dashboard.hoopay.com.br/" className="flex items-center gap-2">
                  Comece agora
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform" />
                </Link>
              </Button>

              {/* Stats */}
              <div className="flex items-center gap-4 pl-2">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-[rgb(136,114,250)]/20 to-purple-500/20 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                    >
                      <span className="text-xs font-medium text-white/70">★</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">+10.2k</p>
                  <p className="text-xs text-white/60">clientes satisfeitos</p>
                </div>
              </div>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-4 pt-8"
            >
              {[
                { label: "Economia", value: "Até 100%" },
                { label: "Processamento", value: "Instantâneo" },
                { label: "Suporte", value: "24/7" },
                { label: "Integração", value: "Simples" }
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-sm text-white/60">{stat.label}</p>
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative h-[600px] hidden lg:block"
          >
            <div className="absolute inset-0">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-tr from-[rgb(136,114,250)]/20 via-purple-500/20 to-transparent rounded-full blur-3xl"
              />
            </div>
            <FloatingCards />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
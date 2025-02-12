"use client"

import { motion } from "framer-motion"
import { Apple, PlayCircle } from "lucide-react"
import Link from "next/link"

export function AppDownloadSection() {
  return (
    <section className="w-full relative overflow-hidden">
        <div  className="w-full relative z-10"
          style={{
            background: "linear-gradient(to right, rgb(136,114,250) 0%, rgb(208,147,232) 80%)",
          }}
        >
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center py-12">
          {/* Left Column - App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[500px] flex items-center justify-center lg:justify-start"
          >
            <img
              src="https://hoopay.com.br/index/assets/img/hero-mockup.png"
              alt="HooPay App"
              width={300}
              height={600}
              className="h-auto w-auto max-h-[500px] object-contain"
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Um novo modelo para aumentar o seu <span className="color-[#462c51]">Faturamento!</span>
            </h2>
            <p className="text-white/60 text-lg">
              Entre na Plataforma que mais oferta serviços pensando estrategicamente no seu melhor Faturamento!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://apps.apple.com/br/app/hoopay/id6480219382"
                className="store-button p-5 px-8 rounded-md bg-[rgb(0,0,0)] hover:bg-[rgb(136,114,250)]/90 text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center space-x-2">
                  <Apple className="w-6 h-6" />
                  <div>
                    <div className="text-xs"></div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </div>
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=br.com.hpay.app&hl=pt"
                className="store-button p-5 px-8 rounded-md bg-[rgb(0,0,0)] hover:bg-[rgb(136,114,250)]/90 text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center space-x-2">
                  <PlayCircle className="w-6 h-6" />
                  <div>
                    <div className="text-xs"></div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(circle at center, var(--main-color) 0%, transparent 70%)",
          }}
        />
      </div>
    </section>
  )
}


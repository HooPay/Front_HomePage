"use client";

import { motion } from "framer-motion";

const integrationIcons1 = [
  "https://cdn.hoopay.com.br/images/integrations/bot.png",
  "https://cdn.hoopay.com.br/images/integrations/chatguru.png",
  "https://cdn.hoopay.com.br/images/integrations/facebook.png",
  "https://cdn.hoopay.com.br/images/integrations/google_ads.png",
  "https://cdn.hoopay.com.br/images/integrations/google_analytics.png",
  "https://cdn.hoopay.com.br/images/integrations/tawkto.png",
  "https://cdn.hoopay.com.br/images/integrations/instagram.png",
  "https://cdn.hoopay.com.br/images/integrations/kwai.png",
  "https://cdn.hoopay.com.br/images/integrations/linkedin.png",
  "https://cdn.hoopay.com.br/images/integrations/messenger.png",
  "https://cdn.hoopay.com.br/images/integrations/openai.png"
];

const integrationIcons2 = [
  "https://cdn.hoopay.com.br/images/integrations/pinterest.png",
  "https://cdn.hoopay.com.br/images/integrations/snapchat.png",
  "https://cdn.hoopay.com.br/images/integrations/taboola.png",
  "https://cdn.hoopay.com.br/images/integrations/telegram.png",
  "https://cdn.hoopay.com.br/images/integrations/tiktok.png",
  "https://cdn.hoopay.com.br/images/integrations/twitter.png",
  "https://cdn.hoopay.com.br/images/integrations/utmify.png",
  "https://cdn.hoopay.com.br/images/integrations/vimeo.png",
  "https://cdn.hoopay.com.br/images/integrations/webhook.png",
  "https://cdn.hoopay.com.br/images/integrations/x.png",
  "https://cdn.hoopay.com.br/images/integrations/youtube.png"
];

export function IntegrationsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-[var(--main-color)] mb-2 block">
            INTEGRAÇÕES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Oferecemos integração com as principais ferramentas do{" "}
            <span className="text-[var(--main-color)]">mercado para potencializar suas vendas</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Linha 1 - Ícones deslizando da esquerda para a direita */}
          <div className="mb-16 overflow-hidden">
            <motion.div
              className="flex gap-16"
              animate={{
                x: ["0%", "-100%"], // Movimento contínuo da esquerda para a direita
              }}
              transition={{
                duration: 10, // Tempo para uma transição completa
                repeat: Infinity, // Repetir infinitamente
                ease: "linear", // Movimento contínuo
              }}
            >
              {/* Duplicando os ícones para criar o efeito infinito */}
              {[...Array(5)].map((_, repeatIndex) => (
                <div className="flex gap-16 shrink-0" key={`row1-${repeatIndex}`}>
                  {integrationIcons1.map((icon, index) => (
                    <motion.div
                      key={`row1-${repeatIndex}-${index}`}
                      className="w-22 h-22 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center p-4 shrink-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <img
                        src={icon || "/placeholder.svg"}
                        alt={`Integration ${index + 1}`}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Logo central */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              className="w-40 h-40 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center p-16"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img
                src="https://dashboard.hoopay.com.br/shared/assets/02.png"
                alt="HooPay"
                width={120}
                height={120}
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Linha 2 - Ícones deslizando da direita para a esquerda */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-16"
              animate={{
                x: ["0%", "100%"], // Movimento contínuo da direita para a esquerda
              }}
              transition={{
                duration: 10, // Tempo para uma transição completa
                repeat: Infinity, // Repetir infinitamente
                ease: "linear", // Movimento contínuo
              }}
            >
              {/* Duplicando os ícones para criar o efeito infinito */}
              {[...Array(5)].map((_, repeatIndex) => (
                <div className="flex gap-16 shrink-0" key={`row2-${repeatIndex}`}>
                  {integrationIcons2.map((icon, index) => (
                    <motion.div
                      key={`row2-${repeatIndex}-${index}`}
                      className="w-22 h-22 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center p-4 shrink-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <img
                        src={icon || "/placeholder.svg"}
                        alt={`Integration ${index + 1}`}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Efeitos de fundo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--main-color)]/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}


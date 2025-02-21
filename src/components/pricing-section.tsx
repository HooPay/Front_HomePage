"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Check } from "lucide-react"

const pricingData = [
  {
    title: "PIX",
    price: "R$ 0,40",
    description: "Recebimento na hora",
    note: "*negociável",
    features: ["Confirmação instantânea", "Sem taxas adicionais", "Disponível 24/7"],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M20.9498 14.55L14.5598 20.94C13.1598 22.34 10.8598 22.34 9.44978 20.94L3.05977 14.55C1.65977 13.15 1.65977 10.85 3.05977 9.44001L9.44978 3.05C10.8498 1.65 13.1498 1.65 14.5598 3.05L20.9498 9.44001C22.3498 10.85 22.3498 13.15 20.9498 14.55Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6.25 6.25L17.75 17.75" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.75 6.25L6.25 17.75" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    title: "Cartão de Crédito",
    price: "3,99%",
    description: "Recebimento em D2, D15 ou D30",
    note: "*negociável",
    features: ["Antecipação disponível", "Parcelamento em até 12x", "Proteção contra fraudes"],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path d="M3.95898 15.8792L15.909 3.9292" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.1304 18.279L12.3304 17.079" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.8223 15.5887L16.2123 13.1987" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.63057 10.239L10.2706 3.599C12.3906 1.479 13.4506 1.469 15.5506 3.569L20.4606 8.479C22.5606 10.579 22.5506 11.639 20.4306 13.759L13.7906 20.399C11.6706 22.519 10.6106 22.529 8.51057 20.429L3.60057 15.519C1.50057 13.419 1.50057 12.369 3.63057 10.239Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2.0293 21.9985H22.0293" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    title: "Boleto",
    price: "R$ 3,50",
    description: "Recebimento em 2 dias úteis",
    note: "*negociável",
    features: ["Código de barras", "Compensação automática", "Registro gratuito"],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path d="M6.7737 19.7C7.5937 18.82 8.8437 18.89 9.5637 19.85L10.5737 21.2C11.3837 22.27 12.6937 22.27 13.5037 21.2L14.5137 19.85C15.2337 18.89 16.4837 18.82 17.3037 19.7C19.0837 21.6 20.5337 20.97 20.5337 18.31V7.04C20.5437 3.01 19.6037 2 15.8237 2H8.2637C4.4837 2 3.5437 3.01 3.5437 7.04V18.3C3.5437 20.97 5.0037 21.59 6.7737 19.7Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.13977 11H8.14875" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.9421 11H16.4421" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.13977 7H8.14875" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.9421 7H16.4421" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
]

export function PricingSection() {
  return (
    <section className="relative py-20 bg-black overflow-hidden border-t border-white/10">
      {/* Background Effects */}
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-[#030014] to-[#030014]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
        <motion.div
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_-100%,rgba(120,119,198,0.15),transparent)]"
        />
      </div> */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-violet-200 to-white mb-4"
          >
            Nossas Taxas Hoje
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-violet-200/60 text-lg"
          >
            Sem Surpresas, Sem Taxas Ocultas
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingData.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Glowing Border Effect */}
              {/* <div className="absolute -inset-[2px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-700" /> */}

              <Card className="relative border border-white border-opacity-5 bg-[rgb(223,223,223)] bg-opacity-5 rounded-2xl overflow-hidden transition-all duration-500">
                {/* <div className="absolute inset-0 bg-gradient-to-br from-violet-600/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}

                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                    <span dangerouslySetInnerHTML={{ __html: plan.icon }}></span>
                    {plan.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 space-y-6">
                  <div className="space-y-2">
                    <div className="text-5xl font-bold bg-gradient-to-br from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                      {plan.price}
                    </div>
                    <p className="text-violet-200/80">{plan.description}</p>
                  </div>

                  <div className="space-y-3 pt-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="rounded-full p-1 bg-emerald-500/10">
                          <Check className="w-4 h-4 text-emerald-400" />
                        </div>
                        <span className="text-sm text-violet-200/70">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-violet-200/40 pt-2">{plan.note}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


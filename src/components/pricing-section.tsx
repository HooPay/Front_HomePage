'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const pricingData = [
  {
    title: "PIX",
    price: "R$ 0,40",
    description: "Recebimento na hora",
    note: "*negociável"
  },
  {
    title: "Cartão de Crédito",
    price: "3,99%",
    description: "Recebimento em D2, D15 ou D30",
    note: "*negociável"
  },
  {
    title: "Boleto",
    price: "R$ 3,50",
    description: "Recebimento em 2 dias úteis",
    note: "*negociável"
  }
]

export function PricingSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white mb-4">Nossas Taxas Hoje</h2>
          <p className="text-white/60">Sem Surpresas</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-transparent border-2 border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white">{plan.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="text-3xl font-extrabold text-teal-400">{plan.price}</div>
                  <p className="text-white/80">{plan.description}</p>
                  <p className="text-sm text-white/60">{plan.note}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


"use client"

import { motion } from "framer-motion"
import {
  CreditCard,
  Percent,
  LinkIcon,
  Smartphone,
  SplitSquareVertical,
  Code,
  FileText,
  Truck,
  Repeat,
  Users,
  User,
} from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const features = [
  {
    icon: User,
    title: "Área de Membros",
    description: "Crie uma área exclusiva para seus membros, oferecendo conteúdo digital restrito e interativo.",
  },
  {
    icon: FileText,
    title: "Emissão de Nota Fiscal",
    description: "Emita notas fiscais automaticamente, com integração direta com o sistema de gestão fiscal.",
  },
  {
    icon: Truck,
    title: "Gerenciamento de Logística",
    description: "Controle toda a logística de envio e recebimento dos seus produtos, otimizando a entrega.",
  },
  {
    icon: CreditCard,
    title: "Conversão de Vendas",
    description: "Acompanhe vendas pendentes como boletos ou cartões recusados e otimize a conversão.",
  },
  {
    icon: Repeat,
    title: "Recorrência de Pagamentos",
    description: "Ofereça pagamentos recorrentes aos seus clientes, com cobranças automáticas e personalizadas.",
  },
  {
    icon: Users,
    title: "Afiliados e Co-Produção",
    description: "Implemente estratégias de upsell/downsell, gerencie afiliados e co-produza com outros negócios.",
  },
  {
    icon: SplitSquareVertical,
    title: "Split de Pagamentos",
    description: "Divida os pagamentos automaticamente entre múltiplos recebedores com facilidade.",
  },
  {
    icon: CreditCard,
    title: "Link de Pagamento",
    description: "Crie links de pagamento rápidos e personalizados para seus produtos e serviços.",
  },
  {
    icon: Code,
    title: "API Completa",
    description: "Integre nossa plataforma facilmente ao seu sistema com nossa API REST com uma documentação completa.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-4">Nossas Soluções</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Ferramentas completas para impulsionar seu negócio digital com foco em automação, gestão e crescimento.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 p-8 rounded-xl shadow-lg transition-all ease-in-out duration-300 hover:shadow-2xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-full bg-gray-900/50 group-hover:bg-gray-900/70 transition-colors">
                    <feature.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}


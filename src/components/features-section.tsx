import { motion, useScroll, useTransform } from 'framer-motion'
import { Users, FileText, Truck, CreditCard, RefreshCw, Users2, Split, Link, Code } from 'lucide-react'
import { useRef } from 'react'

const solutions = [
  {
    icon: Users,
    title: 'Área de Membros',
    description: 'Crie uma área exclusiva para seus membros, oferecendo conteúdo digital restrito e interativo.'
  },
  {
    icon: FileText,
    title: 'Emissão de Nota Fiscal',
    description: 'Emita notas fiscais automaticamente, com integração direta com o sistema de gestão fiscal.'
  },
  {
    icon: Truck,
    title: 'Gerenciamento de Logística',
    description: 'Controle toda a logística de envio e recebimento dos seus produtos, otimizando a entrega.'
  },
  {
    icon: CreditCard,
    title: 'Conversão de Vendas',
    description: 'Acompanhe vendas pendentes como boletos ou cartões recusados e otimize a conversão.'
  },
  {
    icon: RefreshCw,
    title: 'Recorrência de Pagamentos',
    description: 'Ofereça pagamentos recorrentes aos seus clientes, com cobranças automáticas e personalizadas.'
  },
  {
    icon: Users2,
    title: 'Afiliados e Co-Produção',
    description: 'Implemente estratégias de upsell/downsell, gerencie afiliados e co-produza com outros negócios.'
  },
  {
    icon: Split,
    title: 'Split de Pagamentos',
    description: 'Divida os pagamentos automaticamente entre múltiplos recebedores de forma transparente.'
  },
  {
    icon: Link,
    title: 'Link de Pagamento',
    description: 'Crie links de pagamento rápidos e personalizados para seus produtos e serviços.'
  },
  {
    icon: Code,
    title: 'API Completa',
    description: 'Integre nossa plataforma facilmente ao seu sistema com nossa documentação completa.'
  }
]

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8])

  return (
    <div className="relative overflow-hidden bg-gray-900 py-32">
      {/* Background Effects */}
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

      <div ref={containerRef} className="container relative mx-auto px-4">
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
                <Code className="w-4 h-4 mr-2" />
                Recursos
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 pb-3"
            >
              Sua organização no controle
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Estruture sua organização em setores, gerencie seus usuários e padronize o estilo dos seus documentos importantes.
            </motion.p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card Background with Gradient Border */}
                {/* <div className="absolute -inset-[1px] bg-gradient-to-b from-violet-500/30 to-transparent rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500" /> */}
                
                {/* Card Content */}
                <div className="relative h-full p-8 rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 group-hover:border-violet-500/30 group-hover:bg-white/10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <solution.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Hover Arrow */}
                  {/* <div className="absolute bottom-8 right-8 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <Link className="w-4 h-4 text-purple-400" />
                      </motion.div>
                    </div>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
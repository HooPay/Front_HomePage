"use client"

import { motion } from "framer-motion"
import { CreditCard, Smartphone, BarChart, QrCode, FileText } from "lucide-react"

export function FloatingCards() {
  return (
    <div className="relative w-full h-full">
      {/* Cartão de Crédito */}
      <motion.div
        className="absolute top-1/1 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        animate={{
          y: [-20, 20, -20],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl shadow-2xl p-2  w-48 h-16 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <CreditCard className="text-white" size={24} />
            <span className="text-white font-bold">HooPay</span>
          </div>
          <div className="text-white font-mono text-xs mt-2">**** **** **** 1234</div>
        </div>
      </motion.div>

      {/* PIX */}
      <motion.div
        className="absolute top-1/4 left-1/4 z-10"
        animate={{
          y: [10, -10, 10],
          rotate: [3, -3, 3],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.2,
        }}
      >
        <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-xl shadow-2xl p-2 w-48 h-16 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <QrCode className="text-white" size={24} />
            <span className="text-white font-bold">PIX</span>
          </div>
          <div className="text-white text-xs mt-2">Pagamento instantâneo</div>
        </div>
      </motion.div>

      {/* Boleto */}
      <motion.div
        className="absolute bottom-1/1 right-1/7 z-10"
        animate={{
          y: [-15, 15, -15],
          rotate: [-7, 3, -7],
        }}
        transition={{
          duration: 5.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.4,
        }}
      >
        <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-2xl p-2 w-48 h-16 flex flex-col justify-between w-48 h-16">
          <div className="flex justify-between items-center">
            <FileText className="text-white" size={24} />
            <span className="text-white font-bold">Boleto</span>
          </div>
          <div className="text-white text-xs mt-2">Pagamento flexível</div>
        </div>
      </motion.div>

      {/* Smartphone */}
      <motion.div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 z-30"
        animate={{
          y: [20, -20, 20],
          rotate: [5, -5, 5],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <div className="rounded-3xl p-1 w-[300px] h-[500px] relative overflow-hidden">
          <img
            src="https://hoopay.com.br/index/assets/img/hero-mockup.png"
            alt="HooPay App"
            className="rounded-2xl fill cover"
          />
          {/* Notificações Push */}
          <motion.div
            className="absolute top-8 w-[150px] left-[70px]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="bg-black/60 rounded-lg p-2 mb-1 rounded-[5px]">
              <div className="flex items-center">
                <img
                  src="https://dashboard.hoopay.com.br/shared/assets/02.png"
                  width={16}
                  height={16}
                  alt="HooPay"
                  className="mr-2"
                />
                <span className="text-white text-xs" style={{fontSize: 8}}>Você realizou uma venda de R$ 199,90 no PIX</span>
              </div>
            </div>
            <div className="bg-black/60 rounded-lg p-2 mb-1 rounded-[5px]">
              <div className="flex items-center">
                <img
                  src="https://dashboard.hoopay.com.br/shared/assets/02.png"
                  width={16}
                  height={16}
                  alt="HooPay"
                  className="mr-2"
                />
                <span className="text-white text-xs" style={{fontSize: 8}}>Você realizou uma venda de R$ 349,90 no Cartão</span>
              </div>
            </div>
            <div className="bg-black/60 rounded-lg p-2 rounded-[5px]">
              <div className="flex items-center">
                <img
                  src="https://dashboard.hoopay.com.br/shared/assets/02.png"
                  width={16}
                  height={16}
                  alt="HooPay"
                  className="mr-2"
                />
                <span className="text-white text-xs" style={{fontSize: 8}}>Você realizou uma venda de R$ 189,90 no Boleto</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Gráfico de Vendas */}
      {/*<motion.div
        className="absolute top-1/4 right-1/4 z-30"
        animate={{
          y: [-10, 10, -10],
          x: [5, -5, 5],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="bg-white rounded-lg shadow-2xl p-4 w-64">
          <div className="flex items-center justify-between mb-4">
            <BarChart className="text-blue-500" size={20} />
            <span className="text-sm font-semibold text-gray-800">Relatório de Vendas</span>
          </div>
          <div className="relative h-32">
            <div className="absolute bottom-0 left-0 w-8 h-24 bg-gradient-to-t from-green-300 to-green-100 rounded-full mr-2"></div>
            <div className="absolute bottom-0 left-12 w-8 h-20 bg-gradient-to-t from-green-400 to-green-200 rounded-full mr-2"></div>
            <div className="absolute bottom-0 left-24 w-8 h-28 bg-gradient-to-t from-green-500 to-green-300 rounded-full mr-2"></div>
            <div className="absolute bottom-0 left-36 w-8 h-16 bg-gradient-to-t from-green-400 to-green-200 rounded-full"></div>
          </div>
        </div>
      </motion.div>*/}

      {/* Círculos de Fundo */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        {/* <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-300 rounded-full filter blur-xl opacity-30"></div> */}
        {/* <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-300 rounded-full filter blur-xl opacity-30"></div> */}
      </motion.div>
    </div>
  )
}


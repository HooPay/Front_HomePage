import { motion } from 'framer-motion';

const notifications = Array(5).fill({
  title: 'Venda aprovada!',
  message: 'Sua comissão R$999,00',
  time: '1h atrás'
});

export default function ScrollingNotifications({ startX = '0%' }) {
  return (
    <div className="w-full bg-black p-4 overflow-hidden border-t border-white/10">
      <motion.div
        className="flex gap-4"
        animate={{ x: [startX, '-50%'] }}
        transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
      >
        {[...notifications, ...notifications].map((sale, index) => (
          <div
            key={index}
            className="flex items-center min-w-[300px] bg-gradient-to-r from-zinc-900 to-zinc-800 
                       rounded-xl p-3 border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.3)]
                       backdrop-blur-sm"
          >
            <div className="h-10 w-10 rounded-full flex items-center justify-center">
              <img src="https://cdn.hoopay.com.br/images/logo/favicon.png" className="h-6 w-6 text-gray-900" />
            </div>
            <div className="ml-3 flex-grow">
              <h3 className="text-white font-medium text-sm">{sale.title}</h3>
              <p className="text-gray-400 text-sm">{sale.message}</p>
            </div>
            <span className="text-gray-500 text-xs whitespace-nowrap">{sale.time}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

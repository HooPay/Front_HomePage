import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

export function SiteHeader() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 w-full z-50"
    >
      {/* Backdrop Blur Effect */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xl border-b border-white/5" />

      <div className="container mx-auto px-4">
        <div className="relative flex h-20 items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="relative flex items-center space-x-2 group"
          >
            <motion.img 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src="https://dashboard.hoopay.com.br/shared/assets/15_2.png" 
              alt="HooPay" 
              className="h-9 w-auto transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "#features", label: "Recursos" },
              { href: "#achievement-plaques", label: "Premiações" },
              { href: "#pricing", label: "Taxas" },
              { href: "#integrations", label: "Integrações" },
              { href: "#members-area", label: "Área de Membros" },
              { href: "#faq", label: "Perguntas" }
            ].map((item, index) => (
              <motion.a
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                href={item.href}
                className="relative text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[rgb(136,114,250)] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button 
                variant="ghost" 
                className="relative text-white hover:text-white/90 hover:bg-white/5 transition-all duration-300 group"
              >
                <a 
                  href="https://dashboard.hoopay.com.br/login.html"
                  className="flex items-center space-x-2"
                >
                  <span>Login</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[rgb(136,114,250)]/50 transition-all duration-300 group-hover:w-full" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button 
                className="relative overflow-hidden bg-[rgb(136,114,250)] hover:bg-[rgb(136,114,250)]/90 text-white rounded-full px-6 group"
              >
                <a 
                  href="https://dashboard.hoopay.com.br/login.html"
                  className="relative z-10 flex items-center space-x-2"
                >
                  <span>Criar conta agora</span>
                </a>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
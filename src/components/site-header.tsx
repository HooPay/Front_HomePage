import { Link } from "react-router-dom"
import { Button } from "./ui/button"

export function SiteHeader() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#020807] px-8">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="https://dashboard.hoopay.com.br/shared/assets/15_2.png" alt="HooPay" className="h-9 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">
            Recursos
          </a>
          <a href="#pricing" className="text-white/80 hover:text-white transition-colors">
            Taxas
          </a>
          <a href="#integrations" className="text-white/80 hover:text-white transition-colors">
            Integrações
          </a>
          <a href="#faq" className="text-white/80 hover:text-white transition-colors">
            Perguntas
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-white">
            <a href="https://dashboard.hoopay.com.br/login.html">Login</a>
          </Button>
          <Button className="bg-[rgb(136,114,250)] hover:bg-[rgb(136,114,250)]/90 text-white rounded-[4px]">
            <a href="https://dashboard.hoopay.com.br/login.html">Cadastre-se</a>
          </Button>
        </div>
      </div>
    </header>
  )
}


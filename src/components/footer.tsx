import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Sobre a HooPay</h3>
            <p className="text-sm text-white/60">
              Tenha em mãos tudo o que você precisa para aumentar consideravelmente o seu faturamento.
              Conte com uma Equipe especializada para te atender gratuitamente.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-white/60 hover:text-white transition-colors">Taxas</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white transition-colors">Integrações</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white transition-colors">Suporte</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="https://ajuda.hoopay.com.br/" className="text-white/60 hover:text-white transition-colors">Central de Ajuda</Link></li>
              <li><Link href="https://ajuda.hoopay.com.br/terms-of-services" className="text-white/60 hover:text-white transition-colors">Termos de Serviços</Link></li>
              <li><Link href="https://ajuda.hoopay.com.br/privacy" className="text-white/60 hover:text-white transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <address className="text-sm text-white/60 not-italic">
              <p>ajuda@hoopay.com.br</p>
              <p>CNPJ 47.875.120/0001-04</p>
              <p>Rua Copaiba Lote 01 Sala 1010 A 1017</p>
              <p>Norte (Aguas Claras)</p>
              <p>Brasília DF</p>
              <p>CEP 71919-540</p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/60">
          © 2022 a 2025 - Todos os Direitos Reservados.
        </div>
      </div>
    </footer>
  )
}


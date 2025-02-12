import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"
import { CheckCircle, Star, BookOpen, MessageSquare, TrendingUp } from "lucide-react"
import React from "react"
import {
  CreditCard,
  Video,
  Layout,
  Mail,
  LineChart,
  Users,
  FileText,
  Palette,
  Globe,
  Shield,
  PlayCircle,
  File,
  HelpCircle,
  BarChart,
  Tag,
  Gift,
  Headphones,
  Search,
  Smartphone,
  Code,
  Share2,
  Lock,
  Database,
} from "lucide-react"

export default function MembersAreaPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const features = [
    {
      icon: Users,
      title: "Alunos ilimitados",
      description: "Venda quantos cursos puder, não se preocupe com limites, se preocupe somente com seu crescimento",
    },
    {
      icon: Database,
      title: "Matrículas ilimitadas em vendas",
      description: "As matrículas geradas pelas vendas do seu curso através da plataforma são ilimitadas",
    },
    {
      icon: FileText,
      title: "Matrículas avulsas",
      description: "Além de vender pela plataforma você poderá criar matrículas manualmente",
    },
    {
      icon: Users,
      title: "Cursos e professores",
      description: "Crie sua própria galeria de cursos e adicione membros a sua equipe",
    },
    {
      icon: CreditCard,
      title: "Receba pagamentos",
      description: "Integração nativa com gateway para receber pagamentos por boleto, Pix e cartão de crédito",
    },
    {
      icon: LineChart,
      title: "Pagamentos recorrentes",
      description: 'Você pode criar planos e assinaturas e ter sua própria "Netflix" de cursos',
    },
    {
      icon: Layout,
      title: "Página de vendas",
      description: "Tenha landing pages à sua disposição, otimizadas para a venda de cursos",
    },
    {
      icon: Palette,
      title: "Personalize sua plataforma",
      description: "Coloque seu logotipo, sua marca e personalize a sua página de vendas com suas cores",
    },
    {
      icon: Globe,
      title: "Domínio próprio",
      description: "Utilize seu próprio domínio como endereço de sua plataforma",
    },
    {
      icon: Shield,
      title: "Vídeos privados",
      description: "Hospede seus vídeos com segurança e qualidade 4K, proteja seus vídeos com marca d'água",
    },
    {
      icon: PlayCircle,
      title: "Aulas ao vivo e vídeos externos",
      description: "Integre e incorpore com plataformas de streaming como Vimeo e YouTube",
    },
    {
      icon: File,
      title: "Hospedagem de arquivos",
      description: "Armazenamento de arquivos PDF, DOC, PowerPoint, entre outros para anexar em suas aulas",
    },
    {
      icon: Mail,
      title: "E-mail Marketing",
      description:
        "Capture leads, crie gatilhos e jornadas de vendas via e-mail, envie campanhas e multiplique suas conversões",
    },
    {
      icon: FileText,
      title: "Questionários",
      description:
        "Crie questionários e provas e avalie seus alunos, controle o acesso a recursos através de pré-requisitos",
    },
    {
      icon: FileText,
      title: "Certificados",
      description: "Certificados Emita certificados personalizados com código de validação e com seu logotipo",
    },
    {
      icon: MessageSquare,
      title: "Comunidade",
      description: "Espaço privado de interação de alunos e professores para a resolução de dúvidas",
    },
    {
      icon: BarChart,
      title: "Estatísticas",
      description: "Tenha a sua disposição métricas detalhadas de todas as áreas do seu sistema",
    },
    {
      icon: Tag,
      title: "Cupons de desconto",
      description: "Crie cupons promocionais para impulsionar suas vendas e fidelizar alunos",
    },
    {
      icon: Gift,
      title: "Cashback",
      description: "Ofereça cashback na compra de cursos para aumentar a recorrência de compras",
    },
    {
      icon: Headphones,
      title: "Suporte",
      description: "Tenha suporte personalizado e especializado de nossa equipe ao vivo via chat ou e-mail",
    },
    {
      icon: Search,
      title: "SEO",
      description: "Tenha uma plataforma 100% otimizada para SEO e ocupe as melhores posições no Google",
    },
    {
      icon: Smartphone,
      title: "Qualquer dispositivo",
      description: "Sistema responsivo para ser utilizado em qualquer dispositivo: computador, tablet e smartphone",
    },
    {
      icon: Code,
      title: "API",
      description: "Crie integrações personalizadas através da interação com nossa API privada",
    },
    {
      icon: Share2,
      title: "Integrações",
      description:
        "A Mindz oferece dezenas de integrações com sistemas terceiros como Analytics, Facebook Ads, eNotas, entre outros",
    },
    {
      icon: Lock,
      title: "Plataforma segura",
      description:
        "A Mindz segue os mais altos níveis de segurança e precaução com seus dados e de seus clientes (LGPD)",
    },
  ]

  return (
    <main>
      <div className="min-h-screen text-white overflow-x-hidden mt-12">
        <div className="container mx-auto px-4 py-8">
          {/* Top Features */}
          <motion.div
            className="grid grid-cols-5 gap-8 justify-items-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <CreditCard className="w-12 h-12 mx-auto mb-2 text-[#9f2dfa]" />
              <p className="text-sm">Checkout transparente</p>
            </div>
            <div className="text-center">
              <Video className="w-12 h-12 mx-auto mb-2 text-[#9f2dfa]" />
              <p className="text-sm">Hospedagem de vídeos</p>
            </div>
            <div className="text-center">
              <Layout className="w-12 h-12 mx-auto mb-2 text-[#9f2dfa]" />
              <p className="text-sm">Landing Pages personalizadas</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 mx-auto mb-2 text-[#9f2dfa]" />
              <p className="text-sm">Automação e E-mail Marketing</p>
            </div>
            <div className="text-center">
              <LineChart className="w-12 h-12 mx-auto mb-2 text-[#9f2dfa]" />
              <p className="text-sm">Tracking de vendas avançado</p>
            </div>
          </motion.div>

          {/* Área de membros avançada */}
          <motion.div className="mb-20" {...fadeIn}>
            <div className="flex items-center gap-8 mb-12">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500"
                alt="Homem segurando caderno"
                className="w-64 h-64 object-cover rounded-lg"
              />
              <div>
                <h2 className="text-2xl font-bold mb-6">Área de membros avançada</h2>
                <ul className="space-y-3">
                  <li>Crie cursos, e-books, mentorias e eventos</li>
                  <li>Monte aulas avançadas com diversas mídias</li>
                  <li>Comunidades específicas para cada curso</li>
                  <li>Tire as dúvidas dos alunos</li>
                  <li>Crie provas, testes, quizzes e enquetes</li>
                  <li>Personalize e emita certificados</li>
                  <li>Faça matrículas automatizadas ou manualmente</li>
                  <li>Notas e avaliações dos alunos</li>
                  <li>Receba comentários e avaliações</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Hospedagem de Conteúdo */}
          <motion.div className="mb-20" {...fadeIn}>
            <div className="bg-[#2a1b3d] p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Hospede seu conteúdo com segurança e desempenho</h2>
              <ul className="space-y-3">
                <li>Reprodução de vídeos em 4K</li>
                <li>Hospedagem e vídeos privados</li>
                <li>Proteção com marca d'água sobre vídeo, armazenamento de PDF, DOC, PowerPoint, entre outros</li>
                <li>Rastreamento de arquivos pirateados</li>
                <li>Integração com aulas ao-vivo</li>
                <li>Integração com players externos (Vimeo, Youtube, Panda Video, Google Drive)</li>
              </ul>
              <div className="flex gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#9f2dfa]">4k</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#9f2dfa]">.DOC</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#9f2dfa]">.PDF</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#9f2dfa]">.MP3</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#9f2dfa]">.MP4</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Continue with the rest of the components... */}

          {/* Funcionalidades Grid */}
          <motion.div
            className="grid grid-cols-5 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <div className="bg-[#2a1b3d] p-6 rounded-lg mb-4">
                  <feature.icon className="w-10 h-10 mx-auto text-[#9f2dfa]" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-xs text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  )
}


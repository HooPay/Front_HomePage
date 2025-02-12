'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: '01. Quanto custa para usar?',
    answer:
      'A HooPay não cobra taxas de adesão e nem mensalidades. Para montar todo o seu negócio digital, você não paga nada, apenas uma porcentagem por cada venda realizada. Nossas taxas são competitivas e diminuem conforme seu volume de vendas aumenta.',
  },
  {
    question: '02. Quais tipos de pagamento aceita?',
    answer:
      'A HooPay oferece diversos métodos de pagamento: Cartão de crédito com parcelamento em até 12x, Boleto bancário e PIX. Também oferecemos recursos como compra com 1 clique e múltiplos cartões.',
  },
  {
    question: '03. Como funciona o suporte ao cliente?',
    answer:
      'A HooPay é reconhecida pelo excelente atendimento ao cliente. Nosso chat de suporte humanizado está disponível de segunda a sexta, das 9h às 18h. Também temos a Central de Ajuda online 24/7 e atendimento através do e-mail suporte@hoopay.com.br a qualquer momento.',
  },
  {
    question: '04. Como funciona o split de pagamentos?',
    answer:
      'O split de pagamentos permite dividir automaticamente o valor de uma venda entre diferentes contas. Ideal para marketplaces, afiliados e parcerias. Você define as regras de divisão e nós cuidamos da distribuição automática dos valores.',
  },
  {
    question: '05. Como integro a HooPay ao meu site?',
    answer:
      'Oferecemos diferentes formas de integração: Links de pagamento prontos para usar, Botões de pagamento personalizáveis, API REST completa com documentação detalhada, SDKs para principais linguagens e plugins para as principais plataformas de e-commerce.',
  },
  {
    question: '06. Quanto tempo leva para receber os pagamentos?',
    answer:
      'O prazo varia conforme o método de pagamento: PIX é instantâneo, Cartão de crédito pode ser em 2, 15 ou 30 dias (D2, D15 ou D30), Boleto em até 2 dias úteis após o pagamento. Você também pode antecipar seus recebíveis quando quiser.',
  },
  {
    question: '07. O checkout é seguro?',
    answer:
      'Sim! Somos certificados PCI Compliance e utilizamos as mais avançadas tecnologias de criptografia e segurança. Todas as transações são monitoradas em tempo real por nossa equipe antifraude.',
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-lg overflow-hidden mb-4">
      <button
        className="w-full px-6 py-4 flex justify-between items-center hover:bg-white/5 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-left font-medium">{question}</span>
        <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ maxHeight: 0, opacity: 0 }}
            animate={{ maxHeight: 300, opacity: 1 }}
            exit={{ maxHeight: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 text-white/60">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-sm font-medium text-[var(--main-color)]">
              TEM DÚVIDA?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Perguntas e Respostas{' '}
              <span className="text-[var(--main-color)]">Frequentes</span>
            </h2>
            <p className="text-white/60">
              Consulte nossa central de ajuda ou entre em contato agora mesmo
            </p>
            <Button
              size="lg"
              variant="outline"
              className="relative group overflow-hidden rounded-full border-[var(--main-color)] hover:text-[var(--main-color)] bg-[rgb(136,114,250)] hover:bg-[rgb(136,114,250)]/90 text-white"
              asChild
            >
              <Link href="/help">
                <span className="relative z-10">Central de Ajuda</span>
                <motion.div
                  className="absolute inset-0 bg-[var(--main-color)]/10"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            {faqData.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


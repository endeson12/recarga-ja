import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiHelpCircle, FiMessageCircle, FiPhone, FiMail, FiChevronDown, FiChevronUp, FiSearch, FiExternalLink } from 'react-icons/fi';
import Header from '../components/Header';
import Card from '../components/Card';

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
    <button
      onClick={onToggle}
      className="w-full text-left p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900 dark:text-light-text pr-4">{question}</h3>
        {isOpen ? (
          <FiChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
        ) : (
          <FiChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
        )}
      </div>
    </button>
    {isOpen && (
      <div className="px-4 pb-4">
        <p className="text-gray-600 dark:text-gray-text leading-relaxed">{answer}</p>
      </div>
    )}
  </div>
);

const ContactMethod = ({ icon: Icon, title, description, action, color = 'primary-green' }) => (
  <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200">
    <div className="flex items-start space-x-4">
      <div className={`p-3 rounded-lg bg-${color}-100 dark:bg-${color}-900`}>
        <Icon className={`w-6 h-6 text-${color}-600`} />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 dark:text-light-text mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-text mb-4">{description}</p>
        <button
          onClick={action}
          className={`inline-flex items-center px-4 py-2 bg-${color} text-white rounded-lg hover:bg-${color}-600 transition-colors`}
        >
          <FiExternalLink className="w-4 h-4 mr-2" />
          Acessar
        </button>
      </div>
    </div>
  </div>
);

const HelpAndSupport = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "Como faço uma recarga no meu cartão?",
      answer: "Para recarregar seu cartão, vá até a seção 'Recarga' no menu principal, selecione o cartão desejado, escolha o valor e confirme o pagamento. A recarga será processada instantaneamente."
    },
    {
      question: "Quais são as formas de pagamento aceitas?",
      answer: "Aceitamos PIX, cartão de crédito e débito. O PIX é processado instantaneamente, enquanto cartões podem levar alguns minutos para serem processados."
    },
    {
      question: "Como posso ver meu histórico de transações?",
      answer: "No menu principal, acesse 'Extrato' para ver todas as suas transações. Você pode filtrar por período e tipo de transação."
    },
    {
      question: "O que fazer se minha recarga não foi processada?",
      answer: "Se sua recarga não foi processada, verifique se há saldo suficiente no método de pagamento. Se o problema persistir, entre em contato conosco através do suporte."
    },
    {
      question: "Como altero meus dados pessoais?",
      answer: "Acesse 'Perfil' > 'Dados Pessoais' para editar suas informações. Lembre-se de manter seus dados sempre atualizados."
    },
    {
      question: "Posso ter mais de um cartão cadastrado?",
      answer: "Sim! Você pode cadastrar múltiplos cartões e alternar entre eles conforme necessário. Cada cartão terá seu próprio saldo e histórico."
    }
  ];

  const contactMethods = [
    {
      icon: FiMessageCircle,
      title: "Chat Online",
      description: "Converse com nosso suporte em tempo real",
      action: () => console.log("Abrindo chat"),
      color: "blue"
    },
    {
      icon: FiPhone,
      title: "Telefone",
      description: "Ligue para (11) 9999-9999",
      action: () => window.open("tel:+5511999999999"),
      color: "green"
    },
    {
      icon: FiMail,
      title: "E-mail",
      description: "Envie sua dúvida para suporte@recargaja.com",
      action: () => window.open("mailto:suporte@recargaja.com"),
      color: "purple"
    }
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark-bg text-dark-text dark:text-light-text transition-colors duration-300">
      <Header title="Ajuda e Suporte" showBackButton />
      
      <div className="px-4 py-6 max-w-4xl mx-auto space-y-6">
        {/* Busca */}
        <Card>
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar na ajuda..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-green"
            />
          </div>
        </Card>

        {/* FAQ */}
        <Card>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-light-text mb-2">Perguntas Frequentes</h2>
            <p className="text-sm text-gray-600 dark:text-gray-text">
              Encontre respostas para as dúvidas mais comuns
            </p>
          </div>
          
          <div className="space-y-2">
            {filteredFAQs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
          
          {filteredFAQs.length === 0 && (
            <div className="text-center py-8">
              <FiHelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-text">Nenhuma pergunta encontrada</p>
            </div>
          )}
        </Card>

        {/* Contato */}
        <Card>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-light-text mb-2">Entre em Contato</h2>
            <p className="text-sm text-gray-600 dark:text-gray-text">
              Escolha a melhor forma de falar conosco
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <ContactMethod
                key={index}
                icon={method.icon}
                title={method.title}
                description={method.description}
                action={method.action}
                color={method.color}
              />
            ))}
          </div>
        </Card>

        {/* Informações Úteis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-3">
                <FiHelpCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-light-text mb-2">
                Central de Ajuda
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-text mb-4">
                Acesse nosso guia completo com tutoriais e dicas
              </p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Acessar Guia
              </button>
            </div>
          </Card>
          
          <Card>
            <div className="text-center">
              <div className="inline-block p-3 bg-green-100 dark:bg-green-900 rounded-full mb-3">
                <FiMessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-light-text mb-2">
                Status do Sistema
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-text mb-4">
                Verifique se há manutenções ou problemas conhecidos
              </p>
              <div className="flex items-center justify-center text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium">Sistema Operacional</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiShield, FiLock, FiEye, FiEyeOff, FiDownload, FiCheck, FiAlertTriangle } from 'react-icons/fi';
import Header from '../components/Header';
import Card from '../components/Card';

const Privacy = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [showDataDetails, setShowDataDetails] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Visão Geral', icon: FiShield },
    { id: 'data', label: 'Seus Dados', icon: FiLock },
    { id: 'rights', label: 'Seus Direitos', icon: FiCheck },
    { id: 'contact', label: 'Contato', icon: FiAlertTriangle }
  ];

  const dataTypes = [
    {
      category: 'Dados Pessoais',
      items: ['Nome completo', 'E-mail', 'Telefone', 'Data de nascimento', 'Endereço'],
      purpose: 'Identificação e comunicação',
      retention: 'Até cancelamento da conta'
    },
    {
      category: 'Dados de Pagamento',
      items: ['Informações de cartão (mascaradas)', 'Histórico de transações', 'Métodos de pagamento'],
      purpose: 'Processamento de pagamentos',
      retention: '7 anos (conforme legislação)'
    },
    {
      category: 'Dados de Uso',
      items: ['Logs de acesso', 'Preferências do app', 'Dispositivo utilizado'],
      purpose: 'Melhoria do serviço',
      retention: '2 anos'
    }
  ];

  const userRights = [
    {
      right: 'Acesso aos Dados',
      description: 'Você pode solicitar uma cópia de todos os seus dados pessoais',
      action: 'Solicitar Cópia'
    },
    {
      right: 'Retificação',
      description: 'Corrigir dados incorretos ou incompletos',
      action: 'Editar Dados'
    },
    {
      right: 'Exclusão',
      description: 'Solicitar a exclusão dos seus dados pessoais',
      action: 'Solicitar Exclusão'
    },
    {
      right: 'Portabilidade',
      description: 'Transferir seus dados para outro serviço',
      action: 'Exportar Dados'
    }
  ];

  const handleDataRequest = (type) => {
    console.log(`Solicitando ${type}`);
    // Aqui você implementaria a lógica para processar a solicitação
  };

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="text-center py-8">
        <div className="inline-block p-6 bg-gradient-to-r from-primary-green to-green-600 rounded-full mb-6">
          <FiShield className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-light-text mb-4">
          Sua Privacidade é Nossa Prioridade
        </h2>
        <p className="text-gray-600 dark:text-gray-text max-w-2xl mx-auto">
          Estamos comprometidos em proteger seus dados pessoais e garantir transparência 
          sobre como coletamos, usamos e protegemos suas informações.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="text-center">
            <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-3">
              <FiLock className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-light-text mb-2">
              Criptografia de Ponta a Ponta
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-text">
              Todos os seus dados são protegidos com criptografia de nível bancário
            </p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="inline-block p-3 bg-green-100 dark:bg-green-900 rounded-full mb-3">
              <FiEye className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-light-text mb-2">
              Transparência Total
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-text">
              Você tem controle total sobre seus dados e pode acessá-los a qualquer momento
            </p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="inline-block p-3 bg-purple-100 dark:bg-purple-900 rounded-full mb-3">
              <FiCheck className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-light-text mb-2">
              Conformidade LGPD
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-text">
              Seguimos rigorosamente a Lei Geral de Proteção de Dados
            </p>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderData = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900 dark:text-light-text">
          Dados que Coletamos
        </h2>
        <button
          onClick={() => setShowDataDetails(!showDataDetails)}
          className="flex items-center px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          {showDataDetails ? <FiEyeOff className="w-4 h-4 mr-2" /> : <FiEye className="w-4 h-4 mr-2" />}
          {showDataDetails ? 'Ocultar Detalhes' : 'Ver Detalhes'}
        </button>
      </div>

      <div className="space-y-4">
        {dataTypes.map((dataType, index) => (
          <Card key={index}>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-light-text mb-4">
                {dataType.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-text mb-2">Dados Coletados:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-text space-y-1">
                    {dataType.items.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-text mb-2">Finalidade:</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-text">{dataType.purpose}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-text mb-2">Retenção:</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-text">{dataType.retention}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderRights = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-light-text">
        Seus Direitos
      </h2>

      <div className="space-y-4">
        {userRights.map((right, index) => (
          <Card key={index}>
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-light-text mb-2">
                    {right.right}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-text mb-4">
                    {right.description}
                  </p>
                </div>
                <button
                  onClick={() => handleDataRequest(right.action)}
                  className="px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  {right.action}
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-light-text">
        Contato sobre Privacidade
      </h2>

      <Card>
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="inline-block p-4 bg-yellow-100 dark:bg-yellow-900 rounded-full mb-4">
              <FiAlertTriangle className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-light-text mb-2">
              DPO (Data Protection Officer)
            </h3>
            <p className="text-gray-600 dark:text-gray-text">
              Entre em contato com nosso responsável pela proteção de dados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-light-text mb-2">E-mail:</h4>
              <p className="text-gray-600 dark:text-gray-text">privacy@recargaja.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-light-text mb-2">Telefone:</h4>
              <p className="text-gray-600 dark:text-gray-text">(11) 9999-9999</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Importante:</strong> Responderemos sua solicitação em até 15 dias úteis, 
              conforme previsto na LGPD.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark-bg text-dark-text dark:text-light-text transition-colors duration-300">
      <Header title="Privacidade" showBackButton />
      
      <div className="px-4 py-6 max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary-green text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-text hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'data' && renderData()}
        {activeTab === 'rights' && renderRights()}
        {activeTab === 'contact' && renderContact()}
      </div>
    </div>
  );
};

export default Privacy;

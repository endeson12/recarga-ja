import React, { useState } from 'react';
import { FiArrowLeft, FiCreditCard, FiSmartphone, FiShield, FiPlus, FiEdit3, FiTrash2, FiCheck, FiCopy, FiMaximize2 } from 'react-icons/fi';
import Header from '../components/Header';
import Card from '../components/Card';
import { mockPaymentMethods } from '../data/mock';

const PaymentMethodCard = ({ method, isDefault = false, onEdit, onDelete, onSetDefault }) => (
  <div className={`p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-lg ${
    isDefault 
      ? 'border-primary-green bg-green-50 dark:bg-green-900/20' 
      : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
  }`}>
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-lg ${
          method.type === 'PIX' ? 'bg-green-100 dark:bg-green-900' :
          method.type === 'Crédito' ? 'bg-blue-100 dark:bg-blue-900' :
          'bg-purple-100 dark:bg-purple-900'
        }`}>
          <FiCreditCard className={`w-5 h-5 ${
            method.type === 'PIX' ? 'text-green-600' :
            method.type === 'Crédito' ? 'text-blue-600' :
            'text-purple-600'
          }`} />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-light-text">{method.type}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-text">{method.details}</p>
        </div>
      </div>
      
      {isDefault && (
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-green text-white">
          <FiCheck className="w-3 h-3 mr-1" />
          Padrão
        </span>
      )}
    </div>
    
    <div className="flex space-x-2">
      {!isDefault && (
        <button
          onClick={onSetDefault}
          className="flex-1 px-3 py-2 text-sm bg-primary-green text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Definir como Padrão
        </button>
      )}
      <button
        onClick={onEdit}
        className="px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-text rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
      >
        <FiEdit3 className="w-4 h-4" />
      </button>
      <button
        onClick={onDelete}
        className="px-3 py-2 text-sm bg-red-100 dark:bg-red-900 text-red-600 rounded-lg hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
      >
        <FiTrash2 className="w-4 h-4" />
      </button>
    </div>
  </div>
);

const PixInfo = ({ pixKey, onCopy }) => (
  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold">Chave PIX</h3>
      <FiMaximize2 className="w-6 h-6" />
    </div>
    <div className="bg-white/20 rounded-lg p-3 mb-4">
      <p className="font-mono text-sm break-all">{pixKey}</p>
    </div>
    <button
      onClick={onCopy}
      className="w-full flex items-center justify-center px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
    >
      <FiCopy className="w-4 h-4 mr-2" />
      Copiar Chave PIX
    </button>
  </div>
);

const PaymentAndPix = () => {
  const [paymentMethods, setPaymentMethods] = useState(mockPaymentMethods);
  const [pixKey] = useState('jennifer@email.com');
  const [showAddMethod, setShowAddMethod] = useState(false);
  const [newMethod, setNewMethod] = useState({ type: '', details: '' });

  const handleSetDefault = (id) => {
    setPaymentMethods(prev => 
      prev.map(method => ({
        ...method,
        isDefault: method.id === id
      }))
    );
  };

  const handleEdit = (id) => {
    console.log('Editando método:', id);
  };

  const handleDelete = (id) => {
    setPaymentMethods(prev => prev.filter(method => method.id !== id));
  };

  const handleAddMethod = () => {
    if (newMethod.type && newMethod.details) {
      const newId = Math.max(...paymentMethods.map(m => m.id)) + 1;
      setPaymentMethods(prev => [...prev, { ...newMethod, id: newId, isDefault: false }]);
      setNewMethod({ type: '', details: '' });
      setShowAddMethod(false);
    }
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    // Aqui você poderia mostrar uma notificação de sucesso
    console.log('Chave PIX copiada!');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark-bg text-dark-text dark:text-light-text transition-colors duration-300">
      <Header title="Pagamento e PIX" showBackButton />
      
      <div className="px-4 py-6 max-w-4xl mx-auto space-y-6">
        {/* PIX Info */}
        <Card>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-light-text mb-2">PIX</h2>
            <p className="text-sm text-gray-600 dark:text-gray-text">
              Sua chave PIX para receber pagamentos e fazer transferências
            </p>
          </div>
          <PixInfo pixKey={pixKey} onCopy={handleCopyPix} />
        </Card>

        {/* Métodos de Pagamento */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-light-text">Métodos de Pagamento</h2>
              <p className="text-sm text-gray-600 dark:text-gray-text">
                Gerencie suas formas de pagamento
              </p>
            </div>
            <button
              onClick={() => setShowAddMethod(!showAddMethod)}
              className="flex items-center px-4 py-2 bg-primary-green text-white rounded-xl hover:bg-green-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <FiPlus className="w-4 h-4 mr-2" />
              Adicionar
            </button>
          </div>

          {/* Formulário para adicionar método */}
          {showAddMethod && (
            <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <h3 className="font-semibold text-gray-900 dark:text-light-text mb-4">Adicionar Método de Pagamento</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-text mb-1">
                    Tipo
                  </label>
                  <select
                    value={newMethod.type}
                    onChange={(e) => setNewMethod(prev => ({ ...prev, type: e.target.value }))}
                    className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                  >
                    <option value="">Selecione o tipo</option>
                    <option value="PIX">PIX</option>
                    <option value="Crédito">Cartão de Crédito</option>
                    <option value="Débito">Cartão de Débito</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-text mb-1">
                    Detalhes
                  </label>
                  <input
                    type="text"
                    value={newMethod.details}
                    onChange={(e) => setNewMethod(prev => ({ ...prev, details: e.target.value }))}
                    placeholder="Ex: Mastercard **** 4321"
                    className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                  />
                </div>
              </div>
              <div className="flex space-x-3 mt-4">
                <button
                  onClick={handleAddMethod}
                  className="px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  Adicionar
                </button>
                <button
                  onClick={() => setShowAddMethod(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}

          {/* Lista de métodos */}
          <div className="space-y-4">
            {paymentMethods.map((method, index) => (
              <PaymentMethodCard
                key={method.id}
                method={method}
                isDefault={index === 0} // Primeiro método é o padrão
                onEdit={() => handleEdit(method.id)}
                onDelete={() => handleDelete(method.id)}
                onSetDefault={() => handleSetDefault(method.id)}
              />
            ))}
          </div>
        </Card>

        {/* Estatísticas de Pagamento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <div className="text-center">
              <div className="inline-block p-3 bg-green-100 dark:bg-green-900 rounded-full mb-3">
                <FiSmartphone className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-light-text mb-1">
                {paymentMethods.length}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-text">Métodos Cadastrados</p>
            </div>
          </Card>
          
          <Card>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-3">
                <FiShield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-light-text mb-1">
                100%
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-text">Segurança</p>
            </div>
          </Card>
          
          <Card>
            <div className="text-center">
              <div className="inline-block p-3 bg-purple-100 dark:bg-purple-900 rounded-full mb-3">
                <FiCreditCard className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-light-text mb-1">
                R$ 0,00
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-text">Taxa PIX</p>
            </div>
          </Card>
        </div>

        {/* Informações de Segurança */}
        <Card>
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <FiShield className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-light-text mb-2">
                Segurança dos Pagamentos
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-text mb-4">
                Todos os seus dados de pagamento são protegidos com criptografia de ponta a ponta. 
                Nós nunca armazenamos informações sensíveis como senhas ou códigos de segurança.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-text space-y-1">
                <li>• Criptografia SSL/TLS para todas as transações</li>
                <li>• Certificação PCI DSS para segurança de cartões</li>
                <li>• Monitoramento 24/7 contra fraudes</li>
                <li>• Backup seguro de dados</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PaymentAndPix;

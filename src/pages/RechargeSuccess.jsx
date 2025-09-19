import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiCheckCircle, FiArrowLeft, FiHome, FiPlusCircle, FiFileText } from 'react-icons/fi';
import Header from '../components/Header';
import Card from '../components/Card';

const RechargeSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const rechargeData = location.state || {
    card: { name: 'Cartão', number: '**** 1234' },
    amount: 0,
    paymentMethod: { type: 'PIX' }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const handleBackToHome = () => {
    navigate('/dashboard');
  };

  const handleNewRecharge = () => {
    navigate('/recarregar');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark-bg text-dark-text dark:text-light-text transition-colors duration-300">
      <Header title="Recarga Concluída" showBackButton />
      
      <div className="px-4 py-6 max-w-2xl mx-auto">
        <Card className="text-center">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <FiCheckCircle className="w-14 h-14 text-white" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-light-text mb-4">
            Recarga realizada com sucesso! 🎉
          </h1>
          
          <p className="text-gray-600 dark:text-gray-text text-lg mb-8">
            Sua recarga foi processada e o saldo já está disponível no seu cartão.
          </p>

          <div className="bg-gradient-to-r from-primary-green to-green-600 text-white rounded-2xl p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4 text-center">Detalhes da transação</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-green-100">Cartão:</span>
                <span className="font-medium">{rechargeData.card.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-100">Número:</span>
                <span className="font-medium">{rechargeData.card.number}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-100">Valor:</span>
                <span className="font-bold text-xl">
                  {formatCurrency(rechargeData.amount)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-100">Forma de pagamento:</span>
                <span className="font-medium">{rechargeData.paymentMethod.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-100">Data:</span>
                <span className="font-medium">
                  {new Date().toLocaleDateString('pt-BR')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-100">Hora:</span>
                <span className="font-medium">
                  {new Date().toLocaleTimeString('pt-BR', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button
              onClick={handleBackToHome}
              className="flex items-center justify-center space-x-2 p-4 bg-primary-green text-white rounded-xl hover:bg-green-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <FiHome className="w-5 h-5" />
              <span className="font-semibold">Dashboard</span>
            </button>
            
            <button
              onClick={handleNewRecharge}
              className="flex items-center justify-center space-x-2 p-4 bg-white dark:bg-dark-card text-gray-900 dark:text-light-text rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-105 shadow-lg border border-gray-200 dark:border-gray-600"
            >
              <FiPlusCircle className="w-5 h-5" />
              <span className="font-semibold">Nova Recarga</span>
            </button>

            <button
              onClick={() => navigate('/extrato')}
              className="flex items-center justify-center space-x-2 p-4 bg-white dark:bg-dark-card text-gray-900 dark:text-light-text rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-105 shadow-lg border border-gray-200 dark:border-gray-600"
            >
              <FiFileText className="w-5 h-5" />
              <span className="font-semibold">Ver Extrato</span>
            </button>
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl border border-blue-200 dark:border-blue-700">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-blue-500 rounded-full">
                <FiFileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-1">Dica Importante</h4>
                <p className="text-blue-700 dark:text-blue-400 text-sm">
                  Você pode acompanhar todas as suas transações no extrato detalhado e gerar relatórios completos dos seus gastos.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RechargeSuccess;
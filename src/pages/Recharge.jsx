import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCreditCard, FiDollarSign } from 'react-icons/fi';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { mockTransportCards, mockPaymentMethods } from '../data/mock';

const Recharge = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(mockTransportCards[0]);
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [selectedPayment, setSelectedPayment] = useState(mockPaymentMethods[0]);
  const [isCustomAmount, setIsCustomAmount] = useState(false);

  const predefinedAmounts = [10, 20, 50, 100];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const calculateNewBalance = () => {
    const amount = isCustomAmount ? parseFloat(customAmount) || 0 : parseFloat(selectedAmount) || 0;
    return selectedCard.balance + amount;
  };

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount.toString());
    setIsCustomAmount(false);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setIsCustomAmount(true);
    setSelectedAmount('');
  };

  const handleConfirmRecharge = () => {
    const amount = isCustomAmount ? parseFloat(customAmount) : parseFloat(selectedAmount);
    
    if (!amount || amount <= 0) {
      alert('Por favor, selecione um valor válido para recarga.');
      return;
    }

    navigate('/recarga-sucesso', { 
      state: { 
        card: selectedCard, 
        amount: amount,
        paymentMethod: selectedPayment 
      } 
    });
  };

  const getPaymentIcon = (type) => {
    switch (type) {
      case 'PIX': return '💳';
      case 'Crédito': return '💳';
      case 'Débito': return '💳';
      default: return '💳';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark-bg text-dark-text dark:text-light-text transition-colors duration-300">
      <Header title="Fazer Recarga" showBackButton />
      
      <div className="px-4 py-6 max-w-4xl mx-auto space-y-6">
        {/* Seleção do Cartão */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-light-text mb-4">Escolha o cartão</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockTransportCards.map((card) => (
              <Card
                key={card.id}
                className={`cursor-pointer transition-all duration-200 ${
                  selectedCard.id === card.id 
                    ? 'ring-2 ring-primary-green border-primary-green' 
                    : 'hover:shadow-md'
                }`}
                onClick={() => setSelectedCard(card)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FiCreditCard className="w-6 h-6 text-primary-green" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-light-text">{card.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-text">{card.number}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900 dark:text-light-text">{formatCurrency(card.balance)}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-text">Saldo atual</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Seleção do Valor */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-light-text mb-4">Valor da recarga</h2>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            {predefinedAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => handleAmountSelect(amount)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedAmount === amount.toString() && !isCustomAmount
                    ? 'border-primary-green bg-primary-green bg-opacity-10 text-primary-green dark:bg-primary-green dark:bg-opacity-20'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 text-gray-700 dark:text-light-text bg-white dark:bg-dark-card'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <FiDollarSign className="w-5 h-5" />
                  <span className="font-semibold">{formatCurrency(amount)}</span>
                </div>
              </button>
            ))}
          </div>

          <div>
            <InputField
              label="Valor personalizado"
              type="number"
              value={customAmount}
              onChange={handleCustomAmountChange}
              placeholder="Digite o valor desejado"
            />
          </div>
        </div>

        {/* Forma de Pagamento */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-light-text mb-4">Forma de pagamento</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mockPaymentMethods.map((payment) => (
              <Card
                key={payment.id}
                className={`cursor-pointer transition-all duration-200 ${
                  selectedPayment.id === payment.id 
                    ? 'ring-2 ring-primary-green border-primary-green' 
                    : 'hover:shadow-md'
                }`}
                onClick={() => setSelectedPayment(payment)}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{getPaymentIcon(payment.type)}</span>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-light-text">{payment.type}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-text">{payment.details}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Resumo da Recarga */}
        <Card className="bg-gradient-to-r from-primary-green to-green-600 text-white">
          <h3 className="font-semibold mb-4">Resumo da recarga</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-green-100">Cartão selecionado:</span>
              <span className="font-medium">{selectedCard.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-100">Saldo atual:</span>
              <span className="font-medium">{formatCurrency(selectedCard.balance)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-100">Valor da recarga:</span>
              <span className="font-medium">
                {formatCurrency(isCustomAmount ? parseFloat(customAmount) || 0 : parseFloat(selectedAmount) || 0)}
              </span>
            </div>
            <div className="border-t border-green-400 pt-2">
              <div className="flex justify-between">
                <span className="text-green-100 font-semibold">Saldo após recarga:</span>
                <span className="font-bold text-xl">{formatCurrency(calculateNewBalance())}</span>
              </div>
            </div>
          </div>
        </Card>

        <Button
          type="primary"
          onClick={handleConfirmRecharge}
          className="w-full"
          size="lg"
        >
          Confirmar Recarga
        </Button>
      </div>
    </div>
  );
};

export default Recharge;
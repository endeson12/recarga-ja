import React, { useState } from 'react';
import { FiFilter, FiDownload, FiCalendar, FiDollarSign, FiTrendingUp, FiTrendingDown, FiCreditCard } from 'react-icons/fi';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';
import { mockStatement } from '../data/mock';

const Statement = () => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const getActivityIcon = (type) => {
    return type === 'Recarga' ? <FiTrendingUp className="h-5 w-5" /> : <FiTrendingDown className="h-5 w-5" />;
  };

  const getActivityColor = (amount) => {
    return amount > 0 ? 'text-primary-green' : 'text-red-500';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Concluída':
        return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300';
      case 'Pendente':
        return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Falhou':
        return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-300';
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const filteredTransactions = mockStatement.filter(transaction => {
    if (filter === 'all') return true;
    if (filter === 'recarga') return transaction.type === 'Recarga';
    if (filter === 'uso') return transaction.type === 'Uso';
    return true;
  });

  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date) - new Date(a.date);
    }
    if (sortBy === 'amount') {
      return Math.abs(b.amount) - Math.abs(a.amount);
    }
    return 0;
  });

  const totalRecargas = mockStatement
    .filter(t => t.type === 'Recarga')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalUsos = Math.abs(mockStatement
    .filter(t => t.type === 'Uso')
    .reduce((sum, t) => sum + t.amount, 0));

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark-bg text-dark-text dark:text-light-text transition-colors duration-300">
      <Header title="Extrato Detalhado" showBackButton />
      
      <div className="px-4 py-6 max-w-4xl mx-auto space-y-6">
        {/* Resumo do Período */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-r from-primary-green to-green-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Total Recarregado</h3>
                <p className="text-3xl font-bold">{formatCurrency(totalRecargas)}</p>
                <p className="text-green-100 text-sm mt-1">Este período</p>
              </div>
              <FiTrendingUp className="h-12 w-12 text-white/80" />
            </div>
          </Card>
          
          <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Total Utilizado</h3>
                <p className="text-3xl font-bold">{formatCurrency(totalUsos)}</p>
                <p className="text-red-100 text-sm mt-1">Este período</p>
              </div>
              <FiTrendingDown className="h-12 w-12 text-white/80" />
            </div>
          </Card>
        </div>

        {/* Filtros */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-light-text">Filtros</h3>
            <FiFilter className="w-5 h-5 text-gray-400 dark:text-gray-text" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-light-text mb-3">Tipo de transação</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                    filter === 'all' 
                      ? 'bg-primary-green text-white shadow-lg' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-light-text hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Todas
                </button>
                <button
                  onClick={() => setFilter('recarga')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                    filter === 'recarga' 
                      ? 'bg-primary-green text-white shadow-lg' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-light-text hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Recargas
                </button>
                <button
                  onClick={() => setFilter('uso')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                    filter === 'uso' 
                      ? 'bg-primary-green text-white shadow-lg' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-light-text hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Usos
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-light-text mb-3">Ordenar por</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent bg-white dark:bg-dark-card text-gray-900 dark:text-light-text transition-colors"
              >
                <option value="date">Data (mais recente)</option>
                <option value="amount">Valor (maior)</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Lista de Transações */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-light-text">
              Transações ({sortedTransactions.length})
            </h2>
            <button
              className="flex items-center space-x-2 px-4 py-2 bg-primary-green text-white rounded-xl hover:bg-green-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <FiDownload className="w-4 h-4" />
              <span className="font-medium">Exportar</span>
            </button>
          </div>

          <Card className="p-0 overflow-hidden">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {sortedTransactions.map((transaction) => (
                <div key={transaction.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full ${transaction.type === 'Recarga' ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'}`}>
                        {getActivityIcon(transaction.type)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-light-text text-lg">{transaction.type}</p>
                        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-text">
                          <FiCreditCard className="h-4 w-4" />
                          <span>{transaction.card}</span>
                          <span>•</span>
                          <span>{formatDate(transaction.date)} às {transaction.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold text-xl ${getActivityColor(transaction.amount)}`}>
                        {transaction.amount > 0 ? '+' : ''}{formatCurrency(transaction.amount)}
                      </p>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                        {transaction.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Informações do Período */}
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-blue-500 rounded-full">
              <FiCalendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-300 text-lg">Período de consulta</h3>
              <p className="text-blue-700 dark:text-blue-400 mt-2">
                Mostrando transações dos últimos 30 dias. Para consultar períodos anteriores, entre em contato com o suporte.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Statement;
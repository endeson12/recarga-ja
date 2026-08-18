import React, { useState } from 'react';
import { FiTrendingUp, FiTrendingDown, FiDollarSign, FiCreditCard, FiCalendar, FiDownload, FiBarChart, FiPieChart, FiActivity } from 'react-icons/fi';
import Header from '../components/Header';
import Card from '../components/Card';
import { mockStatement } from '../data/mock';

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30');

  // Função para filtrar dados por período
  const getFilteredData = () => {
    const now = new Date();
    const daysAgo = parseInt(selectedPeriod);
    const startDate = new Date(now.getTime() - (daysAgo * 24 * 60 * 60 * 1000));
    
    return mockStatement.filter(transaction => {
      const transactionDate = new Date(transaction.date);
      return transactionDate >= startDate && transactionDate <= now;
    });
  };

  // Dados filtrados baseado no período selecionado
  const filteredData = getFilteredData();

  // Cálculos dos dados usando dados filtrados
  const totalRecargas = filteredData
    .filter(t => t.type === 'Recarga')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalUsos = Math.abs(filteredData
    .filter(t => t.type === 'Uso')
    .reduce((sum, t) => sum + t.amount, 0));

  const saldoAtual = totalRecargas - totalUsos;

  const recargasPorMes = filteredData
    .filter(t => t.type === 'Recarga')
    .reduce((acc, t) => {
      const month = new Date(t.date).toLocaleDateString('pt-BR', { month: 'short' });
      acc[month] = (acc[month] || 0) + t.amount;
      return acc;
    }, {});

  const usosPorMes = filteredData
    .filter(t => t.type === 'Uso')
    .reduce((acc, t) => {
      const month = new Date(t.date).toLocaleDateString('pt-BR', { month: 'short' });
      acc[month] = (acc[month] || 0) + Math.abs(t.amount);
      return acc;
    }, {});

  const cartaoMaisUsado = filteredData
    .reduce((acc, t) => {
      acc[t.card] = (acc[t.card] || 0) + 1;
      return acc;
    }, {});

  const cartaoMaisUsadoNome = Object.keys(cartaoMaisUsado).length > 0 
    ? Object.keys(cartaoMaisUsado).reduce((a, b) => 
        cartaoMaisUsado[a] > cartaoMaisUsado[b] ? a : b
      )
    : 'Nenhum';

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

  const exportReport = () => {
    const reportData = {
      periodo: selectedPeriod,
      totalRecargas,
      totalUsos,
      saldoAtual,
      recargasPorMes,
      usosPorMes,
      cartaoMaisUsado: cartaoMaisUsadoNome,
      totalTransacoes: filteredData.length,
      dataGeracao: new Date().toLocaleDateString('pt-BR')
    };

    const dataStr = JSON.stringify(reportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `relatorio-recargaja-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark-bg text-dark-text dark:text-light-text transition-colors duration-300">
      <Header title="Relatórios" showBackButton />
      
      <div className="px-4 py-6 max-w-6xl mx-auto space-y-6">
        {/* Filtros de Período */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-light-text">Período de Análise</h2>
            <FiCalendar className="w-5 h-5 text-gray-400 dark:text-gray-text" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '7', label: '7 dias' },
              { value: '30', label: '30 dias' },
              { value: '90', label: '90 dias' },
              { value: '365', label: '1 ano' }
            ].map((period) => (
              <button
                key={period.value}
                onClick={() => setSelectedPeriod(period.value)}
                className={`p-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 ${
                  selectedPeriod === period.value
                    ? 'bg-primary-green text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-light-text hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {period.label}
              </button>
            ))}
          </div>
        </Card>

        {/* Mensagem quando não há dados */}
        {filteredData.length === 0 && (
          <Card className="text-center py-12">
            <div className="text-gray-500 dark:text-gray-400">
              <FiCalendar className="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
              <h3 className="text-lg font-medium mb-2">Nenhuma transação encontrada</h3>
              <p className="text-sm">Não há dados para o período selecionado de {selectedPeriod} dias.</p>
            </div>
          </Card>
        )}

        {/* Conteúdo principal - só aparece quando há dados */}
        {filteredData.length > 0 && (
          <>
            {/* Resumo Executivo */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-r from-primary-green to-green-600 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-green-100">Total Recarregado</h3>
                    <p className="text-2xl font-bold">{formatCurrency(totalRecargas)}</p>
                  </div>
                  <FiTrendingUp className="h-8 w-8 text-white/80" />
                </div>
              </Card>

              <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-red-100">Total Utilizado</h3>
                    <p className="text-2xl font-bold">{formatCurrency(totalUsos)}</p>
                  </div>
                  <FiTrendingDown className="h-8 w-8 text-white/80" />
                </div>
              </Card>

              <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-blue-100">Saldo Atual</h3>
                    <p className="text-2xl font-bold">{formatCurrency(saldoAtual)}</p>
                  </div>
                  <FiDollarSign className="h-8 w-8 text-white/80" />
                </div>
              </Card>

              <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-purple-100">Cartão Mais Usado</h3>
                    <p className="text-lg font-bold">{cartaoMaisUsadoNome}</p>
                  </div>
                  <FiCreditCard className="h-8 w-8 text-white/80" />
                </div>
              </Card>
            </div>

            {/* Gráficos e Análises */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Gráfico de Recargas por Mês */}
              <Card>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-light-text">Recargas por Mês</h3>
                  <FiBarChart className="w-5 h-5 text-primary-green" />
                </div>
                
                <div className="space-y-4">
                  {Object.entries(recargasPorMes).map(([month, amount]) => (
                    <div key={month} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-text">{month}</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-primary-green h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(amount / Math.max(...Object.values(recargasPorMes))) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-primary-green w-16 text-right">
                          {formatCurrency(amount)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Gráfico de Usos por Mês */}
              <Card>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-light-text">Usos por Mês</h3>
                  <FiPieChart className="w-5 h-5 text-red-500" />
                </div>
                
                <div className="space-y-4">
                  {Object.entries(usosPorMes).map(([month, amount]) => (
                    <div key={month} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-text">{month}</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-red-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(amount / Math.max(...Object.values(usosPorMes))) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-red-500 w-16 text-right">
                          {formatCurrency(amount)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Análise de Tendências */}
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-light-text">Análise de Tendências</h3>
                <FiActivity className="w-5 h-5 text-primary-green" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <div className="text-3xl font-bold text-primary-green mb-2">
                    {Math.round((totalRecargas / (totalRecargas + totalUsos)) * 100)}%
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-text">Taxa de Recarga</p>
                </div>
                
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {filteredData.length}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-text">Total de Transações</p>
                </div>
                
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {formatCurrency(filteredData.filter(t => t.type === 'Recarga').length > 0 
                      ? totalRecargas / filteredData.filter(t => t.type === 'Recarga').length 
                      : 0)}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-text">Média por Recarga</p>
                </div>
              </div>
            </Card>

            {/* Transações Recentes */}
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-light-text">Transações Recentes</h3>
                <button
                  onClick={exportReport}
                  className="flex items-center space-x-2 px-4 py-2 bg-primary-green text-white rounded-xl hover:bg-green-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <FiDownload className="w-4 h-4" />
                  <span className="font-medium">Exportar Relatório</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {filteredData.slice(0, 5).map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${transaction.type === 'Recarga' ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'}`}>
                        {transaction.type === 'Recarga' ? 
                          <FiTrendingUp className="h-4 w-4 text-green-600" /> : 
                          <FiTrendingDown className="h-4 w-4 text-red-600" />
                        }
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-light-text">{transaction.type}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-text">
                          {transaction.card} • {formatDate(transaction.date)}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${transaction.amount > 0 ? 'text-primary-green' : 'text-red-500'}`}>
                        {transaction.amount > 0 ? '+' : ''}{formatCurrency(transaction.amount)}
                      </p>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                        {transaction.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default Reports;

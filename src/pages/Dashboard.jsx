import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mockUser, mockTransportCards, mockRecentActivity } from '../data/mock';
import { FiCreditCard, FiPlusCircle, FiFileText, FiUser, FiTrendingUp, FiDollarSign } from 'react-icons/fi';
import Header from '../components/Header';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark-bg text-dark-text dark:text-light-text transition-colors duration-300">
      <Header title="Dashboard" showMenu={true} />
      
      <div className="px-4 py-6 max-w-6xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 bg-white dark:bg-dark-card rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105" onClick={() => navigate('/perfil')}>
              <FiUser className="h-6 w-6 text-primary-green" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-light-text">Olá, {mockUser.name}!</h1>
              <p className="text-gray-600 dark:text-gray-text">Bem-vindo de volta ao RecargaJá</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <button 
            onClick={() => navigate('/recarregar')}
            className="bg-gradient-to-r from-primary-green to-green-600 text-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center space-y-2"
          >
            <FiPlusCircle className="h-8 w-8" />
            <span className="font-semibold text-sm">Recarregar</span>
          </button>
          <button 
            onClick={() => navigate('/extrato')}
            className="bg-white dark:bg-dark-card text-gray-900 dark:text-light-text p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center space-y-2"
          >
            <FiFileText className="h-8 w-8 text-primary-green" />
            <span className="font-semibold text-sm">Extrato</span>
          </button>
          <button 
            onClick={() => navigate('/perfil')}
            className="bg-white dark:bg-dark-card text-gray-900 dark:text-light-text p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center space-y-2"
          >
            <FiUser className="h-8 w-8 text-primary-green" />
            <span className="font-semibold text-sm">Perfil</span>
          </button>
          <button 
            onClick={() => navigate('/relatorios')}
            className="bg-white dark:bg-dark-card text-gray-900 dark:text-light-text p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center space-y-2"
          >
            <FiTrendingUp className="h-8 w-8 text-primary-green" />
            <span className="font-semibold text-sm">Relatórios</span>
          </button>
        </div>

        {/* Meus Cartões */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-light-text">Meus Cartões</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockTransportCards.map(card => (
              <div key={card.id} className="bg-white dark:bg-dark-card rounded-2xl shadow-lg p-6 border-l-4 border-primary-green transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <FiCreditCard className="h-6 w-6 text-primary-green" />
                    <span className="font-bold text-lg text-gray-900 dark:text-light-text">{card.name}</span>
                  </div>
                </div>
                <p className="text-gray-text text-sm mb-4">{card.number}</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-text">Saldo atual</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-light-text">R$ {card.balance.toFixed(2).replace('.', ',')}</p>
                  </div>
                  <button 
                    onClick={() => navigate('/recarregar')}
                    className="bg-primary-green text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors"
                  >
                    Recarregar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Atividade Recente */}
        <section>
          <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-light-text">Atividade Recente</h2>
          <div className="bg-white dark:bg-dark-card rounded-2xl shadow-lg p-6">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {mockRecentActivity.map(activity => (
                <li key={activity.id} className="py-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg px-2 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full ${activity.amount > 0 ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'}`}>
                        <FiDollarSign className={`h-5 w-5 ${activity.amount > 0 ? 'text-primary-green' : 'text-red-500'}`} />
                    </div>
                    <div>
                        <p className="font-semibold text-gray-900 dark:text-light-text">{activity.type}</p>
                        <p className="text-sm text-gray-text">{activity.date} - {activity.card}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold text-lg ${activity.amount > 0 ? 'text-primary-green' : 'text-red-500'}`}>
                      {activity.amount > 0 ? '+' : ''}R$ {Math.abs(activity.amount).toFixed(2).replace('.', ',')}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-text">{activity.time}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button 
                onClick={() => navigate('/extrato')}
                className="w-full text-primary-green font-semibold hover:text-green-600 transition-colors"
              >
                Ver extrato completo
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
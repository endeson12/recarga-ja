import React, { useState } from 'react';
import { FiArrowLeft, FiBell, FiBellOff, FiCheck, FiSettings, FiZap, FiShield, FiCreditCard } from 'react-icons/fi';
import Header from '../components/Header';
import Card from '../components/Card';

const ToggleSwitch = ({ label, description, enabled, setEnabled, icon: IconComponent, color = 'primary-green' }) => (
  <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors">
    <div className="flex items-center space-x-4">
      <div className={`p-2 rounded-lg ${enabled ? `bg-${color}-100 dark:bg-${color}-900` : 'bg-gray-100 dark:bg-gray-700'}`}>
        {IconComponent && <IconComponent className={`w-5 h-5 ${enabled ? `text-${color}-600` : 'text-gray-400'}`} />}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-light-text">{label}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-text">{description}</p>
      </div>
    </div>
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-green ${
        enabled 
          ? `bg-${color} shadow-lg` 
          : 'bg-gray-300 dark:bg-gray-600'
      }`}
    >
      <span
        className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  </div>
);

const NotificationCard = ({ title, description, time, unread = false, type = 'info' }) => {
  const typeColors = {
    info: 'bg-blue-100 dark:bg-blue-900 text-blue-600',
    success: 'bg-green-100 dark:bg-green-900 text-green-600',
    warning: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600',
    error: 'bg-red-100 dark:bg-red-900 text-red-600'
  };

  return (
    <div className={`p-4 rounded-xl border-l-4 ${unread ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500' : 'bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600'} hover:shadow-md transition-all duration-200`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 dark:text-light-text mb-1">{title}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-text mb-2">{description}</p>
          <div className="flex items-center space-x-2">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${typeColors[type]}`}>
              {type === 'info' && 'Informação'}
              {type === 'success' && 'Sucesso'}
              {type === 'warning' && 'Aviso'}
              {type === 'error' && 'Erro'}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-text">{time}</span>
          </div>
        </div>
        {unread && (
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        )}
      </div>
    </div>
  );
};

const Notifications = () => {
  
  const [notifications, setNotifications] = useState({
    promo: true,
    updates: true,
    reminders: false,
    security: true,
    payments: true,
    marketing: false
  });

  const [recentNotifications] = useState([
    {
      id: 1,
      title: 'Recarga realizada com sucesso!',
      description: 'Sua recarga de R$ 50,00 foi processada e já está disponível no seu cartão.',
      time: 'Há 2 horas',
      unread: true,
      type: 'success'
    },
    {
      id: 2,
      title: 'Nova funcionalidade disponível',
      description: 'Agora você pode configurar lembretes automáticos de recarga.',
      time: 'Ontem',
      unread: true,
      type: 'info'
    },
    {
      id: 3,
      title: 'Promoção especial',
      description: 'Ganhe 10% de cashback em todas as recargas até o final do mês.',
      time: '2 dias atrás',
      unread: false,
      type: 'warning'
    },
    {
      id: 4,
      title: 'Atualização de segurança',
      description: 'Sua conta foi atualizada com as mais recentes medidas de segurança.',
      time: '1 semana atrás',
      unread: false,
      type: 'info'
    }
  ]);

  const handleToggle = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const markAllAsRead = () => {
    // Simular marcação como lida
    console.log('Marcando todas como lidas');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark-bg text-dark-text dark:text-light-text transition-colors duration-300">
      <Header title="Notificações" showBackButton />
      
      <div className="px-4 py-6 max-w-4xl mx-auto space-y-6">
        {/* Card de Configurações */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-light-text">Configurações de Notificação</h2>
              <p className="text-sm text-gray-600 dark:text-gray-text">Personalize como você recebe notificações</p>
            </div>
            <div className="p-2 bg-primary-green rounded-lg">
              <FiBell className="w-5 h-5 text-white" />
            </div>
          </div>
          
          <div className="space-y-1">
            <ToggleSwitch
              label="Ofertas e Promoções"
              description="Receba notificações sobre ofertas especiais e descontos"
              enabled={notifications.promo}
              setEnabled={() => handleToggle('promo')}
              icon={FiZap}
              color="yellow"
            />
            
            <ToggleSwitch
              label="Atualizações do Aplicativo"
              description="Notificações sobre novas funcionalidades e melhorias"
              enabled={notifications.updates}
              setEnabled={() => handleToggle('updates')}
              icon={FiSettings}
              color="blue"
            />
            
            <ToggleSwitch
              label="Lembretes de Recarga"
              description="Alertas quando seu saldo estiver baixo"
              enabled={notifications.reminders}
              setEnabled={() => handleToggle('reminders')}
              icon={FiBell}
              color="green"
            />
            
            <ToggleSwitch
              label="Alertas de Segurança"
              description="Notificações importantes sobre segurança da conta"
              enabled={notifications.security}
              setEnabled={() => handleToggle('security')}
              icon={FiShield}
              color="red"
            />
            
            <ToggleSwitch
              label="Transações e Pagamentos"
              description="Confirmações de recargas e transações"
              enabled={notifications.payments}
              setEnabled={() => handleToggle('payments')}
              icon={FiCreditCard}
              color="purple"
            />
            
            <ToggleSwitch
              label="Marketing e Novidades"
              description="Conteúdo promocional e dicas de uso"
              enabled={notifications.marketing}
              setEnabled={() => handleToggle('marketing')}
              icon={FiBellOff}
              color="gray"
            />
          </div>
        </Card>

        {/* Notificações Recentes */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-light-text">Notificações Recentes</h2>
              <p className="text-sm text-gray-600 dark:text-gray-text">Suas últimas notificações</p>
            </div>
            <button
              onClick={markAllAsRead}
              className="flex items-center px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-text rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <FiCheck className="w-4 h-4 mr-2" />
              Marcar todas como lidas
            </button>
          </div>
          
          <div className="space-y-4">
            {recentNotifications.map((notification) => (
              <NotificationCard
                key={notification.id}
                title={notification.title}
                description={notification.description}
                time={notification.time}
                unread={notification.unread}
                type={notification.type}
              />
            ))}
          </div>
          
          {recentNotifications.length === 0 && (
            <div className="text-center py-8">
              <FiBellOff className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-text">Nenhuma notificação recente</p>
            </div>
          )}
        </Card>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-3">
                <FiBell className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-light-text mb-1">
                {recentNotifications.filter(n => n.unread).length}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-text">Não lidas</p>
            </div>
          </Card>
          
          <Card>
            <div className="text-center">
              <div className="inline-block p-3 bg-green-100 dark:bg-green-900 rounded-full mb-3">
                <FiCheck className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-light-text mb-1">
                {recentNotifications.filter(n => !n.unread).length}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-text">Lidas</p>
            </div>
          </Card>
          
          <Card>
            <div className="text-center">
              <div className="inline-block p-3 bg-purple-100 dark:bg-purple-900 rounded-full mb-3">
                <FiSettings className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-light-text mb-1">
                {Object.values(notifications).filter(Boolean).length}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-text">Ativas</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Notifications;

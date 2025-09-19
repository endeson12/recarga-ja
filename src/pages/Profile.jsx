import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mockUser } from '../data/mock';
import { FiUser, FiBell, FiCreditCard, FiHelpCircle, FiLogOut, FiChevronRight, FiSettings, FiShield, FiHeart } from 'react-icons/fi';
import Header from '../components/Header';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark-bg text-dark-text dark:text-light-text transition-colors duration-300">
      <Header title="Perfil" showBackButton />
      
      <div className="px-4 py-6 max-w-4xl mx-auto">
        {/* Card de Informações do Usuário */}
        <div className="bg-white dark:bg-dark-card rounded-2xl shadow-lg p-6 mb-8 border-l-4 border-primary-green">
          <div className="text-center mb-6">
            <div className="inline-block p-4 bg-gradient-to-r from-primary-green to-green-600 rounded-full mb-4 shadow-lg">
              <FiUser className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-light-text mb-2">{mockUser.name}</h2>
            <p className="text-gray-text text-lg">{mockUser.email}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-gray-200 dark:border-gray-700 pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-green">2</p>
              <p className="text-sm text-gray-text">Cartões ativos</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-green">15</p>
              <p className="text-sm text-gray-text">Recargas este mês</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-green">R$ 127,50</p>
              <p className="text-sm text-gray-text">Total recarregado</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-green">98%</p>
              <p className="text-sm text-gray-text">Satisfação</p>
            </div>
          </div>
        </div>
        
        {/* Menu de Opções */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white dark:bg-dark-card rounded-2xl shadow-lg p-2">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <ProfileMenuItem icon={<FiUser />} text="Informações básicas" onClick={() => navigate('/perfil/dados-pessoais')} />
              <ProfileMenuItem icon={<FiSettings />} text="Configurações" onClick={() => navigate('/perfil/configuracoes')} />
              <ProfileMenuItem icon={<FiShield />} text="Privacidade" onClick={() => navigate('/perfil/privacidade')} />
            </ul>
          </div>
          
          <div className="bg-white dark:bg-dark-card rounded-2xl shadow-lg p-2">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <ProfileMenuItem icon={<FiBell />} text="Notificações" onClick={() => navigate('/perfil/notificacoes')} />
              <ProfileMenuItem icon={<FiCreditCard />} text="Pagamento e PIX" onClick={() => navigate('/perfil/pagamento-pix')} />
              <ProfileMenuItem icon={<FiHelpCircle />} text="Ajuda e Suporte" onClick={() => navigate('/perfil/ajuda-suporte')} />
            </ul>
          </div>
        </div>

        {/* Botão de Sair */}
        <div className="max-w-2xl mx-auto">
           <button 
             onClick={() => navigate('/')} 
             className="w-full flex items-center justify-center p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-2xl shadow-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-300 transform hover:scale-105 border-l-4 border-red-500"
           >
             <FiLogOut className="mr-3 h-5 w-5" />
             <span className="font-semibold text-lg">Sair da Conta</span>
           </button>
        </div>
      </div>
    </div>
  );
};

// Componente auxiliar para os itens do menu
const ProfileMenuItem = ({ icon, text, onClick }) => (
  <li onClick={onClick} className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 transform hover:scale-105">
    <div className="flex items-center">
      <div className="text-primary-green mr-4 text-xl">{icon}</div>
      <span className="font-semibold text-gray-900 dark:text-light-text">{text}</span>
    </div>
    <FiChevronRight className="text-gray-400 h-5 w-5" />
  </li>
);

export default Profile;
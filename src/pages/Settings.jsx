import React, { useState } from 'react';
import { FiArrowLeft, FiSettings, FiMoon, FiSun, FiGlobe, FiShield, FiBell, FiEye, FiEyeOff } from 'react-icons/fi';
import Header from '../components/Header';
import Card from '../components/Card';

const Settings = () => {
  const [settings, setSettings] = useState({
    darkMode: true,
    notifications: true,
    location: true,
    analytics: false,
    autoSync: true,
    language: 'pt-BR',
    currency: 'BRL'
  });

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSelect = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const SettingItem = ({ icon: IconComponent, title, description, children, color = 'primary-green' }) => (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors">
      <div className="flex items-center space-x-4">
        <div className={`p-2 rounded-lg bg-${color}-100 dark:bg-${color}-900`}>
          {IconComponent && <IconComponent className={`w-5 h-5 text-${color}-600`} />}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-light-text">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-text">{description}</p>
        </div>
      </div>
      <div className="flex items-center">
        {children}
      </div>
    </div>
  );

  const ToggleSwitch = ({ enabled, setEnabled }) => (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-green ${
        enabled 
          ? 'bg-primary-green shadow-lg' 
          : 'bg-gray-300 dark:bg-gray-600'
      }`}
    >
      <span
        className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

  const SelectDropdown = ({ value, onChange, options }) => (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green text-sm"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark-bg text-dark-text dark:text-light-text transition-colors duration-300">
      <Header title="Configurações" showBackButton />
      
      <div className="px-4 py-6 max-w-4xl mx-auto space-y-6">
        {/* Aparência */}
        <Card>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-light-text mb-2">Aparência</h2>
            <p className="text-sm text-gray-600 dark:text-gray-text">
              Personalize a aparência do aplicativo
            </p>
          </div>
          
          <div className="space-y-2">
            <SettingItem
              icon={settings.darkMode ? FiMoon : FiSun}
              title="Modo Escuro"
              description="Ativar tema escuro para melhor experiência noturna"
              color="purple"
            >
              <ToggleSwitch 
                enabled={settings.darkMode} 
                setEnabled={() => handleToggle('darkMode')} 
              />
            </SettingItem>
          </div>
        </Card>

        {/* Notificações */}
        <Card>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-light-text mb-2">Notificações</h2>
            <p className="text-sm text-gray-600 dark:text-gray-text">
              Configure como você recebe notificações
            </p>
          </div>
          
          <div className="space-y-2">
            <SettingItem
              icon={FiBell}
              title="Notificações Push"
              description="Receber notificações no dispositivo"
              color="blue"
            >
              <ToggleSwitch 
                enabled={settings.notifications} 
                setEnabled={() => handleToggle('notifications')} 
              />
            </SettingItem>
          </div>
        </Card>

        {/* Privacidade e Segurança */}
        <Card>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-light-text mb-2">Privacidade e Segurança</h2>
            <p className="text-sm text-gray-600 dark:text-gray-text">
              Controle sua privacidade e segurança
            </p>
          </div>
          
          <div className="space-y-2">
            <SettingItem
              icon={FiShield}
              title="Localização"
              description="Permitir acesso à localização para funcionalidades baseadas em local"
              color="green"
            >
              <ToggleSwitch 
                enabled={settings.location} 
                setEnabled={() => handleToggle('location')} 
              />
            </SettingItem>
            
            <SettingItem
              icon={FiEye}
              title="Analytics"
              description="Compartilhar dados anônimos para melhorar o aplicativo"
              color="yellow"
            >
              <ToggleSwitch 
                enabled={settings.analytics} 
                setEnabled={() => handleToggle('analytics')} 
              />
            </SettingItem>
          </div>
        </Card>

        {/* Sincronização */}
        <Card>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-light-text mb-2">Sincronização</h2>
            <p className="text-sm text-gray-600 dark:text-gray-text">
              Configure a sincronização de dados
            </p>
          </div>
          
          <div className="space-y-2">
            <SettingItem
              icon={FiSettings}
              title="Sincronização Automática"
              description="Sincronizar dados automaticamente em segundo plano"
              color="blue"
            >
              <ToggleSwitch 
                enabled={settings.autoSync} 
                setEnabled={() => handleToggle('autoSync')} 
              />
            </SettingItem>
          </div>
        </Card>

        {/* Idioma e Moeda */}
        <Card>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-light-text mb-2">Idioma e Moeda</h2>
            <p className="text-sm text-gray-600 dark:text-gray-text">
              Configure idioma e moeda do aplicativo
            </p>
          </div>
          
          <div className="space-y-4">
            <SettingItem
              icon={FiGlobe}
              title="Idioma"
              description="Selecione o idioma do aplicativo"
              color="green"
            >
              <SelectDropdown
                value={settings.language}
                onChange={(value) => handleSelect('language', value)}
                options={[
                  { value: 'pt-BR', label: 'Português (Brasil)' },
                  { value: 'en-US', label: 'English (US)' },
                  { value: 'es-ES', label: 'Español' }
                ]}
              />
            </SettingItem>
            
            <SettingItem
              icon={FiSettings}
              title="Moeda"
              description="Moeda para exibição de valores"
              color="purple"
            >
              <SelectDropdown
                value={settings.currency}
                onChange={(value) => handleSelect('currency', value)}
                options={[
                  { value: 'BRL', label: 'Real (R$)' },
                  { value: 'USD', label: 'Dólar ($)' },
                  { value: 'EUR', label: 'Euro (€)' }
                ]}
              />
            </SettingItem>
          </div>
        </Card>

        {/* Informações do App */}
        <Card>
          <div className="text-center py-8">
            <div className="inline-block p-4 bg-primary-green rounded-full mb-4">
              <FiSettings className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-light-text mb-2">
              RecargaJá
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-text mb-4">
              Versão 1.0.0
            </p>
            <div className="space-y-2 text-xs text-gray-500 dark:text-gray-text">
              <p>© 2024 RecargaJá. Todos os direitos reservados.</p>
              <p>Desenvolvido com ❤️ para facilitar sua vida</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;

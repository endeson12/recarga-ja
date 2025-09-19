import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiPhone, FiMapPin, FiCalendar, FiSave, FiEdit3, FiCheck } from 'react-icons/fi';
import Header from '../components/Header';
import Card from '../components/Card';
import { mockUser } from '../data/mock';

const InputField = ({ id, label, type, value, onChange, placeholder, icon: Icon, required = false }) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-text">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`block w-full ${Icon ? 'pl-10' : 'pl-3'} pr-3 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-all duration-200`}
        required={required}
      />
    </div>
  </div>
);

const PersonalData = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: mockUser.name,
    email: mockUser.email,
    phone: '(11) 99999-9999',
    address: 'Rua das Flores, 123',
    city: 'São Paulo',
    state: 'SP',
    birthDate: '1990-01-01'
  });

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    
    // Simular salvamento
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSaving(false);
    setIsEditing(false);
    setShowSuccess(true);
    
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleCancel = () => {
    setFormData({
      name: mockUser.name,
      email: mockUser.email,
      phone: '(11) 99999-9999',
      address: 'Rua das Flores, 123',
      city: 'São Paulo',
      state: 'SP',
      birthDate: '1990-01-01'
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark-bg text-dark-text dark:text-light-text transition-colors duration-300">
      <Header title="Dados Pessoais" showBackButton />
      
      <div className="px-4 py-6 max-w-4xl mx-auto space-y-6">
        {/* Card de Perfil */}
        <Card>
          <div className="text-center mb-6">
            <div className="inline-block p-4 bg-gradient-to-r from-primary-green to-green-600 rounded-full mb-4">
              <FiUser className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-light-text mb-2">
              {formData.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-text">
              {formData.email}
            </p>
          </div>
          
          <div className="flex justify-center space-x-4">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center px-4 py-2 bg-primary-green text-white rounded-xl hover:bg-green-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <FiEdit3 className="w-4 h-4 mr-2" />
                Editar Dados
              </button>
            ) : (
              <div className="flex space-x-3">
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="flex items-center px-4 py-2 bg-primary-green text-white rounded-xl hover:bg-green-600 transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50"
                >
                  {isSaving ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Salvando...
                    </>
                  ) : (
                    <>
                      <FiSave className="w-4 h-4 mr-2" />
                      Salvar
                    </>
                  )}
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center px-4 py-2 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition-all duration-200"
                >
                  Cancelar
                </button>
              </div>
            )}
          </div>
        </Card>

        {/* Formulário de Dados */}
        <Card>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-light-text mb-2">
              Informações Pessoais
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-text">
              Mantenha seus dados sempre atualizados para uma melhor experiência.
            </p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                id="name"
                label="Nome Completo"
                type="text"
                value={formData.name}
                onChange={handleInputChange('name')}
                placeholder="Digite seu nome completo"
                icon={FiUser}
                required
                disabled={!isEditing}
              />
              
              <InputField
                id="email"
                label="E-mail"
                type="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                placeholder="seu@email.com"
                icon={FiMail}
                required
                disabled={!isEditing}
              />
              
              <InputField
                id="phone"
                label="Telefone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange('phone')}
                placeholder="(11) 99999-9999"
                icon={FiPhone}
                disabled={!isEditing}
              />
              
              <InputField
                id="birthDate"
                label="Data de Nascimento"
                type="date"
                value={formData.birthDate}
                onChange={handleInputChange('birthDate')}
                icon={FiCalendar}
                disabled={!isEditing}
              />
            </div>
            
            <div className="space-y-6">
              <InputField
                id="address"
                label="Endereço"
                type="text"
                value={formData.address}
                onChange={handleInputChange('address')}
                placeholder="Rua, número, complemento"
                icon={FiMapPin}
                disabled={!isEditing}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  id="city"
                  label="Cidade"
                  type="text"
                  value={formData.city}
                  onChange={handleInputChange('city')}
                  placeholder="Sua cidade"
                  disabled={!isEditing}
                />
                
                <InputField
                  id="state"
                  label="Estado"
                  type="text"
                  value={formData.state}
                  onChange={handleInputChange('state')}
                  placeholder="UF"
                  disabled={!isEditing}
                />
              </div>
            </div>
          </form>
        </Card>

        {/* Card de Segurança */}
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-light-text mb-2">
                Segurança da Conta
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-text">
                Sua conta está protegida com criptografia de ponta a ponta.
              </p>
            </div>
            <div className="flex items-center text-green-600">
              <FiCheck className="w-5 h-5 mr-2" />
              <span className="font-medium">Protegida</span>
            </div>
          </div>
        </Card>

        {/* Notificação de Sucesso */}
        {showSuccess && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center animate-bounce">
            <FiCheck className="w-5 h-5 mr-2" />
            Dados salvos com sucesso!
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalData;

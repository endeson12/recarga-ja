import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiClock, FiZap } from 'react-icons/fi';
import Header from '../components/Header';

const PlaceholderPage = ({ title, description = "Esta seção está em desenvolvimento.", showFeatures = true }) => {
  const navigate = useNavigate();
  
  const features = [
    { icon: <FiZap className="w-6 h-6" />, text: "Funcionalidades avançadas" },
    { icon: <FiClock className="w-6 h-6" />, text: "Interface otimizada" },
    { icon: <FiZap className="w-6 h-6" />, text: "Experiência premium" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark-bg text-dark-text dark:text-light-text transition-colors duration-300">
      <Header title={title} showBackButton />
      
      <div className="px-4 py-6 max-w-4xl mx-auto">
        <div className="text-center py-20">
          <div className="inline-block p-6 bg-gradient-to-r from-primary-green to-green-600 rounded-full mb-6">
            <FiClock className="w-16 h-16 text-white" />
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 dark:text-light-text mb-4">
            Em Breve
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-text mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          
          {showFeatures && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg">
                  <div className="text-primary-green mb-3 flex justify-center">
                    {feature.icon}
                  </div>
                  <p className="text-gray-700 dark:text-gray-text font-medium">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          )}
          
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-6 py-3 bg-primary-green text-white rounded-xl font-semibold hover:bg-green-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <FiArrowLeft className="w-5 h-5 mr-2" />
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;

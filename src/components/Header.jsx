import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Header = ({ title, showBackButton = false, showProfile = true, showMenu = false }) => {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const handleProfile = () => {
    navigate('/perfil');
  };

  const toggleDarkMode = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    const root = window.document.documentElement;
    if (newTheme) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-gradient-to-r from-primary-green to-green-600 shadow-lg px-4 py-4 transition-all duration-300 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-3">
            {showBackButton && (
              <button
                onClick={handleBack}
                className="p-2 hover:bg-white/20 rounded-full transition-all duration-200 transform hover:scale-105"
              >
                <FiArrowLeft className="w-5 h-5 text-white" />
              </button>
            )}
            {showMenu && (
              <button
                onClick={toggleMenu}
                className="p-2 hover:bg-white/20 rounded-full transition-all duration-200 transform hover:scale-105 lg:hidden"
              >
                {isMenuOpen ? <FiX className="w-5 h-5 text-white" /> : <FiMenu className="w-5 h-5 text-white" />}
              </button>
            )}
            <h1 className="text-xl font-bold text-white drop-shadow-sm">{title}</h1>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 hover:bg-white/20 rounded-full transition-all duration-200 transform hover:scale-105"
            >
              {isDark ? <FiSun className="w-5 h-5 text-white" /> : <FiMoon className="w-5 h-5 text-white" />}
            </button>
            
            {showProfile && (
              <button
                onClick={handleProfile}
                className="p-2 hover:bg-white/20 rounded-full transition-all duration-200 transform hover:scale-105"
              >
                <FiUser className="w-5 h-5 text-white" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {showMenu && isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={toggleMenu}></div>
          <div className="fixed top-16 left-0 right-0 bg-white dark:bg-dark-card shadow-xl rounded-b-2xl mx-4 transform transition-all duration-300">
            <div className="p-6 space-y-4">
              <button
                onClick={() => { navigate('/dashboard'); toggleMenu(); }}
                className="w-full text-left p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-gray-900 dark:text-light-text font-medium">Dashboard</span>
              </button>
              <button
                onClick={() => { navigate('/recarregar'); toggleMenu(); }}
                className="w-full text-left p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-gray-900 dark:text-light-text font-medium">Recarregar</span>
              </button>
              <button
                onClick={() => { navigate('/extrato'); toggleMenu(); }}
                className="w-full text-left p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-gray-900 dark:text-light-text font-medium">Extrato</span>
              </button>
              <button
                onClick={() => { navigate('/relatorios'); toggleMenu(); }}
                className="w-full text-left p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-gray-900 dark:text-light-text font-medium">Relatórios</span>
              </button>
              <button
                onClick={() => { navigate('/perfil'); toggleMenu(); }}
                className="w-full text-left p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-gray-900 dark:text-light-text font-medium">Perfil</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
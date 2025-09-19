import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Previne o recarregamento da página
    // Lógica de login (aqui apenas simulamos)
    console.log('Email:', email);
    console.log('Password:', password);
    
    // Se o login for "bem-sucedido", navega para a dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-green via-green-600 to-green-700 flex flex-col justify-center items-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-4 md:left-20 w-64 md:w-96 h-64 md:h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-4 md:right-20 w-64 md:w-96 h-64 md:h-96 bg-white/5 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-60 md:w-80 h-60 md:h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-white/5 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse animation-delay-1000"></div>
      </div>
      
      {/* Main card */}
      <div className="w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-8 relative z-10 border border-white/30">
        {/* Header with icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-primary-green to-green-600 rounded-2xl mb-6 shadow-lg animate-float">
            <span className="text-2xl md:text-3xl font-bold text-white">R</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            RecargaJá
          </h1>
          <p className="text-gray-600 text-base md:text-lg">Acesse sua conta para continuar</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <InputField
            id="email"
            label="Email"
            type="email"
            placeholder="seuemail@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            id="password"
            label="Senha"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-primary-green hover:text-green-700 transition-colors duration-200 font-medium">
              Esqueceu sua senha?
            </a>
          </div>

          <Button type="submit" className="w-full bg-gradient-to-r from-primary-green to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg">
            Entrar
          </Button>

          <p className="text-center text-sm text-gray-600">
            Não tem uma conta?{' '}
            <a href="#" className="font-medium text-primary-green hover:text-green-700 transition-colors duration-200">
              Cadastre-se
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
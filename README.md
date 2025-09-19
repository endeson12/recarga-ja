# RecargaJá - Aplicativo de Recarga de Cartão de Transporte

Um aplicativo web moderno e responsivo para recarga de cartões de transporte público, desenvolvido com React.js e Tailwind CSS.

## 🚀 Funcionalidades

### ✅ Implementadas
- **Autenticação**: Tela de login com validação de formulário
- **Dashboard**: Visão geral dos cartões e atividades recentes
- **Recarga**: Sistema completo de recarga com seleção de cartão, valor e forma de pagamento
- **Extrato**: Histórico detalhado de transações com filtros
- **Perfil**: Gerenciamento de dados pessoais e configurações
- **Design Responsivo**: Interface otimizada para dispositivos móveis

### 🎨 Design System
- **Cores**: Paleta moderna com azul primário (#2563eb)
- **Tipografia**: Fontes Inter e Poppins
- **Componentes**: Sistema de componentes reutilizáveis
- **Animações**: Transições suaves e feedback visual

## 🛠️ Tecnologias Utilizadas

- **React.js 18** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework de estilização
- **React Router DOM** - Roteamento
- **React Icons** - Biblioteca de ícones
- **JavaScript ES6+** - Linguagem de programação

## 📁 Estrutura do Projeto

```
src/
├── assets/           # Imagens e recursos estáticos
├── components/       # Componentes reutilizáveis
│   ├── Header.jsx
│   ├── Button.jsx
│   ├── InputField.jsx
│   └── Card.jsx
├── pages/           # Páginas da aplicação
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Recharge.jsx
│   ├── RechargeSuccess.jsx
│   ├── Statement.jsx
│   └── Profile.jsx
├── data/            # Dados mockados
│   └── mock.js
├── App.jsx          # Componente principal com roteamento
├── main.jsx         # Ponto de entrada da aplicação
└── index.css        # Estilos globais e configuração do Tailwind
```

## 🚀 Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acessar a aplicação:**
   Abra [http://localhost:5173](http://localhost:5173) no seu navegador

## 📱 Páginas da Aplicação

### 1. Login (`/`)
- Formulário de autenticação com validação
- Campos de email e senha
- Links para recuperação de senha e criação de conta
- Redirecionamento automático para dashboard após login

### 2. Dashboard (`/dashboard`)
- Saudação personalizada com nome do usuário
- Carrossel de cartões de transporte
- Ações rápidas (Recarregar, Extrato, Gerenciar)
- Atividade recente com histórico de transações

### 3. Recarga (`/recarregar`)
- Seleção de cartão para recarga
- Valores pré-definidos (R$ 10, 20, 50, 100)
- Campo para valor personalizado
- Seleção de forma de pagamento
- Resumo da transação com cálculo do novo saldo

### 4. Sucesso da Recarga (`/recarga-sucesso`)
- Confirmação visual da recarga realizada
- Detalhes da transação
- Opções para voltar ao início ou fazer nova recarga

### 5. Extrato (`/extrato`)
- Resumo do período com totais
- Filtros por tipo de transação
- Ordenação por data ou valor
- Lista detalhada de todas as transações
- Opção de exportar dados

### 6. Perfil (`/perfil`)
- Informações do usuário
- Estatísticas de uso
- Menu de configurações
- Opções de segurança e privacidade

## 🎯 Componentes Reutilizáveis

### Header
- Título da página
- Botão de voltar opcional
- Ícone de perfil

### Button
- Múltiplos tipos (primário, secundário, outline, danger)
- Diferentes tamanhos
- Estados de loading e disabled

### InputField
- Label flutuante
- Validação de erro
- Suporte a diferentes tipos de input

### Card
- Container genérico com sombra
- Suporte a interação (onClick)
- Padding e estilos customizáveis

## 📊 Dados Mockados

O projeto inclui dados simulados para demonstração:
- **Usuário**: Jennifer (jennifer@email.com)
- **Cartões**: Bilhete Único e Cartão Metrô
- **Transações**: Histórico de recargas e usos
- **Formas de Pagamento**: PIX, Crédito, Débito

## 🔧 Configuração do Tailwind CSS

O projeto está configurado com:
- Fontes personalizadas (Inter, Poppins)
- Cores do tema (primary, background, card)
- Classes utilitárias customizadas
- Animações e transições

## 📱 Responsividade

- Design mobile-first
- Breakpoints otimizados para dispositivos móveis
- Interface adaptável para diferentes tamanhos de tela
- Navegação intuitiva com gestos touch

## 🎨 Design System

### Cores
- **Primária**: #2563eb (Azul moderno)
- **Fundo**: #f3f4f6 (Cinza claro)
- **Cards**: #ffffff (Branco)
- **Texto**: #1f2937 (Cinza escuro)

### Tipografia
- **Fonte Principal**: Inter
- **Fonte Secundária**: Poppins
- **Tamanhos**: sm, base, lg, xl, 2xl, 3xl

### Espaçamento
- **Padding**: 4, 6, 8, 12, 16, 20, 24
- **Margin**: 2, 3, 4, 6, 8, 12, 16
- **Gap**: 2, 3, 4, 6, 8, 12

## 🚀 Próximos Passos

- [ ] Integração com API real
- [ ] Sistema de autenticação completo
- [ ] Notificações push
- [ ] Modo offline
- [ ] Testes automatizados
- [ ] PWA (Progressive Web App)

## 📄 Licença

Este projeto foi desenvolvido como demonstração e está disponível para uso educacional.

---

**Desenvolvido com ❤️ para facilitar a mobilidade urbana**
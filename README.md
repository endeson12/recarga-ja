# RecargaJá

[![CI](https://github.com/endeson12/recarga-ja/actions/workflows/ci.yml/badge.svg)](https://github.com/endeson12/recarga-ja/actions/workflows/ci.yml)
[![React](https://img.shields.io/badge/React-19-149ECA?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev/)

Protótipo mobile-first de uma aplicação para recarga e acompanhamento de cartões de transporte. O projeto explora um fluxo completo de produto, da entrada do usuário à confirmação da recarga.

## Fluxos disponíveis

- login demonstrativo com validação de formulário;
- dashboard com cartões e atividades recentes;
- escolha de cartão, valor e forma de pagamento;
- confirmação visual da recarga;
- extrato com filtros e ordenação;
- perfil, dados pessoais, notificações e configurações;
- páginas de pagamentos, privacidade, relatórios, ajuda e suporte;
- navegação responsiva orientada a dispositivos móveis.

> Os dados, a autenticação e as transações são simulados no frontend. Nenhum pagamento real é processado.

## Estrutura

```text
src/
├── components/   # componentes reutilizáveis
├── data/         # dados locais de demonstração
├── pages/        # telas e fluxos da aplicação
├── App.jsx       # rotas
└── main.jsx      # inicialização
```

## Tecnologias

- React 19
- React Router 7
- Vite 7
- Tailwind CSS
- React Icons
- ESLint
- GitHub Actions

## Execução local

Requisitos: Node.js 20 ou superior.

```bash
git clone https://github.com/endeson12/recarga-ja.git
cd recarga-ja
npm ci
npm run dev
```

## Verificação

```bash
npm run lint
npm run build
```

A branch principal também passa por essas verificações no GitHub Actions.

## Decisões e limitações

- o uso de dados locais torna a demonstração independente de backend;
- o projeto não armazena credenciais nem dados financeiros reais;
- autenticação, pagamentos, notificações e exportações precisam de serviços externos para uso em produção;
- ainda não há suíte de testes automatizados no repositório.

## Próximas evoluções

- API e banco de dados;
- autenticação segura;
- integração com provedor de pagamentos;
- testes unitários e de fluxo;
- PWA e suporte offline.

## Licença

Projeto de demonstração para fins educacionais e de portfólio.

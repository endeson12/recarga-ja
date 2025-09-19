export const mockUser = {
  name: 'Jennifer',
  email: 'jennifer@email.com',
};

export const mockTransportCards = [
  { id: 1, name: 'Bilhete Único', number: '**** 1234', balance: 12.50 },
  { id: 2, name: 'Cartão Metrô', number: '**** 5678', balance: 45.00 },
];

export const mockRecentActivity = [
  { id: 1, type: 'Recarga', amount: 50.00, date: 'Hoje', time: '14:30', card: 'Bilhete Único' },
  { id: 2, type: 'Uso', amount: -4.40, date: 'Hoje', time: '08:15', card: 'Bilhete Único' },
  { id: 3, type: 'Uso', amount: -4.40, date: 'Ontem', time: '18:45', card: 'Cartão Metrô' },
  { id: 4, type: 'Recarga', amount: 20.00, date: 'Ontem', time: '16:20', card: 'Cartão Metrô' },
  { id: 5, type: 'Uso', amount: -4.40, date: 'Ontem', time: '07:30', card: 'Bilhete Único' },
];

export const mockPaymentMethods = [
  { id: 1, type: 'PIX', details: 'Chave principal', icon: 'pix' },
  { id: 2, type: 'Crédito', details: 'Mastercard **** 4321', icon: 'credit-card' },
  { id: 3, type: 'Débito', details: 'Visa **** 8765', icon: 'debit-card' },
];

export const mockStatement = [
  // Dados dos últimos 7 dias
  { id: 1, type: 'Recarga', amount: 50.00, date: new Date().toISOString().split('T')[0], time: '14:30', card: 'Bilhete Único', status: 'Concluída' },
  { id: 2, type: 'Uso', amount: -4.40, date: new Date().toISOString().split('T')[0], time: '08:15', card: 'Bilhete Único', status: 'Concluída' },
  { id: 3, type: 'Uso', amount: -4.40, date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '18:45', card: 'Cartão Metrô', status: 'Concluída' },
  { id: 4, type: 'Recarga', amount: 20.00, date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '16:20', card: 'Cartão Metrô', status: 'Concluída' },
  { id: 5, type: 'Uso', amount: -4.40, date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '07:30', card: 'Bilhete Único', status: 'Concluída' },
  { id: 6, type: 'Recarga', amount: 30.00, date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '12:00', card: 'Bilhete Único', status: 'Concluída' },
  { id: 7, type: 'Uso', amount: -4.40, date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '17:20', card: 'Cartão Metrô', status: 'Concluída' },
  { id: 8, type: 'Uso', amount: -4.40, date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '09:10', card: 'Bilhete Único', status: 'Concluída' },
  { id: 9, type: 'Recarga', amount: 25.00, date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '10:30', card: 'Bilhete Único', status: 'Concluída' },
  { id: 10, type: 'Uso', amount: -4.40, date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '16:45', card: 'Cartão Metrô', status: 'Concluída' },
  { id: 11, type: 'Uso', amount: -4.40, date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '08:20', card: 'Bilhete Único', status: 'Concluída' },
  { id: 12, type: 'Recarga', amount: 40.00, date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '14:15', card: 'Cartão Metrô', status: 'Concluída' },
  { id: 13, type: 'Uso', amount: -4.40, date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '19:30', card: 'Bilhete Único', status: 'Concluída' },
  { id: 14, type: 'Uso', amount: -4.40, date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '07:45', card: 'Cartão Metrô', status: 'Concluída' },
  { id: 15, type: 'Recarga', amount: 35.00, date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '11:20', card: 'Bilhete Único', status: 'Concluída' },
  
  // Dados dos últimos 30 dias
  { id: 16, type: 'Recarga', amount: 60.00, date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '15:30', card: 'Bilhete Único', status: 'Concluída' },
  { id: 17, type: 'Uso', amount: -4.40, date: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '09:15', card: 'Cartão Metrô', status: 'Concluída' },
  { id: 18, type: 'Recarga', amount: 45.00, date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '13:45', card: 'Bilhete Único', status: 'Concluída' },
  { id: 19, type: 'Uso', amount: -4.40, date: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '18:20', card: 'Cartão Metrô', status: 'Concluída' },
  { id: 20, type: 'Recarga', amount: 55.00, date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '16:10', card: 'Bilhete Único', status: 'Concluída' },
  { id: 21, type: 'Uso', amount: -4.40, date: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '08:30', card: 'Bilhete Único', status: 'Concluída' },
  { id: 22, type: 'Recarga', amount: 30.00, date: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '12:00', card: 'Cartão Metrô', status: 'Concluída' },
  { id: 23, type: 'Uso', amount: -4.40, date: new Date(Date.now() - 22 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '17:45', card: 'Bilhete Único', status: 'Concluída' },
  { id: 24, type: 'Recarga', amount: 40.00, date: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '14:20', card: 'Bilhete Único', status: 'Concluída' },
  { id: 25, type: 'Uso', amount: -4.40, date: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '09:00', card: 'Cartão Metrô', status: 'Concluída' },
  
  // Dados dos últimos 90 dias
  { id: 26, type: 'Recarga', amount: 70.00, date: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '11:30', card: 'Bilhete Único', status: 'Concluída' },
  { id: 27, type: 'Uso', amount: -4.40, date: new Date(Date.now() - 40 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '16:15', card: 'Cartão Metrô', status: 'Concluída' },
  { id: 28, type: 'Recarga', amount: 50.00, date: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '13:20', card: 'Bilhete Único', status: 'Concluída' },
  { id: 29, type: 'Uso', amount: -4.40, date: new Date(Date.now() - 50 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '08:45', card: 'Bilhete Único', status: 'Concluída' },
  { id: 30, type: 'Recarga', amount: 35.00, date: new Date(Date.now() - 55 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '15:40', card: 'Cartão Metrô', status: 'Concluída' },
  { id: 31, type: 'Uso', amount: -4.40, date: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '19:10', card: 'Bilhete Único', status: 'Concluída' },
  { id: 32, type: 'Recarga', amount: 65.00, date: new Date(Date.now() - 65 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '10:15', card: 'Bilhete Único', status: 'Concluída' },
  { id: 33, type: 'Uso', amount: -4.40, date: new Date(Date.now() - 70 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '17:30', card: 'Cartão Metrô', status: 'Concluída' },
  { id: 34, type: 'Recarga', amount: 45.00, date: new Date(Date.now() - 75 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '12:45', card: 'Bilhete Único', status: 'Concluída' },
  { id: 35, type: 'Uso', amount: -4.40, date: new Date(Date.now() - 80 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '08:20', card: 'Bilhete Único', status: 'Concluída' },
  
  // Dados do último ano
  { id: 36, type: 'Recarga', amount: 80.00, date: new Date(Date.now() - 100 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '14:00', card: 'Bilhete Único', status: 'Concluída' },
  { id: 37, type: 'Uso', amount: -4.40, date: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '18:30', card: 'Cartão Metrô', status: 'Concluída' },
  { id: 38, type: 'Recarga', amount: 55.00, date: new Date(Date.now() - 150 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '11:45', card: 'Bilhete Único', status: 'Concluída' },
  { id: 39, type: 'Uso', amount: -4.40, date: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '09:30', card: 'Bilhete Único', status: 'Concluída' },
  { id: 40, type: 'Recarga', amount: 90.00, date: new Date(Date.now() - 200 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '16:20', card: 'Cartão Metrô', status: 'Concluída' },
  { id: 41, type: 'Uso', amount: -4.40, date: new Date(Date.now() - 250 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '07:15', card: 'Bilhete Único', status: 'Concluída' },
  { id: 42, type: 'Recarga', amount: 75.00, date: new Date(Date.now() - 300 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '13:10', card: 'Bilhete Único', status: 'Concluída' },
  { id: 43, type: 'Uso', amount: -4.40, date: new Date(Date.now() - 350 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '19:45', card: 'Cartão Metrô', status: 'Concluída' },
  
  // Algumas transações com status diferentes
  { id: 44, type: 'Recarga', amount: 30.00, date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '10:00', card: 'Bilhete Único', status: 'Pendente' },
  { id: 45, type: 'Uso', amount: -4.40, date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '15:30', card: 'Cartão Metrô', status: 'Falhou' },
  { id: 46, type: 'Recarga', amount: 25.00, date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], time: '20:15', card: 'Bilhete Único', status: 'Pendente' },
];
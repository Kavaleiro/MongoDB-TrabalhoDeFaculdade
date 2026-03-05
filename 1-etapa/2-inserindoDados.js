//Inserindo os dados 

db.vendas.insertMany([
  {"nome":"João",
  "cliente_vip": 1,
  "email": "joao@email.com",
  "telefone": ["9999-1111", "8888-1111"]},
  
  {"nome": "Marcos",
  "cliente_vip": 0,
  "telefone": ["9999-2222"]},
  
  {"nome": "Maria",
  "cliente_vip": 1,
  "email": "maria@email.com",
  "telefone":["9999-3333", "8888-3333", "9988-3000"]}
])
// fazendo um update simples
db.vendas.updateOne(
  {nome: "João"},
  {$set: {
    endereco: {
      rua: "Rua Um",
      numero: 1000,
      complemento: "Apto 1 Bloco 1",
      cidade: "São Paulo",
      estado: "SP"}}})

db.vendas.updateOne(
  {nome: "Marcos"},
  {$set: {
    endereco: {
      rua: "Rua Dois",
      numero: 4000,
      complemento: null,
      cidade: "Campinas",
      estado: "SP"}}})
      
db.vendas.updateOne(
  {nome: "Maria"},
  {$set: {
    endereco: {
      rua: "Rua Três",
      numero: 3000,
      complemento: null,
      cidade: "Londrina",
      estado: "PR"}}})
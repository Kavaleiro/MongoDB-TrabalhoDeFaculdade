//Fazendo o update de Compras

db.vendas.bulkWrite([
  {updateOne:{
    filter: {nome: "João"},
    update: {$set: {
      compras:[
        {produto: "notebook", preco: 5000, quantidade: 1}]
    }}}},
  {updateOne:{
    filter: {nome: "Marcos"},
    update: {$set: {
      compras: [
        {produto: "Caderno", preco: 20, quantidade: 1},
        {produto: "Caneta", preco: 3, quantidade: 5},
        {produto: "Borracha", preco: 2, quantidade: 2}]
    }}}},
  {updateOne:{
    filter: {nome: "Maria"},
    update: {$set: {
      compras: [
        {produto: "Tablet", preco: 2500, quantidade: 1},
        {produto: "Capa para Tablet", preco: 50, quantidade: 1}]
    }}}}
])
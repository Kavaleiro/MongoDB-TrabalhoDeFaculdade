//Realizando consutlas
// 1 - Realize uma consulta que retorne todos os documentos da collection.
db.vendas.find().pretty()
// 2 - Realize uma consulta que localize as informações da cliente “Maria”
db.vendas.find({nome:"Maria"}).pretty()
//3 - Realize uma busca que retorna os clientes VIPs da loja (VIP = 1). Retorne apenas o campo
// “nome” de cada um
db.vendas.find({cliente_vip:{$eq: 1}}, {nome: 1, _id:0}).pretty()
//4 - Realize uma consulta que exiba as compras efetuadas por “Marcos”
db.vendas.find({nome:"Marcos"}, {compras:1, _id:0}).pretty()
//5 - Realize uma consulta que retorne todos os nomes de produtos comprados por todos osclientes.
//*Nesta consulta em específico, utilize a linha de comando do MongoDB. 
db.vendas.find({}, { "compras.produto": 1, _id: 0 }).pretty()
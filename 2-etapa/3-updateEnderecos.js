//Fazendo o Update de Endereco

db.vendas.bulkWrite([
    {updateOne:{
        filter: {nome: "João"},
        update: {$set: {
            endereco:
                {rua: "Rua Um", numero: 1000, complemento: "Apto 1 Bloco 1", cidade: "São Paulo", estado: "SP"}
        }}}},
    {updateOne:{
        filter: {nome: "Marcos"},
        update: {$set: {
            endereco:
                {rua: "Rua Dois", numero: 4000, cidade: "Campinas", estado: "SP"}
        }}}},
    {updateOne:{
        filter: {nome: "Maria"},
        update: {$set: {
            endereco:
                {rua: "Rua Três", numero: 3000, cidade: "Londrina", estado: "PR"}
                }}}}
])
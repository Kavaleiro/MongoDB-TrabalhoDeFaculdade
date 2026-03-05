//Criando um collection
db.createCollection("vendas", {
  validator:{
    $jsonSchema:{
      bsonType:"object",
      required:["nome", "cliente_vip", "telefone"],
      properties: {
        nome:{
          bsonType: "string",
          description: "Informe o nome do cliente corretamente."},
        cliente_vip:{
          enum: [0, 1],
          description: "1-SIM / 0-NÃO"},
        email: {
          bsonType: "string",
          pattern: "^.+@.+$",
          description:"Informe o seu e-mail"},
        telefone: {
          bsonType: "array",
          items:{bsonType: "string"},
          description: "Informe o seu número de telefone"}
      }
    }
  }
})
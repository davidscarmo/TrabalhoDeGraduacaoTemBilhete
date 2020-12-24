import Knex from "knex";

const db = Knex({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '*******',
      database : 'tem_bilhete'
    },
  });

  export default db;
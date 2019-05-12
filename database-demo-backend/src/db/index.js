import knex from "knex";

// LOCAL MSSQL DATABASE
// export default knex({
//   client: "mssql",
//   connection: {
//     host: "localhost",
//     user: "database-demo",
//     password: "ddd2019",
//     database: "TestDatabase",
//     port: 1433,
//     options: {
//       trustedConnection: true
//     },
//     useNullAsDefault: true
//   }
// });

////// ONLINE MYSQL DATABASE
export default knex({
  client: "mysql",
  connection: {
    host: "remotemysql.com",
    port: 3306,
    user: "jZasgJwrrP",
    password: "hYspoCK1wx",
    database: "jZasgJwrrP",
    debug: true
  },
  pool: {
    min: 0,
    max: 7
  }
});

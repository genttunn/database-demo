import knex from "knex";
////// ONLINE MYSQL DATABASE
const MYSQL_SETTINGS = {
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
};
// LOCAL MSSQL DATABASE
const MSSQL_SETTINGS = {
  client: "mssql",
  connection: {
    host: "localhost",
    user: "database-demo",
    password: "ddd2019",
    database: "TestDatabase",
    port: 1433,
    options: {
      trustedConnection: true
    },
    useNullAsDefault: true
  }
};

export default knex(MSSQL_SETTINGS);

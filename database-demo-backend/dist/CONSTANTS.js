"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DB_SETTINGS = exports.SERVER_SETTINGS = void 0;
// ------ Sample /src/CONSTANTS.js file ------- // /src/CONSTANTS.js
// The only place for back-end server and database settings
// SERVER_SETTINGS
// The only place for common server settings, including for CORS later
var SERVER_SETTINGS = {
  port: 8787,
  api_url_prefix: "/api"
}; // DB_SETTINGS
// The only place for common database settings

exports.SERVER_SETTINGS = SERVER_SETTINGS;
var DB_SETTINGS = {
  driverModule: "msql",
  host: "localhost",
  port: "1433",
  user: "database-demo",
  password: "ddd2019",
  database: "TestDatabase",
  multipleStatements: true,
  debug: true,
  connPoolMin: 0,
  connPoolMax: 7
}; // ------------------------------------------

exports.DB_SETTINGS = DB_SETTINGS;

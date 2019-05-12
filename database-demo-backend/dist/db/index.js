"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _knex = _interopRequireDefault(require("knex"));

var _CONSTANTS = require("../CONSTANTS");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// initiate knex with config
var _default = (0, _knex["default"])({
  client: 'mssql',
  connection: {
    host: 'localhost',
    user: 'database-demo',
    password: 'ddd2019',
    database: 'TestDatabase',
    port: 1433,
    options: {
      trustedConnection: true
    },
    useNullAsDefault: true
  }
}); // export default knex({
//   client: DB_SETTINGS.driverModule,
//   connection: {
//     host: DB_SETTINGS.host,
//     port: DB_SETTINGS.port,
//     user: DB_SETTINGS.user,
//     password: DB_SETTINGS.password,
//     database: DB_SETTINGS.database,
//     debug: DB_SETTINGS.debug
//   },
//   pool: {
//     min: DB_SETTINGS.connPoolMin,
//     max: DB_SETTINGS.connPoolMax,
//   }
// });


exports["default"] = _default;
// ------ Sample /src/CONSTANTS.js file ------- // /src/CONSTANTS.js

// The only place for back-end server and database settings

// SERVER_SETTINGS

// The only place for common server settings, including for CORS later

const SERVER_SETTINGS = {

    port: 8787,

    api_url_prefix: "/api",
};

// DB_SETTINGS

// The only place for common database settings

const DB_SETTINGS = {

    driverModule: "mssql",

    host: "localhost",

    port: "1433",

    user: "database-demo",

    password: 'ddd2019',

    database: "TestDatabase",

    multipleStatements: true,

    debug: true,

    connPoolMin: 0,

    connPoolMax: 7,
};

export {
    SERVER_SETTINGS,
    DB_SETTINGS
}; // ------------------------------------------
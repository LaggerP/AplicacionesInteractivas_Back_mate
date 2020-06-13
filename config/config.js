
const fs = require('fs');

module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'backendapi_development',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: null,
    database: 'backendAPI_test',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    port: process.env.PROD_DB_PORT,
    dialect: 'mysql',
    operatorsAliases: '0',
  },
  DEV_SECRET: 'secret-key',
  BCRYPT_ROUNDS: 10
};


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
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DBNAME,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'mysql',
    operatorsAliases: '0',
  },
  DEV_SECRET: 'secret-key',
  BCRYPT_ROUNDS: 10
};
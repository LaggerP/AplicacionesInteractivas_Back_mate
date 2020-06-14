
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
    //use_env_variable: process.env.DATABASE_URL,
    username: 'admin',
    password: "bAT-2j;T",
    database: 'apiuadeproduction',
    host: 'apiuadeproduction.czlcqcubu3e1.us-east-2.rds.amazonaws.com',
    port: 3306,
    dialect: 'mysql',
    operatorsAliases: '0',
  },
  DEV_SECRET: 'secret-key',
  BCRYPT_ROUNDS: 10
};

/*
mysql://admin:bAT-2j;T@apiuadeproduction.czlcqcubu3e1.us-east-2.rds.amazonaws.com:3306/apiuadeproduction?reconnect=true

mysql://admin:bAT-2j;T@apiuadeproduction.czlcqcubu3e1.us-east-2.rds.amazonaws.com:3306/apiuadeproduction

*/
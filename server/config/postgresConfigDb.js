module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_DEV,
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: 'Op',
    seederStorage: 'sequelize',
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_TEST,
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: 'Op',
    seederStorage: 'sequelize',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_PROD,
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: 'Op',
    seederStorage: 'sequelize',
  },
};

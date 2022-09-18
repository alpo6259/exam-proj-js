module.exports = {
  development: {
    database: process.env.MONGO_DB_NAME_DEV,
    host: 'localhost',
    port: 27017,
  },
  test: {
    database: process.env.MONGO_DB_NAME_TEST,
    host: 'localhost',
    port: 27017,
  },
  production: {
    database: process.env.MONGO_DB_NAME_PROD,
    host: 'localhost',
    port: 27017,
  },
};

export default {
  projectName: 'Koa2 Server + redis for shorten url',
  port: 3000,
  db: {
    host: 'localhost',
    dialect: 'sqlite',
    database: 'shortURL',
    storage: './shortUrl.sqlite',
    pool: {
      max: 50,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    define: {
      freezeTableName: true,
      underscored: false,
    },
    dialectOptions: {
      collate: 'utf8mb4_unicode_ci',
      useUTC: true,
    },
    logging: false,
  },
  redis: {
    host: 'localhost',
    port: 6379,
  },
  secret: 'my_koa_secret_string',
  commitId: '1001',
}

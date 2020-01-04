module.exports = {
  mongoURI: `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`,
  redisPort: process.env.REDIS_PORT,
  redisHost: process.env.REDIS_HOST
};

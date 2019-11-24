const mongoose = require("mongoose");
const redis = require("redis");
const util = require("util");
const keys = require("../config/keys");

const client = redis.createClient(keys.redisURI);
client.get = util.promisify(client.get);
const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = function(options = {}) {
  this.useCache = true;

  return this;
};

mongoose.Query.prototype.exec = async function() {
  if (!this.useCache) {
    return await exec.apply(this, arguments);
  }

  const key = JSON.stringify(
    Object.assign({}, this.getQuery(), {
      collection: this.mongooseCollection.name
    })
  );

  const cacheValue = await client.get(key);

  if (cacheValue) {
    const doc = JSON.parse(cacheValue);

    console.log("Response from Redis");
    return Array.isArray(doc)
      ? doc.map(d => new this.model(d))
      : new this.model(doc);
  }

  const result = await exec.apply(this, arguments);
  client.set(key, JSON.stringify(result), "EX", 120);

  console.log("Response from MongoDB");
  return result;
};

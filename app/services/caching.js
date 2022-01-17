const redis = require("redis");
const config = require("../config");
const client = redis.createClient(config.redisPort, config.redisPort);

// Connect to redis server
client.connect();

// Get data from redis server and return
const get = async (key) => {
  client.on("error", () => {
    console.log("Cashing service error :>> ", err);
  });

  const result = await client.get(key);

  return result;
};

// Set new value and cache new data
const set = async (key, value) => {
  client.on("error", () => {
    console.log("Cashing service error :>> ", err);
  });

  await client.set(key, JSON.stringify(value));

  return true;
};

module.exports = { get, set };

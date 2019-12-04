# node-redis-mongo

A simple example of an express server with mongo, mongoose and Redis

## Installation

Use the package manager [yarn](https://yarnpkg.com/en/) to install node-redis-mongo.

```bash
git clone https://github.com/haimrait/node-redis-mongo.git
cd node-redis-mongo
yarn install
```

## Prerun configuration
1. Make sure that you have a redis server and mongodb instances.
2. Navigate to node-redis-mongo/config/dev.js.
3. Change mongoURI to your instance uri.
4. Change redisURI to your instance uri.

## Run webserver
```bash
yarn start
```

## License
[MIT](https://choosealicense.com/licenses/mit/)

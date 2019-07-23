const env = require('../dotenv');

module.exports = {
    host: env.SERVER_HOST,
    port: env.SERVER_PORT,
};
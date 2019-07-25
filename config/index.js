const env = require('../dotenv');

module.exports = {
    "development": {
        "username": env.MYSQL_USERNAME,
        "password": env.MYSQL_PASSWORD,
        "database": env.MYSQL_DB_NAME,
        "host": env.MYSQL_HOST,
        "port": env.MYSQL_PROT,
        "dialect": "mysql",
    },
    "production": {
        "username": env.MYSQL_USERNAME,
        "password": env.MYSQL_PASSWORD,
        "database": env.MYSQL_DB_NAME,
        "host": env.MYSQL_HOST,
        "port": env.MYSQL_PROT,
        "dialect": "mysql",
    }
};
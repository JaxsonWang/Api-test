const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'production') {
    dotenv.config('.env.prod'); // 生产环境
} else {
    dotenv.config('.env'); // 开发环境
}

const { env } = process;

module.exports = env;
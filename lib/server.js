'use strict';

const Hapi = require('@hapi/hapi');
const hapiAuthJWT2 = require('hapi-auth-jwt2');

// 引入路由
const routesHelloHapi = require('../routes/hello-hapi');
const routesUsers = require('../routes/users');

// 引入自定义的 hapi-swagger 插件配置
const pluginHapiSwagger = require('../plugins/hapi-swagger');
// 引入自定义的 hapi-pagination 插件配置
const pluginHapiPagination = require('../plugins/hapi-pagination');
// 引入自定义的 hapi-auth-jwt2 插件配置
const pluginHapiAuthJWT2 = require('../plugins/hapi-auth-jwt2');
// 引入自定义的 hapi-good 插件配置
const pluginHapiGood = require('../plugins/hapi-good');

// 载入环境配置文件
const env = require('../dotenv');

const server = Hapi.server({
    port: env.SERVER_PORT,
    host: env.SERVER_HOST
});

exports.init = async () => {
    // 注册插件
    await server.register([
        // 为系统使用 hapi-swagger
        ...pluginHapiSwagger,
        // 为系统使用 hapi-pagination
        pluginHapiPagination,
        // 为系统使用 hapi-good
        pluginHapiGood,
        // 为系统使用 hapi-auth-jwt2
        hapiAuthJWT2,
    ]);

    // 载入身份验证插件
    pluginHapiAuthJWT2(server);

    await server.route([
        ...routesHelloHapi,
        ...routesUsers,
    ]);

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);

    return server;
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
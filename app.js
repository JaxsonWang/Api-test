const Hapi = require('@hapi/hapi');
const dotenv = require('dotenv');

// 引入路由
const routesHelloHapi = require('./routes/hello-hapi');
const routesUsers = require('./routes/users');
const routesTodos = require('./routes/todos');

// 引入自定义的 hapi-swagger 插件配置
const pluginHapiSwagger = require('./plugins/hapi-swagger');

// 载入环境配置文件
const config = require('config');

const init = async () => {

    const server = Hapi.server({
        port: config.port,
        host: config.host
    });

    // 注册插件
    await server.register([
        // 为系统使用 hapi-swagger
        ...pluginHapiSwagger,
    ]);

    server.route([
        ...routesHelloHapi,
        ...routesUsers,
        ...routesTodos
    ]);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
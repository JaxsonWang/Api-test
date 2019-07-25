const {jwtHeaderDefine} = require('../utils/router-helper');

module.exports = [
  {
    method: 'GET',
    path: '/',
    options: {
      handler: (request, h) => {
        return {'message': 'hello hapi'};
      },
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/restricted',
    options: {
      handler: (request, h) => {
        const response = h.response({
          message: '您使用有效的JWT令牌来访问限制接口！'
        });
        response.header("Authorization", request.headers.authorization);
        console.log('输出信息：', request.auth.credentials); // 控制台输出 { userId: 1}
        return 'hello hapi';
      },
      auth: 'jwt',
      description: '用于测试的用户 JWT 签发',
      notes: '这是用于测试的用户 JWT 签发信息展示笔记',
      tags: ['api', 'test'],
      validate: {
        ...jwtHeaderDefine, // 增加需要 jwt auth 认证的接口 header 校验
      }
    },
  },
];

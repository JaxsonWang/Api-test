const JWT = require('jsonwebtoken');
const env = require('../dotenv');

const secret = env.JWT_SECRET;

const people = {
  1: {
    id: 1,
    name: 'Anthony Valid User'
  }
};

// 添加 'authorization' 请求头
const token = JWT.sign(people[1], secret); // synchronous
console.log(token);
// 验证
const validate = async function (decoded, request, h) {
  console.log(" - - - - - - - 解密 token:");
  console.log(decoded);
  console.log(" - - - - - - - 请求信息:");
  console.log(request.info);
  console.log(" - - - - - - - 用户代理:");
  console.log(request.headers['user-agent']);

  // 验证数字是否有效
  if (!people[decoded.id]) {
    return {isValid: false};
  } else {
    return {isValid: true};
  }
};


module.exports = (server) => {
  server.auth.strategy('jwt', 'jwt', {
    key: secret,
    validate,
    verifyOptions: {ignoreExpiration: true}
  });
  server.auth.default('jwt');
};

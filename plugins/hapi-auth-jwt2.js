const env = require('../dotenv');

const validate = async (decoded, request, h) => {
  let error;
  /*
    接口 POST /users/createJWT 中的 jwt 签发规则

    const payload = {
      userId: jwtInfo.userId,
      exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60,
    };
    return JWT.sign(payload, process.env.JWT_SECRET);
  */

  // decoded 为 JWT payload 被解码后的数据
  const {userId} = decoded;

  if (!userId) {
    return callback(error, false, userId);
  }

  // 验证数字是否有效
  if (!userId) {
    return {isValid: false};
  } else {
    return {isValid: true};
  }
};

module.exports = (server) => {
  server.auth.strategy('jwt', 'jwt', {
    key: env.JWT_SECRET,
    validate,
    verifyOptions: {ignoreExpiration: true}
  });
  server.auth.default('jwt');
};

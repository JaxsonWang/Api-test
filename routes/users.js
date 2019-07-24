const Joi = require('@hapi/joi');
const JWT = require('jsonwebtoken');
const models = require('../models');
const { paginationDefine } = require('../utils/router-helper');
const env = require('../dotenv');


const GROUP_NAME = 'users';

module.exports = [
    {
        method: 'GET',
        path: `/${GROUP_NAME}`,
        options: {
            handler: async (request, h) => {
                const { rows: results, count: totalCount } = await models.users.findAndCountAll({
                    attributes: [
                        'id', 'name', 'avatar'
                    ],
                    limit: request.query.libraries,
                    offset: (request.query.page - 1) * request.query.limit,
                });

                return {results, totalCount}
            },
            auth: false,
            description: '获取用户列表',
            notes: '这是获取用户列表信息展示笔记',
            tags: ['api', GROUP_NAME],
            validate: {
                query: {
                    ...paginationDefine
                }
            }
        },
    },
    {
        method: 'GET',
        path: `/${GROUP_NAME}/{userId}/todos`,
        options: {
            handler: async (request, h) => {
                const { rows: results, count: totalCount } = await models.todos.findAndCountAll({
                    // 基于 user_id 的条件查询
                    where: {
                        user_id: request.params.userId
                    },
                    attributes: [
                        'id', 'content', 'is_complete', 'created_at'
                    ],
                    limit: request.query.libraries,
                    offset: (request.query.page - 1) * request.query.limit,
                });

                return {results, totalCount}
            },
            auth: false,
            description: '获取某个用户事项清单列表',
            notes: '这是获取某个用户事项清单列表信息展示笔记',
            tags: ['api', GROUP_NAME],
            validate: {
                params: {
                    userId: Joi.number().integer().required().description('用户id'),
                },
                query: {
                    ...paginationDefine
                }
            }
        },
    },
    {
        method: 'post',
        path: `/${GROUP_NAME}/createJWT`,
        options: {
            handler: async (request, h) => {
                const generateJWT = (jwtInfo) => {
                    const payload = {
                        userId: jwtInfo.userId,
                        exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60,
                    };
                    return JWT.sign(payload, env.JWT_SECRET);
                };
                return generateJWT({
                    userId: 1,
                })
            },
            auth: false, // 约定此接口不参与 JWT 的用户验证，会结合下面的 hapi-auth-jwt 来使用
            description: '用于测试的用户 JWT 签发',
            notes: '这是用于测试的用户 JWT 签发信息展示笔记',
            tags: ['api', 'test'],
        },
    },
];
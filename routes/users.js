const Joi = require('@hapi/joi');

const GROUP_NAME = 'users';

module.exports = [
    {
        method: 'GET',
        path: `/${GROUP_NAME}`,
        options: {
            handler: async (request, h) => {
                return 'yong';
            },
            description: '获取用户列表',
            notes: '这是获取用户列表信息展示笔记',
            tags: ['api', GROUP_NAME]
        },
    },
    {
        method: 'GET',
        path: `/${GROUP_NAME}/{userId}/info`,
        options: {
            handler: async (request, h) => {
                return '';
            },
            description: '获取某个用户基本信息',
            notes: '注意事项笔记说明',
            tags: ['api', GROUP_NAME],
            validate: {
                params: {
                    userId: Joi.number().required().description('用户id'),
                }
            }
        },
    },
];
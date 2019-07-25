const Joi = require('@hapi/joi');

const GROUP_NAME = 'todos';

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}`,
    options: {
      handler: async (request, h) => {
        return '';
      },
      description: '获取事项清单列表',
      notes: '这是获取事项清单列表信息展示笔记',
      tags: ['api', GROUP_NAME]
    },
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{todo}/info`,
    options: {
      handler: async (request, h) => {
        return '';
      },
      description: '获取某个事项清单基本信息',
      notes: '注意事项笔记说明',
      tags: ['api', GROUP_NAME],
      validate: {
        params: {
          userId: Joi.number().required().description('事项清单id'),
        }
      }
    },
  },
];

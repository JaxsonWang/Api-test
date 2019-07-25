const hapiPagination = require('hapi-pagination');

const options = {
  query: {
    // 按页面划分的资源数量。默认值为25，默认名称为limit
    limit: {
      name: 'limit',
      default: 25
    },
    // 将返回的页面数。默认值为1，默认名称为page
    page: {
      name: 'page',
      default: 1
    },
    // 是否开启分页功能，默认 true
    pagination: {
      name: 'pagination',
      default: true,
      active: true
    },
    // 无效返回结果
    invalid: 'defaults',
  },
  meta: {
    name: 'meta',
    // ... 此处篇幅考虑省略 meta 的相关配置代码，参看章节  github 案例
  },
  results: {
    name: 'results'
  },
  reply: {
    paginate: 'paginate'
  },
  routes: {
    include: [
      '/users',  // 用户列表支持分页特性
      '/users/{user_id}/todos',
    ],
    exclude: []
  }
};

module.exports = {
  plugin: hapiPagination,
  options: options,
};

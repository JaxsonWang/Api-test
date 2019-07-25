const hapiGood = require('@hapi/good');

const options = {
  ops: {
    interval: 1000
  },
  reporters: {
    myConsoleReporter: [
      {
        module: '@hapi/good-squeeze',
        name: 'Squeeze',
        args: [{log: '*', response: '*'}]
      },
      {
        module: '@hapi/good-console'
      },
      'stdout'
    ]
  }
};

module.exports = {
  plugin: hapiGood,
  options: options,
};

'use strict';

const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('users', [
      {
        name: '小王',
        avatar: 'https://cdn.iiong.com/201810/myheader.jpg',
        ...timestamps
      },
      {
        name: '小王',
        avatar: 'https://cdn.iiong.com/201810/myheader.jpg',
        ...timestamps
      },
      {
        name: '小王',
        avatar: 'https://cdn.iiong.com/201810/myheader.jpg',
        ...timestamps
      },
      {
        name: '小王',
        avatar: 'https://cdn.iiong.com/201810/myheader.jpg',
        ...timestamps
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('users', null, {});
  }
};

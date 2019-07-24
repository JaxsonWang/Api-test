module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('todos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: '主键',
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '事项清单内容描述',
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '关联 users 表用户id',
      },
      is_complete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        comment: '是否已经完成事项清单',
      },
      created_at: {
        type: Sequelize.DATE,
        comment: '事项清单创建时间',
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('todos');
  }
};
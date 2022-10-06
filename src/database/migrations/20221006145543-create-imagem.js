'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('imagem', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      filename: {
        type: Sequelize.STRING
      },
      path: {
        type: Sequelize.STRING
      },
      mimetype: {
        type: Sequelize.STRING
      },
      sorteioId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'sorteio',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('imagem');
  }
};
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sorteio', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.DATE
      },
      premio: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.STRING
      },
      ganhador: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cliente',
          key: 'id'
        }
      },
      valorBilhete: {
        type: Sequelize.INTEGER
      },
      totalBilhetes: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('sorteio');
  }
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Imagem extends Model {
    static associate(models) {
      Imagem.belongsTo(models.Sorteio, { foreignKey: "sorteioId" });
    }
  }
  Imagem.init({
    filename: DataTypes.STRING,
    path: DataTypes.STRING,
    mimetype: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Imagem',
    tableName: 'imagem',
  });
  return Imagem;
};
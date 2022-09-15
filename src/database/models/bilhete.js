"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bilhete extends Model {
    static associate(models) {
      Bilhete.belongsTo(models.Sorteio, { foreignKey: "sorteioId" });
      Bilhete.belongsTo(models.Cliente, { foreignKey: "comprador" });
    }
  }
  Bilhete.init(
    {
      numero: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Bilhete",
      tableName: 'bilhete',
    }
  );
  return Bilhete;
};

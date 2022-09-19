"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sorteio extends Model {
    static associate(models) {
      Sorteio.belongsTo(models.Cliente, { foreignKey: "ganhador" });
      //Sorteio.hasOne(models.Bilhete, { foreignKey: "sorteioId" });
    }
  }
  Sorteio.init(
    {
      titulo: DataTypes.STRING,
      descricao: DataTypes.STRING,
      data: DataTypes.DATE,
      premio: DataTypes.STRING,
      foto: DataTypes.STRING,
      valorBilhete: DataTypes.DECIMAL(20, 2),
      totalBilhetes: DataTypes.INTEGER,
      status: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Sorteio",
      tableName: 'sorteio',
    }
  );
  return Sorteio;
};

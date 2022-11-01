"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      //Cliente.hasOne(models.Sorteio, { foreignKey: "ganhador" });
      //Cliente.hasOne(models.Bilhete, { foreignKey: "comprador" });
    }
  }
  Cliente.init(
    {
      nome: DataTypes.STRING,
      sobrenome: DataTypes.STRING,
      cpf: DataTypes.STRING,
      email: DataTypes.STRING,
      telefone: DataTypes.STRING,
      senha: DataTypes.STRING,
      endereco: DataTypes.STRING,
      numeroEndereco: DataTypes.STRING,
      bairro: DataTypes.STRING,
      complemento: DataTypes.STRING,
      cidade: DataTypes.STRING,
      uf: DataTypes.STRING,
      cep: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cliente",
      tableName: 'cliente',
    }
  );
  return Cliente;
};

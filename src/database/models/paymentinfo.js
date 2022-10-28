'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentInfo extends Model {
    static associate(models) {
      // define association here
    }
  }
  PaymentInfo.init({
    paymentMethod: DataTypes.STRING,
    pixType: DataTypes.STRING,
    paymentNumber: DataTypes.STRING,
    owner: DataTypes.STRING,
    bank: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PaymentInfo',
    tableName: 'paymentinfo',
  });
  return PaymentInfo;
};
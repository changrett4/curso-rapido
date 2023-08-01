'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Purchase_orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Purchase_orders.init({
    request_date: DataTypes.DATE,
    delivery_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Purchase_orders',
  });
  return Purchase_orders;
};
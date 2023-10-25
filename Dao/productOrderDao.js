const ProductOrder = require("../models/productOrder");

class ProductOrderdao {
  constructor() {}

  find = async (filter = {}) => {
    return new Promise((resolve, reject) => {
      ProductOrder.find(filter)
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  };

  create = async (data) => {
    try {
      const newProductOrder = new ProductOrder(data);
      await newProductOrder.save();
      return newProductOrder;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = ProductOrderdao;

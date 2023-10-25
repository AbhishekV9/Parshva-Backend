const Supplier = require("../models/supplier");

class SupplierDao {
  constructor() {}

  findOne = async (filter = {}) => {
    return new Promise((resolve, reject) => {
      Supplier.findOne(filter)
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  };

  findMany = async (filter = {}) => {
    return new Promise((resolve, reject) => {
      Supplier.find(filter)
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  };

  create = async (data) => {
    try {
      const newSupplier = new Supplier(data);
      await newSupplier.save();
      return newSupplier;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = SupplierDao;

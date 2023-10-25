const Docket = require("../models/docket");

class DocketDao {
  constructor() {}

  findMany = async (filter = {}) => {
    return new Promise((resolve, reject) => {
      Docket.aggregate([
        { $match: filter },
        {
          $lookup: {
            from: "suppliers",
            localField: "supplierName",
            foreignField: "_id",
            as: "supplierDetails",
          },
        },
        {
          $lookup: {
            from: "productorders",
            localField: "purchaseOrder",
            foreignField: "_id",
            as: "purchaseOrderDetails",
          },
        },
        {
          $project: {
            supplierName: { $arrayElemAt: ["$supplierDetails", 0] },
            purchaseOrder: { $arrayElemAt: ["$purchaseOrderDetails", 0] },
            name: 1,
            startTime: 1,
            endTime: 1,
            workedHours: 1,
            ratePerHours: 1,
          },
        },
      ])
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  };

  create = async (data) => {
    try {
      const newDocket = new Docket(data);
      await newDocket.save();
      return newDocket;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = DocketDao;

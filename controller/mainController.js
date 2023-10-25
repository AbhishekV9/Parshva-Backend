const SupplierDao = require("../Dao/supplierDao");
const ProductOrderdao = require("../Dao/productOrderDao");
const DocketDao = require("../Dao/docketDao");

const supplierDao = new SupplierDao();
const productOrderdao = new ProductOrderdao();
const docketDao = new DocketDao();

async function getSuppliers(req, res) {
  try {
    const suppliers = await supplierDao.findMany();
    return res.status(200).send(suppliers);
  } catch (error) {
    return res.status(500).send(error);
  }
}

async function getProductOrders(req, res) {
  try {
    const supplierId = req.params.id;
    const productOrders = await productOrderdao.find({ supplier: supplierId });
    return res.status(200).send(productOrders);
  } catch (error) {
    return res.status(500).send(error);
  }
}

async function createDocket(req, res) {
  try {
    const { body } = req;
    const response = await docketDao.create(body);
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
}

async function getAllDockets(req, res) {
  try {
    const dockets = await docketDao.findMany();
    return res.status(200).send(dockets);
  } catch (error) {
    return res.status(500).send(error);
  }
}

module.exports = {
  getSuppliers,
  getProductOrders,
  createDocket,
  getAllDockets,
};

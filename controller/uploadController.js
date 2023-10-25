const Excel = require("exceljs");
const { uploadFileHandler } = require("../commonFiles/common");
const ProductOrderdao = require("../Dao/productOrderDao");
const SupplierDao = require("../Dao/supplierDao");

const productOrderDao = new ProductOrderdao();
const supplierDao = new SupplierDao();

const uploadFile = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      throw res.status(400).send("Please Provide File");
    }
    const wb = new Excel.Workbook();
    await wb.xlsx.load(file.buffer);
    const ws = wb.getWorksheet("Base Currency (AUD)");
    let poNumber = "";
    let supplier = "";
    let supplierId = "";
    for (const row of ws.getRows(2, ws.actualRowCount - 1).values()) {
      const currentPoNumber = row.getCell(4).value;
      const currentSupplier = row.getCell(12).value;
      const productDesciption = row.getCell(16).value;
      if (!currentSupplier) {
        row.getCell(4).value = poNumber;
        row.getCell(12).value = supplier;
        await productOrderDao.create({
          orderNumber: poNumber,
          description: productDesciption,
          supplier: supplierId,
        });
      } else {
        poNumber = currentPoNumber;
        supplier = currentSupplier;
        let supplierDetails = await supplierDao.findOne({
          name: currentSupplier,
        });
        if (!supplierDetails) {
          supplierDetails = await supplierDao.create({
            supplierName: currentSupplier,
          });
        }
        supplierId = supplierDetails._id;
        await productOrderDao.create({
          orderNumber: poNumber,
          description: productDesciption,
          supplier: supplierId,
        });
      }
    }
    const buffer = await wb.xlsx.writeBuffer();
    const response = await uploadFileHandler(file, buffer);
    return res.status(200).send(response);
  } catch (error) {
    console.log("error", error);
  }
};
module.exports = {
  uploadFile,
};

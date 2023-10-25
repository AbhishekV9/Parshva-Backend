const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  supplierName: { type: String, required: true },
});

const Supplier = mongoose.model("Supplier", supplierSchema);
module.exports = Supplier;

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productOrderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  supplier: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Supplier",
  },
});

const ProductOrder = mongoose.model("ProductOrder", productOrderSchema);
module.exports = ProductOrder;

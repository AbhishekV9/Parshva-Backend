const mongoose = require("mongoose");

const docketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  workedHours: {
    type: Number,
    required: true,
  },
  ratePerHours: {
    type: Number,
    required: true,
  },
  supplierName: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  purchaseOrder: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const Docket = mongoose.model("Docket", docketSchema);

module.exports = Docket;

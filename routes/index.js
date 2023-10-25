const express = require("express");
const multer = require("multer");

const { uploadFile } = require("../controller/uploadController");
const {
  getSuppliers,
  getProductOrders,
  createDocket,
  getAllDockets,
} = require("../controller/mainController");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.post("/uplaodFle", upload.single("file"), uploadFile);
router.get("/suplliers", getSuppliers);
router.get("/productOrders/:id", getProductOrders);
router.post("/createDocket", createDocket);
router.get("/getDockets", getAllDockets);

module.exports = router;

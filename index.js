const routes = require("./routes");
const express = require("express");
const cors = require("cors");
const db = require("./configuration/mongoose");
const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", routes);

app.listen(port, () => {
  console.log(`server is up in port=${port}`);
});

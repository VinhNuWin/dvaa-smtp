require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const childrenEmail = require("./utils/childrenEmail");
const spouseEmail = require("./utils/spouseEmail");
const elderlyEmail = require("./utils/elderlyEmail");
const employeeEmail = require("./utils/employeeEmail");
const assaultEmail = require("./utils/assaultEmail");
const generalEmail = require("./utils/generalEmail");
const contactEmail = require("./utils/contactEmail");

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use("/employee", employeeEmail);
app.use("/children", childrenEmail);
app.use("/spouse", spouseEmail);
app.use("/elderly", elderlyEmail);
app.use("/assault", assaultEmail);
app.use("/general", generalEmail);
app.use("/contact", contactEmail);

// Route
app.get("/", (req, res) => {
  res.send("Home Page");
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`App listening to port ${PORT}`);
});

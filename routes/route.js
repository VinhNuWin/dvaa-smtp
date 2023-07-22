const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const { employeeEmail } = require("../utils/employeeEmail.js");
const { generalEmail } = require("../utils/generalEmail.js");
const { elderlyEmail } = require("../utils/elderlyEmail.js");
const { childrenEmail } = require("../utils/childrenEmail.js");
const { spouseEmail } = require("../utils/spouseEmail.js");
const { assaultEmail } = require("../utils/assaultEmail.js");

router.post("/employee", employeeEmail);
router.post("/general", generalEmail);
router.post("/elderly", elderlyEmail);
router.post("/children", childrenEmail);
router.post("/spouse", spouseEmail);
router.post("/assault", assaultEmail);

module.exports = router;

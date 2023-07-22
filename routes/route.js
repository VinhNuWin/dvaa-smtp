const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const { employeeEmail } = require('../utils/employeeEmail.js');

router.post('/employee', employeeEmail);
// router.post('/employee', (req, res) => {});

module.exports = router;
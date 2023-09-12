const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const nodemailer = require("nodemailer");

const contactEmail = (req, res) => {
  const output =
    "Hello! Happy to be connected with you. What project are you wanting to work on? My expertise lies in Website Development, 3D animation, and Virtual Reality. If you are looking to create something entirely new(my favorite), lets get on a call and chat. Contact me at (714) 707-9279 and we can talk more. Cheers! - Vinh Nuwin";

  res.status(200).json();

  const transporter = nodemailer.createTransport({
    host: "smtppro.zoho.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: '"Vinh Nuwin" <info@documentedvoices.org>',
    to: [req.body.email, "Vinhnuwin@protonmail.com"],
    subject: "Thanks for reaching out!",
    text: "Contacted",
    html: output,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
};

module.exports = contactEmail;

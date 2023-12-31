const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const elderlyEmail = (req, res) => {
  const output = `<!doctype html>
<html lang="en-US"> 

<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>Appointment Reminder Email Template</title>
    <meta name="description" content="Documented Voices Registry Report">
</head>
<style>
    a:hover {text-decoration: underline !important;}
</style>

<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
    <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
        style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
        <tr>
            <td>
                <table style="background-color: #f2f3f8; max-width:670px; margin:0 auto;" width="100%" border="0"
                    align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                    <!-- Logo -->
                                <tr>
                                    <td style="padding:0 15px; text-align:center;">
                                        <h1 style="color:#1e1e2d; font-weight:200; margin:0;font-size:24px;font-family:'Rubik',sans-serif;">Documented Voices</h1>
                                        <span style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; 
                                        width:100px;"></span>
                                    </td>
                                </tr>
                    <tr>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <!-- Email Content -->
                    <tr>
                        <td>
                            <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                style="max-width:670px; background:#fff; border-radius:3px;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);padding:0 40px;">
                                <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                                <!-- Title -->
                                <tr>
                                    <td style="padding:0 15px; text-align:center;">
                                        <h1 style="color:#1e1e2d; font-weight:400; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">Registry Report</h1>
                                        <span style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; 
                                        width:100px;"></span>
                                    </td>
                                </tr>
                                <!-- Details Table -->
                                <tr>
                                    <td>
                                        <table cellpadding="0" cellspacing="0"
                                            style="width: 100%; border: 1px solid #ededed">
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)">
                                                        registry ID:</td>
                                                    <td
                                                        style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">
                                                        ${req.body.registryReport.registryId}</td>
                                                </tr>
                                                <tr>
                                                <td
                                                    style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)">
                                                    Reported by:</td>
                                                <td
                                                    style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">
                                                    ${req.body.email}</td>
                                            </tr>
                                            <tr>
                                            <td
                                                style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)">
                                                Registry:</td>
                                            <td
                                                style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">
                                                ${req.body.registryReport.registryType}</td>
                                        </tr>
                                        <tr>
                                        <td
                                            style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)">
                                            Incident Date:</td>
                                        <td
                                            style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">
                                            ${req.body.registryReport.date}</td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)">
                                            Reported By:</td>
                                        <td
                                            style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">
                                            ${req.body.registryReport.fullName}</td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)">
                                            Incident Location:</td>
                                        <td
                                            style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">
                                            ${req.body.registryReport.incidentAddress.streetAddress}
                                            ${req.body.registryReport.incidentAddress.city}
                                            ${req.body.registryReport.incidentAddress.state}
                                            ${req.body.registryReport.incidentAddress.zipcode}                                            
                                            </td>
                                    </tr>
                                    <tr>                                    
                                    <tr>
                                        <td
                                            style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)">
                                            Incident Details:</td>
                                        <td
                                            style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">
                                            ${req.body.registryReport.detailsOfIncident}</td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)">
                                            Assailants:</td>
                                        <td
                                            style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">
                                            ${req.body.registryReport.peopleInvolved}</td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)">
                                            Relationship:</td>
                                        <td
                                            style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">
                                            ${req.body.registryReport.relationToReporter}</td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)">
                                            Additional Incidents:</td>
                                        <td
                                            style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">
                                            ${req.body.registryReport.additionalIncidentsOfAbuse}</td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)">
                                            Incident Concerns</td>
                                        <td
                                            style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">
                                            ${req.body.registryReport.concerningThreatsOrActions}</td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)">
                                            Witnesses:</td>
                                        <td
                                            style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">
                                            ${req.body.registryReport.witnesses}</td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)">
                                            Evidence:</td>
                                        <td
                                            style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">
                                            ${req.body.registryReport.evidence}</td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)">
                                            Additional Victims:</td>
                                        <td
                                            style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">
                                            ${req.body.registryReport.otherPeopleAtRisk}</td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)">
                                            Current Situation Safe:</td>
                                        <td
                                            style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">
                                            ${req.body.registryReport.currentLivingSituationSafe}</td>
                                    </tr>


                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                                <p style="font-size:14px; color:#455056bd; line-height:18px; margin:0 0 0;">&copy; <strong>www.documentedvoices.org</strong></p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>`;

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
    from: '"Documented Voices" <info@documentedvoices.org>',
    to: req.body.email,
    subject: "Your Voice has been successfully Documented",
    text: "Reported",
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

module.exports = elderlyEmail;

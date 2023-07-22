require('dotenv').config();
// dotenv.config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
// const sendEmail = require('./utils/sendEmail');
// const appRoute = require('./routes/route.js');
// const childrenEmail = require('./utils/childrenEmail');
// const spouseEmail = require('./utils/spouseEmail');
// const elderlyEmail = require('./utils/elderlyEmail');
const employeeEmail = require('./utils/employeeEmail');
// const assaultEmail = require('./utils/assaultEmail');
// const generalEmail = require('./utils/generalEmail');


// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use('/employee', employeeEmail);
// app.use('/children', childrenEmail);
// app.use('/spouse', spouseEmail);
// app.use('/elderly', elderlyEmail);
// app.use('/assault', assaultEmail);
// app.use('/general', generalEmail);

// Route
app.get('/', (req, res) => {
    res.send("Home Page");
});

// app.use('/api', appRoute);





// const transporter = nodemailer.createTransport({
//   host: "smtppro.zoho.com",
//   port: 587,
//   secure: false,
//   auth: {
//     // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//     user: process.env.USER,
//     pass: process.env.PASS,
//   },
//   tls:{
//     rejectUnauthorized: false
//   }
// });



// let mailOptions = {
//     from: '"Documented Voices" <info@documentedvoices.org>',
//     to: {email},
//     subject: "Your Documented Voice has been successfully reported",
//     text:'Hello world?',
//     html: output,
//  };
// };

// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log("Message sent: %s", info.messageId);
//     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

// })



const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`App listening to port ${PORT}`);
});





  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //


// const dotenv = require('dotenv').config();
// // dotenv.config();
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// const sendEmail = require('./utils/sendEmail');

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(cors());

// // Route
// app.get('/', (req, res) => {
//     res.send("Home Page");
// });

// app.post('/api/sendemail', async (req, res) => {
//     const { email } = req.body.email;
//     const { registry } = req.body


//     try {
//         const send_to = {email};
//         const send_from = "info@documentedvoices.org";
//         const replyTo = "Vinhn3333@gmail.com";
//         const subject = "Your Documented Voice has been successfully reported";
//         const message = {registry};

//         await sendEmail(send_to, send_from, replyTo, subject, message)
//         res.status(200).json({success: true, message: "Report Sent"})
//     } catch (error) {
//         res.status(500).json({success: false, message: req.body})
//     }
// });
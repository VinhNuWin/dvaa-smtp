
const nodemailer = require('nodemailer');

const sendEmail = async (subject, message, send_to, send_from, replyTo) => {
const transporter = nodemailer.createTransport({
    host: 'smtppro.zoho.com',
    port: 587,    //587, 465
    secureConnection: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.APP_PASS,
    },
    tls: {
        rejectUnauthorized: true
    },
});

transporter.verify().then(console.log).catch(console.error);

const options = {
    from: send_from,
    to: send_to,
    replyTo: replyTo,
    subject: subject,
    html: message
 };
};

module.exports = sendEmail;

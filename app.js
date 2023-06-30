const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const sendEmail = require('./utils/sendEmail');

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Route
app.get('/', (req, res) => {
    res.send("Home Page");
});

app.post('/api/sendemail', async (req, res) => {
    const { email } = req.body.email;
    const { registry } = req.body


    try {
        const send_to = {email};
        const send_from = "info@documentedvoices.org";
        const replyTo = "Vinhn3333@gmail.com";
        const subject = "Your Documented Voice has been successfully reported";
        const message = {registry};

        await sendEmail(send_to, send_from, replyTo, subject, message)
        res.status(200).json({success: true, message: "Report Sent"})
    } catch (error) {
        res.status(500).json({success: false, message: req.body})
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`App listening to port ${PORT}`);
});

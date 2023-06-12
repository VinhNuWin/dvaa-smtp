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
    const { email } = req.body;

    try {
        const send_to = "Vinhn333@yahoo.com";
        const send_from = "info@documentedvoices.org";
        const replyTo = "Vinhn333@yahoo.com";
        const subject = "Successfully filed your registry report";
        const message = `Thank you for your report, Here is a time stamped copy of your report`;

        await sendEmail(send_to, send_from, replyTo, subject, message)
        res.status(200).json({success: true, message: "Report Sent"})
    } catch (error) {
        res.status(500).json({success: false, message: 'Report Failed to Send'})
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`App listening to port ${PORT}`);
});

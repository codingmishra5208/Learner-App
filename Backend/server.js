const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Import Routes
const paidCourse = require('./Controller/paidCourseRoute');
const signUpRoutes = require('./Controller/signUpRoutes');
const loginRoutes = require('./Controller/loginRoutes');
const AdmissionRoutes = require('./Controller/AdmissionFormRoutes');
const FullCourseRoute = require('./Controller/FullCourseRoute');
const BlogRoutes = require('./Controller/BlogRoutes');

// Route ko Define kiya hai ..isme
app.use('/paidcourse', paidCourse);
app.use('/signup', signUpRoutes);
app.use('/login', loginRoutes);
app.use('/admission', AdmissionRoutes);
app.use('/fullcourse', FullCourseRoute);
app.use('/blog', BlogRoutes);



// Email Configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
    },
});

// Question Answer ka Route hai ye...
app.post('/questions', async (req, res) => {
    const { question } = req.body;


    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'New Question Submitted',
        text: `New Question: ${question}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(201).send({ message: 'Question submitted and email sent!' });

    } catch (error) {
        console.error('Error sending email', error);
        res.status(500).send({ error: 'Failed to send email' });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
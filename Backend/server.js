const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const db = require('./db'); 
const nodemailer = require('nodemailer');
const Stripe = require('stripe')('sk_test_51QLJU7HJKt2GlWL9mmKsrQNIO4BPC68FmuwXVZb4PyqQaxfSsa39QXygZAcJjP8nFMfrrLJ1KKZO3AP1oIWqNlV700cveeUbgg');


const PORT = process.env.PORT || 3001;

app.use(cors());
 
const bodyParser = require('body-parser'); 
app.use(express.json())
app.use(bodyParser.json());


const paidCourse = require('./Controller/paidCourseRoute');
const signUpRoutes = require('./Controller/signUpRoutes');
const loginRoutes = require('./Controller/loginRoutes');
const AdmissionRoutes = require('./Controller/AdmissionFormRoutes');
const FullCourseRoute = require('./Controller/FullCourseRoute');

app.use('/paidcourse',paidCourse);
app.use('/paidcourse/:name',paidCourse);
app.use('/signup',signUpRoutes);
app.use('/login',loginRoutes);
app.use('/Admission',AdmissionRoutes);    
app.use('/fullcourse',FullCourseRoute);
app.use('/fullcourse/:name',FullCourseRoute);

//Email Configuration...
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mishrashyam1968@gmail.com', // Your Gmail address
        pass: 'mmix yyeh ilpa wtsv', // Your Gmail App Password
    },
});

app.post('/questions', async (req, res) => {
    const { question } = req.body;

    // Send Email
    const mailOptions = {
        from: 'mishrashyam1968@gmail.com',
        to: 'mishrashyam1968@gmail.com', // Your Gmail address
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


//Payement krne ke liye hai ye ...
app.post('/payment', async (req, res) => {
    const { amount, token } = req.body;

    try {
        const charge = await Stripe.charges.create({
            amount, // Amount in cents
            currency: 'inr',
            source: token.id,
            description: 'Payment Description',
        });
        res.status(200).json(charge);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



app.listen(PORT,()=>{
 console.log("server is running",PORT);

})




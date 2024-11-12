const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const db = require('./db'); 
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



app.listen(PORT,()=>{
 console.log("server is running",PORT);

})




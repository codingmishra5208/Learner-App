const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.MONGOURL

 mongoose.connect(URI,{
    useNewUrlParser: true,
     useUnifiedTopology: true
 })

  const db = mongoose.connection;

  db.on('connected',()=>{
    console.log("connected to mongo server");
  })
  
  db.on('disconnected',(dis)=>{
    console.log("mongodb disconnected",dis);
  })
  db.on("error",(err)=>{
    console.log("error",err);
  })

  module.exports = db;


 
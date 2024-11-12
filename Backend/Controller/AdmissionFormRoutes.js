 const express = require('express');
 const router = express.Router();
const Admission = require('../models/Admission');

 router.post("/", async(req,res)=>{
    const {name,email,phone,state,course} = req.body;

    const newAdmission = new Admission({name,email,phone,state,course});
      try{
         await newAdmission.save();
          res.status(201).json({message : "Form Submitted Susscessfully"});
      }catch(error){
         res.status(400).json({error : "Error Submiting Data"});
      }

 });
  
 module.exports = router;
 
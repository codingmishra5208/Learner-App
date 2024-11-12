const express = require('express');
const router = express.Router();

const paidcourse = require('../models/paidcourse');

//Post freee Courses..
router.post('/',async(req,res)=>{
   try{
     const data = req.body
      const newPaidCourse = new paidcourse(data);

       const response = await newPaidCourse.save();
        console.log("data saved");
        res.status(200).json(response);

   }catch(err){
     console.log(err);
      res.status(500).json({error: 'Internal server Error'});
   }

})
//Get free Courses...
   router.get('/',async(req,res)=>{
        try{
          const data = await paidcourse.find();
           console.log("data fetched");
            res.status(200).json(data);
        
        }
        catch(err){
            console.log(err);
             res.status(500).json({error: 'Internal server error'});
        }
   })
   // single item..
    router.get('/:name',async(req,res)=>{
       try{
        const name = req.params.name;
        const response = await paidcourse.find({name: name});
         console.log("response fetched");
          res.status(200).json(response);
       }catch(error){
               res.status(500).json({error: "Internal Server Error"});
       }
    })

   module.exports = router;
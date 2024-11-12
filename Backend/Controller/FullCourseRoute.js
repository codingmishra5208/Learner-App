const express = require('express');
 const router = express.Router();

 const fullcourse = require('../models/FullCourse');

  router.post('/',async(req,res)=>{
     try{
          const data = req.body;
           const newfullcourse = new fullcourse(data);

           const response = await newfullcourse.save();
            console.log("data saved");
            res.status(200).json(response);
     }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server Error'});

     } 

  });

  //Get method
   router.get('/',async(req,res)=>{
        try{
            const data = await fullcourse.find();
           console.log("data fetched");
            res.status(200).json(data);
        }catch(error){
            console.log(err);
            res.status(500).json({error: 'Internal server error'});
        }

   })
// single item
   router.get('/:name',async(req,res)=>{
    try{
     const name = req.params.name;
     const response = await fullcourse.find({name: name});
      console.log("response fetched");
       res.status(200).json(response);
    }catch(error){
            res.status(500).json({error: "Internal Server Error"});
    }
 })

   module.exports = router;
   
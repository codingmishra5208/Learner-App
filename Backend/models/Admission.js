const mongoose = require('mongoose');

 const AdmissionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
     email:{
         type:String,
         required:true
     },
      phone:{
         type:String,
          required:true
      },
      state:{
        type:String,
        required:true
      },
      course:{
        type:String,
         required:true
      },
       

 });

  const Form = mongoose.model("Form",AdmissionSchema);
   module.exports = Form;
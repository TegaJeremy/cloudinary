const mongoose = require ('mongoose')



const clubschema= new mongoose.Schema(
    {
           league:{
            type:String,
            required:true
           },
           club:{
            type:String,
            required:true
           },
           logo:{
            type:String,
            required:true
           }
          
          
       }
   )
   
   const clubModel =mongoose.model("connect", clubschema)

   module.exports = clubModel
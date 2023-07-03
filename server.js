const express = require ("express");
const mongoose = require ("mongoose")
const PORT =  2029;
const data = express();
data.use(express.json());




const familyDB = require("./config/clubDB")
const router = require("./router/clubrouter")


const app = express()
app.use(express.json())
app.use('/api', router)
// app.use("/upload", express.static("upload"))
 






// delete a user
// data.delete("/delete/:id", async(req, res)=>{
//     const id = req.params.id;
//     const deleteUser = await user.findByIdAndDelete((id))

//     res.status(200).json(
//        { message:`this infomation of the user with the id of ${id} has been delete`,
//             data:deleteUser
    
//             }
//     )
// })

// data.put("/editstudent/:id", async (req, res)=>{
//     const id = req.params.id;
//     const edittask = await user.findByIdAndUpdate((id))
//     res.status(201).json( {
//         message: "update successful",
//         title :edittask
//     }
        
//     )
    
// })



// mongoose.connect("mongodb+srv://oghenedemartin:eQX78GsvMNFP2p44@cluster0.rivgmxb.mongodb.net/")
// .then(()=>{
//    console.log("connection successful")
// }) 
app.listen(PORT , ()=>{
    console.log(`server is listening to ${PORT}`)
})

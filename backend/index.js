const express=require("express");
const cors=require("cors")
const app=express();
app.use(express.json())
app.use(cors())
const mongoose=require("mongoose")
const details=require("./details-routes")
app.use("/details",details)
mongoose.connect("mongodb://localhost/kinaracapital")
.then(()=>console.log("connected to db"))
.catch((err)=>console.log("error occured",err))
app.listen(5000,()=>{
    console.log(`server started at port 5000`)
})
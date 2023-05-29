const express=require("express")
const route=express.Router()
const {Details}=require("./details-models")
route.get("/",async(req,res)=>{
    try{

    
        const result=await Details.find()
        res.send(result)
    }
  catch(err){
        console.log(err)
        res.status(500).send("internal server error")
  }



})
module.exports=route
const express=require("express")
const route=express.Router()
const {Details}=require("./details-models")
route.get("/",async(req,res)=>{
const result=await Details.find()
res.send(result)
})
module.exports=route
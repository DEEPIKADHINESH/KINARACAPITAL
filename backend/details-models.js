const mongoose=require("mongoose")
const detailsSchema= new mongoose.Schema({
    name:{
        type:String
    },
    id:{
        type:Number
    },
    totalMarks:{
        type:Number
    }
})
const Details=mongoose.model("Details",detailsSchema)
// async function createDetails(){
//     const detail=new Details({
//         name:"person6",
//         id:20,
//         totalMarks:77
//     })
   
//     const result=await  detail.save()
//     console.log(result)
// }
// createDetails()
exports.Details=Details
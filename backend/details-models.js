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
async function createDetails(){
    const detail1=new Details({
        name:"person1",
        id:1,
        totalMarks:77
    })
    const detail2=new Details({
        name:"person2",
        id:2,
        totalMarks:78
    })
    const detail3=new Details({
        name:"person3",
        id:3,
        totalMarks:79
    })
    const detail4=new Details({
        name:"person4",
        id:4,
        totalMarks:85
    })
    const detail5=new Details({
        name:"person5",
        id:5,
        totalMarks:78
    })
    const detail6=new Details({
        name:"person6",
        id:6,
        totalMarks:100
    })
   
    const result1=await  detail1.save()
    const result2=await  detail2.save()
    const result3=await  detail3.save()
    const result4=await  detail4.save()
    const result5=await  detail5.save()
    const result6=await  detail6.save()
    console.log(result1,result2,result3,result4,result5,result6)
}
createDetails()
exports.Details=Details
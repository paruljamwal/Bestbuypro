
const mongoose=require("mongoose");

const connect=()=>{
    try{
        console.log(" I am Connected ")
        return mongoose.connect("mongodb+srv://PARUL:PARUL@cluster0.apfp6.mongodb.net/BESTBUY?retryWrites=true&w=majority")

    }
    catch(err){
  console.log(err);
    }
}

module.exports=connect;
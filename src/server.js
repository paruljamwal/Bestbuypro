const express=require("express");
const connect=require("./config/db");
const productcontroller=require("./controller/productcontroller");
const dealdaycontroller=require("./controller/dealdaycontroller");
const app=express();
app.use(express.json());

app.use("/product",productcontroller);
app.use("/dealday",dealdaycontroller);

app.listen(5000,async()=>{
    try{
        console.log("Listining port 5000");
        return await connect();
    }
    catch(err){
        console.log(err);
    }
})
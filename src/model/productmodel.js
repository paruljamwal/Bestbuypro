const mongoose=require("mongoose");
const express=require("../server");

const productschema=new mongoose.Schema({
    imgUrl:{type:String,required:true},
    name:{type:String,required:true},
    price:{type:Number,required:false},
    pickup:{type:String,required:true},
    shipping:{type:Number,required:false}

},
{
    versionKey:false,
    timestamps:true
});

const productmodel=mongoose.model("product",productschema);


module.exports=productmodel;



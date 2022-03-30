const mongoose=require("mongoose");
const express=require("../server");

const dealdayschema=new mongoose.Schema({
    image:{type:String,required:true},
    name:{type:String,required:true},
    review:{type:String,required:true},
    price:{type:Number,required:false},
    save:{type:String,required:true},
    act_price:{type:Number,required:false},
    deal:{type:String,required:true}
},
{
    versionKey:false,
    timestamps:true
});

const dealdaymodel=mongoose.model("dealday",dealdayschema);


module.exports=dealdaymodel;



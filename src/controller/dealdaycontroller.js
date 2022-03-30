const express = require("express");
const dealdaymodel=require("../model/productmodel");

const router=express.Router();

//post product

router.post("",async(req,res)=>{
    try{

        const deal=await dealdaymodel.create(req.body);
        return res.status(201).send({Dealday:deal});
    }
    catch(err){
        res.status(404).send(err);
    }

});

//get products 

router.get("",async(req,res)=>{
    try{

        const deal=await dealdaymodel.find({}).lean().exec();
        return res.status(201).send({Dealday:deal});
    }
    catch(err){
        res.status(404).send(err);
    }

});

//product patch
router.patch("/:id",async(req,res)=>{
    try{

        const deal=await dealdaymodel.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec();
        return res.status(201).send({Dealday:deal});
    }
    catch(err){
        res.status(404).send(err);
    }

});

// product delete
router.delete("/:id",async(req,res)=>{
    try{

        const deal=await dealdaymodel.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send({Dealday:deal});
    }
    catch(err){
        res.status(404).send(err);
    }

});

module.exports=router;
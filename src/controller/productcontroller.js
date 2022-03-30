const express = require("express");
const productmodel=require("../model/productmodel");

const router=express.Router();

//post product

router.post("",async(req,res)=>{
    try{

        const product=await productmodel.create(req.body);
        return res.status(201).send({Product:product});
    }
    catch(err){
        res.status(404).send(err);
    }

});

//get products 

router.get("",async(req,res)=>{
    try{

        const product=await productmodel.find({}).lean().exec();
        return res.status(201).send({Product:product});
    }
    catch(err){
        res.status(404).send(err);
    }

});

//product patch
router.patch("/:id",async(req,res)=>{
    try{

        const product=await productmodel.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec();
        return res.status(201).send({Product:product});
    }
    catch(err){
        res.status(404).send(err);
    }

});

// product delete
router.delete("/:id",async(req,res)=>{
    try{

        const product=await productmodel.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send({Product:product});
    }
    catch(err){
        res.status(404).send(err);
    }

});
module.exports=router;
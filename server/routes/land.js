const express=require('express')
const router=express.Router();
const Land=require('../models/land')
const User=require('../models/user')
router.get("/getland/:id", async (req, res) => {
  const { id } = req.params;
  const lands = await Land.find({ownerId:id});
  res.json(lands);
});
  router.put("/update/:id",async(req,res)=>{
    const {id}=req.params;
    const data=req.body;
    const land = await Land.findByIdAndUpdate(id,{ ph: data.ph ,fertility:data.fertility,rainfall:data.rainfall,temperature:data.temperature}, {
      new: true, // returns updated document
      runValidators: true, // validate schema rules
    });
    res.json(land);
    
  })
  router.delete('/delete/:id',async(req,res)=>{
    const {id}=req.params;
    await Land.findByIdAndDelete(id);
    res.json("delete successfuly");
  })
module.exports=router

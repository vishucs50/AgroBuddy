const express=require('express')
const router=express.Router();
const Land=require('../models/land')
const User=require('../models/user')
router.get("/getland/:id", async (req, res) => {
  const { id } = req.params;
  const lands = await Land.find({ownerId:id});
  console.log(lands);
  res.json(lands);
});
module.exports=router

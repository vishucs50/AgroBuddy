const express=require('express');
const User=require('../models/user')
const router=express.Router();
router.post("/register", async (req, res) => {
  try {
    console.log(req.body)
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
});
module.exports=router;
const express = require("express");
const router = express.Router();
const crops = require("../../crops.json");
const Land=require('../../models/land');
const User = require("../../models/user");
require("dotenv").config();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const round = (value, decimals = 2) => {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
};
const matchedCrops = (ph, fertility, rainfall, temperature) =>
  crops.filter((crop) => {
    return (
      ph >= crop.phMin &&
      ph <= crop.phMax &&
      crop.fertility
        .map((f) => f.toLowerCase())
        .includes(fertility.toLowerCase()) &&
      rainfall >= crop.rainfallMin &&
      rainfall <= crop.rainfallMax &&
      temperature >= crop.tempMin &&
      temperature <= crop.tempMax
    );
  });
  
router.post("/cropsuggest",async  (req, res) => {
  const {
    soilType,
    soilFertility,
    WeatherConditions,
    firebaseUID,
    email,
    displayName,
  } = req.body;

  const fertility = soilFertility;
  const ph = round(soilType);
  const rainfall = round(parseFloat(WeatherConditions?.Rainfall));
  const temperature = round(parseFloat(WeatherConditions?.Temperature));
  let dbUser = await User.findOne({ firebaseUID: firebaseUID });
  if (!dbUser) {
    dbUser = await User.create({ firebaseUID, email, displayName });
  }
  const matched = matchedCrops(ph, fertility, rainfall, temperature); 
  const cropNames = matched.map((crop) => crop.name); 
  
  console.log("Matched Crops:", cropNames);
  const existing = await Land.findOne({
    ownerId: dbUser._id,
    ph,
    fertility,
    rainfall,
    temperature,
  });

  if (!existing) {
    await Land.create({
      ph,
      fertility,
      rainfall,
      temperature,
      email,
      ownerId: dbUser._id,
    });
  }
  res.json({ suggestions: cropNames,lands:existing });
});


module.exports = router;



  
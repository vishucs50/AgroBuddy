    const express = require("express");
    const router = express.Router();
    const crops = require("../../crops.json");
    const Land=require('../../models/land');
    const User = require("../../models/user");
    require("dotenv").config();
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    // Function to filter crops based on input
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

      const ph = soilType;
      const fertility = soilFertility;
      const rainfall = parseFloat(WeatherConditions?.Rainfall);
      const temperature = parseFloat(WeatherConditions?.Temperature);
      let dbUser = await User.findOne({ firebaseUID: firebaseUID });
      if (!dbUser) {
        dbUser = await User.create({ firebaseUID, email, displayName });
      }

      const land = new Land({
        ph,
        fertility,
        rainfall,
        temperature,
        email,
        ownerId: dbUser._id,
      });
      await land.save();

      const matched = matchedCrops(ph, fertility, rainfall, temperature); 
      const cropNames = matched.map((crop) => crop.name); 

      console.log("Matched Crops:", cropNames);
      res.json({ suggestions: cropNames });
    });
    

    module.exports = router;


  
      
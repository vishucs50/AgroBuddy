    const express = require("express");
    const router = express.Router();
    const crops = require("../../crops.json");
    const axios = require("axios");
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
      

    router.post("/cropsuggest", (req, res) => {
      const { soilType, soilFertility, WeatherConditions } = req.body;

      const ph = soilType;
      const fertility = soilFertility;
      const rainfall = parseFloat(WeatherConditions?.Rainfall);
      const temperature = parseFloat(WeatherConditions?.Temperature);

      console.log("Parsed body:", { ph, fertility, rainfall, temperature });

      const matched = matchedCrops(ph, fertility, rainfall, temperature); 
      const cropNames = matched.map((crop) => crop.name); 

      console.log("Matched Crops:", cropNames);
      res.json({ suggestions: cropNames });
    });
    

    module.exports = router;


  
      
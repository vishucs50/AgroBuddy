const { fetchWeatherData } = require("../services/weatherService");

const getWeather = async (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ error: "Missing lat or lon query params" });
  }

  try {
    const weatherData = await fetchWeatherData(lat, lon);
    res.json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
};

module.exports = { getWeather };

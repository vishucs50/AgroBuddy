const axios = require("axios");
TOMORROW_API_KEY= process.env.TOMORROW_API_KEY

const fetchWeatherData = async (lat, lon) => {
  const response = await axios.get("https://api.tomorrow.io/v4/timelines", {
    params: {
      location: `${lat},${lon}`,
      fields: ["temperature", "precipitationIntensity"],
      units: "metric",
      timesteps: "current",
      apikey: TOMORROW_API_KEY,
    },
  });
  return response.data;
};

module.exports = { fetchWeatherData };

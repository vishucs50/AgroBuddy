import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";
import { toast } from "react-toastify";
export default function WeatherInput({ weather, onChange }) {
  const [loading, setLoading] = useState(false);

  const fetchWeatherCurrentLocation = () => {
    setLoading(true);
    if (!navigator.geolocation) {
      toast.error("Geolocation not supported");
      setLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log(lat,lon); 
        try {
          const response = await axios.get(
            `http://localhost:3000/api/weather`,
            {
              params: { lat, lon },
            }
          );
          const { temperature, precipitationIntensity } =
            response.data.data.timelines[0].intervals[0].values;

          onChange({
            Temperature: temperature.toFixed(1),
            Rainfall: precipitationIntensity.toFixed(2),
          });
        } catch {
          toast.error("Failed to fetch weather data");
        } finally {
          setLoading(false);
        }
      },
      () => {
        toast.error("Location permission denied");
        setLoading(false);
      }
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({
      ...weather,
      [name]: value,
    });
  };

  return (
    <Box>
      <Button
        variant="contained"
        onClick={fetchWeatherCurrentLocation}
        disabled={loading}
        sx={{
          color: loading ? "black !important" : "white",
          backgroundColor: loading ? "#FFC107 !important" : undefined, 
        }}
      >
        {loading ? "Fetching Weather..." : "Use Current Location"}
      </Button>

      <input
        type="text"
        name="Rainfall"
        placeholder="Rainfall Amount (mm/yr)"
        value={weather.Rainfall ?? ""}
        onChange={handleInputChange}
        style={{
          width: "100%",
          padding: 8,
          borderRadius: 4,
          marginTop: 12,
          marginBottom: 12,
          color:"black"
        }}
        />
      <input
        type="text"
        name="Temperature"
        placeholder="Temperature (°C)"
        value={weather.Temperature ?? ""}
        onChange={handleInputChange}
        style={{ width: "100%", padding: 8, borderRadius: 4,color:"black" }}
      />
    </Box>
  );
}

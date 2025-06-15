import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import Card1 from "../components/card1";
import { useAuth } from "../context/authContext";
export default function CropSuggestPage() {
  const { state } = useLocation();
  const [suggestedData, setSuggestedData] = useState([]);

  const { user } = useAuth();
  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const cleanData = {
          ...state,
          WeatherConditions: {
            Rainfall: Number(state.WeatherConditions.Rainfall),
            Temperature: Number(state.WeatherConditions.Temperature),
          },
          firebaseUID: user.uid,
          email: user.email,
          displayName: user.displayName,
        };
        console.log(user);
        const { data } = await axios.post("/api/cropsuggest", cleanData);
        setSuggestedData(data.suggestions || []);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    if (state) fetchSuggestions();
  }, [state]);

  return (
    <div className="min-h-screen pt-24 pb-10 px-4 bg-gradient-to-br from-slate-9  00 to-black text-white">
      <div className="max-w-full mx-auto">
        <h1 className="text-3xl font-bold text-green-500  ">
          🌾 Crop Suggestions
        </h1>

        {suggestedData.map((crop, index) => (
          <Card1 key={index} crop={crop} />
        ))}
      </div>
    </div>
  );
}

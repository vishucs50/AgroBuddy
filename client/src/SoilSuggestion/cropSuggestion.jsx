import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import Card1 from "../components/card1";
import { useAuth } from "../context/authContext";
import { getAuth } from "firebase/auth";
import { useUserContext } from "../context/UserContext";
import useLandStore from "../stores/LandStore";
export default function CropSuggestPage() {
  const setLands=useLandStore((state)=>state.setLands);
  const { userData } = useUserContext();
  const { state } = useLocation();
  const [suggestedData, setSuggestedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const hasFetched = useRef(false); // Prevent double fetch

  const round = (val) => Math.round(val * 100) / 100;

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        setLoading(true);
        const auth = getAuth();
        const token = await auth.currentUser.getIdToken();

        if (state) {
          const cleanData = {
            ...state,
            WeatherConditions: {
              Rainfall: round(Number(state.WeatherConditions.Rainfall)),
              Temperature: round(Number(state.WeatherConditions.Temperature)),
            },
            soilType: round(state.soilType),
            firebaseUID: user.uid,
            email: user.email,
            displayName: user.displayName || user.email,
          };
          console.log("Sending crop suggestion request with:", cleanData);

          const { data } = await axios.post("/api/cropsuggest", cleanData, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setSuggestedData(data.suggestions || []);
        } else {
          const res = await axios.get("/api/userland", {
            headers: { Authorization: `Bearer ${token}` },
          });
          
          if (res.data.found) {
            setLands(res.data.lands)
            setSuggestedData(res.data.suggestions);
          } else {
            console.log("No previous land data found");
          }
        }
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user && !hasFetched.current) {
      hasFetched.current = true;
      fetchSuggestions();
    }
  }, [user, state]);

  return (
    <div className="min-h-screen pt-24 pb-10 px-4 bg-gradient-to-br from-slate-900 to-black text-white">
      <div>
        <h2>Hello {userData?.username || userData?.email}</h2>
        <p>Your Firebase UID: {userData?.uid}</p>
      </div>
      <div className="max-w-full mx-auto">
        <h1 className="text-3xl font-bold text-green-500 mb-4">
          🌾 Crop Suggestions
        </h1>

        {loading ? (
          <p>Loading...</p>
        ) : suggestedData.length > 0 ? (
          suggestedData.map((crop, index) => <Card1 key={index} crop={crop} />)
        ) : (
          <p>No suggestions available yet.</p>
        )}
      </div>
    </div>
  );
}

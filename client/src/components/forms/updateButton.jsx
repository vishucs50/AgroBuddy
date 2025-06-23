import { useNavigate } from "react-router";
export default function Update({land,index}){
    const navigate=useNavigate();
    return (
      <button
        className="bg-green-600 p-3 h-10 w-20 flex items-center justify-center rounded-2xl hover:bg-green-800"
        onClick={() => {
          navigate("/update", {
            state: {
              index:index,
              mode: "edit", // or "add"
              existingData: {
                soilType: land.ph,
                soilFertility: land.fertility,
                WeatherConditions: {
                  Rainfall: land.rainfall,
                  Temperature: land.temperature,
                },
              },
            },
          });
        }}
      >
        Update
      </button>
    );
}


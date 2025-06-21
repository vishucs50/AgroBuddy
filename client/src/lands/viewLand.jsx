import { useUserContext } from "../context/UserContext";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ViewLand() {
  const { userData } = useUserContext();
  const [lands, setLands] = useState([]);

  useEffect(() => {
    if (userData?._id) {
      axios
        .get(`/land/getland/${userData._id}`)
        .then((res) => setLands(res.data))
        .catch((err) => console.error("Failed to fetch lands", err));
      }
  }, [userData]);

  return (
    <>
      {/* Full height scrollable container */}
      Instead of putting h-screen on both the wrapper and the sections, do this:
      jsx Copy Edit
      <div className="h-screen  overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar ">
        {lands.map((land, index) => (
          <section
            key={index}
            className="snap-start h-screen flex items-center justify-center bg-green-100"
            style={{
              backgroundImage: `url("/images/countryside-autumn-panorama-with-stone-farm-house/2207_w026_n002_2214b_p1_2214.jpg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full max-w-6xl bg-black rounded-3xl flex flex-col md:flex-row m-4 p-4 md:p-6 items-center gap-4 ">
              {/* Image Box */}
              <div
                className=" h-60 w-full md:h-80 md:w-80 bg-amber-200 rounded-3xl flex-shrink-0 "
                style={{
                  backgroundImage: `url("/images/countryside-autumn-panorama-with-stone-farm-house/image.png")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",  
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Land Info */}
              <div className="flex-1 overflow-auto flex flex-col gap-2 h-60 w-full rounded-xl p-4">
                <p className="text-gray-600 font-bold text-2xl">
                  PH: {land.ph}
                </p>
                <p className="text-gray-600 font-bold text-2xl">
                  Fertility: {land.fertility}
                </p>
                <p className="text-gray-600 font-bold text-2xl">
                  Rainfall: {land.rainfall}
                </p>
                <p className="text-gray-600 font-bold text-2xl">
                  Temperature: {land.temperature}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

  

  import { useUserContext } from "../context/UserContext";
  import { useEffect} from "react";
  import axios from "axios";
  import useLandStore from "../stores/LandStore";
  import { toast } from "react-toastify";
  import Update from "../components/forms/updateButton";
  import { Link } from "react-router";
  export default function ViewLand() {
    const { userData } = useUserContext();
    const lands=useLandStore((state)=>state.lands);
    const setLands = useLandStore((state) => state.setLands);
    const deleteLand=useLandStore((state)=>state.deleteLand);
    const handleDelete = async (id) => {
      try {
        await deleteLand(id);
        toast.success("Land deleted successfully");
      } catch (err) {
        toast.error("Error deleting land",err);
      }
    };
    useEffect(() => {
      if (userData?._id) {
        axios
          .get(`/land/getland/${userData._id}`)
          .then((res) => setLands(res.data))
          .catch((err) => console.error("Failed to fetch lands", err));
        }
    });
    
    return (
      <>
        {/* Full height scrollable container */}
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
                <div className="flex-1 overflow-auto flex flex-col gap-2 h-80 w-full rounded-xl p-4 hide-scrollbar">
                  <p className="text-gray-400 font-bold text-5xl ">
                    Owner: {land.name}
                  </p>
                  <p className="text-gray-600 font-bold text-2xl">
                    Ph: {land.ph}
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
                  <div className="w-80 h-10 md:w-80 md:h-30 flex items-center  gap-5 mb-2">
                    <Update land={land} index={index} />
                    <button
                      className=" bg-red-600 p-3 h-10 w-20 flex items-center justify-center rounded-2xl  hover:bg-red-800"
                      onClick={() => handleDelete(land._id)}
                    >
                      Delete
                    </button>
                    <Link to="/cropsuggest" className="bg-blue-500 text-white hover:bg-blue-600 p-3 h-10 w-30 flex items-center justify-center rounded-2xl no-underline">
                      View Crops
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </>
    );
  }

    

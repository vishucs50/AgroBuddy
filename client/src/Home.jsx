import { Link ,Outlet} from "react-router";
export default function Home() {
  return (
    <div className="min-h-screen w-full bg-slate-900 flex flex-col items-center justify-center gap-6 p-4 text-white">
      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
        {/* Left Box */}
        <div
          className="w-full md:w-1/2 max-w-2xl h-64 rounded-md shadow-md bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/hand-drawn-india-lifestyle-illustration/7795297.jpg')",
          }}
        ></div>

        {/* Right Column of Boxes */}
        <div className="flex flex-col gap-4">
          <div className="h-20 w-60 bg-green-700 rounded-md shadow-md flex items-center justify-center hover:bg-green-800">
            <Link to="/my-lands" className="text-2xl">
              My Lands
            </Link>
          </div>
          <div className="h-20 w-60 bg-green-700 rounded-md shadow-md flex items-center justify-center hover:bg-green-800">
            <Link to="/newland" className="text-2xl">
              Add Land
            </Link>
          </div>
          <div className="h-20 w-60 bg-green-700 rounded-md shadow-md flex items-center justify-center hover:bg-green-800">
            <Link to="/updateProfile" className="text-2xl">
              Profile
            </Link>
          </div>
        </div>
      </div>
      {/* Quote */}
      <p className="text-center text-lg italic text-gray-300 dark:text-gray-400 max-w-xl">
        "The soul of India lives in its villages." —{" "}
        <span className="font-semibold">Mahatma Gandhi</span>
      </p>
    </div>
  );
}

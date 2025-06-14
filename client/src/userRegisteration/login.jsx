import StaticFarm from "./farmersvg";
import Form from "../components/loginform";
import TransparentNav from "../components/transparentnav";
export default function LoginPage() {
  return (
    <div className="min-h-screen bg-blue-400">
      {/* Transparent Navbar */}
      <TransparentNav />
      {/* Register Section */}
      <div className="flex flex-col md:flex-row items-center justify-center pt-24 px-4 md:px-16 gap-10 min-h-screen">
        {/* Left SVG/Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <StaticFarm />
        </div>

        {/* Right Register Form */}
        <Form />
      </div>
    </div>
  );
}

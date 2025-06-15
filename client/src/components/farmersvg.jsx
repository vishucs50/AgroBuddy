import farmerSvg from "../assets/farmer.svg";

export default function StaticFarm() {
  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <img src={farmerSvg} alt="Farmer" className="w-full h-auto" />
    </div>
  );
}
    
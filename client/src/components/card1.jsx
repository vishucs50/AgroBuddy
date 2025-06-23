export default function Card1({ crop }) {
  return (
    <div className="p-4">
      <div className="w-full bg-slate-900 rounded-xl grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4">
        {/* Image Section */}
        <div className="h-64 md:h-full w-full bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
          <img
            src={`/images/1595113_227980-P2AX59-242.jpg`}
            alt={`${crop.name} field`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-3 px-2 py-4">
          <h1 className="text-2xl sm:text-3xl md:text-2xl font-semibold text-gray-100">
            {crop.name}
          </h1>
          <p className="text-sm sm:text-base text-gray-300">
            {crop.description}
          </p>
          <p className="text-sm sm:text-base text-gray-300">
            Preferred Soil: {crop.preferredSoil}
          </p>
          <p className="text-sm sm:text-base text-gray-300">
            Season to grow: {crop.season}
          </p>
          <p className="text-sm sm:text-base text-gray-300">
            Manure to use: {crop.manure?.slice(0, 2).join(", ") || "N/A"}
          </p>
          <p className="text-sm sm:text-base text-gray-300">
            Fertilizers: {crop.fertilizers?.slice(0, 2).join(", ") || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}

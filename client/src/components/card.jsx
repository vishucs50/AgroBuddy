
const Card = () => {
  return (
    <div
      className="w-64 h-80 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4 rounded-2xl shadow-md hover:shadow-xl 
      transform hover:scale-105 transition duration-300 ease-in-out flex flex-col justify-between"
    >
      {/* Image placeholder */}
      <div className="h-40 w-full bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1498408040764-ab6eb772a145?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Wheat field"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="mt-4 flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">Long Chair</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              ID: 23432252
            </p>
          </div>
          <span className="text-green-600 dark:text-green-400 font-bold text-base">
            $25.99
          </span>
        </div>

        <button className="w-full bg-sky-700 hover:bg-sky-600 text-white py-2 rounded-md transition duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;

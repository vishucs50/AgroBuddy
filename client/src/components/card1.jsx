export default function Card1({crop}) {
  return (
    <div className="p-4">
      <div className="w-full bg-slate-900 rounded-xl grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4">
        {/* Image Section */}
        <div className="h-64 md:h-full w-full bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1498408040764-ab6eb772a145?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Wheat field"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center gap-3 px-2 py-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
            {crop}
          </h1>
          <p className="text-sm sm:text-base text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            dolor odit harum minus quod iure. Blanditiis repudiandae cum
            consequuntur similique dolore eum commodi inventore quo, delectus
            velit corporis. Provident quo saepe beatae fugiat tempora ab,
            doloribus sapiente, facere corrupti quasi odio architecto aut
            exercitationem veniam natus! Et ratione debitis perspiciatis ipsa
            natus dolorem quidem. Quia amet beatae aliquid accusantium qui
            similique nesciunt itaque, nemo consequuntur blanditiis omnis
            expedita natus voluptatibus odio sed? Provident aperiam sed
            voluptatum quis animi vel ex alias magnam voluptas, odio
            consequuntur suscipit incidunt quasi porro sequi dolor magni
            repudiandae nemo facilis corrupti dicta, iusto blanditiis vitae.
          </p>
        </div>
      </div>
    </div>
  );
}

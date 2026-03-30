import { data } from "../data/data"

const Work = () => {
   
  return (
    <div className="bg-black w-full text-gray-200 py-20" name="work">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col justify-center w-full">
        {/* Header Section */}
        <div className="pb-12">
          <p className="text-5xl md:text-6xl font-bold inline border-b-4 text-gray-100 border-pink-600 pb-2">
            Work
          </p>
          <p className="py-6 text-gray-400 text-lg">
            Check out some of my latest professional projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Image */}
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/75 transition-all duration-300" />

              {/* Content - Hidden by default, visible on hover */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Project Title */}
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-300 mb-3 line-clamp-2">
                  {item.desc}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-pink-500 uppercase tracking-wider">
                    {item.stack}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {item.name === "Iboga Retreat Platform" && (
                    <a href={item.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <button className="w-full px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white font-bold text-sm rounded-lg transition-colors duration-200">
                        Live Demo
                      </button>
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Border Accent */}
              <div className="absolute inset-0 border-2 border-pink-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work

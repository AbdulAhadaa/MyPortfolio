import { data } from "../data/data"
import { HiArrowNarrowRight } from 'react-icons/hi'

const Work = () => {
  return (
    <div className="bg-black w-full text-gray-200 py-20" name="work">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="pb-12">
          <p className="text-4xl font-bold inline border-b-4 text-gray-100 border-pink-600 pb-2">
            Work
          </p>
          <p className="py-6 text-gray-400">Check out some of my latest professional projects</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-xl overflow-hidden border border-gray-800 hover:border-pink-600/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-600/10 flex flex-col`}
            >
              {/* Full card background image */}
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                className="absolute inset-0 bg-cover bg-top group-hover:scale-105 transition-transform duration-500"
              />

              {/* Full card overlay - dark at bottom, transparent at top */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(17,24,39,0.7) 40%, #111827 65%)' }}
              />

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-pink-600 to-transparent z-10" />

              {/* Spacer to push content down */}
              <div className="h-[180px]" />

              {/* Content */}
              <div className="relative z-10 p-5 flex flex-col flex-1 min-h-[180px]">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-pink-400 transition-colors duration-300 line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-300 mb-3 line-clamp-2">{item.desc}</p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.stack.split(", ").map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 bg-pink-600/20 border border-pink-500/30 rounded-full text-pink-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <div className="mt-auto pt-2">
                  {item.live && item.live !== "#" ? (
                    <a href={item.live} target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-500 text-white text-sm font-semibold rounded-lg transition-colors duration-200 group/btn">
                        Live Demo
                        <HiArrowNarrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2 border border-gray-700 text-gray-500 text-sm rounded-lg">
                      🔒 Private Project
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work

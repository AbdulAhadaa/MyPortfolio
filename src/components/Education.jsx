import React from 'react'
import { HiAcademicCap } from 'react-icons/hi'

const education = [
  {
    degree: "BS Software Engineering",
    institution: "Virtual University of Pakistan",
    period: "2022 – 2026",
    icon: "🎓",
  },
  {
    degree: "Intermediate in Computer Science (ICS)",
    institution: "Superior College",
    period: "2020 – 2022",
    icon: "📚",
  },
]

const Education = () => {
  return (
    <div name="education" className="bg-black w-full text-gray-300 py-20">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="pb-12">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-100 pb-2">
            Education
          </p>
          <p className="py-6 text-gray-400">My academic background and qualifications</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-600 via-pink-600/40 to-transparent" />

          <div className="space-y-10">
            {education.map((edu, i) => (
              <div key={i} className="relative flex gap-8 group">

                {/* Circle on timeline */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-black border-2 border-pink-600 shrink-0 group-hover:bg-pink-600/20 transition-colors duration-300">
                  <HiAcademicCap className="text-pink-500" size={20} />
                </div>

                {/* Card */}
                <div className="flex-1 bg-gray-900/50 border border-gray-800 hover:border-pink-600/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-pink-600/10 hover:-translate-y-1">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <span className="text-xs px-3 py-1 bg-pink-600/20 border border-pink-500/30 rounded-full text-pink-300 whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Education

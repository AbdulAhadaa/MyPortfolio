import React, { useState } from 'react'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { BsArrowRightCircle } from 'react-icons/bs'

const experiences = [
  {
    role: "Software Developer",
    company: "Hello Future Technologies, Lahore",
    period: "Jan 2025 – Feb 2026",
    type: "Part-Time",
    points: [
      "Engineered frontend and backend features for production-level applications serving real users.",
      "Developed reusable, accessible, and responsive UI components aligned with design systems.",
      "Collaborated with senior developers in an Agile environment, contributing to sprint planning and code reviews.",
    ],
  },
  {
    role: "MERN Stack Developer",
    company: "Mercury Sols",
    period: "May 2025 – Present",
    type: "Full-Time",
    points: [
      "Developed and maintained full-stack web applications using the MERN stack, ensuring high performance and code quality.",
      "Designed and built RESTful APIs integrated with dynamic frontend interfaces.",
      "Optimized application performance and responsiveness, improving load times and user experience.",
    ],
  },
]

const Experience = () => {
  const [active, setActive] = useState(0)

  return (
    <div name="experience" className="bg-black w-full text-gray-300 py-20">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="pb-12">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-100 pb-2">
            Experience
          </p>
          <div className="flex items-center gap-4 mt-6">
            <p className="text-gray-400">Where I've worked and what I've built</p>
            <span className="px-3 py-1 bg-pink-600/20 border border-pink-500/40 rounded-full text-pink-300 text-sm font-semibold whitespace-nowrap">
              1.5+ Years Experience
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">

          {/* Company Tabs */}
          <div className="flex md:flex-col flex-row overflow-x-auto md:overflow-visible gap-1 min-w-[180px]">
            {experiences.map((exp, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left px-4 py-3 text-sm font-medium border-l-2 whitespace-nowrap transition-all duration-200
                  ${active === i
                    ? 'border-pink-600 text-pink-400 bg-pink-600/10'
                    : 'border-gray-700 text-gray-400 hover:text-pink-400 hover:border-pink-600/50 hover:bg-pink-600/5'
                  }`}
              >
                {exp.company.split(',')[0]}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 min-h-[260px]">
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <h3 className="text-xl font-bold text-white">
                {experiences[active].role}
              </h3>
              <span className="text-pink-500 font-semibold">
                @ {experiences[active].company.split(',')[0]}
              </span>
              <span className="text-xs px-2 py-1 bg-pink-600/20 border border-pink-500/30 rounded-full text-pink-300">
                {experiences[active].type}
              </span>
            </div>

            <p className="text-sm text-gray-500 mb-6 flex items-center gap-2">
              <HiOutlineBriefcase className="text-pink-600" />
              {experiences[active].period}
            </p>

            <ul className="space-y-4">
              {experiences[active].points.map((point, i) => (
                <li key={i} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                  <BsArrowRightCircle className="text-pink-600 mt-1 shrink-0" size={16} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience

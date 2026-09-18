import React from 'react'
import css from "../images/css.png"
import github from "../images/github.png"
import react from "../images/react.png"
import tailwind from "../images/tailwind.png"
import javascript from "../images/javascript.png"
import html from "../images/html.png"
import nodejs from "../images/nodejs.png"
import express from "../images/express.png"
import mongodb from "../images/mongodb.png"
import typescript from "../images/typescript.png"
import postgresql from "../images/postgresql.png"
import nextjs from "../images/nextjs.png"
import python from "../images/python.svg"
import nestjs from "../images/nestjs.svg"
import fastapi from "../images/fastapi.svg"
import openai from "../images/openai.svg"
import docker from "../images/docker.svg"
import firebase from "../images/firebase.svg"

const skills = [
  { name: "React JS", src: react },
  { name: "Next.js", src: nextjs, light: true },
  { name: "TypeScript", src: typescript },
  { name: "Javascript", src: javascript },
  { name: "HTML", src: html },
  { name: "CSS", src: css },
  { name: "Tailwind CSS", src: tailwind },
  { name: "Node.js", src: nodejs },
  { name: "Express.js", src: express },
  { name: "NestJS", src: nestjs },
  { name: "Python", src: python },
  { name: "FastAPI", src: fastapi },
  { name: "MongoDB", src: mongodb },
  { name: "PostgreSQL", src: postgresql },
  { name: "OpenAI / LLMs", src: openai },
  { name: "Docker", src: docker },
  { name: "Firebase", src: firebase },
  { name: "Github", src: github },
]

const Skills = () => {
  return (
    <div className='bg-black min-h-screen w-full text-gray-300' name="skills">
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-6 '>
          {skills.map((skill) => (
            <div key={skill.name} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4'>
              <img src={skill.src} alt={skill.name} className={`w-20 h-20 mx-auto object-contain ${skill.light ? 'bg-white rounded-lg p-1' : ''}`} />
              <p className='my-4'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills

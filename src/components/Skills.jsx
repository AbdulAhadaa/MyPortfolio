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
import nextjs from "../images/nextjs.png"
import typescript from "../images/typescript.png"
import postgresql from "../images/postgresql.png"



const Skills = () => {
  return (
    <div className='bg-black h-screen w-full text-gray-300' name="skills">
<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
<div>
    <p  className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
    <p className='py-4'>These are the technologies I've worked with</p>
</div>
<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-6 '>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img src={react} alt="React" className='w-20 mx-auto '/>
        <p className='my-4'>React JS</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img src={javascript} alt="JavaScript" className='w-20 mx-auto '/>
        <p className='my-4'>Javascript</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img src={tailwind} alt="Tailwind CSS" className='w-20 mx-auto '/>
        <p className='my-4'>Tailwind CSS</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img src={css} alt="CSS" className='w-20 mx-auto '/>
        <p className='my-4'>CSS</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img src={html} alt="HTML" className='w-20 mx-auto '/>
        <p className='my-4'>HTML</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img src={github} alt="GitHub" className='w-20 mx-auto '/>
        <p className='my-4'>Github</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img src={nodejs} alt="Node.js" className='w-20 mx-auto '/>
        <p className='my-4'>Node.js</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img src={express} alt="Express.js" className='w-20 mx-auto '/>
        <p className='my-4'>Express.js</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img src={mongodb} alt="MongoDB" className='w-20 mx-auto '/>
        <p className='my-4'>MongoDB</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img src={nextjs} alt="Next.js" className='w-20 mx-auto '/>
        <p className='my-4'>Next.js</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img src={typescript} alt="TypeScript" className='w-20 mx-auto '/>
        <p className='my-4'>TypeScript</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img src={postgresql} alt="PostgreSQL" className='w-20 mx-auto '/>
        <p className='my-4'>PostgreSQL</p>
    </div>
</div>
</div>
    </div>
  )
}

export default Skills
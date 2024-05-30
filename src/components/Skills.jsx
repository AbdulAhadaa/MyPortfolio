import React from 'react'
import css from "../images/css.png"
import github from "../images/github.png"
import react from "../images/react.png"
import tailwind from "../images/tailwind.png"
import javascript from "../images/javascript.png"
import html from "../images/html.png"



const Skills = () => {
  return (
    <div className='bg-black h-screen w-full text-gray-300' name="skills">
<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
<div>
    <p  className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
    <p className='py-4'>These are the technologies I've worked with</p>
</div>
<div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-6 '>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img src={react} alt="#" className='w-20 mx-auto '/>
        <p className='my-4'>React JS</p>

    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img src={tailwind} alt="#" className='w-20 mx-auto '/>
        <p className='my-4'>Tailwind CSS</p>

    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img src={javascript} alt="#" className='w-20 mx-auto '/>
        <p className='my-4'>Javascript</p>

    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img src={css} alt="#" className='w-20 mx-auto '/>
        <p className='my-4'>CSS</p>

    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img src={html} alt="#" className='w-20 mx-auto '/>
        <p className='my-4'>HTML</p>

    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img src={github} alt="#" className='w-20 mx-auto '/>
        <p className='my-4'>Github</p>

    </div>

</div>
</div>
    </div>
  )
}

export default Skills
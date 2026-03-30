import React from 'react'

const About = () => {
  return (
   <div name="about" className='h-screen bg-black text-gray-500 w-full'>
<div className='flex flex-col items-center justify-center w-full h-full px-2'>
    <div className='max-w-[1000px] grid grid-cols-2 gap-8 w-full'>
    <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div>
            
          </div>

    </div>
    <div className='grid sm:grid-cols-2  gap-8 px-4'>
    <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Abdul Ahad, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am a passionate MERN Stack Developer with experience in building 
              scalable web applications. I specialize in creating full-stack solutions 
              using MongoDB, Express.js, React.js, and Node.js. Currently pursuing 
              BS-SE at Virtual University of Pakistan, I focus on clean architecture, 
              user experience, and high-performance applications that make a difference.</p>  
            </div>

    </div>

</div>
   </div>
  )
}

export default About
import React from 'react'

const About = () => {
  return (
   <div name="about" className='min-h-screen bg-black text-gray-500 w-full'>
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
              <p>MERN Stack Developer with 1+ year of experience building web applications and AI-driven automation solutions. Proficient in React.js, Next.js, Node.js, and TypeScript, with hands-on expertise integrating LLMs (OpenAI/OpenRouter) into production workflows. Skilled in PostgreSQL, MongoDB, and RESTful API design, with experience implementing secure authentication, payment integrations, and scalable backend systems. Comfortable working with JWT, Supabase, CI/CD, and Git-based workflows, with a strong focus on writing clean code.</p>  
            </div>

    </div>

</div>
   </div>
  )
}

export default About
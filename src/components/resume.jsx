import React from 'react'
import resume from "../images/resume.jpg"
const Resume = () => {
  return (
    <div name='resume' className='"bg-black w-full text-gray-200 '>
        
        <div className="pb-8 md:mx-[300px] mx-2 ">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 ">
                Resume
            </p>
            <p className="py-6">
                Check out my Resume
            </p>
            </div>

      <div  className='flex md:justify-center md:items-center'>
      <img src={resume} alt="" className='md:max-w-[500px] w-[430px]  ' />
      </div>
   
    </div>
  )
}

export default Resume
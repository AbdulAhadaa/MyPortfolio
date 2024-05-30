import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-black'>
<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
<p className='text-pink-600'>Hi,my name is</p>
<h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
  Abdul Ahad
</h1>
<h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'> Frontend React Developer</h2>
<p className='text-[#8892b0] py-4 max-w-[700px]'>
  I am frontend developer specializing in developing and designing exceptional websites. Currently I'm focused on developing responsive web applications.
</p>
<div className='sm:flex '>
<Link to='work'>
<div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
           
           View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
        </Link>
        <a href="https://jade-joletta-35.tiiny.site/" target='_blank'>
        <button className='sm:mx-4 mt-2 px-2  w-[159px] h-[52px]    border-white border-2 hover:bg-[#565f69] hover:border-[#565f69]'>
      <a href="https://jade-joletta-35.tiiny.site/" target='_blank' className='flex justify-between items-center  text-white'>
 Resume  <BsFillPersonLinesFill size={30}/>
      </a>
    </button>
        </a>
        
</div>

</div>

        
    </div>
  )
}

export default Home 
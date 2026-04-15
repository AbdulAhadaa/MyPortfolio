import React from 'react'
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen bg-black flex justify-center items-center p-4'>
      <div className='max-w-[700px] w-full'>

        {/* Header */}
        <div className='pb-10'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-100 pb-2'>Contact</p>
          <p className='text-gray-400 py-6'>Have a project in mind or want to work together? Reach out!</p>
        </div>

        {/* Contact Info Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>

          {/* Email */}
          <a href="mailto:abdulahadaa88345@gmail.com" className='group flex items-center gap-4 p-5 rounded-xl border border-gray-800 hover:border-pink-600/50 bg-gray-900/50 hover:bg-gray-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-600/10'>
            <div className='w-12 h-12 rounded-full bg-pink-600/20 border border-pink-500/30 flex items-center justify-center shrink-0 group-hover:bg-pink-600/40 transition-colors duration-300'>
              <HiOutlineMail size={22} className='text-pink-400' />
            </div>
            <div>
              <p className='text-xs text-gray-500 mb-1 uppercase tracking-wider'>Email</p>
              <p className='text-white text-sm font-medium group-hover:text-pink-400 transition-colors duration-300'>abdulahadaa88345@gmail.com</p>
            </div>
          </a>

          {/* Phone */}
          <a href="tel:+923407586937" className='group flex items-center gap-4 p-5 rounded-xl border border-gray-800 hover:border-pink-600/50 bg-gray-900/50 hover:bg-gray-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-600/10'>
            <div className='w-12 h-12 rounded-full bg-pink-600/20 border border-pink-500/30 flex items-center justify-center shrink-0 group-hover:bg-pink-600/40 transition-colors duration-300'>
              <FaPhone size={18} className='text-pink-400' />
            </div>
            <div>
              <p className='text-xs text-gray-500 mb-1 uppercase tracking-wider'>Phone</p>
              <p className='text-white text-sm font-medium group-hover:text-pink-400 transition-colors duration-300'>+92 340 7586937</p>
            </div>
          </a>

        </div>

        {/* Social Links */}
        <div className='flex gap-4'>
          <a href="https://www.linkedin.com/in/abdul-ahad8" target='_blank' rel='noreferrer'
            className='flex items-center gap-3 px-5 py-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 font-medium text-sm'>
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <a href="https://github.com/AbdulAhadaa" target='_blank' rel='noreferrer'
            className='flex items-center gap-3 px-5 py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white hover:border-gray-500 transition-all duration-300 font-medium text-sm'>
            <FaGithub size={20} /> GitHub
          </a>
        </div>

      </div>
    </div>
  )
}

export default Contact

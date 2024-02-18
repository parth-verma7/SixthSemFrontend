import React from 'react'

const page = () => {

  return (
    <>
        <div className='head_text orange_gradient text-center mb-8'>Tell us more about yourself...</div>
        <div className='w-full m-4 p-4 border-4 border-orange-100 hover:border-orange-200 rounded-lg hover:-translate-y-2 hover:shadow-xl duration-100 shadow-md'>
            <p className='text-2xl font-semibold text-gray-500 m-1'>List the techStack you're interested in...</p>
            <input type="text" className='w-full m-1 shadow-md rounded-md p-2 outline-none' placeholder='WebDev, Blockchain, Competitive Programming, etc'/>
        </div>
        <div className='w-full m-4 p-4 border-4 border-orange-100 hover:border-orange-200 rounded-lg hover:-translate-y-2 hover:shadow-xl duration-100 shadow-md'>
            <p className='text-2xl font-semibold text-gray-500 m-1'>What do you want to post about?</p>
            <input type="text" className='w-full m-1 shadow-md rounded-md p-2 outline-none' placeholder='WebDev, Blockchain, Competitive Programming, etc'/>
        </div>
        <div className='w-full m-4 p-4 border-4 border-orange-100 hover:border-orange-200 rounded-lg hover:-translate-y-2 hover:shadow-xl duration-100 shadow-md'>
            <p className='text-2xl font-semibold text-gray-500 m-1'>What do you want from us?</p>
            <input type="text" className='w-full m-1 shadow-md rounded-md p-2 outline-none' placeholder='WebDev, Blockchain, Competitive Programming, etc'/>
        </div>
        <div className='w-full m-4 p-4 border-4 border-orange-100 hover:border-orange-200 rounded-lg hover:-translate-y-2 hover:shadow-xl duration-100 shadow-md'>
            <p className='text-2xl font-semibold text-gray-500 m-1'>List the techStack you're interested in...</p>
            <input type="text" className='w-full m-1 shadow-md rounded-md p-2 outline-none' placeholder='WebDev, Blockchain, Competitive Programming, etc'/>
        </div>
        <div className='w-full m-4 p-4 border-4 border-orange-100 hover:border-orange-200 rounded-lg hover:-translate-y-2 hover:shadow-xl duration-100 shadow-md'>
            <p className='text-2xl font-semibold text-gray-500 m-1'>List the techStack you're interested in...</p>
            <input type="text" className='w-full m-1 shadow-md rounded-md p-2 outline-none' placeholder='WebDev, Blockchain, Competitive Programming, etc'/>
        </div>

        </>
  )
}

export default page
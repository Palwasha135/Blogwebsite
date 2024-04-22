import React from 'react'
import Img2 from '../Assets/img2.png'
const Hsection = () => {
  return (
    <div className=''>
    <div className='flex flex-col  gap-2 xs:flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-center mt-3 '>
    <div className=' xs:w-3/4 xs:h-32 sm:w-3/4 md:w-4/5 lg:w-2/4 lg:h-4/5 sm:h-4/5  '>
    <img src={Img2}/>
    </div>
    
    <div className='xs:mt-16 sm:mt-4  max-w-lg  xs:pl-4'>
   <h4 className=' text-2xl font-RadioCanada  font-semibold   '>Short And Informative Blogs</h4> 
   <p className='font-RadioCanada  text-lg   font-semibold xs:font-normal' >Discover stories, thinking, and expertise from writers on any topic.</p>
   <button className='rounded bg-blogclrb text-white xs:py-1 xs:px-1 sm:py-2 sm:px-1 lg:py-2 lg:px-3   text-md font-Poppins '>Explore Projects</button>
   
    </div> 
    </div><hr className=" mx-auto  xs:mt-4 sm:mb-7 sm:w-52 xs:w-48 md:w-2/4 lg:w-2/4 border-2 border-gray-400 "></hr></div>
  )
}

export default Hsection

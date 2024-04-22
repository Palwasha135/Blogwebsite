import React from 'react'
import Reactimg from '../Assets/reactimg.png'
import Mongoimg from '../Assets/mongoimg.png'
const Himggrid = () => {
  return (
    
    <div className=' bg-secbg text-center '>
       <h4 className=' text-3xl mt-4 mb-4 pt-4 '>Best Blogs</h4>
       <div className='flex justify-center'>
  <div className='grid  sm:max-w-sm xs:max-w-sm  md:max-w-lg lg:max-w-2xl lg:p-5 md:p-5 sm:p-9 xs:p-9  lg:grid-cols-3 md:grid-cols-2 sm:grid-flow-col-1 xs:grid-cols-1 gap-4 lg:ml-10 md:mx-3 sm:mx-3 xs:mx-2 font-Poppins '>
    <img src={Reactimg}/>
    <img src={Mongoimg}/>
    <img src={Reactimg}/>
    <img src={Reactimg}/>
    <img src={Mongoimg}/>
    <img src={Mongoimg}/>
    <img src={Reactimg}/>
    <img src={Mongoimg}/>
    <img src={Reactimg}/>
    
   </div></div>
   <button className='  rounded bg-blogclrb text-white xs:py-1 xs:px-1 sm:py-2 sm:px-1 lg:py-2 lg:px-3 mt-7 mb-3 xs:text-sm sm:text-md md:text-md lg:text-lg font-Poppins '>Explore Projects</button>
   
    </div>
  )
}

export default Himggrid

import React from 'react'
import Img1 from '../Assets/t-img1.png'
import Img2 from '../Assets/t-img2.png'
import Img3 from '../Assets/t-img3.png'
const Testimonial = () => {
  return (
    <div className='bg-blogclrb  text-center pt-4 text-white  '>
       <h3 className='text-2xl'>Testimonals</h3> 
       <div className=' flex lg:flex-row md:flex-row sm:flex-col xs:flex-col   items-center justify-center  lg:p-5 md:p-5 sm:p-4 xs:p-3 gap-3'>
      <figure className=' xs:w-56  '>
        <img className='rounded-3xl' src={Img1}/>
           </figure>

      <figure className='xs:w-56'>
        <img src={Img2}/>
         </figure>
      <figure className='xs:w-56'>
        <img src={Img3}/>
          </figure>
    </div>
    <button className='  rounded bg-white text-blogclrb xs:py-1 xs:px-1 sm:py-2 sm:px-1 lg:py-2 lg:px-3 xs:text-sm sm:text-md md:text-md lg:text-lg font-Poppins xs:mb-7 sm:mb-5 lg:mb-5 md:mb-5 '>More News</button>
   
    </div>
  )
}

export default Testimonial

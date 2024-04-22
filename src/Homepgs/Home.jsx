import React from 'react'
import Img from '../Assets/img1.png'
import Htxtgrid from './Htxtgrid'
import Hsection from './Hsection'
import Himggrid from './Himggrid'
import Imgcontainer from './Imgcontainer'
import Testimonial from './Testimonial'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    // <div className='text-center justify-text text-white mt-20 tracking-tight  sm:text-lg xs:text-base md:text-lg lg:text-xl font-serif'>
    //  <h1 className='text-bold'>Medium</h1> 
    //  <p>Medium is an open platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic.</p>
    //    </div>
  <div className=' bg-white '>
 <div className=' flex sm:flex-col md:flex-row xs:flex-col lg:flex-row '>
    <div className=' lg:text-center justify-text text-black mt-7 p-3'>
      <h2 className=' sm:text-5xl xs:text-3xl md:text-6xl lg:text-7xl font-Poppins font-bold pl-4  left-0'>
    <span className='sm:text-7xl xs:text-5xl md:text-8xl lg:text-9xl '>S</span>tay curious.
      </h2>

      <p className='sm:text-lg xs:text-lg md:text-2xl lg:text-3xl font-RadioCanada  font-semibold mt-2 pl-4  left-0'>Discover stories, thinking, and expertise from writers on any topic.</p>
      <button className='rounded bg-blogclrb text-white xs:py-1 xs:px-1 sm:py-2 sm:px-1 lg:py-2 lg:px-3 lg:mt-7 xs:ml-4 sm:ml-4 md:ml-4 mb-2 xs:text-sm sm:text-md md:text-md lg:text-lg  md:mt-2 font-Poppins '>Explore Projects</button>
    </div>
  <div className=''>
    <img  className=' lg:h-4/5 lg:w-11/12 sm:h-3/5 sm:w-11/12 xs:w-3/4 xs:h-3/5  md:h-4/5 ' src={Img}  />
  </div>
  <div></div></div>
   <Htxtgrid/>
   <Hsection/>
   <Himggrid/>
   <Imgcontainer/>
   <Testimonial/>
   <Footer/>
</div>
  )
}

export default Home

import React from 'react'
import Recimg from '../Assets/recimg.png'
const Imgcontainer = () => {
  return (
//     <div className='mt-5 max-w-2xl'>
//       <figure className='relative max-w-3xl mx-auto rounded-lg flex flex-col sm:flex-row overflow-hidden ' >
//         <img className='' src={Recimg} />
//         <figcaption className='absolute px-2 text-lg  '>
// <h2 className='text-center text-white xs:text-xs sm:text-sm md:text-md lg:text-3xl'>Blogs </h2>
// <h3 className='text-center xs:text-xs sm:text-lg md:text-xl lg:text-2xl'>Our Best Blog Related to Technology</h3>
// <p className='xs:text-xs sm:text-sm md:text-md lg:text-md '>Our employees are our number one asset. Our goal is to recruit the best candidates in the industry and retain them for a long,
// progressive career. HBK is a fast-paced, team-centered environment with unlimited growth potential. Our long list of established
// clients provides employees with the opportunity to work on dynamic and challenging projects every day. We offer an exciting and
// gainful work environment encouraging professional, personal and organizational growth. Our team of multi-talented employees
// contributes to an entrepreneurial-minded atmosphere where ideas, creativity and solutions are cultivated.</p>

//         </figcaption>
//       </figure>
//     </div>
<div className="mt-3   m-4">
  <div className="relative  overflow-hidden ">
    <img className="p-2  w-full sm:h-58 lg:w-lg md:w-md md:h-44 xs:h-96  rounded-xl n" src={Recimg} alt="Image" />
    <div className="absolute inset-0  m-3 ">
      <h2 className="text-center text-md mb-2 text-white">Blogs</h2>
      <h3 className="text-center text-sm   ">Our Best Blog Related to Technology</h3>
      <p className="text-center text-xs  mb-2 text-white">Our employees are our number one asset. Our goal is to recruit the best candidates in the industry and retain them for a long, progressive career. HBK is a fast-paced, team-centered environment with unlimited growth potential. Our long list of established clients provides employees with the opportunity to work on dynamic and challenging projects every day. We offer an exciting and gainful work environment encouraging professional, personal, and organizational growth. Our team of multi-talented employees contributes to an entrepreneurial-minded atmosphere where ideas, creativity, and solutions are cultivated.</p>
    </div>
  </div>
</div>



  )
}

export default Imgcontainer

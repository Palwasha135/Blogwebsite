import { Link } from 'react-router-dom'
import Logo from '../Assets/bloglogo.png'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
export default function Navbar() {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <>
    {/* Desktop Navbar */}
      <div className="sticky top-0 w-full h-20 shadow-md z-[100] bg-white">
        <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16 py-10">
          <Link to='/'>
            <img
              src={Logo}
              alt=""
              width={1000}
              height={500}
              
            />
          </Link>
          <div>
            <ul className="hidden md:flex items-center">
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-black">
                <Link to='/' className='no-underline text-black'>Home</Link>
              </li>
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-black">
                <Link to={'/about' }  className='no-underline text-black'>About</Link>
              </li>
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-black">
                <Link to={'/articles'}  className='no-underline text-black'>Articles</Link>
              </li>
              {/* <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-black">
                <Link to={'/pricing' }  className='no-underline text-black'>Pricing</Link>
              </li>
              */}
             
            </ul>
            <div onClick={handleNav} className="md:hidden">
              <AiOutlineMenu size="20" />
            </div>
          </div>
        </div>
        {/* Mobile Nav */}
        <div
          className={`${
            nav
              ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
              : ''
          }`}
        >
          <div
            className={`${
              nav
                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500'
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }`}
          >
            <div className="flex w-full items-center justify-between">
              <Link to='/'>
                <img
                  src="https://img.freepik.com/premium-vector/word-concept-color-geometric-shapes-blog_205544-13021.jpg"
                  alt=""
                  width={100}
                  height={100}
                  className="w-16 h-16"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
           
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link to='/'>
                  <li className="py-4">Home</li>
                </Link>

                <Link to={'/about'}>
                  <li className="py-4">About</li>
                </Link>

               

                <Link to={'/articles'}>
                <li className="py-4">Articles</li>
                </Link>
               
              </ul>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
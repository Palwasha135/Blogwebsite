import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Aboutus = () => {
  return (
    <div className="text-white text-justify t  ">
     <div className=" "> <h1 className="p-4  sm:text-3xl xs:text-2xl md:text-5xl lg:text-6xl font-Georgian">
        Everyone has
        <br /> a story to tell.
      </h1></div>
      <div className="lg:w-2/3 md:w-2/3 sm:w-3/4 p-4 xs:w-4/5  sm:text-lg xs:text-base md:text-xl lg:text-xl font-serif ">
        <div>
          <p>
            Medium is a home for human stories and ideas. Here, anyone can share
            insightful perspectives, useful knowledge, and life wisdom with the
            world—without building a mailing list or a following first. The
            internet is noisy and chaotic; Medium is quiet yet full of insight.
            It’s simple, beautiful, collaborative, and helps you find the right
            audience for whatever you have to say.
          </p>
        </div>

        <p>
          We believe that what you read and write matters. Words can divide or
          empower us, inspire or discourage us. In a world where the most
          sensational and surface-level stories often win, we’re building a
          system that rewards depth, nuance, and time well spent. A space for
          thoughtful conversation more than drive-by takes, and substance over
          packaging.
        </p>
        <div className="bg-gray-600 text-justify ">
          <p>
            Ultimately,our goal is to deepen our collective understanding of the
            world through the power of writing.
          </p>
        </div>

        <p>
          Over 100 million people connect and share their wisdom on Medium every
          month. Many are professional writers, but just as many aren’t —
          they’re CEOs, computer scientists, U.S. presidents, amateur novelists,
          and anyone burning with a story they need to get out into the world.
          They write about what they’re working on, what’s keeping them up at
          night, what they’ve lived through, and what they’ve learned that the
          rest of us might want to know too.
        </p>
        <p>
          Instead of selling ads or selling your data, we’re supported by a
          growing community of Medium members who align with our mission. If
          you’re new here, start exploring. Dive deeper into whatever matters to
          you. Find a post that helps you learn something new, or reconsider
          something familiar—and then share your own story.
        </p>
      </div>
<Link to="/" className="no-underline  text-white">
      <div className="block  max-w-screen border-t border-b border-white lg:py-6 sm:py-2  md:py-4 hover:bg-gray-500">
        
          <h4 className="flex  justify-between  p-4">
            Start reading
            <FaLongArrowAltRight />
          </h4>
       
        {/* <div className=" flex items-center   inline-block"><FaLongArrowAltRight /></div>
         */}
      </div> </Link>
      <div>
      <Link to="/articles" className="no-underline  text-white"> 
       <div className="block  max-w-screen border-t border-b border-white lg:py-6 sm:py-2  md:py-4  hover:bg-gray-500">
          
            <h4 className="flex justify-between p-4">
              Start writing
              <FaLongArrowAltRight />
            </h4></div>
          </Link>
        <Link to="/" className="no-underline  text-white">
        <div className="block  max-w-screen border-t border-b border-white lg:py-6 sm:py-2  md:py-4 hover:bg-gray-500">
          
            <h4 className="flex  justify-between p-4">
              Become a member
              <FaLongArrowAltRight />
            </h4>
        
        </div></Link>
      </div>
    </div>
  );
};

export default Aboutus;


import React from 'react'
import Abv from '../assests/Chan.jpeg'
import KB from '../assests/DCS.jpeg'
import KB2 from '../assests/DA.jpeg'
import IM from '../assests/image5.jpeg'
function Whatsnew() {
  return (
    <div className=' relative flex h-full flex-col items-center justify-center space-y-4 bg-slate-200 rounded-lg overflow-hidden shadow-2xl max-w-full mb-12 ml-14 mr-14 pb-4'>
           
           <div className='absolute top-0 left-0 right-0 border-t-4 border-green-700 '></div>
            {/* the title and the small line  */}
            <h1 className='text-[40px] pt-4'>What’s new?</h1>
            <svg class="w-full h-1 sm:w-screen-lg" viewBox="0 0 100vw 1">
            <line x1="0" y1="0.5" x2="100vw" y2="0.5" stroke="gray" stroke-width="1" />
            </svg>
            
          {/* image and right side description with date  */}
        <div className='flex flex-col md:flex-row lg:flex-row space-y-3 pl-14 pr-14 lg:space-x-6 pb-10'>
            <div className=''>
            <img className='flex lg:h-[300px] lg:w-[1950px] sm:h-[220px] sm:w-[400px] md:h-[250px] md:w-[450px] lg:pt-5' src={IM} alt=''></img>
            </div>
            <div className=' sm:space-y-3 '>
            <h1 className=' font-semibold text-[20px]'>Senior translates love for European travel into graduate school, career plans</h1>
              {/* Date with icon  */}
              <div class=" bg-slate-200 flex items-center w-full border rounded px-2 py-1 mt-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6 2a1 1 0 00-1 1v1H5a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 00-2 0v1H7V3a1 1 0 00-1-1zM5 7h10v11H5V7zm2 2a1 1 0 000 2h6a1 1 0 100-2H7z" />
                </svg>
                <span>2023-05-15</span>
              </div>
            <p className=''>In the spring of 2022, the COVID-19 pandemic was winding down and Samantha Schatzman ’24 was trying to figure out her next steps. The Arlington, Texas, native was taking online classes at Tarrant Community College — law, religion, art history, “stuff like that,” she said — and “trying to figure out what I wanted to do with my life.”</p>
            </div>
        </div>

        {/* Second part below three pictures with decriptions */}

        <div className=' relative flex flex-col  lg:flex-row md:flex-col justify-center items-center '>
            
            <div className='flex items-center flex-col p-4 bg-white  mr-2 ml-2 mb-4 relative'>
                <img className=' transform transition-transform duration-300 ease-in-out hover:scale-105 mb-12 h-[200px] w-[250px] md:h-[250px] md:w-[300px] lg:h-[270px] lg:w-[330px]' src={Abv} alt=''></img>
                    <h3 className='p-2 pt-6 pb-6 font-serif font-bold text-[13px] lg:text-[18px] md:text-[16px] bottom-8 left-15 bg-slate-100
                     absolute'>Chancellor Office KBL</h3> 
            </div>

            <div className='flex items-center flex-col p-4 bg-white  mr-2 ml-2 mb-4 relative'>
                <img className=' transform transition-transform duration-300 ease-in-out hover:scale-105 mb-12 h-[200px] w-[250px] md:h-[250px] md:w-[300px] lg:h-[270px] lg:w-[330px]' src={KB} alt=''></img>
                    <h3 className='p-2 pt-6 pb-6 font-serif font-bold text-[13px] lg:text-[18px] md:text-[16px] bottom-8 left-15 bg-slate-100
                     absolute'>Computer Science Department</h3> 
            </div>

            <div className='flex items-center flex-col p-4 bg-white  mr-2 ml-2 mb-4 relative'>
                <img className=' transform transition-transform duration-300 ease-in-out hover:scale-105 mb-12 h-[200px] w-[250px] md:h-[250px] md:w-[300px] lg:h-[270px] lg:w-[330px]' src={KB2} alt=''></img>
                    <h3 className='p-2 pt-6 pb-6 font-serif font-bold text-[13px] lg:text-[18px] md:text-[16px] bottom-8 left-15 bg-slate-100
                     absolute'>Art Science Education Major</h3> 
            </div>
        </div>
        {/* The read more button*/}
        <div className='flex justify-center w-full'>
          <button className='bg-red-600 p-2 hover:bg-slate-500 text-yellow-50 w-full max-w-[250px] md:max-w-[300px] lg:max-w-[500px] xl:max-w-[800px]'>
            Read More News
          </button>
        </div>

    </div>
  )
}

export default Whatsnew
                               
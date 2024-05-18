import React from 'react'
import Abv from '../assests/StoryGratuation1.jpg'
import KB from '../assests/StoryGratuatuion.jpg'
import KB2 from '../assests/Ejazullah Mazhar.jpeg'
function Story() {
  return (
    <div className='flex flex-col h-full overflow-hidden shadow-2xl max-w-full  rounded-lg ml-14 mr-14 mb-12 space-y-4 bg-slate-200 '>
        <div className=' h-1.5 bg-red-600'></div>

        <div className=' flex flex-col items-center p-4 text-center'>
            <h1 className='text-[40px]  pb-3'>
                                            Everyone has a story.</h1>
            <p className='pb-4'>No two stories are the same, but they have one thing in common: Lynchburg students, faculty, and graduates are changing the world — through service, leadership, and innovation.</p>
            <svg class="w-full h-1 sm:w-screen-lg" viewBox="0 0 100vw 1">
            <line x1="0" y1="0.5" x2="100vw" y2="0.5" stroke="gray" stroke-width="1" />
            </svg>
        </div>

        <div className=' relative flex flex-col  lg:flex-row md:flex-col justify-center items-center '>
            
            <div className='flex items-center flex-col p-4 bg-white  mr-2 ml-2 mb-4 relative'>
                <img className=' transform transition-transform duration-300 ease-in-out hover:scale-105 mb-12 h-[200px] w-[250px] md:h-[250px] md:w-[300px] lg:h-[270px] lg:w-[330px]' src={Abv} alt=''></img>
                    <h3 className='p-2 pt-6 pb-6 font-serif font-bold text-[13px] lg:text-[18px] md:text-[16px] bottom-8 left-15 bg-slate-100
                     absolute'>Mr. Mohibullah Anwar '24 </h3> 
            </div>

            <div className='flex items-center flex-col p-4 bg-white  mr-2 ml-2 mb-4 relative'>
                <img className=' transform transition-transform duration-300 ease-in-out hover:scale-105 mb-12 h-[200px] w-[250px] md:h-[250px] md:w-[300px] lg:h-[270px] lg:w-[330px]' src={KB2} alt=''></img>
                    <h3 className='p-2 pt-6 pb-6 font-serif font-bold text-[13px] lg:text-[18px] md:text-[16px] bottom-8 left-15 bg-slate-100
                     absolute'>Mr. Ejazullah Mazhar '22</h3> 
            </div>

            <div className='flex items-center flex-col p-4 bg-white  mr-2 ml-2 mb-4 relative'>
                <img className=' transform transition-transform duration-300 ease-in-out hover:scale-105 mb-12 h-[200px] w-[250px] md:h-[250px] md:w-[300px] lg:h-[270px] lg:w-[330px]' src={KB} alt=''></img>
                    <h3 className='p-2 pt-6 pb-6 font-serif font-bold text-[13px] lg:text-[18px] md:text-[16px] bottom-8 left-15 bg-slate-100
                     absolute'>Mr. Khaliullah Abas '23</h3> 
            </div>
        </div>
    </div>
  )
}

export default Story
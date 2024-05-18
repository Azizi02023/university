import React from 'react'
import Abv from '../assests/g2.jpg'
import KB from '../assests/KBL2.jpg'

export const Academic = () => {
  return (
    <div className='flex flex-col h-full overflow-hidden shadow-2xl max-w-full mt-10  rounded-lg ml-14 mr-14 mb-12  space-y-4 bg-slate-200 '>
        <div className=' h-1.5 bg-black'></div>

        <div className=' flex flex-col items-center p-4 text-center'>
            <h1 className='text-[40px]  pb-3'>Academic Programs</h1>
            <p className='pb-4'>Learning is an adventure. At Lynchburg, unconventional courses and unique locations will help you find your passion. Our academics let you explore virtually any field you're interested in.</p>
            <svg class="w-full h-1 sm:w-screen-lg" viewBox="0 0 100vw 1">
            <line x1="0" y1="0.5" x2="100vw" y2="0.5" stroke="gray" stroke-width="1" />
            </svg>


        </div>

        <div className='flex flex-col lg:flex-row md:flex-col '>
            <div className='flex items-center flex-col p-4 bg-white  mr-2 ml-2 md:overflow-hidden md:h-[600px] md:w-[800px] text-center'>
                <h2 className='text-[30px]  pb-4 font-semibold'>Featured Major</h2>
                <img className=' transform transition-transform duration-300 ease-in-out hover:scale-105 rounded-lg h-[300px] w-[550px]' src={KB} alt=''></img>
                    <h3 className='p-2 text-[20px] font-bold'>Earth Science Education Major</h3>
                    <p className='p-2'>Earth science education is perfect if you're interested in teaching about the environment, geology, and geography.</p>
                <button className=' bg-red-600 mt-10 p-2 w-full text-center md:max-w-[150px] lg:max-w-[200px] xl:max-w-[300px] hover:bg-slate-500 text-yellow-50'>Check out of all</button>
            </div>
            <div className='flex items-center flex-col p-4 bg-white  mr-2 ml-2 md:overflow-hidden md:h-[600px] md:w-[800px] text-center'>
                <h2 className='text-[30px]  pb-4 text-center font-semibold '>Featured Graduate Program</h2>
                <img className=' transform transition-transform duration-300 ease-in-out hover:scale-105 rounded-lg h-[300px] w-[550px]' src={Abv} alt=''></img>
                    <h3 className='p-2 text-[20px] font-bold'>Doctor of Education in Leadership Studies.</h3>
                    <p className='p-2'>This program includes interdisciplinary coursework to empower visionary leaders to work across boundaries and effect positive.</p>
                <button className=' bg-red-600 mt-10 w-full p-2 md:max-w-[150px] lg:max-w-[200px] xl:max-w-[300px] hover:bg-slate-500 text-yellow-50'>Explore More</button>
            </div>

        </div>
    </div>
  )
}

import React from 'react'
import { AiOutlineAlert, AiOutlineAliwangwang, AiOutlineBaidu } from 'react-icons/ai'

export const Second = () => {
  return (
    <div className='relative mb-12  flex flex-col justify-center overflow-hidden shadow-2xl items-center ml-14 mr-14 bg-slate-200 rounded-lg mt-8'>
        <div className='absolute top-0 left-0 right-0 border-t-4 border-yellow-700 '></div>
        <div className='flex flex-col items-center justify-start h-full space-y-4 ml-12 mr-12 mb-12'>

            <div className=' flex flex-col items-center space-y-4'>
                <h1 className=' text-[30px] font-semibold pt-8'>Our Three Pillers</h1>
                <p className=' font-semibold pb-4'>Our strategic plan puts a spotlight on the student experience emphasizing our three core pillars.</p>
            </div>

        
            <div className=' flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 lg:flex-row '>  

                <div className='flex flex-col overflow-hidden shadow-2xl bg-white h-80 items-center p-4 relative max-w-80 text-center'>
                    {/* Horizontal Line */}
                    <div className='absolute top-0 left-0 right-0 border-t-4 border-red-700 '></div>
                    {/* Content */}
                    <div className='h-auto w-auto text-8xl pt-4'>
                        <AiOutlineBaidu />
                    </div>
                    <h1 className='font-semibold text-2xl pt-1 pb-2'>Mission and vision</h1>
                    <p className='font-semibold text-l text-center pt-2'>Innovation happens when we all come together.

                </p>
                </div>

                <div className='flex flex-col overflow-hidden shadow-2xl bg-white h-80 items-center p-4 relative max-w-80 text-center'>
                    {/* Horizontal Line */}
                    <div className='absolute top-0 left-0 right-0 border-t-4 border-blue-700'></div>
                    {/* Content */}
                    <div className='h-auto w-auto text-8xl pt-4'>
                        <AiOutlineAlert />
                    </div>
                    <h1 className='font-semibold text-2xl pt-1 pb-2'>Leadership Development</h1>
                    <p className='font-semibold text-l text-center pt-2'>The most powerful kind of leadership comes when we serve others.</p>
                </div>

                <div className='flex flex-col overflow-hidden shadow-2xl bg-white h-80 items-center p-4 relative max-w-80 text-center'>
                    {/* Horizontal Line */}
                    <div className='absolute top-0 left-0 right-0 border-t-4 border-slate-800'></div>
                    {/* Content */}
                    <div className='h-auto w-auto text-8xl pt-4'>
                        <AiOutlineAliwangwang />
                    </div>
                    <h1 className='font-semibold text-2xl pt-1 pb-2'>Diversity and Belonging</h1>
                    <p className='font-semibold text-l text-center pt-2'>Together, we are reimagining our future.</p>
                </div>
            </div>  
        </div>
    </div>
  )
}

import React from 'react'
import I1 from '../assests/news1.jpg'
import I2 from '../assests/g1.jpg'
import I3 from '../assests/News2.jpeg'
import I4 from '../assests/image1.jpeg'
import I5 from '../assests/News0.jpeg'
import I6 from '../assests/g2.jpg'
import I7 from '../assests/image2.jpeg'
import I8 from '../assests/image3.jpeg'
import I9 from '../assests/News3.jpeg'
import I10 from '../assests/image5.jpeg'
import I11 from '../assests/image6.jpeg'
import I12 from '../assests/news1.jpg'


export const SocialMedia = () => {
  return (
    <div className=' relative mb-12  flex flex-col justify-center overflow-hidden shadow-2xl items-center ml-14 mr-14 bg-slate-200 rounded-lg mt-8'>
        <div className='absolute top-0 left-0 right-0 border-t-4 border-blue-700 '></div>
        {/* Title and paragraph and small line */}

        <div className=' flex flex-col space-y-3 ml-4 mr-4 items-center'>
            <h1 className='text-[40px]  pb-1 pt-2 font-semibold'>Social Media</h1>
            <p className=' text-center pb-2'>Stay in the know! Follow the University of Lynchburg on Instagram to keep track of campus events, student life, academics, and more. Don't miss out on what's happening at Lynchburg.</p>
            <svg class="w-full h-1 sm:w-screen-lg ml-4 mr-4" viewBox="0 0 100vw 1">
            <line x1="0" y1="0.5" x2="100vw" y2="0.5" stroke="gray" stroke-width="1" />
            </svg>
        </div>

        {/* The second part pictures */}

        <div className="container mx-auto">
            <ul className="flex flex-wrap justify-center md:justify-start lg:justify-start mr-4 ml-4 pt-6">
                {[
                { src: I1, alt: 'Image 1' },
                { src: I2, alt: 'Image 2' },
                { src: I3, alt: 'Image 3' },
                { src: I4, alt: 'Image 4' }
                ].map((image, index) => (
                <li key={index} className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
                    <div className="w-full h-48 md:h-36 lg:h-[250px] ">
                    <img src={image.src} alt={image.alt} className="w-full h-full object-fill" />
                    </div>
                </li>
                ))}
            </ul>
            <ul className="flex flex-wrap justify-center md:justify-start lg:justify-start mr-4 ml-4 pt-4">
                {[
                { src: I5, alt: 'Image 1' },
                { src: I6, alt: 'Image 2' },
                { src: I7, alt: 'Image 3' },
                { src: I8, alt: 'Image 4' }
                ].map((image, index) => (
                <li key={index} className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
                    <div className="w-full h-48 md:h-36 lg:h-[250px] ">
                    <img src={image.src} alt={image.alt} className="w-full h-full object-fill" />
                    </div>
                </li>
                ))}
            </ul>
            <ul className="flex flex-wrap justify-center md:justify-start lg:justify-start mr-4 ml-4 pt-4">
                {[
                { src: I9, alt: 'Image 1' },
                { src: I10, alt: 'Image 2' },
                { src: I11, alt: 'Image 3' },
                { src: I12, alt: 'Image 4' }
                ].map((image, index) => (
                <li key={index} className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
                    <div className="w-full h-48 md:h-36 lg:h-[250px] ">
                    <img src={image.src} alt={image.alt} className="w-full h-full object-fill" />
                    </div>
                </li>
                ))}
            </ul>
        </div>
         {/* The read more button*/}
         <div className='flex justify-center w-full pt-4 pb-4'>
          <button className=' bg-slate-800 p-2 hover:bg-slate-500 text-yellow-50 w-full max-w-[100px] md:max-w-[200px] lg:max-w-[300px] xl:max-w-[300px]'>
            See More 
          </button>
        </div>
    </div>
  )
}

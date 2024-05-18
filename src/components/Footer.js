import React from 'react'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md';
import { FaSnapchatGhost } from 'react-icons/fa';
export const Footer = () => {
  return (
    
    <div className=' flex flex-col items-center space-y-8 bg-slate-800 '>

        <div className=' flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-14 md:items-start md:mt-8 '>
        {/** Icons */}
        <div className=' flex flex-wrap h-auto text-4xl list-none text-slate-300 mt-4 md:mt-0 '>
            <li className=' basis-1/3 flex justify-center hover:bg-blue-900 hover:text-yellow-200 rounded-2xl'><AiOutlineFacebook></AiOutlineFacebook></li>
            <li className=' basis-1/3  flex justify-center hover:bg-blue-900 hover:text-yellow-200 rounded-2xl'><AiOutlineInstagram></AiOutlineInstagram></li>
            <li className=' basis-1/3  flex justify-center hover:bg-blue-900 hover:text-yellow-200 rounded-2xl'><AiOutlineTwitter></AiOutlineTwitter></li>
            <li className=' basis-1/2  flex justify-center mt-4 hover:bg-blue-900 hover:text-yellow-200 rounded-2xl'><MdEmail></MdEmail></li>
            <li className=' basis-1/2  flex justify-center mt-4 hover:bg-blue-900 hover:text-yellow-200 rounded-2xl'><FaSnapchatGhost></FaSnapchatGhost></li>
        </div>
        {/**  */}
        <div className=' items-center list-none flex flex-col space-y-2 font-bold text-slate-300 cursor-pointer md:items-start md:space-y-6'>
            <li className=' hover:underline hover:text-slate-600'><p>Accessibility</p> </li>
            <li className=' hover:underline hover:text-slate-600'><p>Accreditation</p></li>
            <li className=' hover:underline hover:text-slate-600'><p>Human Resources</p></li>
            <li className=' hover:underline hover:text-slate-600'><p>Leadership</p></li>
            <li className=' hover:underline hover:text-slate-600'><p> Travel and Maps</p></li>
        </div>
        <div className=' items-center list-none flex flex-col space-y-2 font-bold text-slate-300 cursor-pointer md:items-start md:space-y-6'>
            <li className=' hover:underline hover:text-slate-600'><p>Spiritual Life</p> </li>
            <li className=' hover:underline hover:text-slate-600'><p>Accreditation</p></li>
            <li className=' hover:underline hover:text-slate-600'><p>Sustainability</p></li>
            <li className=' hover:underline hover:text-slate-600'><p>Hazing Violations Report</p></li>
            <li className=' hover:underline hover:text-slate-600'><p>Report a Digital Accessibility Issue</p></li>
        </div>
        {/**Buttons */}
        <div className=' flex flex-col  items-center space-y-2 font-semibold '>
            <button className=' bg-slate-50 p-2 w-[230px] hover:bg-red-600 hover:text-white'>HornetHQ</button>
            <button className=' bg-slate-50 p-2 w-[230px] hover:bg-red-600 hover:text-white'>Lynchburg Magazine</button>
            <button className=' bg-slate-50 p-2 w-[230px] hover:bg-red-600 hover:text-white'>Make Online Payment</button>
            <button className=' bg-slate-50 p-2 w-[230px] hover:bg-red-600 hover:text-white'>MyLynchburg</button>
            <button className=' bg-slate-50 p-2 w-[230px] hover:bg-red-600 hover:text-white'>HornetHQ</button>
            <button className=' bg-slate-50 p-2 w-[230px] hover:bg-red-600 hover:text-white'>Office of Equity and Inclusion</button>
        </div>
        </div>

        {/**Copy rights */}
            <div className=' flex flex-col font-semibold text-slate-300 items-center text-center mr-2 ml-2 '>
                 <p>University of Kabul | 1265 Lakeside Drive | Kabul, KBL 3456-5698 | 764.901.9061 </p>
                    <p className=' mb-4'>Privacy Policy | Non-discrimination Statement | Azizi Developer</p>
            </div>


    </div>
  )
}

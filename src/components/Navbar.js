import React, { useState, useEffect } from 'react';
import { AiOutlineMail, AiOutlinePhone, AiOutlineSearch } from 'react-icons/ai';

const MenuComponent = ({ isMobileMenuOpen }) => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('This website is only Front end. The back end is in processing and will be completed soon.\nد دې ویب پاڼي یوازی مخکینۍ برخه تکمیل سوې ده. شاتنی برخه به یی په نژدې راتلونکي کی بشپړه سي\nاین وب‌سایت فقط قسمت جلویی است. قسمت پشتی در حال پردازش است و به زودی تکمیل خواهد شد.\n- Azizi - '

     );
  };

    useEffect(() => {
      if (message) {
        const timer = setTimeout(() => {
          setMessage('');
        }, 10000); // 30 seconds

        return () => clearTimeout(timer);
      }
    }, [message]);

  return (
    <div className={`bg-slate-400 p-4 transition duration-900 ease-in-out ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
      <ul className='flex flex-col space-y-4 text-lg'>
        <li onClick={handleClick} className='cursor-pointer transition duration-300 ease-in-out hover:bg-slate-800 hover:text-white'>Jobs</li>
        <li onClick={handleClick} className='cursor-pointer transition duration-300 ease-in-out hover:bg-slate-800 hover:text-white'>News</li>
        <li onClick={handleClick} className='cursor-pointer transition duration-300 ease-in-out hover:bg-slate-800 hover:text-white'>Facilities & Services</li>
        <li onClick={handleClick} className='cursor-pointer transition duration-300 ease-in-out hover:bg-slate-800 hover:text-white'>Masters & PHD</li>
        <li onClick={handleClick} className='cursor-pointer transition duration-300 ease-in-out hover:bg-slate-800 hover:text-white'>Faculties</li>
        <li onClick={handleClick} className='cursor-pointer transition duration-300 ease-in-out hover:bg-slate-800 hover:text-white'>Deputy Offices</li>
        <li onClick={handleClick} className='cursor-pointer transition duration-300 ease-in-out hover:bg-slate-800 hover:text-white'>About Us</li>
      </ul>
      {message && <div className='mt-4 p-2 bg-blue-100 text-blue-800 rounded whitespace-pre-wrap'>{message}</div>}
    </div>
  );
};

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='z-10 w-full fixed'>
      {/* First nav */}
      <div className='h-[50px] bg-slate-800 items-center p-4 text-yellow-50 lg:text-[14px]'>
        <div className='flex flex-row-reverse justify-between sm:text-[12px] md:text-[14px] lg:text-[16px]'>
          <div className='flex flex-row space-x-3'>
            <p className='text-slate-300'>دری</p>
            <p className='text-slate-300'>پښتو</p>
          </div>
          <div className='flex flex-row items-center rounded-full bg-slate-400 text-black'>
            <input className='bg-transparent rounded-l-full px-3 focus:outline-none text-sm sm:text-base md:text-lg' type='text' placeholder='search' />
            <button className='px-1 bg-slate-400 rounded-r-full size-7 sm:size-5 md:size-6 outline-1'>
              <AiOutlineSearch className='text-sm sm:text-base md:text-lg' />
            </button>
          </div>
          <div className='flex flex-row items-center space-x-2 text-slate-300'>
            <AiOutlinePhone />
            <p className='text-slate-300 hidden sm:inline md:inline'>+93700004488</p>
            <AiOutlineMail />
            <p className='text-slate-300 hidden sm:inline md:inline'>mohammadatif.azizi@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Second nav */}
      <div className='flex flex-col sm:hidden'>
        <div className='h-[50px] bg-slate-400 flex items-center justify-between p-4'>
          <div className='text-slate-800 font-sans text-[25px] font-semibold'>
            <p>University <span className='italic text-lg'>of</span> Kabul</p>
          </div>
          <button className='text-slate-800 focus:outline-none' onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            ) : (
              <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
              </svg>
            )}
          </button>
        </div>
        <MenuComponent isMobileMenuOpen={isMobileMenuOpen} />
      </div>

      {/* Desktop Menu */}
      <div className='hidden sm:flex h-[70px] bg-slate-400 justify-between items-center p-4'>
        <div className='text-slate-800 font-sans lg:text-[30px] md:text-[16px] font-semibold cursor-pointer'>
          <p>University <span className='italic lg:text-2xl'>of</span> Kabul</p>
        </div>
        <ul className='flex lg:space-x-8 md:space-x-1 lg:text-[16px] md:text-[14px] sm:text-[10px] font-semibold'>
          <li className='cursor-pointer transition duration-300 ease-in-out hover:bg-slate-800 hover:text-gray-200 rounded-lg px-3 py-1'>Jobs</li>
          <li className='cursor-pointer transition duration-300 ease-in-out hover:bg-slate-800 hover:text-gray-200 rounded-lg px-3 py-1'>News</li>
          <li className='cursor-pointer transition duration-300 ease-in-out hover:bg-slate-800 hover:text-gray-200 rounded-lg px-3 py-1'>Facilities & Services</li>
          <li className='cursor-pointer transition duration-300 ease-in-out hover:bg-slate-800 hover:text-gray-200 rounded-lg px-3 py-1'>Masters & PHD</li>
          <li className='cursor-pointer transition duration-300 ease-in-out hover:bg-slate-800 hover:text-gray-200 rounded-lg px-3 py-1'>Faculties</li>
          <li className='cursor-pointer transition duration-300 ease-in-out hover:bg-slate-800 hover:text-gray-200 rounded-lg px-3 py-1'>Deputy Offices</li>
          <li className='cursor-pointer transition duration-300 ease-in-out hover:bg-slate-800 hover:text-gray-200 rounded-lg px-3 py-1'>About Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useEffect, useRef } from 'react';
import myVideo from '../assests/KabulU.mp4'

export const Front = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnd = () => {
      // When the first 30 seconds end, play the next 30 seconds
      if (video.currentTime >= 30) {
        video.currentTime = 30; // Start from 30 seconds
        video.play();
      }
    };

    video.addEventListener('ended', handleVideoEnd);

    // Clean up the event listener
    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  const handleFullScreen = () => {
    const video = videoRef.current;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
      video.msRequestFullscreen();
    }
  };

  return (
    <div className=' h-screen '>
      <div className=" absolute inset-0 z-0 w-full h-full flex justify-center items-center pt-40 ">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-fill pt-[100px]"
          controls={false}
          onDoubleClick={handleFullScreen}
          autoPlay
          muted
        >
          <source src={myVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  
        <div className="z-10 flex flex-col items-center text-white">
    <h1 className="text-[28px] lg:text-[50px] uppercase font-bold mb-8">The University of Kabul</h1>
    <div class="flex text-lg flex-col space-y-4 md:flex-row lg:flex-row md:space-x-2 lg:space-x-2">
        <button class="w-[290px] md:w-[190px] p-3 mt-4 bg-black hover:bg-gray-700  rounded">Catalogue</button>
        <button class="w-[290px] md:w-[190px] p-3 bg-red-600 hover:bg-gray-700 rounded">History</button>
        <button class="w-[290px] md:w-[190px] p-3 bg-green-600 hover:bg-gray-700 rounded">Sport</button>
    </div>
</div>


        
      </div>
    </div>
  );
};

export default Front;

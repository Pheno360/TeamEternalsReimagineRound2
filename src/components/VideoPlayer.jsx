import React, { useEffect, useRef } from 'react';
import videoFile from '../assets/NikeVideo.mp4'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';



gsap.registerPlugin(ScrollTrigger)
const VideoPlayer = () => {

  

  useGSAP(()=>{
    gsap.from(".video-text",{
      y:100,
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:".video-text",
        start:"top 80%",
        end:"top 40%",
        scrub:2,
      }
    })

    gsap.from(".nike-video",{
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:".nike-video",
        start:"top 50%",
        end:"top 10%",
        scrub:2,
       
      }
    })
    
  })

  return (
    <div data-scroll data-scroll-speed="-.3" className="nike-video scroll-container flex justify-center  w-full  overflow-hidden  lg:mt-[30vh] mt-[55vh] overflow-x-hidden ">
      <video 
       className="w-full h-auto opacity-30 object-contain"
      width="1600" 
      height="315"
      autoPlay
      muted
      preload='auto'
      loop
      playsInline
      >
        <source src={videoFile} type="video/mp4" />
      </video>
      <div className="absolute  bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111111] to-transparent"></div>

      <div className='video-text absolute text-white mt-[40vh] overflow-hidden'>
      <h1 className='font-["Roboto"] font-[600] text-[5vw] ml-[24vw] overflow-hidden '>WIN ON AIR</h1>
      <h1 className=' text-[1.5vw]'>Meet the next generation of Nike Air. Engineered to the exact specifications of championship athletes</h1>
      <button className='ml-[34vw] mt-[3vh] text-[1.5vw] border border-white p-[0.5vw] rounded-3xl w-[9vw] hover:bg-white hover:text-black font-[500] transition-[1sec] '>Shop Air</button>
      </div>
    </div>
  );
};

export default VideoPlayer;

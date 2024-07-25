import React, { useState } from 'react'
import Hero from './Hero'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const LandingPage = () => {


  useGSAP(()=>{
    gsap.from(".air",{
      opacity:0,
      x:-100,
      color:"red",
      duration:2,
      delay:3.5
    })
  })
  return (
    <>
      <div data-scroll data-scroll-section 
      className='absolute top-[28%]  lg:left-[25%] left-[10%] text-white font-[600] text-[5rem] font-["Roboto"] italic md:mt-0 -mt-[10vh]'>
      <h1 >
      NIKE 
      </h1>
      <h1 className='air text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 '>
      AIR JORDAN</h1>

      <div className='buyBtn absolute flex z-40  text-white text-[3vh] mt-3'>
      <button className='border border-red-800 hover:bg-red-700 transition-[1sec] box-border p-2 rounded-3xl w-[20vh]'>
      Buy Now
      </button>
      <h1 className='ml-6 mt-2 font-[300]'> $59</h1>
     
     </div>
      </div>

      <div className='md:block hidden absolute lg:z-0 md:-z-10 z-50 h-[80vh] lg:w-[98.5vw] sm:w-[200vw] md:w-[150vw] w-[340vw] md:mt-[4vh] -mt-[6vh] lg:-ml-[0]  md:-ml-[50vw] sm:-ml-[100vw] -ml-[105vh] '>
      <Hero />
       </div>

       <div className='mt-[65vh] lg:inline-block hidden '>
     <div className='flex justify-between Lines w-[100vw] bg-[#b8b8b8] text-black rotate-6 text-[1.8em] mt-[2vw] font-[500]  p-[0.5vw] overflow-hidden '>
     
     <h1>Nike Air</h1>
     <h1>+</h1>
     <h1>Adaptive</h1>
     <h1>+</h1>
     <h1>Versatile</h1>
     <h1>+</h1>
     <h1>Lightweight</h1>
     <h1>+</h1>
     <h1>Speedy</h1>
     </div>

     <div className='flex justify-between w-[100vw]  bg-[#f10] -rotate-3 text-[1.8em]  -mt-[2vw] p-[0.5vw] font-[500] overflow-hidden'>
     <h1>Speedy</h1>
     <h1>+</h1>
     <h1>Lightweight</h1>
     <h1>+</h1>
     <h1>Versatile</h1>
     <h1>+</h1>
     <h1>Adaptive</h1>
     <h1>+</h1>
     <h1>Nike Air</h1>
     </div>

</div>
      </>
  )
}

export default LandingPage

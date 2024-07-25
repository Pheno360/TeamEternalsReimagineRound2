import React, { useRef, useState } from 'react'
import NikeLogo from '../assets/nikeLogo.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './Navbar.css'
const Navbar = () => {

  const tl1=gsap.timeline()
  const tl2=gsap.timeline()
  const tl3=gsap.timeline()
  const tl4=gsap.timeline()

  useGSAP(()=>{

  

    tl1.to(".elem1",{
      opacity:1,
      height:"48vh",
      display:"flex"
      
    })
    tl2.to(".elem2",{
      opacity:1,
      height:"48vh",
      display:"flex"
      
    })
    tl3.to(".elem3",{
      opacity:1,
      height:"48vh",
      display:"flex"
      
    })
    tl4.to(".nike-menu",{
      transform:"translateX(0%)"
    })

  
    tl1.pause()
    tl2.pause()
    tl3.pause()
    tl4.pause()

   
  })

 

  const HandleMouseEnter=()=>{
    tl1.play()
  }

  const HandleMouseLeave=()=>{
    tl1.reverse()
  }


  const HandleMouseEnter2=()=>{
    tl2.play()
  }

  const HandleMouseLeave2=()=>{
    tl2.reverse()
  }


  const HandleMouseEnter3=()=>{
    tl3.play()
  }

  const HandleMouseLeave3=()=>{
    tl3.reverse()
  }

  const HandleClickMenu=()=>{
    tl4.play()
  }

  const HandleClickExit=()=>{
    tl4.reverse()
  }

 
  return (
    <>
   
    <div className='Nav-container relative px-[2vw] py-[1vw] flex w-[100%] bg-black '>

    <div className='logo w-[12vh]'>
        <img src={NikeLogo} alt='' />
      </div>

      <div className='nike-menu lg:hidden block absolute text-white z-50 h-[100vh] w-[90vw] translate-x-[100%] bg-black ml-[7vh]'>
      <div className='flex flex-col gap-[1vh] ml-[5vh] mt-[10vh]  text-[3vh]'>
      
      <div 
      onClick={HandleClickExit}
      className='exit ml-[26vh] -mt-[5vh]'>
      <svg xmlns="http://www.w3.org/2000/svg" 
      fill="none" viewBox="0 0 24 24" 
      strokeWidth={1.5} stroke="currentColor" 
      className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
</div>
        <h1 className='mt-[5vh] hover:text-red-500'>New & Featured</h1>
        <h1 className=' hover:text-red-500'>Men</h1>
        <h1 className=' hover:text-red-500'>Women</h1>
        <h1 className=' hover:text-red-500'>Kids</h1>
        <h1 className=' hover:text-red-500'>Sale</h1>
        <h1 className=' hover:text-red-500'>Customise</h1>
        <h1 className=' hover:text-red-500'>SNKRS</h1>
        </div>
      </div>

        <div 
        onClick={HandleClickMenu}
        className='lg:hidden block text-white ml-[24vh]  mt-[0.5vh]'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
      className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</div>
      
      <div  className=' mt-[1vh] lg:flex hidden gap-[2rem] items-center justify-center w-[75vw] font-[500] text-[#ffffffa4] tracking-wid text-[1vw] '>

      <div onMouseLeave={HandleMouseLeave} onMouseEnter={HandleMouseEnter}>
      <h1    className=' hover:text-[#fff] hover:border-b-2 border-red-500 cursor-default'>New & Featured</h1>
      <div 
      className='elem1 w-[80vw]  bg-black  absolute z-10  left-[10%] top-[100%] opacity-0 hidden gap-[6vh] rounded-xl'>

      <div className='New-container p-[4vh] space-y-2 '>
      <h1 className=' font-semibold text-white cursor-default'>New & Featured</h1>
      <h1>New Arrivals</h1>
      <h1>Latest Shoes</h1>
      <h1>Latest Clothing</h1>
      <h1>SNKRS Launch Calendar</h1> 
      <h1>Get 'Em in SNKRS</h1>
      <h1>Customise with Nike By You</h1>
      <h1>Bestsellers</h1>
      <h1 >Member Exclusive</h1>
      </div>

      <div className='New-container2 p-[4vh] space-y-2 '>
      <h1 className=' font-semibold text-white cursor-default'>Shop Icons</h1>
      <h1>Air Force 1</h1>
      <h1>Air Jordan 1</h1>
      <h1>Air Max</h1>
      <h1>Dunk</h1>
      <h1>Cortez</h1>
      <h1>Blazer</h1>
      <h1>Pegasus</h1>
      </div>

      <div className='New-container3 p-[4vh] space-y-2'>
      <h1 className=' font-semibold text-white'>New for Men</h1>
      <h1>Shoes</h1>
      <h1>Clothing</h1>
      <h1>Accessories</h1>
      <h1>Shop All New</h1>
      </div>

      <div className='New-container3 p-[4vh] space-y-2 '>
      <h1 className=' font-semibold text-white'>New for Women</h1>
      <h1>Shoes</h1>
      <h1>Clothing</h1>
      <h1>Accessories</h1>
      <h1>Shop All New</h1>
      </div>
      
      <div className='New-container3 p-[4vh] space-y-2 '>
      <h1 className=' font-semibold text-white'>New for Kids</h1>
      <h1>Shoes</h1>
      <h1>Clothing</h1>
      <h1>Accessories</h1>
      <h1>Shop All New</h1>
      </div>
      
      
    </div>
    </div>

    {/* Men menu */}

    <div onMouseEnter={HandleMouseEnter2} onMouseLeave={HandleMouseLeave2}>
      <h1  className=' hover:text-[#fff] hover:border-b-2 border-red-500 cursor-default'>Men</h1>
      <div className='elem2 w-[80vw] h-[0vh] bg-black absolute z-10 left-[10%] top-[100%] opacity-0 hidden gap-[4vh] rounded-xl'>

      <div className='New-container p-[4vh] space-y-2 '>
      <h1 className=' font-semibold text-white cursor-default'>Featured</h1>
      <h1>New Releases</h1>
      <h1>Bestsellers</h1>
      <h1>Member Exclusive</h1>
      <h1>Jordan</h1> 
      <h1>Get 'Em in SNKRS</h1>
      <h1>Customise with Nike By You</h1>
      <h1>Bestsellers</h1>
      <h1>Member Exclusive</h1>
      </div>

      <div className='New-container2 py-[4vh] space-y-2 '>
      <h1 className=' font-semibold text-white'>Shoes</h1>
      <h1>All Shoes</h1>
      <h1>Newest Sneakers</h1>
      <h1>Jordan</h1>
      <h1>Lifestyle</h1>
      <h1>Running</h1>
      <h1>Gym and Training</h1>
      <h1>BasketBall</h1>
      <h1>Football</h1>
      <h1>Sandals and Slides</h1>
      </div>

      <div className='New-container3 py-[4vh] space-y-2'>
      <h1 className=' font-semibold text-white'>Clothing</h1>
      <h1>All Clothing</h1>
      <h1>Tops and T-Shirts</h1>
      <h1>Shorts</h1>
      <h1>Pants and Leggins</h1>
      <h1>Hoddies and SweatShirts</h1>
      <h1>Jackets and Gilets</h1>
      <h1>Jerseys and Kits</h1>
      <h1>Jordan</h1>
      </div>

      <div className='New-containe3 py-[4vh] space-y-2 '>
      <h1 className=' font-semibold text-white'>Jordan</h1>
      <h1>All Jordan</h1>
      <h1>New Jordan</h1>
      <h1>Jordan Shoes</h1>
      <h1>Jordan Clothing</h1>
      <h1>Jordan BasketBall</h1>
      <h1>Jordan Lifestyle</h1>
      </div>
      
      <div className='New-containe3 py-[4vh] space-y-2 '>
      <h1 className=' font-semibold text-white'>Accessories and Equipment</h1>
      <h1>All Accessories and Equipment</h1>
      <h1>Bags and Backpacks</h1>
      <h1>Socks</h1>
      <h1>Hat and Headwear</h1>
      </div>
      
      
    </div>
    </div>

    {/* Women menu*/}
    <div onMouseEnter={HandleMouseEnter3} onMouseLeave={HandleMouseLeave3}>
      <h1  className=' hover:text-[#fff] hover:border-b-2 border-red-500 cursor-default'>Women</h1>
      <div className='elem3 w-[80vw] h-[0vh] bg-black absolute z-10 left-[10%] top-[100%] opacity-0 hidden gap-[4vh] rounded-xl'>

      <div className='New-container p-[4vh] space-y-2 '>
      <h1 className=' font-semibold text-white cursor-default'>Featured</h1>
      <h1>New Releases</h1>
      <h1>Bestsellers</h1>
      <h1>Member Exclusive</h1>
      <h1>Jordan</h1> 
      <h1>Get 'Em in SNKRS</h1>
      <h1>Customise with Nike By You</h1>
      <h1>Bestsellers</h1>
      <h1>Member Exclusive</h1>
      </div>

      <div className='New-container2 py-[4vh] space-y-2 '>
      <h1 className=' font-semibold text-white'>Shoes</h1>
      <h1>All Shoes</h1>
      <h1>Newest Sneakers</h1>
      <h1>Jordan</h1>
      <h1>Lifestyle</h1>
      <h1>Running</h1>
      <h1>Gym and Training</h1>
      <h1>BasketBall</h1>
      </div>

      <div className='New-container3 py-[4vh] space-y-2'>
      <h1 className=' font-semibold text-white'>Clothing</h1>
      <h1>All Clothing</h1>
      <h1>Tops and T-Shirts</h1>
      <h1>Shorts</h1>
      <h1>Pants and Leggins</h1>
      <h1>Hoddies and SweatShirts</h1>
      <h1>Jackets and Gilets</h1>
      <h1>Jerseys and Kits</h1>
      <h1>Jordan</h1>
      </div>

      <div className='New-containe3 py-[4vh] space-y-2 '>
      <h1 className=' font-semibold text-white'>Jordan</h1>
      <h1>All Jordan</h1>
      <h1>New Jordan</h1>
      <h1>Jordan Shoes</h1>
      <h1>Jordan Clothing</h1>
      <h1>Jordan BasketBall</h1>
      <h1>Jordan Lifestyle</h1>
      </div>
      
      <div className='New-containe3 py-[4vh] space-y-2 '>
      <h1 className=' font-semibold text-white'>Accessories and Equipment</h1>
      <h1>All Accessories and Equipment</h1>
      <h1>Bags and Backpacks</h1>
      <h1>Socks</h1>
      <h1>Hat and Headwear</h1>
      </div>
      
      
    </div>
    </div>

      <h1 className='hover:text-[#fff] cursor-default'>Kids</h1>

      <h1 className='hover:text-[#fff] cursor-default'>Sale</h1>

      <h1 className='hover:text-[#fff] cursor-default'>Customise</h1>
      <h1 className='hover:text-[#fff] cursor-default'>SNKRS</h1>
      </div>

      <div className='lg:flex hidden  items-center gap-[2rem] font-[600] text-white text-[1vw]'>

      

      <div className='svg  right-[49vh] bg-[#000000] p-[1vh] rounded-3xl -m-[2vw]'>

      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg> */}

<input  placeholder='       Search' className=' -m-[2vh] -ml-36 absolute w-[7vw] hover:w-[11vw] transition-[1sec] rounded-3xl h-[2.5vw] bg-[#111111] py-[1vh]' />
 
        </div>

        <div className=' scale-[1.1] hover:text-blue-500 transition-[1sec] ml-[4vw]'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
</div>

       <div className=' scale-[1.1] hover:text-red-500 transition-[1sec]'>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

       </div>
      
      </div>
      
    </div>

    

    </>
  )
}

export default Navbar

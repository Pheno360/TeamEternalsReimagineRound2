import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'


const Featured = () => {


  const tl=gsap.timeline();
  const tl2=gsap.timeline();
  const tl3=gsap.timeline();
    useGSAP(()=>{

      tl.to(".featured-text",{
        height:"4vw",
        scrollTrigger:{
          trigger:".featured-text",
          start:"top 80%",
          end:"top 40%",
          scrub:5,
         
        }
    })

    tl.to(".featured-text2",{
      height:"4vw",
      scrollTrigger:{
        trigger:".featured-text",
        start:"top 80%",
        end:"top 40%",
        scrub:5,
       
      }
  })

        tl.to(".title",{
          duration:1,
            y:-75,
            scrollTrigger:{
              trigger:".title",
              start:"top 80%",
              end:"top 50%",
              scrub:5,
              
            }
        })

        tl.to(".title3",{
          duration:1,
            y:-88,
            scrollTrigger:{
              trigger:".title",
              start:"top 80%",
              end:"top 40%",
              scrub:5,
            }
        })

        gsap.from(".image1",{
        y:-700,
        scale:1,
          duration:1.5,
          scrollTrigger:{
            trigger:".image-container",
            start:"top 25%",
            end: "top 10%",
          
          }
        })


          tl2.from(".nike2",{
            y:100,
            stagger:0.025
          })

          tl3.from(".nike3",{
            y:100,
            stagger:0.025
          })

          tl2.pause()
          tl3.pause()

    })

    const handleMouseEnterAlphafly=()=>{
      tl2.play()
    }

    const handleMouseLeaveAlphafly=()=>{
      tl2.reverse()
    }

    const handleMouseEnterPegasus=()=>{
      tl3.play()
    }

    const handleMouseLeavePegasus=()=>{
      tl3.reverse()
    }


  return (
    <div data-scroll data-scroll-speed='-0.2'  className='featured-container w-[100vw] h-[110vh] lg:mt-[15vw] md:mt-[40vw] mt-[10vh] p-[1vw] bg-black'>

    <div className=' lg:block hidden featured-text rounded-sm w-auto h-[0vw] bg-black text-white text-[6vh] font-[500] overflow-hidden m-[1vw]' >
      <h1 className='title ml-[1.5vw]'>Featured</h1> 
      <h1 className='title ml-[1.5vw]'>Featured</h1>
    </div>

    <div className='md:block lg:hidden hidden featured-text2 rounded-sm w-auto h-[0vw] bg-black text-white text-[6vh] font-[500] overflow-hidden m-[1vw]' >
      <h1 className='title3 ml-[1.5vw]'>Featured</h1> 
      <h1 className='title3 ml-[1.5vw]'>Featured</h1>
    </div>

    <div className='md:hidden lg:hidden block featured-text2 rounded-sm w-auto h-[2vw] bg-black text-white text-[4vh] font-[500] m-[1vw]' >
      <h1 className=' ml-[1.5vw]'>Featured</h1> 
    </div>
   

    <div className='image-container flex justify-center gap-[10vw] m-[2vw] h-[65vh] overflow-hidden lg:mt-[0] mt-[5vh] '>

    <div 
    
    className='image1 overflow-hidden'>
    <img 
    onMouseEnter={handleMouseEnterAlphafly} 
    onMouseLeave={handleMouseLeaveAlphafly} 
    className=' hover:scale-110 transition-[1sec] h-auto' src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/63f9f004-cfe8-4beb-95d8-7c2d3bc167d5/alphafly-3-blueprint-road-racing-shoes-n5fmNS.png' alt='shoes' />
    </div>

    <div className='alphafly absolute mt-[10vw] ml-[2vw] overflow-hidden z-10 '>
      <h1 className='text-white text-[5vw] font-[500]'>{"ALPHAFLY".split('').map((item)=>(<span className='inline-block nike2'>
        {item}
      </span>))}</h1>
    </div>

    <div className='pegasus absolute mt-[10vw] ml-[2vw] overflow-hidden z-10'>
      <h1 className='text-white text-[5vw] font-[500]'>{"PEGASUS".split('').map((item)=>(<span className='inline-block nike3'>
        {item}
      </span>))}</h1>
    </div>

    <div
     className='image1 overflow-hidden'>
    <img 
    onMouseEnter={handleMouseEnterPegasus}
    onMouseLeave={handleMouseLeavePegasus}
    className=' h-auto hover:scale-110 transition-[1sec]' src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b99c1521-3566-47dc-bd39-17a37b62602c/gt-hustle-3-blueprint-ep-basketball-shoes-gLwVc4.png' alt='shoes' />
    </div>
    </div>


    <div className='text-white text-center lg:-mt-[0] md:-mt-[15vh] -mt-[40vh] '>
      <h1 className='text-[3vh]'>Built to Compete Against the Best on Every Track , Court and Pitch</h1>
      <button className='bg-white rounded-3xl text-black text-[2.5vh] p-[0.5vw] w-[15vh] mt-[3vh] '>Shop Air</button>
    </div>
      
    </div>
  )
}

export default Featured

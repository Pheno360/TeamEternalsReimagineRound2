import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'

const Category = () => {

    const images = [
        'https://static.nike.com/a/images/w_960,c_limit/7044c92a-544e-493f-bb79-8863a7c225ed/nike-x-peaceminusone-g-dragon-apparel-collection-release-date.png',
        'https://assets.ajio.com/medias/sys_master/root/20231206/I43t/65708603ddf7791519b4b2e9/-473Wx593H-469551557-black-MODEL.jpg',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b2668e9b-a572-4cd7-8c36-01df6774b6b1/apex-bucket-hat-Qw5gdd.png',
      ];

      const tla=gsap.timeline();
      const tlb=gsap.timeline();
      const tlc=gsap.timeline();

    
    useGSAP(()=>{

        gsap.to(".category-text",{
          height:"4vw",
          scrollTrigger:{
            trigger:".featured-text",
            start:"top 70%",
            scrub:5,
          }
   
      })

      gsap.from(".apparel2",{
        y:100,
        stagger:0.025,
        opacity:0,
        scrollTrigger:{
          trigger:".apparel2",
          start:"top 90%",
          end:"top 80%",
          scrub:2,
        }
      })

      gsap.from(".footwear2",{
        y:100,
        stagger:0.025,
        opacity:0,
        scrollTrigger:{
          trigger:".footwear2",
          start:"top 90%",
          end:"top 80%",
          scrub:2,
        }
      })

      gsap.from(".accessories2",{
        y:100,
        stagger:0.025,
        opacity:0,
        scrollTrigger:{
          trigger:".accessories2",
          start:"top 90%",
          end:"top 80%",
          scrub:2,
        }
      })
          tla.from(".apparel",{
            y:100,
            stagger:0.025
          })

          tlb.from(".footwear",{
            y:100,
            stagger:0.025
          })

          tlc.from(".accessories",{
            y:100,
            stagger:0.025
          })

          tla.pause()
          tlb.pause()
          tlc.pause()
        })

        const handleMouseEnterApparel=()=>{
            tla.play()
          }
      
          const handleMouseLeaveApparel=()=>{
            tla.reverse()
          }
      
          const handleMouseEnterFootwear=()=>{
            tlb.play()
          }
      
          const handleMouseLeaveFootwear=()=>{
            tlb.reverse()
          }

          const handleMouseEnterAccessories=()=>{
            tlc.play()
          }
      
          const handleMouseLeaveAccessories=()=>{
            tlc.reverse()
          }

  return (
    <>

    <div data-scroll data-scroll-speed='0.5' className='category-container w-[100vw] lg:h-[110vh] h-[220vh] md:-mt-[30vh] -mt-[60vh] p-[1vw] bg-red-700'>

    <div className='category-text rounded-sm w-auto h-[0vw] bg-red-700 text-[5vh] font-[500]  m-[1vw]' >
      <h1 className='title2 ml-[1.5vw] mt-[3vh]'>Shop by Category</h1> 
    </div>

    <div className='image-container flex lg:flex-row flex-col gap-[3rem] justify-center items-center overflow-hidden mt-[10vh]'>

    <div className='md:scale-100 scale-75' >
    <img
    onMouseEnter={handleMouseEnterApparel}
    onMouseLeave={handleMouseLeaveApparel}
    className=' rounded-2xl category h-[60vh] hover:scale-95 transition ' src={images[0]} alt='' />
    
    <h1 className=' relative -mt-[15vh] ml-[16vh] text-white text-[5vh] tracking-wide font-[500] block lg:hidden'>{"APPAREL".split('').map((item)=>(<span className='inline-block apparel2'>
        {item}
      </span>))}</h1>

    <h1 className=' relative -mt-[12vh] ml-[7vw] text-white text-[3vw] font-[500] lg:block hidden'>{"APPAREL".split('').map((item)=>(<span className='inline-block apparel'>
        {item}
      </span>))}</h1> 
    </div>

    <div className='md:scale-100 scale-75'>
    <img 
     onMouseEnter={handleMouseEnterFootwear}
     onMouseLeave={handleMouseLeaveFootwear}
    className=' rounded-2xl category h-[60vh] hover:scale-95 transition ' src={images[1]} alt='' />
<h1 
    className=' relative -mt-[12vh] ml-[3vw] text-white text-[3vw] font-[500] lg:block hidden'>{"FOOTWEAR".split('').map((item)=>(<span className='inline-block footwear'>
        {item}
      </span>))}</h1>
    <h1 
    className=' relative -mt-[18vh] ml-[12vh] text-white text-[5vh] font-[500] block lg:hidden'>{"FOOTWEAR".split('').map((item)=>(<span className='inline-block footwear2'>
        {item}
      </span>))}</h1>
    </div>

    <div className='md:scale-100 scale-75'>
    <img 
     onMouseEnter={handleMouseEnterAccessories}
     onMouseLeave={handleMouseLeaveAccessories} 
    className=' rounded-2xl category h-[60vh] hover:scale-95 transition ' src={images[2]} alt='' />
    <h1 className=' relative -mt-[12vh] ml-[5vw] text-white text-[3vw] font-[500] lg:block hidden'>{"ACCESORIES".split('').map((item)=>(<span className='inline-block accessories'>
        {item}
      </span>))}</h1>

      <h1 className=' relative -mt-[16vh] ml-[16vh] text-white text-[4vh] font-[500] block lg:hidden'>{"ACCESORIES".split('').map((item)=>(<span className='inline-block accessories2'>
        {item}
      </span>))}</h1>
    </div>


    </div>

    

    </div>
    </>
  )
}

export default Category

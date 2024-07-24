import React from 'react'
import NikeLogo from "../assets/nikeLogo.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Footer = () => {

    useGSAP(()=>{
        gsap.from('.footer-logo',{
            x:-400,
            duration:1,
            scrollTrigger:{
                trigger:".footer",
                start:"top 70%",
                end:"top 50%",
                scrub:3
            }
        })
    })
  return (
    <>
    
    <div data-scroll data-scroll-speed='-0.3' className='h-[70vh] w-[100vw] bg-black cursor-default'>
    <div className='h-[1vh] bg-[#d11212]'></div>
    <div className='footer h-[63vh] lg:text-[1.2rem] text-[1.5vh]  flex flex-wrap justify-around'>

    <div className='footer-logo p-[2vh] mt-[12vh]'>
    <img className='w-[15vw]' src={NikeLogo} alt='nike logo' />
    <h1 className='text-white lg:text-[6vh] text-[3vh] font-[600] transition-[1sec]'>JUST DO IT</h1>
    </div>

    <div className='text-white flex flex-col gap-[1vh] mt-[10vh]'>
        <p className='mb-[1.5vw] font-[600] md:text-[1.2rem] text-[1rem] cursor-default'>Resources</p>
        <h1>Find a Store</h1>
        <h1>Become a Member</h1>
        <h1>Send Us Feedback</h1>
    </div>

    <div className='text-white flex flex-col gap-[1vh] mt-[10vh]'>
        <p className='mb-[1.5vw] font-[600] md:text-[1.2rem] text-[1rem] cursor-default'>Help</p>
        <h1>Get Help</h1>
        <h1>Order Status</h1>
        <h1>Delivery</h1>
        <h1>Returns</h1>
        <h1>Payment Options</h1>
        <h1>Contact Us On Nike.com Inquiries</h1>
        <h1>Contact Us on All other Inquiries</h1>
    </div>

    <div className='text-white flex flex-col gap-[1vh] md:mt-[10vh] mt-0 md:ml-0 -ml-[15vh]'>
        <p className='mb-[1.5vw] font-[600] md:text-[1.2rem] text-[1.1rem] cursor-default'>Company</p>
        <h1>About Nike</h1>
        <h1>News</h1>
        <h1>Careers</h1>
        <h1>Investors</h1> 
        <h1>Sustainability</h1>
    </div>

    </div>

    <div className='  h-[7vh] text-white  bg-[#d11212]'>
    <div className='h-full lg:w-[60vw] w-[100vw] lg:text-[1rem] md:text-[1.5vh] text-[1.3vh]   flex flex-wrap items-center justify-around '>
    <h1 className=''>©2024 Nike,Inc. All rights reserved</h1>
    <h1>Guides</h1>
    <h1>Terms of Sale</h1>
    <h1>Terms of Use</h1>
    <h1>Nike Privacy Policy</h1>
    </div>

    </div>

    </div>
    </>
  )
}

export default Footer

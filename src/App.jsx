
import './App.css'

import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Preloader from './components/Preloader'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import VideoPlayer from './components/VideoPlayer'
import { ScrollTrigger } from 'gsap/all'
import Featured from './components/Featured'
import Category from './components/Category'
import "./locomotive-scroll.css"
import LocomotiveScroll from 'locomotive-scroll';
import Shoes from './components/Shoes'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)


function App() {

const locomotiveScroll = new LocomotiveScroll();

  useGSAP(()=>{

    gsap.to('.nike',{
      y:-1000,
      delay:3,
      duration:1
    })
  })

  return (
    <>
    <div className=' '>
    <div className='nike absolute z-50 w-[100%] h-[100vh] overflow-hidden bg-black '>
    <Preloader />
    </div>

    <Navbar />
    <LandingPage />
    <VideoPlayer />
    <Featured />
    <Category />
    <Shoes />
    <Footer />
    </div>
    </>
  
  )
}

export default App

import { useGSAP } from '@gsap/react'
import { Translate } from '@mui/icons-material'
import gsap from 'gsap'
import React from 'react'

const Shoes = () => {

    useGSAP(()=>{
        gsap.to(".shoe-container",{
            transform:"translateX(-80%)",
            scrollTrigger:{
              trigger:".shoe-title",
              scroller:"body",
              start:"top 0%",
              end:"top -100%",
              scrub:3,
              pin:true
            }
        })
    })
  return (
    <div className='shoe-title lg:w-[180vw] w-[400vw] h-[100vh] bg-[rgb(16,16,17)] -mt-[27vh]'>
      <div className='text-white p-[4vh] text-[5vh] font-[500]'>Classics Spotlight</div>

      <div className='flex justify-around shoe-container p-[1vh] '>

      <div className='shoe1 tracking-wider'>
        <img className='h-[65vh]' src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cdf407be-ef9c-4325-beb3-15c6cd663790/air-jordan-1-mid-se-shoes-jbRhW6.png' alt='air jordan 1' />
        <h1 className='text-white text-center font-[600] text-[5vh] mt-[1vh]'>AIR JORDAN 1</h1>
      </div>

      <div className='shoe2'>
        <img className='h-[65vh]' src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5fd41b9a-fdad-4773-9070-91c1b31348b4/dunk-high-retro-se-shoes-hZ3zqv.png' alt='dunk' />
        <h1 className='text-white text-center font-[600] text-[5vh] mt-[1vh]'>DUNK</h1>
      </div>

      <div className='shoe3'>
        <img className='h-[65vh]' src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8d278c53-59f3-4bbc-a8af-3cd7d8fdc571/sb-blazer-low-pro-gt-shoes-ZpVNV6.png' alt='classic' />
        <h1 className='text-white text-center font-[600] text-[5vh] mt-[1vh]'>BLAZER</h1>
      </div>

      <div className='shoe4'>
        <img className='h-[65vh]' src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f23de45a-dbda-4522-9dc1-63f1e623b716/air-force-1-07-next-nature-shoes-cg65FM.png' alt='air force 1' />
        <h1 className='text-white text-center font-[600] text-[5vh] mt-[1vh]'>AIR FORCE 1</h1>
      </div>

      <div className='shoe4'>
        <img className='h-[65vh]' src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3b2be13b-eb73-4b13-924a-dc1f12f3927e/mercurial-vapor-16-academy-ic-low-top-football-shoes-CXWdfN.png' alt='air force 1' />
        <h1 className='text-white text-center font-[600] text-[5vh] mt-[1vh]'>MERCURY</h1>
      </div>


      </div>
    </div>
  )
}

export default Shoes

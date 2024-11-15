import React, { useEffect, useState } from 'react';
import apps from "../img/app_store-aoAyJ2T_.png";
import play from "../img/play_store-25MAnoNl.png";
import Aos from 'aos';
import 'aos/dist/aos.css'
const Booking = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    Aos.init()
  })
  return (
    <div className='mt-[820px] md:mt-2'>
      <div data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom" className=' max-w-[1240px] shadow mx-auto h-[400px] rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 '>
        <div className='justify-center p-4 text-center'>
          <h1 className='pt-6 font-serif text-5xl font-bold' data-aos="fade-down">Get Started with our app</h1><br />
          <p className='font-serif text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Nisi neque nam sed quia!</p>
        </div>
        <div className='flex justify-center pt-6 md:pt-16'>
          <img src={play} className='w-[200px] ' data-aos="fade-right" />
          <img src={apps} className='w-[200px]' data-aos="fade-left" />
        </div>
      </div>
    </div>
  )
}

export default Booking
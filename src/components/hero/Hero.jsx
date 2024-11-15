import React, { useEffect, useState } from 'react';
import hh from '../img/hero.png';
// import Aos from 'aos';
// import 'aos/dist/aos.css'
const Hero = () => {
    // const [toggle, setToggle] = useState(false);
    // useEffect(() => {
    //     Aos.init()
    // })
    return (
        <div className=''>
            <div className=' max-w-[1240px] mx-auto grid-cols-1 grid md:grid-cols-4'>
                <div className='col-span-2 mt-32 '>
                    <div className='p-5 font-serif '  data-aos="fade-right">
                        <p className='text-3xl text-yellow-400 '>Effortless</p>
                        <h1 className='pt-4 text-6xl font-bold'>Car Rental</h1><br />
                        <p className='text-[19px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ratione veritatis explicabo quibusdam quae reprehenderit ab</p>
                    </div>
                    <div className='p-5'>
                        <button className='font-serif bg-[#ffe627] 12 bg- p-2 px-4 rounded'>Get Started</button>
                    </div>
                </div>
                <div className='col-span-2 '>
                    <div className='p-2'>
                        <img src={hh} className=''data-aos="fade-down" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Hero
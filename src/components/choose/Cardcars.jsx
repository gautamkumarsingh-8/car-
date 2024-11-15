import React, { useEffect, useState } from 'react';
import a from "../img/a.png";
import b from "../img/b.png";
import c from "../img/c.png";
import Aos from 'aos';
import 'aos/dist/aos.css'
const Cardcars = () => {
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        Aos.init()
    })
    return (
        <div className='mt-[580px] md:mt-2'>
            <div className='max-w-[1240px] mx-auto'>
                <h1 className='font-serif text-4xl font-bold '>Lorem, ipsum dolor.</h1><br />
                <p className='font-serif'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum maxime sit odio!</p>
            </div>
            <div className=' justify-center gap-5  mt-10 max-w-[1240px] mx-auto grid-cols-1 grid md:grid-cols-3'>
                <div className=' ml-10 md:ml-0 border shadow-lg border-[#918e8eb0] hover:border-[#ffe627]  w-[330px] h-[180px] rounded-lg'>

                    <div className='flex justify-center'>
                        <h1 className='p-4 text-lg font-bold mr-14 '>12Km</h1>
                        <img src={a} className='w-[150px] mr-12' data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" />
                    </div>
                    <div className='pl-4'>
                        <h1 className='font-serif text-lg font-bold text-yellow-400'>BMW UX</h1>
                    </div>
                    <div className='flex pl-4'>
                        <h1 className='font-serif text-lg font-semibold'>$100/Day</h1>
                        <h1 className='ml-32 font-serif text-lg font-semibold'>Details</h1>
                    </div>
                </div>

                <div className=' ml-10 md:ml-0 border shadow-lg border-[#918e8eb0] hover:border-[#ffe627]  w-[330px] h-[180px] rounded-lg'>

                    <div className='flex justify-center'>
                        <h1 className='p-4 text-lg font-bold mr-14 '>12Km</h1>
                        <img src={b} className='w-[150px] mr-12' data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" />
                    </div>
                    <div className='pl-4'>
                        <h1 className='font-serif text-lg font-bold text-yellow-400'>BMW UX</h1>
                    </div>
                    <div className='flex pl-4'>
                        <h1 className='font-serif text-lg font-semibold'>$100/Day</h1>
                        <h1 className='ml-32 font-serif text-lg font-semibold'>Details</h1>
                    </div>
                </div>

                <div className=' ml-10 md:ml-0 border shadow-lg border-[#918e8eb0] hover:border-[#ffe627]  w-[330px] h-[180px] rounded-lg'>

                    <div className='flex justify-center'>
                        <h1 className='p-4 text-lg font-bold mr-14 '>12Km</h1>
                        <img src={c} className='w-[150px] mr-12' data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" />
                    </div>
                    <div className='pl-4'>
                        <h1 className='font-serif text-lg font-bold text-yellow-400'>BMW UX</h1>
                    </div>
                    <div className='flex pl-4'>
                        <h1 className='font-serif text-lg font-semibold'>$100/Day</h1>
                        <h1 className='ml-32 font-serif text-lg font-semibold'>Details</h1>
                    </div>
                </div>
            </div>
            <div className='flex justify-center pt-10 pb-4'>
                <button className='font-serif text-yellow-600 border border-[#ffe627] hover:bg-[#ffe627] 12 bg- p-2 px-6 rounded '>Get Started</button>
            </div>
        </div>
    )
}

export default Cardcars
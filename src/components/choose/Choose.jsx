import React, { useEffect, useState } from 'react';
import best from "../img/best-price_5559620.png";
import time from "../img/time-security_11815528.png";
import driver from '../img/driver_8583437.png';
import Aos from 'aos';
import 'aos/dist/aos.css'
const Choose = () => {
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        Aos.init()
    })
    return (
        <div className='mt-16'>
            <div>
                <h1 className='font-serif text-5xl font-bold text-center'>What Our Clients Say About Us</h1>
           
            </div>
            <div className=' justify-center gap-5  mt-20 max-w-[1240px] boder border-black h-[400px] mx-auto grid-cols-1 grid md:grid-cols-3'>
                <div  data-aos="zoom-in-up" className=' ml-10 md:ml-0 text-white bg-[black] hover:bg-[#ffe627] hover:text-black w-[330px] h-[290px] rounded-lg'>
                    <div className='flex justify-center mt-5 '>
                        <img src={best} className='w-[80px]' />
                    </div>
                    <div className='pt-4 text-center'>
                        <p>Best Price</p><br />
                        <p>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. <br /> Learn More</p>
                    </div>
                </div>
                <div  data-aos="zoom-in-up" className='  ml-10 md:ml-0 text-white bg-[black] hover:bg-[#ffe627] hover:text-black w-[330px] h-[290px] rounded-lg' >
                    <div className='flex justify-center mt-5'>
                        <img src={time} className='w-[80px]' />
                    </div>
                    <div className='pt-4 text-center '>
                        <p>Fast and Safe</p><br />
                        <p>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. <br /> Learn More</p>
                    </div>
                </div>
                <div  data-aos="zoom-in-up" className='  ml-10 md:ml-0 text-white bg-[black] hover:bg-[#ffe627] hover:text-black w-[330px] h-[290px] rounded-lg '>
                    <div className='flex justify-center mt-5'>
                        <img src={driver} className='w-[80px]' />
                    </div>
                    <div className='pt-4 text-center'>
                        <p>Experience Drivers</p><br />
                        <p>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. <br /> Learn More</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Choose
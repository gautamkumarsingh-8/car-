import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Header = () => {

    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        Aos.init()
    })
    const [open, setOpen] = useState(false);
    return (
        <nav className='p-2 '>
            <div className=' max-w-[1240px] mx-auto flex justify-between '>
                <div className='pt-1'>
                    <Link to="/">
                        <p className='font-serif text-3xl font-bold'>Car Rental</p>
                    </Link>
                </div>

                {
                    open ?
                        <IoMdClose onClick={() => setOpen(!open)} className='block mt-3 text-3xl md:hidden' />
                        :
                        <AiOutlineMenu onClick={() => setOpen(!open)} className='block mt-3 text-3xl md:hidden' />
                }



                <ul className=' hidden md:flex justify-center gap-8  pt-2 text-[]   font-medium '>
                    <li className='hover:text-red-400'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='hover:text-red-400' >
                        <Link to="/recipes">Cars</Link>
                    </li>
                    <li className='hover:text-red-400' >
                        <Link to="/about">About</Link>

                    </li>
                    <li className='hover:text-red-400' >
                        <Link to="/">Booking</Link>
                    </li>


                </ul>
                {/* Responsive Navation */}
                <ul data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className={` duration-400 md:hidden gap-5  bg-[#000000] text-white fixed 
            top-[60px] w-full text-center h-screen  ${open ? 'left-[0]' : 'left-[-100%]'} `}  >

                    <li className='hover:text-red-400 py-7'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='hover:text-red-400 py-7' >
                        <Link to="/recipes">Cars</Link>
                    </li>
                    <li className='hover:text-red-400 py-7' >
                        <Link to="/about">About</Link>
                    </li>
                    <li className='hover:text-red-400 py-7' >
                        <Link to="/">Booking</Link>
                    </li>


                </ul>
            </div>
        </nav>
    )
}

export default Header
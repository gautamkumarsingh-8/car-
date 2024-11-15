import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
const Contact = () => {
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        Aos.init()
    })
    return (
        <div className='pt-20'>
            <div data-aos="fade-up"
                data-aos-anchor-placement="top-center" className='  rounded-2xl shadow max-w-[1240px] mx-auto bg-[#252525e5] h-[400px] md:h-[240px] text-white'>
                <div className='p-4'>
                    <h1 className='text-4xl font-bold'>Let's collaborate on your <br /> upcoming car rental venture</h1><br />
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis atque repudiandae accusantium voluptas.</p>
                </div>
                <div className='p-4 '>
                    <button className='font-serif text-white font-bold border hover:bg-[#ff2727] bg-[#ffe627] 12 bg- p-2 px-6 rounded '>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
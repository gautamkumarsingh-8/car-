import { useEffect, useState } from "react";
import gautam from '../img/t__1_-removebg-preview.png';
import prince from '../img/t__4_-removebg-preview.png';
import mohit from "../img/t__2_-removebg-preview.png";
import Aos from 'aos';
import 'aos/dist/aos.css'
const Clients = () => {
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        Aos.init()
    })
    return (
        <div className='mt-16 w-[100%]'>
            <div>
                <h1 className='font-serif text-4xl font-bold text-center'>What Our Clients Say About Us</h1><br />
                <p className='font-serif text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className=' justify-center gap-5  mt-8 max-w-[1240px] boder border-black h-[400px] mx-auto grid-cols-1 grid md:grid-cols-3'>
                <div data-aos="flip-left"  className=' ml-10 md:ml-0 shadow-lg bg-[#f1f1f1] w-[330px]  h-[380px] rounded-lg'>
                    <div className=' bg-[#3429ff] flex justify-center rounded-lg '>
                        <img src={gautam} className='w-[200px] shadow' />
                    </div>
                    <div className='pt-2 text-center '>
                        <p className='pb-2 font-serif'>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate.</p>
                        <p className='pb-3 font-serif text-2xl font-medium'>Gautam Singh</p>
                    </div >
                    <div className='text-center'>
                        <button className='font-serif text-white bg-[#3429ff] 12 bg- p-2 px-3 rounded'> Learn More </button></div>
                </div>
                <div data-aos="flip-left"  className='  ml-10 md:ml-0 shadow-lg bg-[#f1f1f1] w-[330px] h-[380px] rounded-lg' >
                    <div className=' bg-[#3429ff] flex justify-center rounded-lg '>
                        <img src={prince} className='w-[200px] shadow ' />
                    </div>
                    <div className='pt-2 text-center '>
                        <p className='pb-2 font-serif'>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate.</p>
                        <p className='pb-3 font-serif text-2xl font-medium'>Prince Singh</p>
                    </div >
                    <div className='text-center'>
                        <button className='font-serif  text-white bg-[#3429ff] 12 bg- p-2 px-3 rounded'> Learn More </button></div>
                </div>
                <div data-aos="flip-left"  className='  ml-10 md:ml-0 shadow-lg bg-[#f1f1f1] w-[330px] h-[380px] rounded-lg '>
                    <div className=' bg-[#3429ff] flex justify-center rounded-lg '>
                        <img src={mohit} className='w-[200px] shadow' />
                    </div>
                    <div className='pt-2 text-center '>
                        <p className='pb-2 font-serif'>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate.</p>
                        <p className='pb-3 font-serif text-2xl font-medium'>Mohit Singh</p>
                    </div >
                    <div className='text-center'>
                        <button className='font-serif text-white bg-[#3429ff] 12 bg- p-2 px-3 rounded'> Learn More </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Clients

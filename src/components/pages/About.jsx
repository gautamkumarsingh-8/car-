import { useEffect, useState } from "react";
import car from "../img/carr.png";
import Aos from 'aos';
import 'aos/dist/aos.css'
const About = () => {
  const [toggle, setToggle] = useState(false);
    useEffect(() => {
        Aos.init()
    })
  return (
    <div className='bg-[#f1f1f1] w-[100%] '>
      <div className=' max-w-[1240px] mx-auto grid-cols-1 grid md:grid-cols-4'>
        <div className='col-span-2 '>
          <div className='p-2 '  data-aos="fade-up-right">
            <img src={car} className='w-[980px] ' />
          </div>
        </div>
        <div className='col-span-2 p-14' data-aos="fade-left">
          <div className=''>
            <h1 className='font-serif text-5xl font-bold'>About us</h1><br />
            <p className='font-serif text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              tempore atque ut doloremque est.</p><br />
            <p className='font-serif text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, ratione.</p>
          </div>
          <div>
            <div className='p-4 pt-8'>
              <button className='font-serif text-yellow-600 border border-[#ffe627] hover:bg-[#ffe627] 12 bg- p-2 px-6 rounded '>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default About
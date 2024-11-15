import React from 'react';
import { FaLocationArrow } from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
const Footer = () => {
  return (
    <div className='mt-20 bg-[#f1f1f1] w-[100%] '>
      <div className='max-w-[1240px] mx-auto ml-8 md:ml-24 h-[800px] md:h-[300px] col-span-1 md:grid grid-cols-4'>
        <div >
          <div className='p-4 ml-7'>
            <h1 className='text-3xl font-bold'>Car Rental</h1>
          </div>
          <div className='pl-10 text-lg'>
            <p>  Lorem ipsum dolor sit amet consectetur. Lorem br ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. </p><br />

          </div>
          <div className='flex gap-4 pl-8'>
            <FaLocationArrow className='text-2xl' />
            <p className='font-serif text-lg'>Buxar, Bihar</p>
          </div>
          <div className='flex gap-3 pt-2 pl-8 '>
            <MdPhoneIphone className='text-2xl' />
            <p className='text-lg '>+9508440929</p>
          </div>
        </div>
        <div>
          <div className='text-lg text-center'>
            <h1 className='py-3 text-2xl font-medium '> Important Links</h1>
            <p className='py-1'>⮚ Home</p>

            <p className='py-1'>   About</p>

            <p className='py-1'>⮚ Contact</p>

            <p className='py-1'>  Blog</p>
          </div>
        </div>
        <div >
          <div className='text-lg text-center'>
            <h1 className='py-3 text-2xl font-medium '> Quick Link</h1>
            <p className='py-1'>Share Location</p>

            <p className='py-1'> Orders Tracking</p>

            <p className='py-1'>⮚Size Guide</p>

            <p className='py-1'>FAQs</p>
          </div>
        </div>
        <div >
          <div className='text-lg text-center'>
            <h1 className='py-3 text-2xl font-medium '> Legal</h1>
            <p className='py-1'>⮚Careers</p>

            <p className='py-1'> Privacy Policy</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
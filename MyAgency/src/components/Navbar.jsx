import React from 'react'
import PrimaryBtn from './PrimaryBtn';

const navLinks = ["About", "Portfolio", "Blog"];


const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between p-4 px-[4vw]'>
      {/* left section [logo and navlinks]*/}
      <div id='left-section' className='flex items-center justify-center gap-5'>
        <div id='logo-wrapper' className='flex items-center justify-center'>
          <img src='/logo.png'/>
        </div>
        <div id='links-wrapper' className='flex gap-4 ml-3 items-center justify-center'>
          <a href='/' className='text-[#095CFC] font-semibold'>Home</a>
          {
            navLinks.map((link,index)=>(
              <a className='hover:text-[#095CFC]' href='/' key={index}>{link}</a>
            ))
          }
        </div> 
      </div>
      {/* right section [primary button] */}
      <div>
        <PrimaryBtn text={"Let's Talk"} />
      </div>

    </nav>
  )
}

export default Navbar
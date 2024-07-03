import React from 'react'
import FilledBtn from './FilledBtn'

const HeroSection = () => {
  return (
    <div className='py-10 w-screen h-screen bg-[url("/herobg.png")]  bg-cover bg-no-repeat flex items-center justify-center'>
        {/* left section */}
        <div className='w-1/2 flex flex-col items-center justify-center'>
            <div className='' id='text-wrapper'>
              <h1 className='font-semibold text-[3vw] leading-tight'>Complete Solution for <br/><span className='text-[#095CFC]'>Your Businesses</span></h1>
              <p className='text-[1.2vw] my-[1vw]'>MyAgency isn't your average digital marketing <br/> agency. We create unconventional ideas that grow<br /> brands - and yours could be next.</p>
              <FilledBtn text={"Get Started"}/>
            </div>

        </div>

        {/* right section */}
        <div className='w-1/2 flex items-center justify-center'>
          <div id='hero-image-wrapper'>
            <img src='heroimg.png' className=''/>
          </div>
        </div>
    </div>
  )
}

export default HeroSection;

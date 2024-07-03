import React from 'react'
import PrCard from './portfolio/PrCard'

const PortfolioSection = () => {
  const portfolios = [
      "Redesign, Channle site Landing page",
      "New Locator App for company",
      "Rental Rooms web App Platform ",
      "Calendar App for Big SASS Company",
  ];
  return (
    <div className='w-full p-[3vw]'>
      <div id="announcer" className='leading-[3.5vw]'>
        <p className='font-semibold text-primary text-[1.1vvw]'>Portfolio</p>
        <h1 className="font-bold text-[4vw]">we create world-class Digital Products</h1>
        <p className='text-txt text-[1.2vw]'>By information about design the world to the best instructors, heatc helping By information</p>
      </div>
      {/* cards section */}
      <div className='w-full flex items-center justify-center'>
        {/* left section */}
        <div className='w-1/2'>
        {/* big card */}
          <div className='w-full'>
            {/* img template wrapper*/}
            <div className='bg-txt w-[40vw] h-[30vw]'></div>
            {/* desc Wrapper */}
            <div className='flex flex-col gap-[1vw] my-4'>
              <p className='text-txt'>App Design - June 20, 2022</p>
              <h3 className='font-bold text-[2vw]'>App Redesign</h3>
              <p>By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping</p>
            </div>
          </div>
        </div>
        {/* right section */}
        <div className='w-1/2 p-8'>
          <div className='w-full flex flex-wrap bg-yello-500 items-center justify-center'>
            {
              portfolios.map((portfolio,index)=>(
                <PrCard ttl={portfolio} key={index}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioSection
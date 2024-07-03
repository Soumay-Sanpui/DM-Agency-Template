import React from 'react'
import FilledBtn from "./FilledBtn";
import SectionHeading from './SectionHeading';
import PfCard from './portfolio/PfCard';

const PortfolioSection = () => {
  const portfolios = [
    {
        name: "Application Site Food Delivery",
        tag: "Website, Application"
    },
    {
        name: "Pregnant woman mobile app",
        tag: "Mobile App, Application"
    },
    {
        name: "Renting bike using rental app",
        tag: "Mobile App, Application"
    },
    {
        name: "Mobile app to trade on markets",
        tag: "Mobile App, Application"
    },
  ];
  return (
    <div className='bg-bkg py-[4vw] flex flex-col items-center justify-center'>
        {/* Announcer */}
        <div id='announcer-wrapper' className='text-center'>
            <SectionHeading heading={"Portfolio"}/>
            <h1 className='text-[3vw] font-semibold my-[1.3vw]'>Some of our <span className='text-primary'>recent</span> work</h1>
        </div>
        {/* Portfolio card wrapper */}
        <div id='card-wrapper' className='p-10 flex flex-wrap items-center justify-center gap-[2vw]'>
            {
                portfolios.map((portfolio,idx)=>(
                    <PfCard ttl={portfolio.name} tag={portfolio.tag}/>
                ))
            }
        </div>
        <FilledBtn text={"View More"}/>
    </div>
  )
}

export default PortfolioSection
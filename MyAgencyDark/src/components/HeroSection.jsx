import React from 'react';
import FilledBtn from './FilledBtn';

const HeroSection = () => {
  const client = 4;

  return (
    <div className='bg-black w-full flex items-center justify-center h-[90vh]'>
      {/* left section */}
      <div className='text-white w-1/2 flex flex-col items-center justify-around h-[90%] pl-[5vw]'>
        <div id='announcer-wrapper' className='flex flex-col gap-[2vw]'>
          <h1 className='font-semibold text-[3vw]'>Complete solution for <br/>your Businesses</h1>
          <p className='text-txt'>MyAgency isn't your average digital marketing <br />agency. We create unconventional ideas that grow<br/> brands - and yours could be next.</p>
          <div>
            <FilledBtn text={"Get Started"}/>
          </div>
          <div className='w-full flex flex-col justify-center'>
            <p className='text-[1.1vw] text-txt ml-[1vw]'>Trusted by 1000+ companies in the world including:</p>
            <div className='flex gap-4 p-3 items-center justify-center'>
                  {
                    Array.from({length: client}).map((index)=>(
                      <div key={index} className='bg-[#C4C4C4] w-[10vw] h-[3vw]'>
                      </div>
                  ))
                  }
          </div>
        </div>
       </div>
      </div>
      {/* right section */}
      <div className='w-1/2'>
        <img src='/herobg.PNG' className='w-[85%]'/>
      </div>
    </div>
  );
}

export default HeroSection;

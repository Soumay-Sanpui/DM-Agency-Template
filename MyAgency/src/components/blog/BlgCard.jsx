import React from 'react'

const BlgCard = ({tag, ttl}) => {
  return (
    <div className='w-[27vw] h-[25vw] flex flex-col items-center justify-center gap-[1vw]'>
        {/* image wrapper */}
        <div className='w-full h-[90%] bg-[#C4C4C4] rounded-lg'></div>
        {/* description wrapper */}
        <div className='w-full flex flex-col gap-[1vw]'>
            {/* date - tag */}
            <div className='flex items-center gap-[1vw] text-slate-500'>
                <p>Mar 24, 2023</p>
                <div className='w-[0.6vw] h-[0.6vw] rounded-full bg-slate-500'></div>
                <p>{tag}</p>
            </div>

            {/* title */}
            <h3 className='font-semibold text-[2vw] truncate'>{ttl}</h3>
        </div>

    </div>
  )
}

export default BlgCard
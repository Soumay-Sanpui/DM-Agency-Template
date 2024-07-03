import React from 'react'

const PrCard = ({dt,ttl}) => {
  return (
    <div className='min-w-min mr-[1vw] '>
            {/* img template wrapper*/}
            <div className='bg-txt w-64 h-52'></div>
            {/* desc Wrapper */}
            <div className='flex flex-col my-2 w-[70%]'>
              <p className='text-txt'>App Design - June 20, 2022</p>
              <h3 className='font-bold text-[1vw]'>{ttl}</h3>
            </div>
    </div>
  )
}

export default PrCard